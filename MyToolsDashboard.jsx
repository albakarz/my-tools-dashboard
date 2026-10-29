import { useState, useMemo } from 'react'
import { Search, Plus, X, ChevronDown, ChevronUp, Trash2, Sun, Moon, Link, Terminal, MessageSquare, GitBranch } from 'lucide-react'

// ── YOUR TOOLS ─────────────────────────────────────────────────────────────
// Jack adds tools here. Each entry:
// { id, name, type ('Skill'|'MCP'|'Git Repo'), category, desc, link, chatSetup, codeSetup, tags[] }
const INITIAL_TOOLS = [
  // ── SKILLS ───────────────────────────────────────────────────────────────

  // AI & LLM
  { id: 1,  name: 'LLM Council',           type: 'Skill', category: 'AI & LLM',
    desc: 'Multi-LLM consensus — routes queries across models and synthesises a council answer',
    link: 'https://github.com/aiwithremy/claude-skills-llm-council',
    chatSetup: '',
    codeSetup: 'npx skills add aiwithremy/claude-skills-llm-council',
    tags: ['llm','ai','council','reasoning'] },

  { id: 2,  name: 'Context Engineering',   type: 'Skill', category: 'AI & LLM',
    desc: 'Better agent context management — structuring, pruning, and injecting context',
    link: 'https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering',
    chatSetup: '',
    codeSetup: 'npx skills add muratcankoylan/Agent-Skills-for-Context-Engineering',
    tags: ['context','agent','engineering','prompt'] },

  // Design & Animation
  { id: 3,  name: 'UI/UX Pro Max',         type: 'Skill', category: 'Design & Animation',
    desc: 'Expert-level UI/UX design skill with creative direction capabilities',
    link: 'https://ui-ux-pro-max-skill.nextlevelbuilder.io',
    chatSetup: '',
    codeSetup: 'npx claude-code-templates@latest --skill creative-design/ui-ux-pro-max',
    tags: ['ui','ux','design','creative'] },

  { id: 4,  name: 'Emil Kowalski',         type: 'Skill', category: 'Design & Animation',
    desc: 'Design-focused skill by Emil Kowalski — motion, polish, and interaction detail',
    link: 'https://emilkowal.ski/skill',
    chatSetup: '',
    codeSetup: 'npx skills add emilkowalski/skill',
    tags: ['design','motion','interaction','polish'] },

  { id: 5,  name: 'Taste Skill',           type: 'Skill', category: 'Design & Animation',
    desc: 'Adds aesthetic taste and visual judgment to Claude\'s output',
    link: 'https://github.com/Leonxlnx/taste-skill',
    chatSetup: '',
    codeSetup: 'npx skills add https://github.com/Leonxlnx/taste-skill',
    tags: ['taste','aesthetics','design'] },

  { id: 6,  name: 'AntV Infographic',     type: 'Skill', category: 'Design & Animation',
    desc: 'AntV-powered infographic and data visualisation generation',
    link: 'https://github.com/antvis/Infographic',
    chatSetup: '',
    codeSetup: '/plugin marketplace add https://github.com/antvis/Infographic.git',
    tags: ['infographic','dataviz','antv','charts'] },

  { id: 7,  name: 'Graphify',             type: 'Skill', category: 'Design & Animation',
    desc: 'Generate charts and graphs directly from Claude output',
    link: 'https://github.com/safishamsi/graphify',
    chatSetup: '',
    codeSetup: 'pip install graphifyy && graphify install',
    tags: ['graphs','charts','visualisation'] },

  { id: 8,  name: 'Ponytail',             type: 'Skill', category: 'Design & Animation',
    desc: 'Tailwind-focused UI component skill for building polished interfaces',
    link: 'https://github.com/DietrichGebert/ponytail',
    chatSetup: '',
    codeSetup: 'npx skills add DietrichGebert/ponytail',
    tags: ['tailwind','ui','components'] },

  { id: 9,  name: 'GSAP Skills (official)',type: 'Skill', category: 'Design & Animation',
    desc: 'Official GreenSock GSAP animation skill — timelines, ScrollTrigger, and more',
    link: 'https://github.com/greensock/gsap-skills',
    chatSetup: '',
    codeSetup: '/plugin marketplace add greensock/gsap-skills',
    tags: ['gsap','animation','greensock','scroll'] },

  { id: 10, name: 'Spline 3D Integration',type: 'Skill', category: 'Design & Animation',
    desc: '3D design integration via Spline — install through mcpmarket',
    link: 'https://mcpmarket.com/tools/skills/spline-3d-integration',
    chatSetup: '',
    codeSetup: '# Install via mcpmarket\n# Visit: https://mcpmarket.com/tools/skills/spline-3d-integration',
    tags: ['spline','3d','design'] },

  // Marketing
  { id: 11, name: 'Marketing Skills',     type: 'Skill', category: 'Marketing',
    desc: 'Marketing-focused skill set — campaigns, copy, strategy, and positioning',
    link: 'https://github.com/coreyhaines31/marketingskills',
    chatSetup: '',
    codeSetup: 'npx skills add coreyhaines31/marketingskills',
    tags: ['marketing','copy','campaign','strategy'] },

  // Writing & Quality
  { id: 12, name: 'Stop-Slop',           type: 'Skill', category: 'Writing & Quality',
    desc: 'Forces Claude to avoid vague, hollow, and AI-sounding writing',
    link: 'https://github.com/hardikpandya/stop-slop',
    chatSetup: '',
    codeSetup: 'npx skills add hardikpandya/stop-slop',
    tags: ['writing','quality','anti-slop'] },

  { id: 13, name: 'Impeccable v4.0',      type: 'Skill', category: 'Design & Animation',
    desc: 'v4.0 ↑ Design language skill — auto-detects job type (greenfield / redesign / refinement), generates 7 direction options, and gives each job the right amount of creative freedom. Redesigns replace, not polish',
    link: 'https://github.com/pbakaus/impeccable',
    chatSetup: '',
    codeSetup: 'npx impeccable skills install',
    tags: ['design','ui','redesign','greenfield','directions','quality','frontend'] },

  // Utility
  { id: 14, name: 'find-skill',          type: 'Skill', category: 'Utility',
    desc: 'Discover and install Claude skills from the CLI',
    link: 'https://github.com/fockus/claude-skill-find-skill',
    chatSetup: '',
    codeSetup: 'brew install find-skill && find-skill',
    tags: ['discovery','utility','skills'] },

  { id: 15, name: 'last30days',          type: 'Skill', category: 'Utility',
    desc: 'Summarise and surface insights from the last 30 days of activity',
    link: 'https://github.com/mvanhorn/last30days-skill',
    chatSetup: '',
    codeSetup: 'npx skills add mvanhorn/last30days-skill -g -y',
    tags: ['history','summary','insights'] },

  // ── MCPs ─────────────────────────────────────────────────────────────────

  // Design & Animation
  { id: 16, name: '21st.dev Magic',      type: 'MCP', category: 'Design & Animation',
    desc: 'AI-powered UI component generation from 21st.dev design system',
    link: 'https://github.com/21st-dev/magic-mcp',
    chatSetup: '',
    codeSetup: 'npx -y @21st-dev/magic@latest',
    tags: ['ui','components','generation','magic'] },

  { id: 17, name: 'Framer MCP',         type: 'MCP', category: 'Design & Animation',
    desc: 'Connect Claude directly to Framer for design and layout generation',
    link: 'https://www.framer.com/marketplace/plugins/mcp/',
    chatSetup: 'Install via the Framer app → Marketplace → MCP plugin',
    codeSetup: 'Install via the Framer app → Marketplace → MCP plugin',
    tags: ['framer','design','prototyping','web'] },

  { id: 18, name: 'Spline MCP ⚠️',     type: 'MCP', category: 'Design & Animation',
    desc: '⚠️ Currently broken — no public Spline API yet. Watch the repo for updates',
    link: 'https://github.com/aydinfer/spline-mcp-server',
    chatSetup: '',
    codeSetup: 'claude mcp add-json "spline-design" ...\n# ⚠️ Broken — no public Spline API yet',
    tags: ['spline','3d','broken','watch'] },

  { id: 25, name: 'Mobbin MCP 💳',       type: 'MCP', category: 'Design & Animation',
    desc: '💳 Paid (Mobbin Pro $10/mo). Access to 620k+ real app screens and 140k+ user flows as live UI reference for Claude',
    link: 'https://mobbin.com/mcp',
    chatSetup: 'claude mcp add mobbin --scope user --transport http https://api.mobbin.com/mcp\n# Then authenticate via browser with your Mobbin account',
    codeSetup: 'npx -y mobbin-mcp auth\nclaude mcp add mobbin -- npx -y mobbin-mcp\n# Verify: claude > /mcp → should show "mobbin: connected"',
    tags: ['design','ui','screens','reference','flows','paid'] },

  { id: 19, name: 'GSAP Master MCP',    type: 'MCP', category: 'Design & Animation',
    desc: 'GSAP animation MCP server — advanced timelines and scroll effects',
    link: 'https://github.com/bruzethegreat/gsap-master-mcp-server',
    chatSetup: '',
    codeSetup: 'claude mcp add-json gsap-master ...\n# See repo for full JSON config',
    tags: ['gsap','animation','greensock'] },

  // Marketing
  { id: 20, name: 'Windsor.ai',         type: 'MCP', category: 'Marketing',
    desc: 'Marketing data connector — ad spend, multi-touch attribution, analytics',
    link: 'https://github.com/windsor-ai/windsor_mcp',
    chatSetup: 'Connect at mcp.windsor.ai via Claude settings → Integrations',
    codeSetup: '# Add to claude_desktop_config.json\n# Endpoint: mcp.windsor.ai',
    tags: ['marketing','analytics','attribution','ads'] },

  // ── GIT REPOS / COLLECTIONS ──────────────────────────────────────────────

  { id: 21, name: 'Awesome Claude Design',type: 'Git Repo', category: 'Collections',
    desc: '68 curated Claude design systems, UI resources, and component libraries',
    link: 'https://github.com/VoltAgent/awesome-claude-design',
    chatSetup: '',
    codeSetup: '# Reference only — no install\ngit clone https://github.com/VoltAgent/awesome-claude-design',
    tags: ['design','systems','curated','collection','reference'] },

  // ── SECURITY ─────────────────────────────────────────────────────────────

  { id: 22, name: 'Repello SkillCheck',  type: 'MCP', category: 'Security',
    desc: 'Upload a .skill zip → get a safety score before installing any skill',
    link: 'https://repello.ai/tools/skills',
    chatSetup: 'Web tool — visit repello.ai/tools/skills and upload the .skill zip',
    codeSetup: '# Web tool — no install needed\n# Visit: https://repello.ai/tools/skills',
    tags: ['security','safety','skill-check','vetting'] },

  // ── VIDEO ANALYSIS ───────────────────────────────────────────────────────

  { id: 23, name: 'claude-video',        type: 'Git Repo', category: 'Video Analysis',
    desc: 'Best for reading on-screen text/UI in screen recordings — uniform frame sampling + --resolution flag',
    link: 'https://github.com/bradautomates/claude-video',
    chatSetup: '',
    codeSetup: 'git clone https://github.com/bradautomates/claude-video\n# See repo README for usage',
    tags: ['video','screen-recording','ocr','ui','frames'] },

  { id: 44, name: 'claude-real-video',    type: 'Git Repo', category: 'Video Analysis',
    desc: 'Scene-aware frame extraction + dedup + Whisper transcript from any URL or local file. Smarter than fixed-interval sampling — grabs frames that matter, skips near-duplicates. Fully local, nothing uploaded',
    link: 'https://github.com/HUANGCHIHHUNGLeo/claude-real-video',
    chatSetup: '',
    codeSetup: '# Install (core)\npip install claude-real-video\n\n# With audio transcription\npip install "claude-real-video[whisper]"\n\n# Requires: brew install ffmpeg\n\n# Run\ncrv "https://youtube.com/watch?v=..."\n# → crv-out/frames/ + transcript.txt + MANIFEST.txt',
    tags: ['video','scene-detection','dedup','whisper','transcript','local','youtube'] },

  { id: 24, name: 'claude-watch',        type: 'Git Repo', category: 'Video Analysis',
    desc: 'Best for short-form hook/retention analysis — frame-dense sampling at video start',
    link: 'https://github.com/alexlarcheveque/claude-watch',
    chatSetup: '',
    codeSetup: 'git clone https://github.com/alexlarcheveque/claude-watch\n# See repo README for usage',
    tags: ['video','retention','hooks','analysis'] },

  // ── INFRASTRUCTURE ───────────────────────────────────────────────────────

  { id: 26, name: 'CLIProxyAPI ⚠️',      type: 'Git Repo', category: 'Infrastructure',
    desc: '⚠️ Grey-area (ToS). Self-hosted Go proxy that wraps Claude/ChatGPT/Gemini/Grok subscriptions as OpenAI-compatible API endpoints — no API keys needed. 39.4k ⭐ Multi-account load balancing supported',
    link: 'https://github.com/router-for-me/CLIProxyAPI',
    chatSetup: '',
    codeSetup: '# Docker (easiest)\ndocker compose up -d\n\n# Or build from source (Go)\n# Full docs: https://help.router-for.me/',
    tags: ['proxy','api','claude','openai','gemini','self-hosted','subscription','infrastructure'] },

  // ── AI & LLM ─────────────────────────────────────────────────────────────

  { id: 27, name: 'Superpowers',          type: 'Skill', category: 'AI & LLM',
    desc: 'Complete agentic dev methodology — spec → plan → subagent-driven TDD. Works across Claude Code, Cursor, Codex, and 10+ agents. 246k ⭐',
    link: 'https://github.com/obra/superpowers',
    chatSetup: '',
    codeSetup: '# Official Claude marketplace (easiest)\n/plugin install superpowers@claude-plugins-official\n\n# Or via Superpowers marketplace\n/plugin marketplace add obra/superpowers-marketplace\n/plugin install superpowers@superpowers-marketplace',
    tags: ['methodology','tdd','subagent','planning','workflow'] },

  { id: 28, name: 'G-stack',              type: 'Skill', category: 'AI & LLM',
    desc: 'Garry Tan\'s (YC) exact Claude Code setup — 23 opinionated skills covering CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA roles',
    link: 'https://github.com/garrytan/gstack',
    chatSetup: '',
    codeSetup: 'npx skills add garrytan/gstack\n# Or clone and follow setup script\ngit clone https://github.com/garrytan/gstack && ./gstack/setup',
    tags: ['yc','workflow','roles','engineering','setup'] },

  { id: 29, name: 'Karpathy Skills',      type: 'Skill', category: 'AI & LLM',
    desc: 'CLAUDE.md skill derived from Andrej Karpathy\'s observations on LLM coding pitfalls — don\'t assume, simplify, state assumptions, goal-driven execution',
    link: 'https://github.com/multica-ai/andrej-karpathy-skills',
    chatSetup: '',
    codeSetup: 'npx skills add multica-ai/andrej-karpathy-skills',
    tags: ['karpathy','guidelines','llm','pitfalls','best-practice'] },

  // ── ENGINEERING ───────────────────────────────────────────────────────────

  { id: 30, name: 'Feature Dev',          type: 'Skill', category: 'Engineering',
    desc: 'Feature development skill from VoltAgent\'s 1000+ curated collection of production skills by official dev teams (Anthropic, Vercel, Stripe, Cloudflare…)',
    link: 'https://github.com/VoltAgent/awesome-agent-skills',
    chatSetup: '',
    codeSetup: '# Browse the full collection, then install the skill you want\nnpx skills add VoltAgent/awesome-agent-skills\n# Or pick feature-dev specifically from the repo',
    tags: ['feature','development','engineering','voltagent'] },

  { id: 31, name: 'Code Simplifier',      type: 'Skill', category: 'Engineering',
    desc: 'Takes recently modified code and makes it cleaner without changing what it does — from VoltAgent\'s curated skills collection',
    link: 'https://github.com/VoltAgent/awesome-agent-skills',
    chatSetup: '',
    codeSetup: '# Browse VoltAgent/awesome-agent-skills for code-simplifier\nnpx skills add VoltAgent/awesome-agent-skills',
    tags: ['refactor','simplify','clean','code','quality'] },

  { id: 32, name: 'Code Review (Addy)',   type: 'Skill', category: 'Engineering',
    desc: 'Production-grade code review and QA skills by Addy Osmani (Chrome DevRel). Covers review, testing, performance, and engineering best practices',
    link: 'https://github.com/addyosmani/agent-skills',
    chatSetup: '',
    codeSetup: 'npx skills add addyosmani/agent-skills',
    tags: ['review','qa','testing','performance','production'] },

  { id: 33, name: 'Playwright / Webapp Testing', type: 'Skill', category: 'Engineering',
    desc: 'Official Anthropic webapp testing skill (webapp-testing folder) — Playwright-based browser automation and end-to-end testing',
    link: 'https://github.com/anthropics/skills/tree/main/skills/webapp-testing',
    chatSetup: 'Available on Claude.ai paid plans — mention "webapp testing" or "Playwright"',
    codeSetup: '/plugin marketplace add anthropics/skills\n# Then: Browse → anthropic-agent-skills → example-skills → Install\n# Or directly:\n/plugin install example-skills@anthropic-agent-skills',
    tags: ['playwright','testing','e2e','browser','automation'] },

  // ── DEV TOOLS ─────────────────────────────────────────────────────────────

  { id: 34, name: 'TypeScript LSP',       type: 'MCP', category: 'Dev Tools',
    desc: 'Language Server Protocol MCP — gives Claude semantic code intelligence: go-to-definition, references, rename, and diagnostics across any LSP-supported language',
    link: 'https://github.com/modelcontextprotocol/servers',
    chatSetup: '',
    codeSetup: '# isaacphi/mcp-language-server (recommended)\nnpx -y mcp-language-server\n# Or jonrad/lsp-mcp\nnpx -y lsp-mcp',
    tags: ['lsp','typescript','language-server','semantic','ide'] },

  { id: 35, name: 'GitHub MCP (official)',type: 'MCP', category: 'Dev Tools',
    desc: 'Official MCP connector for GitHub — repos, PRs, issues, commits, branches. Part of the modelcontextprotocol/servers reference collection',
    link: 'https://github.com/modelcontextprotocol/servers',
    chatSetup: 'Add via Claude.ai connector settings → GitHub',
    codeSetup: 'claude mcp add github \\\n  -e GITHUB_PERSONAL_ACCESS_TOKEN=your_token \\\n  -- npx -y @modelcontextprotocol/server-github',
    tags: ['github','git','pr','issues','repos','official'] },

  { id: 36, name: 'Context7',             type: 'MCP', category: 'Dev Tools',
    desc: 'Fetches live, version-specific library docs and code examples for any package — eliminates hallucinated API usage',
    link: 'https://github.com/upstash/context7',
    chatSetup: 'Add remote MCP in Claude.ai settings: https://mcp.context7.com/mcp',
    codeSetup: 'claude mcp add --transport http https://mcp.context7.com/mcp\n# Or local:\nnpx -y @upstash/context7-mcp',
    tags: ['docs','library','npm','sdk','live','context'] },

  // ── COWORK & META ─────────────────────────────────────────────────────────

  { id: 37, name: 'Skill Creator (Anthropic)', type: 'Skill', category: 'Cowork',
    desc: 'Official Anthropic skill for creating, testing, and optimising new skills — from the anthropics/skills repo (skill-creator folder)',
    link: 'https://github.com/anthropics/skills/tree/main/skills/skill-creator',
    chatSetup: 'Available on Claude.ai paid plans',
    codeSetup: '/plugin marketplace add anthropics/skills\n/plugin install example-skills@anthropic-agent-skills',
    tags: ['skill','creator','meta','anthropic','official'] },

  { id: 38, name: 'Claude.md Management', type: 'Skill', category: 'Cowork',
    desc: 'Best practices for structuring and maintaining CLAUDE.md files — tips sourced from Anthropic team and community, by Shayan Rais',
    link: 'https://github.com/shanraisshan/claude-code-best-practice',
    chatSetup: '',
    codeSetup: '# Reference repo — clone and adapt CLAUDE.md patterns to your project\ngit clone https://github.com/shanraisshan/claude-code-best-practice',
    tags: ['claude-md','memory','context','best-practice','project'] },

  // ── SECURITY ─────────────────────────────────────────────────────────────

  { id: 39, name: 'Security Guidance',    type: 'Skill', category: 'Security',
    desc: 'Official Anthropic security guidance skill — security reviews, threat modelling, and vulnerability assessment (security-guidance folder in anthropics/skills)',
    link: 'https://github.com/anthropics/skills/tree/main/skills/security-guidance',
    chatSetup: 'Available on Claude.ai paid plans',
    codeSetup: '/plugin marketplace add anthropics/skills\n/plugin install example-skills@anthropic-agent-skills',
    tags: ['security','threat-model','vulnerability','review','official'] },

  // ── DESIGN & ANIMATION ────────────────────────────────────────────────────

  { id: 40, name: 'Front-end Design',     type: 'Skill', category: 'Design & Animation',
    desc: 'Official Anthropic front-end design skill — UI/component design, styling, and layout guidance (frontend-design folder in anthropics/skills)',
    link: 'https://github.com/anthropics/skills/tree/main/skills/frontend-design',
    chatSetup: 'Available on Claude.ai paid plans',
    codeSetup: '/plugin marketplace add anthropics/skills\n/plugin install example-skills@anthropic-agent-skills',
    tags: ['frontend','design','ui','components','css','official'] },

  // ── UTILITY ───────────────────────────────────────────────────────────────

  { id: 43, name: 'Grill Me',             type: 'Skill', category: 'Utility',
    desc: 'Interviews you relentlessly one question at a time until everything you know about a topic is extracted and saved to a file. Claude guesses each answer — you confirm or correct. Great for decision-making and client onboarding',
    link: 'https://github.com/gusinov/grill-me',
    chatSetup: '',
    codeSetup: 'npx skills add gusinov/grill-me\n# Or manually: copy grill-me/ folder to ~/.claude/skills/\n# Trigger: say "grill me about X"',
    tags: ['interview','context','extraction','brainstorm','onboarding','decisions'] },

  { id: 41, name: 'Caveman',              type: 'Skill', category: 'Utility',
    desc: 'Cuts ~65% output tokens by making Claude respond in terse caveman-speak. Full technical accuracy kept. 4 modes: lite / full / ultra / wenyan. 69.4k ⭐',
    link: 'https://github.com/JuliusBrussee/caveman',
    chatSetup: '',
    codeSetup: '# macOS / Linux / WSL\ncurl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.sh | bash\n\n# Windows (PowerShell)\nirm https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.ps1 | iex\n\n# Trigger: type /caveman or "talk like caveman"',
    tags: ['tokens','cost','brevity','caveman','compression'] },

  // ── COLLECTIONS ───────────────────────────────────────────────────────────

  { id: 42, name: 'Awesome Agent Skills', type: 'Git Repo', category: 'Collections',
    desc: '1000+ curated agent skills from official dev teams (Anthropic, Vercel, Stripe, Cloudflare, Netlify…) and community. Compatible with Claude Code, Codex, Gemini CLI, Cursor',
    link: 'https://github.com/VoltAgent/awesome-agent-skills',
    chatSetup: '',
    codeSetup: '# Browse the repo and npx skills add individual entries\ngit clone https://github.com/VoltAgent/awesome-agent-skills',
    tags: ['collection','skills','curated','voltagent','community'] },

  // ── DESIGN RESOURCES ─────────────────────────────────────────────────────

  { id: 45, name: 'Uiverse',              type: 'Git Repo', category: 'Design & Animation',
    desc: 'Largest community-built library of open-source UI elements — 7,400+ buttons, cards, loaders, forms, tooltips, backgrounds. Copy as HTML/CSS, Tailwind, React, or Figma. MIT licensed, 100% free',
    link: 'https://github.com/uiverse-io/galaxy',
    chatSetup: 'Paste any Uiverse element\'s code into Claude and ask it to theme, extend, or adapt it to your design system',
    codeSetup: '# Website: https://uiverse.io\n# No install — browse, copy code, paste into your project\ngit clone https://github.com/uiverse-io/galaxy  # full open-source lib',
    tags: ['ui','components','css','tailwind','react','figma','free','library','open-source'] },

  { id: 46, name: 'Scroll-World 💳',      type: 'Skill', category: 'Design & Animation',
    desc: '💳 Paid (AI image + video credits). Builds a scroll-scrubbed "fly through the world" 3D landing page for any brand — camera flies from outside each scene into its interior with no cuts. Interviews you → generates AI isometric dioramas + video clips → wires up a portable scroll engine. 8k ⭐',
    link: 'https://github.com/oso95/scroll-world',
    chatSetup: '',
    codeSetup: '# Claude Code plugin (recommended)\n/plugin marketplace add oso95/scroll-world\n/plugin install scroll-world@scroll-world\n\n# Or via skills CLI (Codex, Cursor, etc.)\nnpx skills add oso95/scroll-world\n\n# Requires: Monid CLI + Higgsfield CLI + ffmpeg + Python 3 + Pillow',
    tags: ['3d','scroll','landing-page','animation','video','brand','immersive','ai-generated'] },

  { id: 47, name: 'Refero MCP 💳',        type: 'MCP', category: 'Design & Animation',
    desc: '💳 Paid (Refero subscription). Connects Claude to 135k+ real product screens and 10k+ full user flows. Agent researches actual UI references before generating code — instead of guessing "make it clean", it studies how real products solve the same problem',
    link: 'https://refero.design/mcp',
    chatSetup: 'Add via Claude.ai connector settings or:\nclaude mcp add refero --transport http https://refero.design/mcp\n# Requires a Refero account',
    codeSetup: 'claude mcp add refero --transport http https://refero.design/mcp\n# Also: community styles MCP (free)\nnpx -y refero-styles-mcp-server\n# GitHub: faridjafarlee/refero-styles-mcp-server',
    tags: ['design','ui','ux','reference','screens','flows','inspiration','paid'] },

  { id: 48, name: 'ego lite',              type: 'Git Repo', category: 'Dev Tools',
    desc: 'macOS browser where you and AI agents work in parallel — each agent gets its own isolated Space while your tabs stay yours. Shares your Chrome logins/cookies with agents via ego-browser skill. JS-based tool calls (not CLI) run 2.5× faster with fewer tokens. Best page snapshots on the market, handles nested iframes',
    link: 'https://github.com/citrolabs/ego-lite',
    chatSetup: '',
    codeSetup: '# Download macOS app (installs ego-browser skill automatically)\n# Apple Silicon: https://cdn.ego.app/setup/macos/arm64/egolite.dmg\n# Intel: https://cdn.ego.app/setup/macos/x64/egolite.dmg\n\n# Or via Claude Code plugin\n/plugin marketplace add citrolabs/ego-lite\n\n# Then in any agent:\n/ego-browser <task>',
    tags: ['browser','automation','agent','macos','parallel','logins','skill','claude-code'] },

  // ── VIDEO / CONTENT ────────────────────────────────────────────────────────

  { id: 49, name: 'MoneyPrinterTurbo',    type: 'Git Repo', category: 'Video Analysis',
    desc: 'Give it a topic/keyword → auto-generates script, sources stock footage (Pexels/Pixabay/Coverr), adds TTS voiceover, subtitles (Whisper), background music → renders HD short video (9:16 or 16:9). Has WebUI, API, CLI, Docker. One-click publish to TikTok, Instagram, YouTube Shorts. 102k ⭐',
    link: 'https://github.com/harry0703/MoneyPrinterTurbo',
    chatSetup: '',
    codeSetup: '# Docker (easiest)\ngit clone https://github.com/harry0703/MoneyPrinterTurbo\ncd MoneyPrinterTurbo\ndocker compose -f docker-compose.release.yml up\n# WebUI: http://127.0.0.1:8501\n\n# Or local (macOS/Linux)\nuv sync --frozen && sh webui.sh\n\n# Or use as Agent Skill directly:\n# Ask Claude: "Use this skill: https://raw.githubusercontent.com/harry0703/MoneyPrinterTurbo/main/docs/skill/SKILL.md"',
    tags: ['video','short-form','tiktok','youtube','instagram','ai-generated','tts','subtitles','automation'] },

  { id: 50, name: 'Arcads Claude Code',   type: 'Git Repo', category: 'Marketing',
    desc: 'Claude Code + Cursor workspace for the Arcads API — AI-generated ad video creation. Agent handles all API calls, polling, cost confirmation, and file organisation. Includes workflows for image gen, video gen (Seedance 2.0: 4–15s clips, native audio, image-to-video). Needs Arcads API key',
    link: 'https://github.com/krusemediallc/arcads-claude-code',
    chatSetup: '',
    codeSetup: 'git clone https://github.com/krusemediallc/arcads-claude-code\ncd arcads-claude-code\n# Copy .env.example → .env and add your ARCADS_API_KEY\n# Then open in Claude Code or Cursor and follow AGENTS.md',
    tags: ['ads','video','marketing','arcads','seedance','api','claude-code','cursor'] },

  // ── INTERNET ACCESS ────────────────────────────────────────────────────────

  { id: 51, name: 'Agent Reach',          type: 'Git Repo', category: 'Dev Tools',
    desc: 'Gives Claude Code eyes to read & search 17+ internet platforms — Twitter/X, Reddit, YouTube transcripts, GitHub, LinkedIn, Bilibili, 小红书, 抖音 and more. Zero API keys, zero config. Smart routing picks the right scraper per query. Also runs as MCP stdio server',
    link: 'https://github.com/Panniantong/Agent-Reach',
    chatSetup: '',
    codeSetup: '# Via pipx (recommended)\npipx install https://github.com/Panniantong/agent-reach/archive/main.zip\n\n# Or clone\ngit clone https://github.com/Panniantong/Agent-Reach\ncd Agent-Reach && pip install -e .\n\n# Or as skill\nnpx skills add Panniantong/agent-reach',
    tags: ['browser','scraping','twitter','reddit','youtube','github','social','internet','no-api'] },

  // ── COWORK / META ─────────────────────────────────────────────────────────

  { id: 67, name: 'Claude for Small Business', type: 'Skill', category: 'Cowork',
    desc: 'Official Anthropic product (May 2026) — toggle install inside Claude Cowork that puts Claude inside the tools small businesses already use. 8 integrations: QuickBooks, PayPal, HubSpot, Canva, DocuSign, Google Workspace, Microsoft 365, Slack. 15 ready-to-run agentic workflows: payroll planning, month-end close, invoice chasing, lead triage, contract review, campaign creation, cash-flow monitoring, business pulse report, margin analyzer, tax organizer, and more. 15 skills built on the most common owner bottlenecks. You approve before anything sends, posts, or pays. Your existing permissions hold. Also includes a free AI Fluency course (with PayPal)',
    link: 'https://claude.com/solutions/small-business',
    chatSetup: '# Toggle on inside Claude Cowork\n# Go to: claude.com/solutions/small-business\n# Connect your tools: QuickBooks, PayPal, HubSpot, Canva, DocuSign, Google Workspace, Microsoft 365, Slack\n# Pick a workflow and run it — you approve before anything sends/posts/pays\n\n# Free AI Fluency course:\n# https://anthropic.skilljar.com/ai-fluency-for-small-businesses',
    codeSetup: '',
    tags: ['small-business','quickbooks','paypal','hubspot','canva','docusign','payroll','invoicing','cowork','official','anthropic','workflows'] },

  { id: 52, name: 'Claude Code Setup (Official)', type: 'Skill', category: 'Cowork',
    desc: 'Official Anthropic plugin — scans your codebase and recommends the top 1–2 tailored automations per category: MCP servers, Skills, Hooks, Subagents, and Slash Commands. Read-only, never modifies your files. The "how should I set up Claude Code for this project?" skill',
    link: 'https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-code-setup',
    chatSetup: '',
    codeSetup: '/plugin marketplace add anthropics/claude-plugins-official\n/plugin install claude-code-setup@claude-plugins-official',
    tags: ['setup','official','anthropic','hooks','mcp','skills','subagents','automation','config'] },

  // ── DESIGN SKILLS (jakubkrehel) ───────────────────────────────────────────

  { id: 53, name: 'better-ui',            type: 'Skill', category: 'Design & Animation',
    desc: 'UI polish principles — concentric border radius, optical alignment, layered shadows, interruptible animations, stagger/enter/exit transitions, contextual icon animations, scale-on-press (0.96), image outlines, 44px hit areas. Outputs before/after review tables',
    link: 'https://github.com/jakubkrehel/skills/tree/main/skills/better-ui',
    chatSetup: '',
    codeSetup: 'npx skills add jakubkrehel/skills\n# Installs all better-* skills from this repo\n# Or individually: clone and copy skills/better-ui/ to ~/.claude/skills/',
    tags: ['ui','polish','animations','shadows','border-radius','micro-interactions','hover','design'] },

  { id: 54, name: 'better-typography',    type: 'Skill', category: 'Design & Animation',
    desc: 'Web typography — font formats (.woff2), variable fonts, type scale, line-height by role, letter-spacing by size, text-wrap (balance/pretty), tabular numbers on changing values, iOS 16px input rule, WCAG contrast floors, RTL logical properties. Works in any styling system',
    link: 'https://github.com/jakubkrehel/skills/tree/main/skills/better-typography',
    chatSetup: '',
    codeSetup: 'npx skills add jakubkrehel/skills',
    tags: ['typography','fonts','type-scale','line-height','tabular-nums','text-wrap','rtl','woff2'] },

  { id: 55, name: 'better-colors',        type: 'Skill', category: 'Design & Animation',
    desc: 'OKLCH color space for web — converts hex/hsl to oklch, generates palettes with stable hue, checks APCA/WCAG contrast, handles gamut boundaries, derives dark mode by reversing L mapping. Covers Tailwind v4 @theme. Eliminates hue drift and broken palettes',
    link: 'https://github.com/jakubkrehel/skills/tree/main/skills/better-colors',
    chatSetup: '',
    codeSetup: 'npx skills add jakubkrehel/skills',
    tags: ['oklch','colors','palette','contrast','dark-mode','gamut','tailwind','apca','wcag'] },

  { id: 56, name: 'better-accessibility', type: 'Skill', category: 'Design & Animation',
    desc: 'Accessibility engineering — focus rings (:focus-visible), full keyboard support (APG patterns), focus trapping, ARIA semantics, form labels/errors, screen reader live regions, alt text rules, prefers-reduced-motion, minimum hit areas. Outputs severity-rated findings tables',
    link: 'https://github.com/jakubkrehel/skills/tree/main/skills/better-accessibility',
    chatSetup: '',
    codeSetup: 'npx skills add jakubkrehel/skills',
    tags: ['a11y','accessibility','wcag','aria','keyboard','focus','screen-reader','reduced-motion'] },

  { id: 57, name: 'better-layout',        type: 'Skill', category: 'Design & Animation',
    desc: 'Layout structure — group with space not lines, align to shared edges, logical properties for RTL (margin-inline-start), progressive disclosure affordances, breathing room between targets, container queries over device breakpoints, plan for i18n string growth',
    link: 'https://github.com/jakubkrehel/skills/tree/main/skills/better-layout',
    chatSetup: '',
    codeSetup: 'npx skills add jakubkrehel/skills',
    tags: ['layout','spacing','alignment','rtl','breakpoints','container-queries','responsive','whitespace'] },

  // ── APPLE DESIGN ──────────────────────────────────────────────────────────

  { id: 58, name: 'apple-design',         type: 'Skill', category: 'Design & Animation',
    desc: 'Fluid interface principles from Apple WWDC design talks (esp. Designing Fluid Interfaces 2018) — spring animations, gesture-driven UI, drag/swipe/sheet interactions, translucent materials (vibrancy), momentum and interruptible transitions. Distinct from Emil\'s general design skill (#4)',
    link: 'https://github.com/emilkowalski/skills/tree/main/skills/apple-design',
    chatSetup: '',
    codeSetup: 'npx skills add emilkowalski/skills --skill apple-design\n# Or install all emilkowalski skills:\nnpx skills add emilkowalski/skills',
    tags: ['apple','ios','fluid','spring-animation','gesture','drag','swipe','vibrancy','motion','wwdc'] },

  { id: 59, name: 'Pixelle-Video',        type: 'Git Repo', category: 'Video Analysis',
    desc: 'AI short video engine — topic → script → AI images/video → TTS → final video. Deeper than MoneyPrinterTurbo: ComfyUI/RunningHub workflow support, digital avatar presenter, motion transfer, image-to-video, direct API for Seedance/Kling/Wan/Seedream. Each component swappable. Runs 100% free with Ollama + local ComfyUI',
    link: 'https://github.com/AIDC-AI/Pixelle-Video',
    chatSetup: '',
    codeSetup: '# macOS/Linux\ngit clone https://github.com/AIDC-AI/Pixelle-Video\ncd Pixelle-Video\nbrew install ffmpeg\nuv run streamlit run web/app.py\n# WebUI: http://localhost:8501\n\n# Windows: download one-click package from releases',
    tags: ['video','short-form','comfyui','avatar','motion-transfer','seedance','kling','tts','ai-generated','free'] },

  { id: 64, name: 'ThreeUI 💳',            type: 'Git Repo', category: 'Design & Animation',
    desc: 'Meng To\'s (Design+Code) React component library — 50 community parent components, 164 variants with live interactive renderers, variant picker, and complete source. Three.js runtime baked in for 3D-style visuals. Community edition is free/MIT. Pro 💳 unlocks more components via CLI (OAuth-gated). npm: @designcodeio/threeui',
    link: 'https://github.com/MengTo/threeui',
    chatSetup: '',
    codeSetup: '# Install community package\nnpm install @designcodeio/threeui\n\n# Import a component\n# import { AtTheHorizon } from "@designcodeio/threeui"\n# import "@designcodeio/threeui/style.css"\n\n# Pro: add specific components (requires threeui.com account)\nnpx @designcodeio/threeui-cli add <component-name>\n\n# Run community catalog locally\nnpm install && npm run dev',
    tags: ['react','components','threejs','3d','animation','ui','library','design-code','mengto','interactive'] },

  { id: 65, name: 'MengTo Skills',         type: 'Skill', category: 'Design & Animation',
    desc: 'Agent skills by Meng To for designers and builders — UI design-first prompting, Three.js game development, web design, landing pages, and reusable frontend workflows. Works with Claude Code, Codex, Cursor, and other AI coding agents. Covers turning references into prompts, generating rich landing pages, and building playable Three.js systems',
    link: 'https://github.com/MengTo/Skills',
    chatSetup: '',
    codeSetup: 'npx skills add MengTo/Skills\n# Installs all skills: ui prompting, game-dev (Three.js), web design\n# Or browse and install individual skills from the repo',
    tags: ['ui','design','threejs','game-dev','landing-page','prompting','frontend','mengto','agent-skills'] },

  { id: 66, name: 'Palmier Pro 💳',         type: 'MCP', category: 'Video Analysis',
    desc: 'macOS video editor built for AI agents — Claude, Codex, or Cursor connect via local MCP server and can open a project, build the timeline, make edits, and export the finished video end-to-end. 15+ AI generation models on the same timeline: Seedance 2.5, Kling V3, Runway Aleph 2, FLUX 3, ElevenLabs, GPT Image 2, Topaz upscale, and more. Skills system: edit one video → save the workflow → auto-apply to every video after. Full NLE underneath (trim, keyframes, color grade). Exports XML to Premiere, DaVinci, Final Cut. Editor + MCP free; credits 💳 cover generation. YC S26, 100k+ downloads. macOS 26 (Tahoe) required',
    link: 'https://www.palmier.io/',
    chatSetup: '# Connect Palmier MCP to Claude\n# Open Palmier Pro → Settings → MCP\n# Then in Claude Code:\nclaude mcp add palmier -- <palmier-local-mcp-command>\n# Or use built-in Palmier Chat (generation credits included on Pro)',
    codeSetup: '# Download Palmier Pro (macOS 26+ required)\n# https://www.palmier.io/download\n\n# Community Skills\ngit clone https://github.com/palmier-io/palmier-skills\n\n# Claude/Codex connect over MCP — see docs\n# https://www.palmier.io/docs/agent-and-mcp',
    tags: ['video','editing','mcp','ai-generation','seedance','kling','runway','elevenlabs','nle','skills','macos','yc'] },

  { id: 68, name: 'jev-browser-skill 💳',  type: 'Skill', category: 'Dev Tools',
    desc: 'Plug-and-play Claude Code / Codex skill that lets Jev (TypeSafe\'s ~100ms System-1 decision model) drive your browser. No npm install, no Playwright — clone to ~/.claude/skills/ and go. Jev clicks, types, and selects its way through goals at a few hundred ms/decision: 8-step Hacker News login+search = 8 seconds. Drives your own Chrome (via remote debugging) or opens a dedicated Jev window. Logs calibrated probabilities at every step. 💳 Requires TypeSafe API key (fraction of a cent per decision)',
    link: 'https://github.com/zurfyx/jev-browser-skill',
    chatSetup: 'git clone https://github.com/zurfyx/jev-browser-skill ~/.claude/skills/jev-browser\nexport TYPESAFE_API_KEY=apikey_...\n# Then ask Claude: "Use Jev to search Wikipedia for Alan Turing and open his article."',
    codeSetup: '# Claude Code\ngit clone https://github.com/zurfyx/jev-browser-skill ~/.claude/skills/jev-browser\n\n# Codex\ngit clone https://github.com/zurfyx/jev-browser-skill ~/.codex/skills/jev-browser\n\n# Add API key\nexport TYPESAFE_API_KEY=apikey_...\n# Or put in .env inside skill folder\n\n# Run standalone\nnode ~/.claude/skills/jev-browser/scripts/jev.mjs \\\n  --url https://news.ycombinator.com \\\n  --goal "Open the top story\'s comments" \\\n  --trace run.json',
    tags: ['browser','automation','jev','typesafe','system-one','fast','chrome','devtools','no-playwright','skill'] },

  { id: 69, name: 'jev-ultrafast 💳',      type: 'Git Repo', category: 'Dev Tools',
    desc: 'Production-grade browser agent using TypeSafe\'s Jev model — the complete version of jev-browser-skill with live inspector, region narrowing, stale-page guards, and a text-generating helper model. Handles large pages (250+ controls) by narrowing regions first. Jev reads structured element tables (not pixels) and returns calibrated multi-choice decisions in one forward pass. 💳 Requires TypeSafe API key',
    link: 'https://github.com/browser-use/jev-ultrafast',
    chatSetup: '',
    codeSetup: 'git clone https://github.com/browser-use/jev-ultrafast\ncd jev-ultrafast\n# Follow README for setup\nexport TYPESAFE_API_KEY=apikey_...',
    tags: ['browser','automation','jev','typesafe','inspector','region-narrowing','system-one','production'] },

  { id: 70, name: 'Laya',                  type: 'Git Repo', category: 'AI & LLM',
    desc: 'Free, open-source, Jev-compatible System-1 decision model by Convai Innovations — runs locally via Node.js + ONNX Runtime, no Python, no API key. Same request/response shape as TypeSafe Jev API. Give it a state (ticket, email, JSON) + typed questions → calibrated probabilities in one forward pass: choice (pick one), score (ordered rubric), noul (P(true) for yes/no). ~140ms on Apple Silicon, ~1.7GB model weights. Free drop-in for Jev in any agent pipeline',
    link: 'https://github.com/receptron/laya',
    chatSetup: '',
    codeSetup: 'npm install @receptron/laya\n# Node.js 20+ required\n# Weights (~1.7GB) download from HuggingFace on first use\n# ~/.cache/receptron-laya\n\n# Usage:\n# import { Laya } from "@receptron/laya"\n# const laya = await Laya.load()\n# const result = await laya.systemOne(state, questions)',
    tags: ['system-one','decision-model','onnx','local','free','jev-compatible','choice','score','noul','typescript','no-api'] },

  { id: 71, name: 'Kevs-IOS-Agents ⚠️',   type: 'Git Repo', category: 'Marketing',
    desc: '⚠️ Automation may violate TikTok/Instagram ToS — use at own risk. A farm of real iPhones run from your Mac: open-source iOS (+ Android) device automation with live control, Postgres-backed scheduler, and built-in social workflows. TikTok and Instagram enabled by default. Instagram automation: warmup, following-feed engagement, cold DMs, and publishing. Automations dashboard with publishing queues, recurring schedules, device queue controls, and activity monitoring. Self-hosted, Apache-2.0. Creator also has 49 agent skills at kevinbadi/skills',
    link: 'https://github.com/kevinbadi/Kevs-IOS-Agents',
    chatSetup: '',
    codeSetup: 'git clone https://github.com/kevinbadi/Kevs-IOS-Agents\ncd Kevs-IOS-Agents\n# Follow README — requires Mac, real iPhones/Android devices, Postgres\n# See docs for device registration and scheduler setup',
    tags: ['ios','android','automation','tiktok','instagram','social','scheduler','postgres','self-hosted','farm','dms','publishing'] },

  { id: 85, name: 'Kev',                   type: 'Git Repo', category: 'AI & LLM',
    desc: 'Open-source Jev-inspired decision model by Jared Palmer — LoRA adapter + small readout head on Qwen2.5-0.5B. Reads a document once and answers many typed questions in parallel in one forward pass (no decoding). Drop-in API replacement for TypeSafe\'s Jev: same TypeSafe SDK works unmodified with a base_url change. ~160ms on Apple M5, trains in ~1h45m. 79.7% accuracy vs Jev\'s 81.1% (in-distribution). Three question types: noul (yes/no), choice (2-255 options), score (ordered levels). Apache-2.0, free, runs fully local. Includes a playground + chess demo. Alternative to Laya (#70)',
    link: 'https://github.com/jaredpalmer/kev',
    chatSetup: '',
    codeSetup: 'git clone https://github.com/jaredpalmer/kev.git && cd kev\nuv sync --extra serve\n\n# Download weights (Qwen2.5-0.5B base)\nuv run --extra serve python -m kev.serve --run jaredpalmer/kev-0.5b --port 8009\n\n# Use TypeSafe SDK with local server:\n# client = TypeSafeClient(api_key="local", base_url="http://127.0.0.1:8009", model="kev-latest")\n\n# Playground\ncd playground && npm install && npm run dev -- -p 3001',
    tags: ['decision-model','jev-compatible','lora','qwen','local','free','choice','noul','score','typed','apache2','jaredpalmer'] },

  { id: 86, name: 'MiroFish',              type: 'Skill', category: 'AI & LLM',
    desc: 'AI simulation chat for scenario prediction — turn text, PDF, MD, or TXT into graph building, multi-agent simulation, reporting, and follow-up chat in one continuous workflow. Extracts actors/relationships into a knowledge graph, runs personas across simulated social surfaces over multiple rounds, generates a prediction report (turning points, risks, confidence signals), then lets you keep asking questions against the generated world. Use cases: campaign pressure testing, pricing reaction modeling, policy stress tests, market narrative simulation. Web app, no install',
    link: 'https://mirofish.homes',
    chatSetup: '# Web app — visit mirofish.homes\n# Start with a plain-language question\n# Optionally attach PDF, MD, or TXT as seed material\n# Workflow: seed → knowledge graph → agent simulation → prediction report → follow-up chat',
    codeSetup: '',
    tags: ['simulation','prediction','multi-agent','scenario','knowledge-graph','persona','narrative','market','policy','web-app'] },

  { id: 72, name: 'MiniCPM',               type: 'Git Repo', category: 'AI & LLM',
    desc: 'SOTA on-device LLMs by OpenBMB — small but powerful. MiniCPM5 (2B params) uses standard LlamaForCausalLM architecture, loads in any inference engine with no custom kernels or forks. Runs locally on phones, laptops, edge devices. Benchmarks rival much larger models. Free, open-source',
    link: 'https://github.com/OpenBMB/MiniCPM',
    chatSetup: '',
    codeSetup: 'git clone https://github.com/OpenBMB/MiniCPM\n# Load with any standard inference engine (llama.cpp, vLLM, transformers, Ollama)\n# Example with Ollama:\nollama run minicpm\n# Or with transformers:\n# pip install transformers && python -c "from transformers import AutoModelForCausalLM, AutoTokenizer; ..."',
    tags: ['on-device','small-model','llm','edge','local','2b','efficient','openBMB'] },

  { id: 73, name: 'PostHog MCP',           type: 'MCP', category: 'Engineering',
    desc: 'Official PostHog plugin + MCP server for Claude Code — query analytics, manage feature flags, investigate errors, run A/B experiments, all from Claude. Slash commands: /posthog:flags, /posthog:insights, /posthog:errors, /posthog:experiments. Connects to your real PostHog data',
    link: 'https://github.com/PostHog/posthog-for-claude',
    chatSetup: '# In Claude Code\n/mcp\n# Follow browser prompts to connect PostHog\n# Then use:\n/posthog:flags\n/posthog:insights\n/posthog:errors\n/posthog:experiments',
    codeSetup: '# Install as Claude Code plugin\n/plugin marketplace add PostHog/posthog-for-claude\n\n# Or add MCP directly\nclaude mcp add posthog -- npx -y @posthog/mcp-server\n\n# Skills collection\nnpx skills add PostHog/skills',
    tags: ['analytics','feature-flags','errors','experiments','posthog','product','data','mcp','official'] },

  { id: 74, name: 'OmniChar Studio',       type: 'Git Repo', category: 'AI & LLM',
    desc: 'AI character studio for portable identity — build multi-model consistent characters, train LoRAs, and generate on your own GPU. Free-form node canvas for building generative pipelines frame-by-frame. Inline Core engine does actual image/video generation via diffusion models (Z-Image Turbo + others) locally, plus closed models via fal.ai. GPL-3.0, free',
    link: 'https://github.com/omnichar/OmniChar',
    chatSetup: '',
    codeSetup: 'git clone https://github.com/omnichar/OmniChar\ncd OmniChar\n# Single repo: UI client + Inline Core Python engine, runs on one process/port\n# Follow README for setup — local generation + training costs nothing',
    tags: ['character','lora','training','identity','diffusion','generation','local','canvas','pipeline','gpu'] },

  { id: 75, name: 'openSEO 💳',            type: 'MCP', category: 'Marketing',
    desc: 'Open-source SEO + GEO skills for Claude on your real GSC/GA4/ads data. Free MCP connects to Search Console, Analytics, and ads. 8 MIT-licensed skills: keyword research, rank tracking, site audits, backlinks, competitor gaps, AI visibility. DataForSEO 💳 built in (pay per use). Also: every-app/open-seo is a full open-source Semrush/Ahrefs alternative',
    link: 'https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills',
    chatSetup: 'claude mcp add ryze --transport http https://connector.get-ryze.ai/mcp\n# Then use SEO skills directly in Claude Code\n# /seo:keywords, /seo:audit, /seo:competitors, /seo:backlinks',
    codeSetup: 'npx skills add Ryze-AI-Adgent/open-seo-mcp-skills\n\n# Full open-source SEO platform (Semrush/Ahrefs alternative):\ngit clone https://github.com/every-app/open-seo',
    tags: ['seo','geo','gsc','analytics','keywords','rank-tracking','audit','backlinks','competitor','dataseo'] },

  { id: 76, name: 'HeadlessX',             type: 'Git Repo', category: 'Dev Tools',
    desc: 'Self-hosted headless browser automation platform powered by Camoufox (Firefox) — 0% bot detection rates. MCP endpoint for Claude Code and other agents. Queue-backed jobs, web dashboard, protected API. MIT licensed alternative to Browserless. Agent skill pack for Cursor, Claude Code, Warp, Windsurf, OpenCode',
    link: 'https://github.com/unreasonablygood/headlessx',
    chatSetup: 'claude mcp add headlessx -- npx -y headlessx-mcp\n# Or connect via your self-hosted instance MCP endpoint',
    codeSetup: 'git clone https://github.com/unreasonablygood/headlessx\ncd headlessx\n# Follow README for Docker setup\n# Exposes MCP endpoint + web dashboard + REST API\n# npm install -g headlessx-cli for CLI',
    tags: ['headless','browser','camoufox','firefox','stealth','undetected','self-hosted','mcp','scraping','automation'] },

  { id: 77, name: 'turath-mcp',            type: 'MCP', category: 'Collections',
    desc: 'MCP server giving Claude access to 8,500+ classical Arabic and Islamic books from turath.io (a Nuqayah project). Search across tafsir, hadith, fiqh, usul. Full-text search, page-level reading, author biographies, book metadata. Free public API, 30-day offline cache. Works with Claude Desktop, Claude Web, ChatGPT, Cursor, VS Code',
    link: 'https://github.com/dihannahdi/turath',
    chatSetup: 'claude mcp add turath -- npx -y turath-mcp-server\n# Or via Streamable HTTP transport — see repo for hosted endpoint',
    codeSetup: 'npx -y turath-mcp-server\n# Or install globally:\nnpm install -g turath-mcp-server\n# Then add to Claude:\nclaude mcp add turath -- turath-mcp-server',
    tags: ['arabic','islamic','books','hadith','tafsir','fiqh','quran','classical','search','free','turath'] },

  { id: 78, name: 'brag',                  type: 'Skill', category: 'Dev Tools',
    desc: 'Claude Code skill by Latent Spaces — turns the project you just built into a short shareable launch video with one command. Music, motion, and share copy included. Reads your code, plans a brag concept, scripts and storyboards, hands a composition brief to Hyperframes, renders, and writes share copy. Tone flags: --tone chaotic, --tone polished. Format: --format vertical',
    link: 'https://github.com/latent-spaces/brag',
    chatSetup: '/plugin marketplace add latent-spaces/brag\n/plugin install brag@brag\n# Then in any project:\n/brag\n/brag --tone polished --format vertical',
    codeSetup: 'npx skills add https://github.com/latent-spaces/brag --skill brag',
    tags: ['launch','video','demo','share','hyperframes','motion','storytelling','marketing','branding'] },

  { id: 79, name: 'DeepSeek Harness',      type: 'Git Repo', category: 'Engineering',
    desc: 'DeepSeek\'s open-source MIT-licensed AI agent runtime — 207k+ GitHub stars in Aug 2026. Model-agnostic layer above the model: handles reasoning, tool use, memory, scheduling. Supports Claude, OpenAI, DeepSeek, Ollama, Bedrock, Google Vertex, Azure. Skill layer + MCP tool registry (all replaceable plugins). Claude Code and Codex fold in as ordinary plugins. Benchmarks published using Harness (Terminal Bench, DeepSWE)',
    link: 'https://github.com/deepseek-ai/deepseek-harness',
    chatSetup: '',
    codeSetup: 'git clone https://github.com/deepseek-ai/deepseek-harness\ncd deepseek-harness\n# Configure model adapter (Claude, OpenAI, Ollama, etc.)\n# Add MCP tool servers\n# Define skills as reusable agent behaviors\n# See .claude/skills for Claude integration',
    tags: ['agent-runtime','model-agnostic','orchestration','mcp','skills','memory','deepseek','open-source','200k-stars'] },

  { id: 80, name: 'Open Higgsfield',       type: 'Git Repo', category: 'Video Analysis',
    desc: 'Free, self-hosted open-source alternative to Higgsfield AI. Image + video generation from one prompt bar — 40+ text-to-video models, 60+ image-to-video models including Seedance, Kling, Wan, Flux, SDXL, Ideogram, Runway, Recraft. No subscription, no closed ecosystem. MIT licensed. Browser-based, no Node.js setup needed',
    link: 'https://github.com/thehiggsfieldai/OpenHiggsfield',
    chatSetup: '',
    codeSetup: '# Browser-based — no install needed\n# Visit the hosted version or self-host:\ngit clone https://github.com/thehiggsfieldai/OpenHiggsfield\n# Bring your own API keys for each model\n# Or use: github.com/Autom8AI/Open-Higgsfield-AI (Muapi gateway version)',
    tags: ['video','image','generation','seedance','kling','flux','sdxl','self-hosted','free','multi-model','open-source'] },

  { id: 81, name: 'jev-trade ⚠️',          type: 'Git Repo', category: 'AI & LLM',
    desc: '⚠️ Paper trading only — no broker connection, no real money. Market-data trading simulator powered by auditable Jev judgments. Freezes Jev\'s typed view of a stock before the outcome is known, applies deterministic risk + paper-trading rules, scores the result against simple baselines. A public experiment testing Jev decision quality on markets. Also: aowang-ai/jev-trade runs live on Hyperliquid (real trading, use with caution)',
    link: 'https://github.com/rikkooo/jev-trade',
    chatSetup: '',
    codeSetup: 'git clone https://github.com/rikkooo/jev-trade\n# Requires TYPESAFE_API_KEY for Jev\n# Paper trading simulator — no real orders placed\n# See README for setup and Evidence Lab docs',
    tags: ['trading','simulation','jev','typesafe','paper-trading','market-data','finance','experiment'] },

  { id: 82, name: 'TinyTTS',               type: 'Git Repo', category: 'AI & LLM',
    desc: 'Ultra-lightweight end-to-end text-to-speech model — 1.62M parameters, 3.4MB. Synthesizes ~5s of 44.1kHz natural speech in 92ms via ONNX (≈53× real-time on laptop CPU). No GPU needed. Runs fully local. Also: pschatzmann/TinyTTS is a pure C++ neural TTS for microcontrollers with no runtime dependencies',
    link: 'https://github.com/tronghieuit/tiny-tts',
    chatSetup: '',
    codeSetup: 'git clone https://github.com/tronghieuit/tiny-tts\n# ONNX runtime — pip install onnxruntime\n# Model: 3.4MB, runs on CPU\n# For microcontrollers: github.com/pschatzmann/TinyTTS (pure C++)',
    tags: ['tts','text-to-speech','local','onnx','lightweight','1.6M','cpu','edge','fast','offline'] },

  { id: 83, name: 'swarmLLM',              type: 'Git Repo', category: 'AI & LLM',
    desc: 'Peer-to-peer LLM inference across browser tabs — every device brings a slice, together they run the whole model. From-scratch WebGPU engine + WebRTC runtime split a 27B model over devices in a room. A 10KB activation vector passes between devices over direct WebRTC. Achieves 9 tok/s (16 tok/s with speculative decoding) on a GB10. Also: enapt/SwarmLLM is a decentralized P2P LLM network — single Rust binary, BitTorrent-inspired incentives, OpenAI-compatible API',
    link: 'https://github.com/jm00517/swarmllm',
    chatSetup: '',
    codeSetup: '# Browser-based — open the URL in Chrome on each device\ngit clone https://github.com/jm00517/swarmllm\n# All devices in same room join the swarm via WebRTC\n# Each holds a slice of the 27B model\n\n# Rust/API alternative:\ngit clone https://github.com/enapt/SwarmLLM',
    tags: ['p2p','distributed','webgpu','webrtc','inference','27b','browser','swarm','decentralized','local'] },

  { id: 84, name: 'Omarchy',               type: 'Git Repo', category: 'Dev Tools',
    desc: 'Beautiful, agentic Linux by DHH (creator of Rails, Hey, Basecamp). Omakase Linux desktop on Arch + Hyprland + Quickshell — keyboard-first workstation with system-wide themes, packaged updates, and integrated coding agents (Claude, Codex, Grok, OpenRouter, Hermes). Agents can automate tasks and reshape the system itself. Also: omarchy-web (browser-based OS) and OmarchyOS (Android mobile). Free, open-source',
    link: 'https://github.com/omacom/omarchy',
    chatSetup: '',
    codeSetup: '# Full install (Arch Linux required)\ngit clone https://github.com/omacom/omarchy\ncd omarchy && ./install.sh\n# Or see omarchy.org for guided setup\n\n# Web OS (runs in browser):\ngit clone https://github.com/wolferd-wolf/omarchy-web',
    tags: ['linux','arch','hyprland','desktop','keyboard-first','dhh','agentic','os','coding-agent','claude','self-hosted'] },

  { id: 63, name: 'shadcn/improve',        type: 'Skill', category: 'Engineering',
    desc: 'Read-only senior advisor skill by shadcn — surveys your codebase and generates prioritized, self-contained implementation plans. Finds bugs, security gaps, performance issues, test coverage holes, tech debt, migrations, and DX improvements. Never modifies code — only writes plans under plans/ or advisor-plans/ for cheaper models to execute. Can fan out with parallel read-only subagents per category. Use your best model to audit; hand off to cheaper models to fix. 23k+ installs',
    link: 'https://github.com/shadcn/improve',
    chatSetup: '',
    codeSetup: 'npx -y skills add shadcn/improve --agent claude-code',
    tags: ['audit','advisor','codebase','planning','security','performance','tech-debt','read-only','shadcn'] },

  { id: 61, name: 'GBrain',               type: 'MCP', category: 'Engineering',
    desc: 'Garry Tan\'s (YC president) opinionated agent brain. Runs as an MCP server — adds get_page, put_page, search, query, add_link, traverse_graph, sync_brain, file_upload + 22 more tools. On first run: 12-question onboarding generates a personalized SOUL.md and installs 70 of Garry\'s personal agent skills. Persistent, searchable knowledge brain for Claude Code. MIT licensed, free',
    link: 'https://github.com/garrytan/gbrain',
    chatSetup: '',
    codeSetup: '# Install gbrain\nnpm install -g gbrain\n\n# Add as MCP server to Claude Code\nclaude mcp add gbrain -- gbrain serve\n\n# Run onboarding (12 questions → SOUL.md + 70 skills)\ngbrain onboard',
    tags: ['agent','brain','memory','skills','soul','mcp','knowledge','yc','garrytan','onboarding'] },

  { id: 62, name: 'gstack',               type: 'Git Repo', category: 'Engineering',
    desc: 'Garry Tan\'s exact Claude Code setup — 23 opinionated tools that give Claude Code role personas: CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA. Each persona brings its own judgment and decision-making style. Companion to GBrain (#61). MIT licensed, free',
    link: 'https://github.com/garrytan/gstack',
    chatSetup: '',
    codeSetup: '# Clone and install\ngit clone https://github.com/garrytan/gstack\ncd gstack\n# Follow README to wire personas into Claude Code\n# Works alongside GBrain for full Garry Tan setup',
    tags: ['personas','ceo','designer','eng-manager','qa','roles','claude-code','yc','garrytan','tools'] },

  { id: 60, name: 'Screenpipe 💳',        type: 'MCP', category: 'Dev Tools',
    desc: '💳 Desktop app $400 one-time (CLI/MCP free). Records everything you see, say, and hear 24/7 — locally, privately. MCP server lets Claude query your full screen history in natural language. "Pipes" are scheduled AI agents triggered by your activity (Obsidian sync, todo extraction, idea tracker). YC S26',
    link: 'https://github.com/screenpipe/screenpipe',
    chatSetup: 'claude mcp add screenpipe -- npx -y screenpipe-mcp@latest\n# Then ask: "what did I see in the last hour?" or "summarise today\'s meetings"',
    codeSetup: '# Start recording (free CLI)\nnpx screenpipe record\n\n# Add MCP to Claude Code\nclaude mcp add screenpipe -- npx -y screenpipe-mcp@latest\n\n# Desktop app (paid, $400 one-time)\n# https://screenpi.pe/onboarding',
    tags: ['memory','screen-recording','audio','mcp','pipes','agents','local','private','productivity'] },

  { id: 87, name: 'Herdr',               type: 'Git Repo', category: 'Dev Tools',
    desc: 'Terminal multiplexer rebuilt for AI coding agents — one sidebar shows every agent (Claude Code, Codex, Pi, OpenCode, Cursor, Devin, Kimi, and more) with live state: blocked / working / done / idle. Each agent gets its own real PTY pane, sessions survive detach/SSH, and a local Unix socket API lets agents create workspaces, split panes, spawn helpers, and control each other. v0.9 adds remote machine support so agents on different machines appear in the same sidebar. YC F26, $6M seed, ~15k ⭐. Free, open-source (Rust)',
    link: 'https://github.com/ogulcancelik/herdr',
    chatSetup: '',
    codeSetup: '# macOS / Linux\nbrew install herdr\n# or\nmise use -g herdr\n# or\nnix run github:ogulcancelik/herdr\n\n# Windows\npowershell -ExecutionPolicy Bypass -c "irm https://herdr.dev/install.ps1 | iex"\n\n# Docs: https://herdr.dev/docs',
    tags: ['terminal','multiplexer','agents','claude-code','codex','tmux','pty','ssh','rust','yc','open-source','agent-control'] },

  { id: 88, name: 'dimensional-drawing',  type: 'Skill', category: 'Design & Animation',
    desc: 'Turns any UI component (repo file, Storybook story, URL, or screenshot) into a one-page, monochrome Apple-style technical spec drawing. Companion skill dimensional-drawing-motion animates the finished sheet into a ~10-second video via Claude Motion or headless Playwright + ffmpeg. MIT licensed, ~414 ⭐',
    link: 'https://github.com/enesozturk/dimensional-drawing',
    chatSetup: '',
    codeSetup: '# Claude Code\nnpx skills add enesozturk/dimensional-drawing\n\n# Or both skills at once\nnpx skills add enesozturk/dimensional-drawing enesozturk/dimensional-drawing-motion\n\n# Claude.ai / Desktop: zip the skills/ folder and upload under Settings → Capabilities → Skills',
    tags: ['design','apple','technical-drawing','spec','svg','animation','motion','monochrome','components','ui'] },

  { id: 89, name: 'Rive MCP',             type: 'MCP', category: 'Design & Animation',
    desc: 'Official Rive MCP server — connects Claude to the Rive editor to edit scenes, state machines, and animations in-editor. Also: community rive-mcp (ODU33104) is editor-free with 32 tools for creating, inspecting, rendering, and live-previewing .riv files from Claude Code without opening Rive at all',
    link: 'https://rive.app/docs/editor/ai/mcp',
    chatSetup: '# Official (in-editor)\n# Open Rive desktop app → enable MCP server (Early Access)\nclaude mcp add --transport http rive http://127.0.0.1:9791/mcp',
    codeSetup: '# Community (editor-free, 32 tools)\n/plugin marketplace add ODU33104/rive-mcp\n\n# Or official in-editor MCP:\n# Rive Desktop → Settings → MCP → Start server\nclaude mcp add --transport http rive http://127.0.0.1:9791/mcp',
    tags: ['rive','animation','state-machine','interactive','motion','mcp','official','community','riv'] },

  { id: 90, name: 'MagicPath 💳',          type: 'Git Repo', category: 'Design & Animation',
    desc: '💳 Freemium (Pro $29/mo). AI UI design tool on an infinite canvas — text prompt → high-quality UI screens + components. MagicPath 2.0 (May 2026) adds a multiplayer canvas where Claude Code, Codex, or Cursor agents build screens in parallel in real time. Exports production-ready React, TypeScript, and Tailwind CSS code. Also exports to Figma',
    link: 'https://www.magicpath.ai/',
    chatSetup: 'Web app — visit magicpath.ai\n# Prompt in plain language → AI generates screens\n# Connect Claude Code or Codex via the agent panel (MagicPath 2.0)',
    codeSetup: '# No local install — browser-based\n# Free tier available, Pro $29/mo\n# Agent integration: Claude Code / Codex drives the canvas via MagicPath 2.0 API',
    tags: ['ui','design','canvas','multiplayer','agents','react','tailwind','figma','code-export','ai-design','paid'] },

  { id: 91, name: 'ribbon',               type: 'Git Repo', category: 'Cowork',
    desc: 'Slim status band above the Claude Code prompt — shows how much of your 7-day and 5-hour usage remains, reset times, and whether your prompt cache is warm or cold, plus what your next message will cost. Install once, applies to all projects. MIT licensed',
    link: 'https://github.com/robonuggets/ribbon',
    chatSetup: '',
    codeSetup: '/plugin install ribbon --marketplace robonuggets/ribbon\n# Start a new Claude Code session to see the band',
    tags: ['usage','tokens','cache','cost','status','claude-code','plugin','utility'] },

  { id: 92, name: 'DigUp',               type: 'Git Repo', category: 'Utility',
    desc: 'On-device semantic file search for your computer — search photos, PDFs, docs, recordings, videos, and code by what\'s in them, not just the filename. Built on Google DeepMind\'s EmbeddingGemma 2. Runs fully locally on Mac (stable), Windows and Linux (beta). MIT licensed, ~5.3k ⭐. MCP server integration is a planned feature (issue #160)',
    link: 'https://github.com/ARahim3/DigUp',
    chatSetup: '',
    codeSetup: '# Download from GitHub releases\ngit clone https://github.com/ARahim3/DigUp\n# See README for Mac/Windows/Linux install\n# macOS: Full release · Windows/Linux: Beta',
    tags: ['search','semantic','on-device','local','files','pdf','photos','video','gemma','embedding'] },

  { id: 93, name: 'logo-design-skill',   type: 'Skill', category: 'Design & Animation',
    desc: 'Comprehensive logo design skill — brief → research → concepts → checkpoint (user picks direction) → production-ready SVG files + brand guidelines. Includes a 1,400+ classified SVG reference library to study construction and avoid look-alikes, plus dependency-free Python tools for SVG auditing, test sheets, presentation boards, and favicon/app-icon export. By Kaan Kızıltuğ. MIT licensed, ~5k ⭐',
    link: 'https://github.com/kaankiziltug/logo-design-skill',
    chatSetup: '',
    codeSetup: '# Claude Code plugin\n/plugin marketplace add kaankiziltug/logo-design-skill\n\n# Or via skills CLI\nnpx skills add kaankiziltug/logo-design-skill\n\n# Lite version (no SVG library, smaller zip) also available in releases',
    tags: ['logo','branding','svg','identity','design','reference','icons','favicon','python','audit'] },

  { id: 94, name: 'simslim',             type: 'Git Repo', category: 'Dev Tools',
    desc: 'Run more iOS simulators on one Mac by disabling background daemons a simulator doesn\'t need. A fresh iOS simulator boots ~180 background services — simslim kills the ones it doesn\'t use, cutting each simulator\'s memory ~4×. Built by MobAI for running fleets of AI-agent-driven simulators (each one driven by its own Claude Code). Go, MIT licensed, ~3.2k ⭐',
    link: 'https://github.com/MobAI-App/simslim',
    chatSetup: '',
    codeSetup: '# Homebrew (recommended)\nbrew install mobai-app/tap/simslim\n\n# Or Go install\ngo install github.com/mobai-app/simslim@latest\n\n# Requires: Xcode + iOS Simulator runtime ≥ 18.5\n# Persistent slimming needs the runtime installed, not just downloaded',
    tags: ['ios','simulator','xcode','memory','agents','testing','automation','mobai','claude-code','go'] },

  { id: 95, name: 'Ant Design CLI/MCP',  type: 'MCP', category: 'Design & Animation',
    desc: 'Official Ant Design MCP server + agent skill — 8 tools for component props, docs, demos, design tokens, changelogs, linting, and migration guides. Works offline with bundled metadata. Claude Code is a supported client. Companion skill teaches agents when to use each command. Part of @ant-design/cli ≥ v6.3.5',
    link: 'https://github.com/ant-design/ant-design-cli',
    chatSetup: 'antd setup --client claude\n# Configures MCP or skill mode for Claude automatically',
    codeSetup: '# Install CLI\nnpm install -g @ant-design/cli\n\n# Start MCP server\nantd mcp\n\n# Or install as skill\nnpx skills add ant-design/ant-design-cli\n\n# Query a component\nantd info Button',
    tags: ['ant-design','antd','components','mcp','skill','docs','tokens','linting','migration','react','offline','official'] },

  { id: 96, name: 'UI Builder',           type: 'Git Repo', category: 'Design & Animation',
    desc: 'Open-source Figma-style drag & drop visual editor that drops into your React app — uses your existing components (shadcn/ui, Chakra UI, or any library), lets non-developers build pages and dashboards, and saves layouts as plain JSON for easy versioning. Stack: React + shadcn/ui + Tailwind + Zustand + Zod. Now part of the BTST full-stack toolkit',
    link: 'https://github.com/olliethedev/ui-builder',
    chatSetup: '',
    codeSetup: 'npm install ui-builder\n# Or follow the quick-start guide:\n# https://www.uibuilder.app/docs/quick-start\n\n# Integrates with Next.js, React Router, TanStack Start',
    tags: ['drag-drop','visual-editor','react','shadcn','tailwind','json','cms','no-code','components','open-source'] },

  { id: 97, name: 'FluidVoice',           type: 'Git Repo', category: 'Utility',
    desc: 'Fastest macOS on-device dictation app — Parakeet, Nemotron, or Whisper models run fully locally. No cloud, no account, no word limits. Writes to any app. Free, GPL v3, ~12.5k ⭐. Windows + iOS TestFlight available. Android + Linux on waitlist. Useful for voice-to-Claude-Code workflows',
    link: 'https://github.com/altic-dev/FluidVoice',
    chatSetup: '',
    codeSetup: '# macOS (Homebrew)\nbrew install --cask fluidvoice\n\n# Or download DMG from GitHub releases\n# Requires macOS 15+ / Apple Silicon\n# Windows: see GitHub releases · iOS: TestFlight',
    tags: ['voice','dictation','stt','whisper','parakeet','local','offline','macos','no-cloud','free','gpl'] },
]
// ───────────────────────────────────────────────────────────────────────────

