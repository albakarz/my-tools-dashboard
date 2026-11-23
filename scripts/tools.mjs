#!/usr/bin/env node
// Single source of truth: tools.json (+ usecases.json).
// Commands:
//   node scripts/tools.mjs build          → normalize tags, validate, regenerate MyToolsDashboard.jsx + README.md
//   node scripts/tools.mjs check          → validate only
//   node scripts/tools.mjs next-id        → print next free id
//   node scripts/tools.mjs find <words>   → search name/desc/tags/link (all words must match)
//   node scripts/tools.mjs dup <url|name> → check if a tool already exists
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const P = f => path.join(ROOT, f)

export const TYPES = { 'Skill': '⚡', 'MCP': '🔌', 'Git Repo': '🗃️' }
export const CATEGORIES = [
  'AI & LLM', 'Design & Animation', 'Video Analysis', 'Marketing', 'Engineering', 'Dev Tools',
  'Cowork', 'Utility', 'Security', 'Infrastructure', 'Collections', 'Writing & Quality',
]

// Synonym → canonical tag. Applied automatically on every build.
const TAG_ALIASES = {
  skills: 'skill', agents: 'agent', agentic: 'agent', 'ai-agents': 'agent',
  videos: 'video', animations: 'animation', 'ai-generated': 'ai-generation', generation: 'ai-generation',
  a11y: 'accessibility', 'social-media': 'social', 'text-to-speech': 'tts', transcription: 'stt',
  'speech-to-text': 'stt', visualisation: 'dataviz', visualization: 'dataviz', graphs: 'charts',
  curated: 'collection', collections: 'collection', mac: 'macos', iphone: 'ios', 'game-dev': 'gamedev',
  gestures: 'gesture', embedding: 'embeddings', x: 'twitter', prompting: 'prompt', prompts: 'prompt',
  'open-source': 'open-source', opensource: 'open-source', oss: 'open-source', selfhosted: 'self-hosted',
  ads: 'ads', ad: 'ads', 'ad-video': 'ads', advertising: 'ads', 'agent-skills': 'skill',
  'claude-code': 'claude-code', claudecode: 'claude-code', 'web-app': 'web', docs: 'docs',
  'design-code': 'designcode', 'spring-animation': 'spring',
}
const TAG_DROP = new Set(['ai', 'tools', '200k-stars', '1.6m'])

const readJSON = f => JSON.parse(fs.readFileSync(P(f), 'utf8'))
const writeJSON = (f, v) => fs.writeFileSync(P(f), JSON.stringify(v, null, 2) + '\n')

function normTags(tags) {
  const out = []
  for (let t of tags) {
    t = String(t).trim().toLowerCase().replace(/\s+/g, '-')
    t = TAG_ALIASES[t] ?? t
    if (!t || TAG_DROP.has(t) || out.includes(t)) continue
    out.push(t)
  }
  return out
}

function validate(tools, usecases) {
  const errs = [], ids = new Set(), links = new Map()
  for (const t of tools) {
    const where = `#${t.id} ${t.name}`
    for (const k of ['id', 'name', 'type', 'category', 'desc', 'link', 'tags'])
      if (t[k] === undefined || t[k] === '') errs.push(`${where}: missing ${k}`)
    if (ids.has(t.id)) errs.push(`${where}: duplicate id`)
    ids.add(t.id)
    if (!TYPES[t.type]) errs.push(`${where}: bad type "${t.type}"`)
    if (!CATEGORIES.includes(t.category)) errs.push(`${where}: bad category "${t.category}"`)
    const l = (t.link || '').toLowerCase().replace(/\/+$/, '')
    if (links.has(l)) console.warn(`  ⚠ ${where}: same link as #${links.get(l)} (allowed, but check it's not a duplicate)`)
    links.set(l, t.id)
  }
  for (const u of usecases) for (const id of u.ids)
    if (!ids.has(id)) errs.push(`usecase "${u.goal}": unknown id ${id}`)
  return errs
}

const flags = t => (t.name.includes('💳') ? ' 💳' : '') + (t.name.includes('⚠️') ? ' ⚠️' : '')
const cleanName = t => t.name.replace(/\s*(💳|⚠️)\s*/g, ' ').trim()
const oneLine = (s, n = 110) => { s = s.replace(/^(💳|⚠️)\s*/, '').replace(/\s+/g, ' '); return s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s }
const md = s => s.replace(/\|/g, '\\|')

// ── JSX ──────────────────────────────────────────────────────────────────────
function jsxLiteral(t) {
  const q = s => JSON.stringify(s ?? '')
  return `  { id: ${t.id}, name: ${q(t.name)}, type: ${q(t.type)}, category: ${q(t.category)},\n` +
    `    desc: ${q(t.desc)},\n` +
    `    link: ${q(t.link)},\n` +
    `    chatSetup: ${q(t.chatSetup)},\n` +
    `    codeSetup: ${q(t.codeSetup)},\n` +
    `    tags: [${t.tags.map(q).join(', ')}] },\n`
}
function buildJSX(tools) {
  const f = P('MyToolsDashboard.jsx')
  const src = fs.readFileSync(f, 'utf8')
  const start = src.indexOf('const INITIAL_TOOLS = [')
  const end = src.indexOf('\n]\n', start)
  if (start < 0 || end < 0) throw new Error('INITIAL_TOOLS block not found in MyToolsDashboard.jsx')
  const header = '// AUTO-GENERATED from tools.json by scripts/tools.mjs — edit tools.json, not this block.\n'
  let before = src.slice(0, start).replace(/\/\/ AUTO-GENERATED[^\n]*\n/, '')
  const body = 'const INITIAL_TOOLS = [\n' + tools.map(jsxLiteral).join('\n') + ']\n'
  fs.writeFileSync(f, before + header + body + src.slice(end + 3))
}

