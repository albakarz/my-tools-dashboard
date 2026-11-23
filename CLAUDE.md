# My Tools Dashboard — guide for AI agents

Jack's curated list of AI tools (Claude skills ⚡, MCP servers 🔌, Git repos 🗃️). Repo: `git@github.com:albakarz/my-tools-dashboard.git`, branch `main`.

## Files

| File | Role | Edit by hand? |
|---|---|---|
| `tools.json` | **Source of truth** — every tool, one object each | ✅ yes |
| `usecases.json` | "I want to…" goals → tool ids (feeds the README use-case index) | ✅ yes |
| `scripts/tools.mjs` | Build / search / validate script (Node 18+, no deps) | only to change behaviour |
| `MyToolsDashboard.jsx` | Vewr app (React 18 + Tailwind + lucide-react). The `INITIAL_TOOLS` array is **generated** | ❌ UI code only, never the array |
| `README.md` | **Generated** — use-case index, quick table, details by category | ❌ never |

## Find something fast

```bash
node scripts/tools.mjs find launch video     # all words must match name/desc/tags/link/category
node scripts/tools.mjs dup github.com/owner/repo   # is it already in the list?
```
Or read `README.md` → "Use-case index" first; it answers most "which tool does X" questions in one line.

## Tool schema (`tools.json`)

```json
{ "id": 142, "name": "Name", "type": "Skill|MCP|Git Repo", "category": "<one of the list below>",
  "desc": "One-two sentences: what it does + why it's notable. Star count if known.",
  "link": "https://…", "chatSetup": "how to install in Claude Code chat (or \"\")",
  "codeSetup": "shell install / clone command", "tags": ["lowercase","kebab-case"] }
```

Categories (must match exactly): AI & LLM · Design & Animation · Video Analysis (video generation/editing/analysis) · Marketing · Engineering · Dev Tools · Cowork · Utility · Security · Infrastructure · Collections · Writing & Quality.

## Rules

- **Verify before adding** — fetch the link and confirm the tool is real and does what it claims. Can't verify → don't add, tell Jack.
- **No duplicates** — run `dup` with the URL and the name first. Skip duplicates silently.
- **Flags:** paid / subscription / SaaS → append ` 💳` to `name` and start `desc` with `💳 …`. Grey-area (ToS), broken or risky → ` ⚠️` in name and `desc` starts with `⚠️ …`.
- **Tags:** lowercase kebab-case. Reuse existing tags (`video`, `ads`, `animation`, `agent`, `skill`, `mcp`, `local`, `self-hosted`, `free`, `paid`, `macos`, `ios`…). The build script auto-merges common synonyms (see `TAG_ALIASES`).
- **Use cases:** if the new tool fits a goal in `usecases.json`, add its id there; add a new goal if it opens a new one.

## Add a tool — full workflow

1. `node scripts/tools.mjs dup <url>` → must say "No duplicate found."
2. `node scripts/tools.mjs next-id` → use that id.
3. Append the object to `tools.json` (and the id to `usecases.json` if relevant).
4. `node scripts/tools.mjs build` → validates, normalises tags, regenerates `MyToolsDashboard.jsx` + `README.md`. Fix any ✗ errors.
5. Commit and push **every time** (git over SSH only works from the Mac shell, not the Linux sandbox):
   ```bash
   cd "/Users/najeb.albakar/AI/My Tools" && git add -A && git commit -m "Add #142: Name" && git push
   ```

## Vewr constraints (for UI edits to the JSX)

Self-contained single file; only `react`, `lucide-react`, Tailwind core classes. No `fetch`, `window`, `document`, `localStorage`. All state in `useState`.