const TYPE_META = {
  'Skill':    { icon: '⚡', light: 'bg-violet-100 text-violet-700', dark: 'bg-violet-900 text-violet-300' },
  'MCP':      { icon: '🔌', light: 'bg-emerald-100 text-emerald-700', dark: 'bg-emerald-900 text-emerald-300' },
  'Git Repo': { icon: '🗃️', light: 'bg-amber-100 text-amber-700', dark: 'bg-amber-900 text-amber-300' },
}

const CAT_COLORS_LIGHT = {
  dot: ['bg-violet-400','bg-blue-400','bg-emerald-400','bg-amber-400','bg-pink-400','bg-cyan-400','bg-orange-400','bg-indigo-400','bg-teal-400','bg-red-400','bg-gray-400'],
  badge: ['bg-violet-100 text-violet-700','bg-blue-100 text-blue-700','bg-emerald-100 text-emerald-700','bg-amber-100 text-amber-700','bg-pink-100 text-pink-700','bg-cyan-100 text-cyan-700','bg-orange-100 text-orange-700','bg-indigo-100 text-indigo-700','bg-teal-100 text-teal-700','bg-red-100 text-red-700','bg-gray-100 text-gray-700'],
}
const CAT_COLORS_DARK = {
  dot: ['bg-violet-500','bg-blue-500','bg-emerald-500','bg-amber-500','bg-pink-500','bg-cyan-500','bg-orange-500','bg-indigo-500','bg-teal-500','bg-red-500','bg-gray-500'],
  badge: ['bg-violet-900 text-violet-300','bg-blue-900 text-blue-300','bg-emerald-900 text-emerald-300','bg-amber-900 text-amber-300','bg-pink-900 text-pink-300','bg-cyan-900 text-cyan-300','bg-orange-900 text-orange-300','bg-indigo-900 text-indigo-300','bg-teal-900 text-teal-300','bg-red-900 text-red-300','bg-gray-800 text-gray-300'],
}