// ── README ───────────────────────────────────────────────────────────────────
function buildREADME(tools, usecases) {
  const byId = new Map(tools.map(t => [t.id, t]))
  const ref = id => { const t = byId.get(id); return `[${cleanName(t)}](#t${id})${flags(t)}` }
  const L = []
  L.push('# My Tools Dashboard', '')
  L.push(`${tools.length} AI tools — Skills ⚡, MCPs 🔌, and Git Repos 🗃️ — curated for Claude Code and Cowork workflows.  `)
  L.push('💳 = paid / subscription required · ⚠️ = grey-area or broken, use with caution', '')
  L.push('> **For AI agents:** the source of truth is [`tools.json`](tools.json). Read [`CLAUDE.md`](CLAUDE.md) for how to search and add tools. This README is generated — do not edit by hand.', '')
  L.push('**Jump to:** [Use-case index](#use-case-index) · [Quick index](#quick-index) · [Details by category](#details-by-category)', '')
  L.push('---', '', '## Use-case index', '', '*"I want to…" → the tools for it.*', '')
  for (const u of usecases) L.push(`- **${u.goal}** → ${u.ids.map(ref).join(' · ')}`)
  L.push('', '---', '', '## Quick index', '', '| # | Tool | Type | Category | What it does |', '|---|---|---|---|---|')
  for (const t of [...tools].sort((a, b) => a.id - b.id))
    L.push(`| ${t.id} | [${md(cleanName(t))}](#t${t.id})${flags(t)} | ${TYPES[t.type]} | ${t.category} | ${md(oneLine(t.desc))} |`)
  L.push('', '---', '', '## Details by category', '')
  for (const cat of CATEGORIES) {
    const list = tools.filter(t => t.category === cat).sort((a, b) => a.id - b.id)
    if (!list.length) continue
    L.push(`### ${cat}`, '')
    for (const t of list) {
      L.push(`<a id="t${t.id}"></a>`)
      L.push(`#### #${t.id} · ${cleanName(t)}${flags(t)} — ${TYPES[t.type]} ${t.type}`, '')
      L.push(t.desc, '')
      L.push(`🔗 ${t.link}  `)
      const setup = (t.chatSetup || t.codeSetup || '').trim()
      if (setup) L.push('', '```bash', setup, '```')
      L.push('', '`' + t.tags.map(x => '#' + x).join(' ') + '`', '')
    }
  }
  L.push('---', '', `*${tools.length} tools total · generated from tools.json*`, '')
  fs.writeFileSync(P('README.md'), L.join('\n'))
}

// ── CLI ──────────────────────────────────────────────────────────────────────
const [cmd = 'build', ...args] = process.argv.slice(2)
let tools = readJSON('tools.json')
const usecases = fs.existsSync(P('usecases.json')) ? readJSON('usecases.json') : []

if (cmd === 'next-id') {
  console.log(Math.max(...tools.map(t => t.id)) + 1)
} else if (cmd === 'find' || cmd === 'dup') {
  const words = args.join(' ').toLowerCase().split(/\s+/).filter(Boolean)
  const hits = tools.filter(t => {
    const hay = [t.name, t.desc, t.link, t.category, ...t.tags].join(' ').toLowerCase()
    return cmd === 'dup' ? words.some(w => hay.includes(w.replace(/^https?:\/\//, '').replace(/\/+$/, '')))
                         : words.every(w => hay.includes(w))
  })
  for (const t of hits) console.log(`#${t.id} ${t.name} [${t.type} · ${t.category}] ${t.link}\n    ${oneLine(t.desc, 160)}`)
  if (!hits.length) console.log(cmd === 'dup' ? 'No duplicate found.' : 'No match.')
} else if (cmd === 'check' || cmd === 'build') {
  tools = tools.map(t => ({ ...t, tags: normTags(t.tags || []) })).sort((a, b) => a.id - b.id)
  const errs = validate(tools, usecases)
  if (errs.length) { console.error('✗ Validation failed:\n  ' + errs.join('\n  ')); process.exit(1) }
  if (cmd === 'build') {
    writeJSON('tools.json', tools)
    buildJSX(tools)
    buildREADME(tools, usecases)
    console.log(`✓ Built ${tools.length} tools · next id ${Math.max(...tools.map(t => t.id)) + 1}`)
  } else console.log(`✓ ${tools.length} tools valid`)
} else {
  console.error('Unknown command. Use: build | check | next-id | find <words> | dup <url|name>'); process.exit(1)
}