function useCatIndex(categories, cat) {
  return categories.indexOf(cat) % 11
}

function SetupBlock({ label, icon: Icon, content, dark }) {
  if (!content) return null
  return (
    <div className={`mt-2 rounded-xl p-3 ${dark ? 'bg-gray-800' : 'bg-white bg-opacity-70'}`}>
      <div className="flex items-center gap-1.5 mb-1.5">
        <Icon size={13} className={dark ? 'text-gray-400' : 'text-gray-500'} />
        <span className={`text-xs font-semibold uppercase tracking-wide ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{label}</span>
      </div>
      <pre className={`text-xs whitespace-pre-wrap font-mono leading-relaxed ${dark ? 'text-gray-200' : 'text-gray-700'}`}>{content}</pre>
    </div>
  )
}

function ToolCard({ tool, categories, dark, onDelete }) {
  const [open, setOpen] = useState(false)
  const idx = useCatIndex(categories, tool.category)
  const dots = dark ? CAT_COLORS_DARK.dot : CAT_COLORS_LIGHT.dot
  const badges = dark ? CAT_COLORS_DARK.badge : CAT_COLORS_LIGHT.badge
  const typeMeta = TYPE_META[tool.type] || TYPE_META['MCP']
  const typeBadge = dark ? typeMeta.dark : typeMeta.light
  const cardBg = dark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
  const nameCl = dark ? 'text-gray-100' : 'text-gray-900'
  const descCl = dark ? 'text-gray-400' : 'text-gray-500'
  const tagCl = dark ? 'bg-gray-700 text-gray-400 border-gray-600' : 'bg-gray-50 text-gray-400 border-gray-200'

  return (
    <div className={`rounded-2xl border ${cardBg} p-4 mb-3`}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start gap-2.5 flex-1 min-w-0">
          <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5 ${dots[idx]}`} />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`font-semibold text-base ${nameCl}`}>{tool.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badges[idx]}`}>{tool.category}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${typeBadge}`}>{typeMeta.icon} {tool.type}</span>
            </div>
            {!open && tool.desc && <p className={`text-sm mt-0.5 line-clamp-1 ${descCl}`}>{tool.desc}</p>}
          </div>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <button onClick={() => onDelete(tool.id)} className={`p-1.5 rounded-lg transition-colors ${dark ? 'text-gray-600 hover:text-red-400 hover:bg-gray-700' : 'text-gray-300 hover:text-red-400 hover:bg-red-50'}`}>
            <Trash2 size={14} />
          </button>
          <button onClick={() => setOpen(o => !o)} className={`p-1.5 rounded-lg transition-colors ${dark ? 'text-gray-500 hover:bg-gray-700' : 'text-gray-400 hover:bg-gray-100'}`}>
            {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className={`mt-3 pl-5 space-y-1 border-l-2 ${dark ? 'border-gray-700' : 'border-gray-100'}`}>
          {tool.desc && <p className={`text-sm ${descCl}`}>{tool.desc}</p>}
          {tool.link && (
            <a className="flex items-center gap-1.5 text-sm text-blue-400 break-all mt-1">
              <Link size={13} className="flex-shrink-0" />
              <span className="underline underline-offset-2">{tool.link}</span>
            </a>
          )}
          <SetupBlock label="Claude Chat setup" icon={MessageSquare} content={tool.chatSetup} dark={dark} />
          <SetupBlock label="Claude Code setup" icon={Terminal} content={tool.codeSetup} dark={dark} />
          {tool.tags && tool.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-1">
              {tool.tags.map(tag => (
                <span key={tag} className={`text-xs px-2 py-0.5 rounded-full border ${tagCl}`}>#{tag}</span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function AddToolModal({ categories, dark, onAdd, onClose }) {
  const [form, setForm] = useState({ name: '', type: 'MCP', category: '', desc: '', link: '', chatSetup: '', codeSetup: '', tags: '' })
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }))

  function submit() {
    if (!form.name.trim() || !form.category.trim()) return
    onAdd({
      name: form.name.trim(),
      type: form.type,
      category: form.category.trim(),
      desc: form.desc.trim(),
      link: form.link.trim(),
      chatSetup: form.chatSetup.trim(),
      codeSetup: form.codeSetup.trim(),
      tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
    })
    onClose()
  }

  const overlayBg = 'bg-black bg-opacity-60'
  const modalBg = dark ? 'bg-gray-900' : 'bg-white'
  const inputCl = `w-full rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-indigo-400 ${dark ? 'bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500' : 'border-gray-200 text-gray-900 placeholder-gray-400'} border`
  const labelCl = `text-xs font-semibold uppercase tracking-wide mb-1 ${dark ? 'text-gray-400' : 'text-gray-500'}`
  const headCl = dark ? 'text-gray-100' : 'text-gray-900'

  return (
    <div className={`fixed inset-0 ${overlayBg} flex items-end z-50`}>
      <div className={`${modalBg} w-full rounded-t-2xl p-5 pb-8 max-h-screen overflow-y-auto`}>
        <div className="flex justify-between items-center mb-5">
          <span className={`text-lg font-bold ${headCl}`}>Add Tool</span>
          <button onClick={onClose} className={`p-2 rounded-full ${dark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}><X size={18} /></button>
        </div>
        <div className="space-y-4">
          <div>
            <p className={labelCl}>Name *</p>
            <input className={inputCl} placeholder="e.g. Firecrawl, n8n, Linear MCP…" value={form.name} onChange={e => set('name', e.target.value)} />
          </div>

          <div>
            <p className={labelCl}>Type</p>
            <div className="flex gap-2">
              {['Skill', 'MCP', 'Git Repo'].map(t => (
                <button key={t} onClick={() => set('type', t)}
                  className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-colors ${form.type === t ? 'bg-indigo-600 text-white' : dark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                  {TYPE_META[t].icon} {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className={labelCl}>Category *</p>
            <input className={inputCl} placeholder="e.g. Web Scraping, AI Tools, Dev…" value={form.category} onChange={e => set('category', e.target.value)} list="cats-list" />
            <datalist id="cats-list">{categories.map(c => <option key={c} value={c} />)}</datalist>
          </div>

          <div>
            <p className={labelCl}>Description</p>
            <textarea className={`${inputCl} resize-none`} placeholder="What does it do?" rows={2} value={form.desc} onChange={e => set('desc', e.target.value)} />
          </div>

          <div>
            <p className={labelCl}>Link / URL</p>
            <input className={inputCl} placeholder="https://github.com/…" value={form.link} onChange={e => set('link', e.target.value)} />
          </div>

          <div>
            <p className={labelCl}>Claude Chat setup</p>
            <textarea className={`${inputCl} resize-none font-mono text-sm`} placeholder="Steps or config to add in Claude.ai…" rows={3} value={form.chatSetup} onChange={e => set('chatSetup', e.target.value)} />
          </div>

          <div>
            <p className={labelCl}>Claude Code setup</p>
            <textarea className={`${inputCl} resize-none font-mono text-sm`} placeholder="npx / config snippet for Claude Code…" rows={3} value={form.codeSetup} onChange={e => set('codeSetup', e.target.value)} />
          </div>

          <div>
            <p className={labelCl}>Tags (comma-separated)</p>
            <input className={inputCl} placeholder="scraping, ai, automation…" value={form.tags} onChange={e => set('tags', e.target.value)} />
          </div>

          <button onClick={submit} className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-base mt-2">
            Add Tool
          </button>
        </div>
      </div>
    </div>
  )
}

export default function MyToolsDashboard() {
  const [tools, setTools] = useState(INITIAL_TOOLS)
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('All')
  const [dark, setDark] = useState(true)
  const [showAdd, setShowAdd] = useState(false)
  const [nextId, setNextId] = useState(100)

  const allCategories = useMemo(() => [...new Set(tools.map(t => t.category))].sort(), [tools])

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return tools.filter(t => {
      const matchType = typeFilter === 'All' || t.type === typeFilter
      const matchSearch = !q ||
        t.name.toLowerCase().includes(q) ||
        (t.desc || '').toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        (t.tags || []).some(tag => tag.includes(q))
      return matchType && matchSearch
    })
  }, [tools, search, typeFilter])

  const grouped = useMemo(() => {
    const map = {}
    filtered.forEach(t => {
      if (!map[t.category]) map[t.category] = []
      map[t.category].push(t)
    })
    return map
  }, [filtered])

  function addTool(data) {
    setTools(prev => [...prev, { id: nextId, ...data }])
    setNextId(n => n + 1)
  }

  function deleteTool(id) {
    setTools(prev => prev.filter(t => t.id !== id))
  }

  const counts = { All: filtered.length, Skill: filtered.filter(t => t.type === 'Skill').length, MCP: filtered.filter(t => t.type === 'MCP').length, 'Git Repo': filtered.filter(t => t.type === 'Git Repo').length }

  // theme classes
  const bg = dark ? 'bg-gray-950 min-h-screen' : 'bg-gray-50 min-h-screen'
  const headerGrad = dark ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-indigo-600 to-indigo-800'
  const titleCl = dark ? 'text-gray-100' : 'text-white'
  const subtitleCl = dark ? 'text-gray-500' : 'text-indigo-200'
  const searchBg = dark ? 'bg-gray-800 border border-gray-700' : 'bg-white bg-opacity-15'
  const searchText = dark ? 'text-gray-200 placeholder-gray-600' : 'text-white placeholder-indigo-300'
  const tabBar = dark ? 'bg-gray-900 border-b border-gray-800 sticky top-0 z-10' : 'bg-white border-b border-gray-100 sticky top-0 z-10'
  const tabActive = 'bg-indigo-600 text-white'
  const tabInactive = dark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'
  const catLabelIdx = (cat) => allCategories.indexOf(cat) % 11
  const catBadges = dark ? CAT_COLORS_DARK.badge : CAT_COLORS_LIGHT.badge
  const sectionCountCl = dark ? 'text-gray-600' : 'text-gray-400'
  const emptyIconCl = dark ? 'text-gray-700' : 'text-gray-300'
  const emptyTextCl = dark ? 'text-gray-500' : 'text-gray-400'

  return (
    <div className={bg}>
      {/* Header */}
      <div className={`${headerGrad} px-4 pt-10 pb-5`}>
        <div className="flex justify-between items-start mb-1">
          <h1 className={`text-2xl font-bold ${titleCl}`}>My Tools</h1>
          <button onClick={() => setDark(d => !d)}
            className={`p-2.5 rounded-xl transition-colors ${dark ? 'bg-gray-700 text-yellow-400' : 'bg-white bg-opacity-20 text-white'}`}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        <p className={`text-sm mb-5 ${subtitleCl}`}>
          {tools.length} tool{tools.length !== 1 ? 's' : ''} · {tools.filter(t=>t.type==='Skill').length} skills · {tools.filter(t=>t.type==='MCP').length} MCPs · {tools.filter(t=>t.type==='Git Repo').length} repos
        </p>
        <div className={`flex items-center gap-3 rounded-2xl px-4 py-3 ${searchBg}`}>
          <Search size={18} className={subtitleCl} />
          <input
            className={`bg-transparent text-base flex-1 focus:outline-none ${searchText}`}
            placeholder="Search name, tag, category…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && <button onClick={() => setSearch('')}><X size={16} className={subtitleCl} /></button>}
        </div>
      </div>

      {/* Filter tabs */}
      <div className={`flex gap-2 px-4 py-3 ${tabBar}`}>
        {['All', 'Skill', 'MCP', 'Git Repo'].map(f => (
          <button key={f} onClick={() => setTypeFilter(f)}
            className={`flex-1 py-2.5 rounded-xl text-xs font-semibold transition-colors ${typeFilter === f ? tabActive : tabInactive}`}>
            {f === 'Skill' ? '⚡' : f === 'MCP' ? '🔌' : f === 'Git Repo' ? '🗃️' : ''}
            {' '}{f === 'Git Repo' ? 'Repos' : f}
            {' '}<span className="opacity-60">({counts[f]})</span>
          </button>
        ))}
      </div>

      {/* Tool list */}
      <div className="px-4 py-4 pb-28">
        {tools.length === 0 ? (
          <div className="text-center py-20">
            <div className={`text-5xl mb-4`}>🧰</div>
            <p className={`text-base font-semibold mb-1 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>No tools yet</p>
            <p className={`text-sm ${emptyTextCl}`}>Tap + to add your first tool</p>
          </div>
        ) : Object.keys(grouped).length === 0 ? (
          <div className="text-center py-16">
            <Search size={36} className={`mx-auto mb-3 ${emptyIconCl}`} />
            <p className={`text-base ${emptyTextCl}`}>No results for "{search}"</p>
          </div>
        ) : (
          Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b)).map(([cat, items]) => (
            <div key={cat} className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${catBadges[catLabelIdx(cat)]}`}>{cat}</span>
                <span className={`text-xs ${sectionCountCl}`}>{items.length}</span>
              </div>
              {items.map(tool => (
                <ToolCard key={tool.id} tool={tool} categories={allCategories} dark={dark} onDelete={deleteTool} />
              ))}
            </div>
          ))
        )}
      </div>

      {/* FAB */}
      <div className="fixed bottom-6 right-4 z-20">
        <button onClick={() => setShowAdd(true)}
          className="flex items-center gap-2 bg-indigo-600 text-white pl-4 pr-5 py-4 rounded-2xl shadow-xl font-semibold text-base">
          <Plus size={20} /> Add Tool
        </button>
      </div>

      {showAdd && <AddToolModal categories={allCategories} dark={dark} onAdd={addTool} onClose={() => setShowAdd(false)} />}
    </div>
  )
}
