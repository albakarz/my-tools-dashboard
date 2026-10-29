# My Tools Dashboard

86 AI tools — Skills ⚡, MCPs 🔌, and Git Repos 🗃️ — curated for Claude Code and Cowork workflows.  
💳 = paid / subscription required · ⚠️ = grey-area or broken, use with caution

---

## AI & LLM

- **LLM Council** ⚡ Skill  
  Multi-LLM consensus — routes queries across models and synthesises a council answer  
  🔗 https://github.com/aiwithremy/claude-skills-llm-council  
  **Setup:** `npx skills add aiwithremy/claude-skills-llm-council`  
  `#llm #ai #council #reasoning`

- **Context Engineering** ⚡ Skill  
  Better agent context management — structuring, pruning, and injecting context  
  🔗 https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering  
  **Setup:** `npx skills add muratcankoylan/Agent-Skills-for-Context-Engineering`  
  `#context #agent #engineering #prompt`

- **Superpowers** ⚡ Skill  
  Complete agentic dev methodology — spec → plan → subagent-driven TDD. Works across Claude Code, Cursor, Codex, and 10+ agents. 246k ⭐  
  🔗 https://github.com/obra/superpowers  
  **Setup:** `/plugin install superpowers@claude-plugins-official`  
  `#methodology #tdd #subagent #planning #workflow`

- **G-stack** ⚡ Skill  
  Garry Tan's (YC) exact Claude Code setup — 23 opinionated skills covering CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA roles  
  🔗 https://github.com/garrytan/gstack  
  **Setup:** `npx skills add garrytan/gstack`  
  `#yc #workflow #roles #engineering #setup`

- **Karpathy Skills** ⚡ Skill  
  CLAUDE.md skill derived from Andrej Karpathy's observations on LLM coding pitfalls — don't assume, simplify, state assumptions, goal-driven execution  
  🔗 https://github.com/multica-ai/andrej-karpathy-skills  
  **Setup:** `npx skills add multica-ai/andrej-karpathy-skills`  
  `#karpathy #guidelines #llm #pitfalls #best-practice`

- **Laya** 🗃️ Git Repo  
  Free, open-source, Jev-compatible System-1 decision model by Convai Innovations — runs locally via Node.js + ONNX Runtime, no Python, no API key. Same request/response shape as TypeSafe Jev API. ~140ms on Apple Silicon, ~1.7GB model weights  
  🔗 https://github.com/receptron/laya  
  **Setup:** `npm install @receptron/laya`  
  `#system-one #decision-model #onnx #local #free #jev-compatible #choice #score #noul`

- **MiniCPM** 🗃️ Git Repo  
  SOTA on-device LLMs by OpenBMB — small but powerful. MiniCPM5 (2B params) uses standard LlamaForCausalLM architecture, loads in any inference engine with no custom kernels. Runs locally on phones, laptops, edge devices  
  🔗 https://github.com/OpenBMB/MiniCPM  
  **Setup:** `ollama run minicpm`  
  `#on-device #small-model #llm #edge #local #2b #efficient`

- **OmniChar Studio** 🗃️ Git Repo  
  AI character studio for portable identity — build multi-model consistent characters, train LoRAs, and generate on your own GPU. Free-form node canvas for building generative pipelines frame-by-frame. GPL-3.0, free  
  🔗 https://github.com/omnichar/OmniChar  
  **Setup:** `git clone https://github.com/omnichar/OmniChar && cd OmniChar` (see README)  
  `#character #lora #training #identity #diffusion #generation #local #canvas #pipeline #gpu`

- **jev-trade ⚠️** 🗃️ Git Repo  
  ⚠️ Paper trading only — no broker connection, no real money. Market-data trading simulator powered by auditable Jev judgments. A public experiment testing Jev decision quality on markets  
  🔗 https://github.com/rikkooo/jev-trade  
  **Setup:** `git clone https://github.com/rikkooo/jev-trade` (requires TYPESAFE_API_KEY)  
  `#trading #simulation #jev #typesafe #paper-trading #market-data #finance #experiment`

- **TinyTTS** 🗃️ Git Repo  
  Ultra-lightweight end-to-end TTS model — 1.62M parameters, 3.4MB. Synthesizes ~5s of 44.1kHz natural speech in 92ms via ONNX (≈53× real-time on laptop CPU). No GPU needed. Runs fully local  
  🔗 https://github.com/tronghieuit/tiny-tts  
  **Setup:** `git clone https://github.com/tronghieuit/tiny-tts` + `pip install onnxruntime`  
  `#tts #text-to-speech #local #onnx #lightweight #cpu #edge #fast #offline`

- **swarmLLM** 🗃️ Git Repo  
  Peer-to-peer LLM inference across browser tabs — every device brings a slice, together they run the whole model. From-scratch WebGPU engine + WebRTC runtime splits a 27B model over devices in a room. Achieves 9 tok/s (16 tok/s with speculative decoding)  
  🔗 https://github.com/jm00517/swarmllm  
  **Setup:** Open URL in Chrome on each device; each holds a slice of the 27B model  
  `#p2p #distributed #webgpu #webrtc #inference #27b #browser #swarm #decentralized`

- **Kev** 🗃️ Git Repo  
  Open-source Jev-inspired decision model by Jared Palmer — LoRA adapter + small readout head on Qwen2.5-0.5B. Reads a document once and answers many typed questions in parallel in one forward pass. ~160ms on Apple M5. Apache-2.0, free, runs fully local. Alternative to Laya  
  🔗 https://github.com/jaredpalmer/kev  
  **Setup:** `git clone https://github.com/jaredpalmer/kev.git && cd kev && uv sync --extra serve`  
  `#decision-model #jev-compatible #lora #qwen #local #free #choice #noul #score #apache2`

- **MiroFish** ⚡ Skill  
  AI simulation chat for scenario prediction — turn text, PDF, MD, or TXT into graph building, multi-agent simulation, reporting, and follow-up chat. Use cases: campaign pressure testing, pricing reaction modeling, policy stress tests, market narrative simulation. Web app, no install  
  🔗 https://mirofish.homes  
  **Chat Setup:** Visit mirofish.homes → attach seed material → run simulation  
  `#simulation #prediction #multi-agent #scenario #knowledge-graph #persona #narrative #market`

---

## Design & Animation

- **UI/UX Pro Max** ⚡ Skill  
  Expert-level UI/UX design skill with creative direction capabilities  
  🔗 https://ui-ux-pro-max-skill.nextlevelbuilder.io  
  **Setup:** `npx claude-code-templates@latest --skill creative-design/ui-ux-pro-max`  
  `#ui #ux #design #creative`

- **Emil Kowalski** ⚡ Skill  
  Design-focused skill by Emil Kowalski — motion, polish, and interaction detail  
  🔗 https://emilkowal.ski/skill  
  **Setup:** `npx skills add emilkowalski/skill`  
  `#design #motion #interaction #polish`

- **Taste Skill** ⚡ Skill  
  Adds aesthetic taste and visual judgment to Claude's output  
  🔗 https://github.com/Leonxlnx/taste-skill  
  **Setup:** `npx skills add https://github.com/Leonxlnx/taste-skill`  
  `#taste #aesthetics #design`

- **AntV Infographic** ⚡ Skill  
  AntV-powered infographic and data visualisation generation  
  🔗 https://github.com/antvis/Infographic  
  **Setup:** `/plugin marketplace add https://github.com/antvis/Infographic.git`  
  `#infographic #dataviz #antv #charts`

- **Graphify** ⚡ Skill  
  Generate charts and graphs directly from Claude output  
  🔗 https://github.com/safishamsi/graphify  
  **Setup:** `pip install graphifyy && graphify install`  
  `#graphs #charts #visualisation`

- **Ponytail** ⚡ Skill  
  Tailwind-focused UI component skill for building polished interfaces  
  🔗 https://github.com/DietrichGebert/ponytail  
  **Setup:** `npx skills add DietrichGebert/ponytail`  
  `#tailwind #ui #components`

- **GSAP Skills (official)** ⚡ Skill  
  Official GreenSock GSAP animation skill — timelines, ScrollTrigger, and more  
  🔗 https://github.com/greensock/gsap-skills  
  **Setup:** `/plugin marketplace add greensock/gsap-skills`  
  `#gsap #animation #greensock #scroll`

- **Spline 3D Integration** ⚡ Skill  
  3D design integration via Spline — install through mcpmarket  
  🔗 https://mcpmarket.com/tools/skills/spline-3d-integration  
  **Setup:** Visit mcpmarket.com/tools/skills/spline-3d-integration  
  `#spline #3d #design`

- **Impeccable v4.0** ⚡ Skill  
  v4.0 ↑ Design language skill — auto-detects job type (greenfield / redesign / refinement), generates 7 direction options, and gives each job the right amount of creative freedom. Redesigns replace, not polish  
  🔗 https://github.com/pbakaus/impeccable  
  **Setup:** `npx impeccable skills install`  
  `#design #ui #redesign #greenfield #directions #quality #frontend`

- **Front-end Design** ⚡ Skill  
  Official Anthropic front-end design skill — UI/component design, styling, and layout guidance  
  🔗 https://github.com/anthropics/skills/tree/main/skills/frontend-design  
  **Setup:** `/plugin marketplace add anthropics/skills && /plugin install example-skills@anthropic-agent-skills`  
  `#frontend #design #ui #components #css #official`

- **better-ui** ⚡ Skill  
  UI polish principles — concentric border radius, optical alignment, layered shadows, interruptible animations, stagger/enter/exit transitions, contextual icon animations, scale-on-press (0.96), image outlines, 44px hit areas. Outputs before/after review tables  
  🔗 https://github.com/jakubkrehel/skills/tree/main/skills/better-ui  
  **Setup:** `npx skills add jakubkrehel/skills`  
  `#ui #polish #animations #shadows #border-radius #micro-interactions #hover #design`

- **better-typography** ⚡ Skill  
  Web typography — font formats (.woff2), variable fonts, type scale, line-height by role, letter-spacing by size, text-wrap (balance/pretty), tabular numbers on changing values, iOS 16px input rule, WCAG contrast floors, RTL logical properties  
  🔗 https://github.com/jakubkrehel/skills/tree/main/skills/better-typography  
  **Setup:** `npx skills add jakubkrehel/skills`  
  `#typography #fonts #type-scale #line-height #tabular-nums #text-wrap #rtl #woff2`

- **better-colors** ⚡ Skill  
  OKLCH color space for web — converts hex/hsl to oklch, generates palettes with stable hue, checks APCA/WCAG contrast, handles gamut boundaries, derives dark mode by reversing L mapping. Covers Tailwind v4 @theme  
  🔗 https://github.com/jakubkrehel/skills/tree/main/skills/better-colors  
  **Setup:** `npx skills add jakubkrehel/skills`  
  `#oklch #colors #palette #contrast #dark-mode #gamut #tailwind #apca #wcag`

- **better-accessibility** ⚡ Skill  
  Accessibility engineering — focus rings, full keyboard support (APG patterns), focus trapping, ARIA semantics, form labels/errors, screen reader live regions, alt text rules, prefers-reduced-motion, minimum hit areas. Outputs severity-rated findings tables  
  🔗 https://github.com/jakubkrehel/skills/tree/main/skills/better-accessibility  
  **Setup:** `npx skills add jakubkrehel/skills`  
  `#a11y #accessibility #wcag #aria #keyboard #focus #screen-reader #reduced-motion`

- **better-layout** ⚡ Skill  
  Layout structure — group with space not lines, align to shared edges, logical properties for RTL, progressive disclosure affordances, breathing room between targets, container queries over device breakpoints, plan for i18n string growth  
  🔗 https://github.com/jakubkrehel/skills/tree/main/skills/better-layout  
  **Setup:** `npx skills add jakubkrehel/skills`  
  `#layout #spacing #alignment #rtl #breakpoints #container-queries #responsive #whitespace`

- **apple-design** ⚡ Skill  
  Fluid interface principles from Apple WWDC design talks — spring animations, gesture-driven UI, drag/swipe/sheet interactions, translucent materials (vibrancy), momentum and interruptible transitions  
  🔗 https://github.com/emilkowalski/skills/tree/main/skills/apple-design  
  **Setup:** `npx skills add emilkowalski/skills --skill apple-design`  
  `#apple #ios #fluid #spring-animation #gesture #drag #swipe #vibrancy #motion #wwdc`

- **dimensional-drawing** ⚡ Skill  
  Turns any UI component (repo file, Storybook story, URL, or screenshot) into a one-page, monochrome Apple-style technical spec drawing. Companion skill dimensional-drawing-motion animates the finished sheet into a ~10s video via Claude Motion or headless Playwright + ffmpeg. MIT licensed, ~414 ⭐  
  🔗 https://github.com/enesozturk/dimensional-drawing  
  **Setup:** `npx skills add enesozturk/dimensional-drawing` (add `enesozturk/dimensional-drawing-motion` for video)  
  `#design #apple #technical-drawing #spec #svg #animation #motion #monochrome #components`

- **logo-design-skill** ⚡ Skill  
  Comprehensive logo design skill — brief → research → concepts → checkpoint → production SVG + brand guidelines. Includes 1,400+ classified SVG reference library + Python tools for SVG auditing, test sheets, presentation boards, and favicon/app-icon export. By Kaan Kızıltuğ. MIT, ~5k ⭐  
  🔗 https://github.com/kaankiziltug/logo-design-skill  
  **Setup:** `/plugin marketplace add kaankiziltug/logo-design-skill` or `npx skills add kaankiziltug/logo-design-skill`  
  `#logo #branding #svg #identity #design #reference #icons #favicon #python #audit`

- **MengTo Skills** ⚡ Skill  
  Agent skills by Meng To for designers and builders — UI design-first prompting, Three.js game development, web design, landing pages, and reusable frontend workflows  
  🔗 https://github.com/MengTo/Skills  
  **Setup:** `npx skills add MengTo/Skills`  
  `#ui #design #threejs #game-dev #landing-page #prompting #frontend #mengto #agent-skills`

- **21st.dev Magic** 🔌 MCP  
  AI-powered UI component generation from 21st.dev design system  
  🔗 https://github.com/21st-dev/magic-mcp  
  **Setup:** `npx -y @21st-dev/magic@latest`  
  `#ui #components #generation #magic`

- **Framer MCP** 🔌 MCP  
  Connect Claude directly to Framer for design and layout generation  
  🔗 https://www.framer.com/marketplace/plugins/mcp/  
  **Setup:** Install via the Framer app → Marketplace → MCP plugin  
  `#framer #design #prototyping #web`

- **Spline MCP ⚠️** 🔌 MCP  
  ⚠️ Currently broken — no public Spline API yet. Watch the repo for updates  
  🔗 https://github.com/aydinfer/spline-mcp-server  
  `#spline #3d #broken #watch`

- **Rive MCP** 🔌 MCP  
  Official Rive MCP server — connects Claude to the Rive editor to edit scenes, state machines, and animations in-editor. Community rive-mcp (ODU33104) is editor-free with 32 tools for creating, inspecting, rendering, and live-previewing .riv files without opening Rive at all  
  🔗 https://rive.app/docs/editor/ai/mcp  
  **Official Setup:** `claude mcp add --transport http rive http://127.0.0.1:9791/mcp` (Rive Desktop → Settings → MCP → Start server)  
  **Community Setup:** `/plugin marketplace add ODU33104/rive-mcp`  
  `#rive #animation #state-machine #interactive #motion #mcp #official #riv`

- **GSAP Master MCP** 🔌 MCP  
  GSAP animation MCP server — advanced timelines and scroll effects  
  🔗 https://github.com/bruzethegreat/gsap-master-mcp-server  
  **Setup:** `claude mcp add-json gsap-master ...` (see repo for full JSON config)  
  `#gsap #animation #greensock`

- **Mobbin MCP 💳** 🔌 MCP  
  💳 Paid (Mobbin Pro $10/mo). Access to 620k+ real app screens and 140k+ user flows as live UI reference for Claude  
  🔗 https://mobbin.com/mcp  
  **Chat Setup:** `claude mcp add mobbin --scope user --transport http https://api.mobbin.com/mcp`  
  **Code Setup:** `npx -y mobbin-mcp auth && claude mcp add mobbin -- npx -y mobbin-mcp`  
  `#design #ui #screens #reference #flows #inspiration #paid`

- **Refero MCP 💳** 🔌 MCP  
  💳 Paid (Refero subscription). Connects Claude to 135k+ real product screens and 10k+ full user flows. Agent researches actual UI references before generating code  
  🔗 https://refero.design/mcp  
  **Setup:** `claude mcp add refero --transport http https://refero.design/mcp`  
  `#design #ui #ux #reference #screens #flows #inspiration #paid`

- **MagicPath 💳** 🗃️ Git Repo  
  💳 Freemium (Pro $29/mo). AI UI design tool on an infinite canvas — text prompt → UI screens + components. MagicPath 2.0 adds a multiplayer canvas where Claude Code, Codex, or Cursor agents build screens in parallel. Exports production-ready React, TypeScript, and Tailwind CSS code + Figma  
  🔗 https://www.magicpath.ai/  
  **Setup:** Web app — browser-based, no install. Free tier + Pro $29/mo  
  `#ui #design #canvas #multiplayer #agents #react #tailwind #figma #code-export #paid`

- **UI Builder** 🗃️ Git Repo  
  Open-source Figma-style drag & drop visual editor that drops into your React app — uses your existing components (shadcn/ui, Chakra UI, or any library), lets non-developers build pages and dashboards, saves layouts as plain JSON for easy versioning. Stack: React + shadcn/ui + Tailwind + Zustand + Zod  
  🔗 https://github.com/olliethedev/ui-builder  
  **Setup:** `npm install ui-builder` · Docs: uibuilder.app/docs/quick-start  
  `#drag-drop #visual-editor #react #shadcn #tailwind #json #cms #no-code #components #open-source`

- **Ant Design CLI/MCP** 🔌 MCP  
  Official Ant Design MCP server + agent skill — 8 tools for component props, docs, demos, design tokens, changelogs, linting, and migration guides. Works offline with bundled metadata. Claude Code is a supported client. Part of @ant-design/cli ≥ v6.3.5  
  🔗 https://github.com/ant-design/ant-design-cli  
  **Setup:** `npm install -g @ant-design/cli && antd mcp` or `npx skills add ant-design/ant-design-cli` · Auto-configure: `antd setup --client claude`  
  `#ant-design #antd #components #mcp #skill #docs #tokens #linting #migration #react #offline #official`

- **Uiverse** 🗃️ Git Repo  
  Largest community-built library of open-source UI elements — 7,400+ buttons, cards, loaders, forms, tooltips, backgrounds. Copy as HTML/CSS, Tailwind, React, or Figma. MIT licensed, 100% free  
  🔗 https://github.com/uiverse-io/galaxy  
  **Setup:** No install — browse uiverse.io, copy code, paste into your project  
  `#ui #components #css #tailwind #react #figma #free #library #open-source`

- **Scroll-World 💳** ⚡ Skill  
  💳 Paid (AI image + video credits). Builds a scroll-scrubbed "fly through the world" 3D landing page for any brand — camera flies from outside each scene into its interior with no cuts. 8k ⭐  
  🔗 https://github.com/oso95/scroll-world  
  **Setup:** `/plugin marketplace add oso95/scroll-world && /plugin install scroll-world@scroll-world`  
  `#3d #scroll #landing-page #animation #video #brand #immersive #ai-generated`

- **ThreeUI 💳** 🗃️ Git Repo  
  Meng To's (Design+Code) React component library — 50 community parent components, 164 variants with live interactive renderers, variant picker, and complete source. Three.js runtime baked in. Community edition is free/MIT. Pro 💳 unlocks more components via CLI  
  🔗 https://github.com/MengTo/threeui  
  **Setup:** `npm install @designcodeio/threeui`  
  `#react #components #threejs #3d #animation #ui #library #design-code #mengto #interactive`

- **Awesome Claude Design** 🗃️ Git Repo  
  68 curated Claude design systems, UI resources, and component libraries  
  🔗 https://github.com/VoltAgent/awesome-claude-design  
  **Setup:** Reference only — `git clone https://github.com/VoltAgent/awesome-claude-design`  
  `#design #systems #curated #collection #reference`

---

## Engineering

- **Feature Dev** ⚡ Skill  
  Feature development skill from VoltAgent's 1000+ curated collection of production skills by official dev teams (Anthropic, Vercel, Stripe, Cloudflare…)  
  🔗 https://github.com/VoltAgent/awesome-agent-skills  
  **Setup:** `npx skills add VoltAgent/awesome-agent-skills`  
  `#feature #development #engineering #voltagent`

- **Code Simplifier** ⚡ Skill  
  Takes recently modified code and makes it cleaner without changing what it does — from VoltAgent's curated skills collection  
  🔗 https://github.com/VoltAgent/awesome-agent-skills  
  **Setup:** `npx skills add VoltAgent/awesome-agent-skills`  
  `#refactor #simplify #clean #code #quality`

- **Code Review (Addy)** ⚡ Skill  
  Production-grade code review and QA skills by Addy Osmani (Chrome DevRel). Covers review, testing, performance, and engineering best practices  
  🔗 https://github.com/addyosmani/agent-skills  
  **Setup:** `npx skills add addyosmani/agent-skills`  
  `#review #qa #testing #performance #production`

- **Playwright / Webapp Testing** ⚡ Skill  
  Official Anthropic webapp testing skill — Playwright-based browser automation and end-to-end testing  
  🔗 https://github.com/anthropics/skills/tree/main/skills/webapp-testing  
  **Chat Setup:** Available on Claude.ai paid plans — mention "webapp testing" or "Playwright"  
  **Code Setup:** `/plugin marketplace add anthropics/skills && /plugin install example-skills@anthropic-agent-skills`  
  `#playwright #testing #e2e #browser #automation`

- **shadcn/improve** ⚡ Skill  
  Read-only senior advisor skill by shadcn — surveys your codebase and generates prioritized, self-contained implementation plans. Finds bugs, security gaps, performance issues, test coverage holes, tech debt. Never modifies code. 23k+ installs  
  🔗 https://github.com/shadcn/improve  
  **Setup:** `npx -y skills add shadcn/improve --agent claude-code`  
  `#audit #advisor #codebase #planning #security #performance #tech-debt #read-only #shadcn`

- **GBrain** 🔌 MCP  
  Garry Tan's (YC president) opinionated agent brain. Runs as an MCP server — adds get_page, put_page, search, query, traverse_graph, sync_brain, and 22+ more tools. On first run: 12-question onboarding generates a personalized SOUL.md and installs 70 of Garry's personal agent skills  
  🔗 https://github.com/garrytan/gbrain  
  **Setup:** `npm install -g gbrain && claude mcp add gbrain -- gbrain serve && gbrain onboard`  
  `#agent #brain #memory #skills #soul #mcp #knowledge #yc #garrytan #onboarding`

- **PostHog MCP** 🔌 MCP  
  Official PostHog plugin + MCP server for Claude Code — query analytics, manage feature flags, investigate errors, run A/B experiments. Slash commands: /posthog:flags, /posthog:insights, /posthog:errors, /posthog:experiments  
  🔗 https://github.com/PostHog/posthog-for-claude  
  **Setup:** `/plugin marketplace add PostHog/posthog-for-claude`  
  `#analytics #feature-flags #errors #experiments #posthog #product #data #mcp #official`

- **DeepSeek Harness** 🗃️ Git Repo  
  DeepSeek's open-source MIT-licensed AI agent runtime — 207k+ GitHub stars. Model-agnostic layer above the model: handles reasoning, tool use, memory, scheduling. Supports Claude, OpenAI, DeepSeek, Ollama, Bedrock, Google Vertex, Azure  
  🔗 https://github.com/deepseek-ai/deepseek-harness  
  **Setup:** `git clone https://github.com/deepseek-ai/deepseek-harness`  
  `#agent-runtime #model-agnostic #orchestration #mcp #skills #memory #deepseek #open-source`

- **gstack** 🗃️ Git Repo  
  Garry Tan's exact Claude Code setup — 23 opinionated tools that give Claude Code role personas: CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA. Companion to GBrain  
  🔗 https://github.com/garrytan/gstack  
  **Setup:** `git clone https://github.com/garrytan/gstack && cd gstack` (follow README)  
  `#personas #ceo #designer #eng-manager #qa #roles #claude-code #yc #garrytan #tools`

---

## Dev Tools

- **TypeScript LSP** 🔌 MCP  
  Language Server Protocol MCP — gives Claude semantic code intelligence: go-to-definition, references, rename, and diagnostics across any LSP-supported language  
  🔗 https://github.com/modelcontextprotocol/servers  
  **Setup:** `npx -y mcp-language-server`  
  `#lsp #typescript #language-server #semantic #ide`

- **GitHub MCP (official)** 🔌 MCP  
  Official MCP connector for GitHub — repos, PRs, issues, commits, branches  
  🔗 https://github.com/modelcontextprotocol/servers  
  **Chat Setup:** Add via Claude.ai connector settings → GitHub  
  **Code Setup:** `claude mcp add github -e GITHUB_PERSONAL_ACCESS_TOKEN=your_token -- npx -y @modelcontextprotocol/server-github`  
  `#github #git #pr #issues #repos #official`

- **Context7** 🔌 MCP  
  Fetches live, version-specific library docs and code examples for any package — eliminates hallucinated API usage  
  🔗 https://github.com/upstash/context7  
  **Chat Setup:** Add remote MCP in Claude.ai settings: https://mcp.context7.com/mcp  
  **Code Setup:** `claude mcp add --transport http https://mcp.context7.com/mcp`  
  `#docs #library #npm #sdk #live #context`

- **Screenpipe 💳** 🔌 MCP  
  💳 Desktop app $400 one-time (CLI/MCP free). Records everything you see, say, and hear 24/7 — locally, privately. MCP server lets Claude query your full screen history in natural language. YC S26  
  🔗 https://github.com/screenpipe/screenpipe  
  **Setup:** `claude mcp add screenpipe -- npx -y screenpipe-mcp@latest`  
  `#memory #screen-recording #audio #mcp #pipes #agents #local #private #productivity`

- **jev-browser-skill 💳** ⚡ Skill  
  Plug-and-play Claude Code / Codex skill that lets Jev (~100ms System-1 decision model) drive your browser. No npm install, no Playwright — clone to ~/.claude/skills/ and go. 8-step Hacker News login+search = 8 seconds. 💳 Requires TypeSafe API key  
  🔗 https://github.com/zurfyx/jev-browser-skill  
  **Setup:** `git clone https://github.com/zurfyx/jev-browser-skill ~/.claude/skills/jev-browser && export TYPESAFE_API_KEY=apikey_...`  
  `#browser #automation #jev #typesafe #system-one #fast #chrome #devtools #no-playwright #skill`

- **jev-ultrafast 💳** 🗃️ Git Repo  
  Production-grade browser agent using TypeSafe's Jev model — complete version with live inspector, region narrowing, stale-page guards. Handles large pages (250+ controls) by narrowing regions first. 💳 Requires TypeSafe API key  
  🔗 https://github.com/browser-use/jev-ultrafast  
  **Setup:** `git clone https://github.com/browser-use/jev-ultrafast && export TYPESAFE_API_KEY=apikey_...`  
  `#browser #automation #jev #typesafe #inspector #region-narrowing #system-one #production`

- **ego lite** 🗃️ Git Repo  
  macOS browser where you and AI agents work in parallel — each agent gets its own isolated Space while your tabs stay yours. Shares your Chrome logins/cookies with agents via ego-browser skill. JS-based tool calls (not CLI) run 2.5× faster with fewer tokens. Best page snapshots on the market, handles nested iframes  
  🔗 https://github.com/citrolabs/ego-lite  
  **Setup:** Download macOS app (installs ego-browser skill automatically) or `/plugin marketplace add citrolabs/ego-lite`  
  `#browser #automation #agent #macos #parallel #logins #skill #claude-code`

- **Agent Reach** 🗃️ Git Repo  
  Gives Claude Code eyes to read & search 17+ internet platforms — Twitter/X, Reddit, YouTube transcripts, GitHub, LinkedIn, Bilibili, 小红书, 抖音 and more. Zero API keys, zero config. Smart routing picks the right scraper per query. Also runs as MCP stdio server  
  🔗 https://github.com/Panniantong/Agent-Reach  
  **Setup:** `pipx install https://github.com/Panniantong/agent-reach/archive/main.zip`  
  `#browser #scraping #twitter #reddit #youtube #github #social #internet #no-api`

- **HeadlessX** 🗃️ Git Repo  
  Self-hosted headless browser automation platform powered by Camoufox (Firefox) — 0% bot detection rates. MCP endpoint for Claude Code and other agents. Queue-backed jobs, web dashboard, protected API. MIT licensed alternative to Browserless  
  🔗 https://github.com/unreasonablygood/headlessx  
  **Chat Setup:** `claude mcp add headlessx -- npx -y headlessx-mcp`  
  **Code Setup:** `git clone https://github.com/unreasonablygood/headlessx` (see README for Docker)  
  `#headless #browser #camoufox #firefox #stealth #self-hosted #mcp #scraping #automation`

- **brag** ⚡ Skill  
  Claude Code skill by Latent Spaces — turns the project you just built into a short shareable launch video with one command. Music, motion, and share copy included. Reads your code, scripts and storyboards, hands off to Hyperframes for rendering  
  🔗 https://github.com/latent-spaces/brag  
  **Chat Setup:** `/plugin marketplace add latent-spaces/brag && /plugin install brag@brag && /brag`  
  **Code Setup:** `npx skills add https://github.com/latent-spaces/brag --skill brag`  
  `#launch #video #demo #share #hyperframes #motion #storytelling #marketing #branding`

- **simslim** 🗃️ Git Repo  
  Run more iOS simulators on one Mac by disabling background daemons a simulator doesn't need. Cuts each simulator's memory ~4×. Built by MobAI for running fleets of AI-agent-controlled simulators (each driven by its own Claude Code). Go, MIT licensed, ~3.2k ⭐  
  🔗 https://github.com/MobAI-App/simslim  
  **Setup:** `brew install mobai-app/tap/simslim` (requires Xcode + iOS Simulator runtime ≥ 18.5)  
  `#ios #simulator #xcode #memory #agents #testing #automation #mobai #claude-code #go`

- **Herdr** 🗃️ Git Repo  
  Terminal multiplexer rebuilt for AI coding agents — one sidebar shows every agent (Claude Code, Codex, Pi, OpenCode, Cursor, Devin, Kimi, and more) with live state: blocked / working / done / idle. Each agent gets its own real PTY pane, sessions survive detach/SSH, and a local Unix socket API lets agents control each other. v0.9 adds remote machine support. YC F26, $6M seed, ~15k ⭐. Free, open-source (Rust)  
  🔗 https://github.com/ogulcancelik/herdr  
  **Setup:** `brew install herdr` or `mise use -g herdr` · Docs: herdr.dev/docs  
  `#terminal #multiplexer #agents #claude-code #codex #tmux #pty #ssh #rust #yc #agent-control`

- **Omarchy** 🗃️ Git Repo  
  Beautiful, agentic Linux by DHH (creator of Rails, Hey, Basecamp). Omakase Linux desktop on Arch + Hyprland + Quickshell — keyboard-first workstation with system-wide themes and integrated coding agents (Claude, Codex, Grok, OpenRouter, Hermes)  
  🔗 https://github.com/omacom/omarchy  
  **Setup:** `git clone https://github.com/omacom/omarchy && cd omarchy && ./install.sh` (Arch Linux required)  
  `#linux #arch #hyprland #desktop #keyboard-first #dhh #agentic #os #coding-agent #claude`

---

## Marketing

- **Marketing Skills** ⚡ Skill  
  Marketing-focused skill set — campaigns, copy, strategy, and positioning  
  🔗 https://github.com/coreyhaines31/marketingskills  
  **Setup:** `npx skills add coreyhaines31/marketingskills`  
  `#marketing #copy #campaign #strategy`

- **Windsor.ai** 🔌 MCP  
  Marketing data connector — ad spend, multi-touch attribution, analytics  
  🔗 https://github.com/windsor-ai/windsor_mcp  
  **Chat Setup:** Connect at mcp.windsor.ai via Claude settings → Integrations  
  `#marketing #analytics #attribution #ads`

- **Arcads Claude Code** 🗃️ Git Repo  
  Claude Code + Cursor workspace for the Arcads API — AI-generated ad video creation. Agent handles all API calls, polling, cost confirmation, and file organisation. Workflows for image gen, video gen (Seedance 2.0: 4–15s clips, native audio, image-to-video)  
  🔗 https://github.com/krusemediallc/arcads-claude-code  
  **Setup:** `git clone https://github.com/krusemediallc/arcads-claude-code` (requires ARCADS_API_KEY)  
  `#ads #video #marketing #arcads #seedance #api #claude-code #cursor`

- **Kevs-IOS-Agents ⚠️** 🗃️ Git Repo  
  ⚠️ Automation may violate TikTok/Instagram ToS — use at own risk. A farm of real iPhones run from your Mac: open-source iOS (+ Android) device automation with live control, Postgres-backed scheduler, and built-in social workflows. TikTok and Instagram enabled by default  
  🔗 https://github.com/kevinbadi/Kevs-IOS-Agents  
  **Setup:** `git clone https://github.com/kevinbadi/Kevs-IOS-Agents` (requires Mac, real devices, Postgres)  
  `#ios #android #automation #tiktok #instagram #social #scheduler #postgres #self-hosted #farm`

- **openSEO 💳** 🔌 MCP  
  Open-source SEO + GEO skills for Claude on your real GSC/GA4/ads data. Free MCP connects to Search Console, Analytics, and ads. 8 MIT-licensed skills: keyword research, rank tracking, site audits, backlinks, competitor gaps, AI visibility. DataForSEO 💳 built in  
  🔗 https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills  
  **Chat Setup:** `claude mcp add ryze --transport http https://connector.get-ryze.ai/mcp`  
  **Code Setup:** `npx skills add Ryze-AI-Adgent/open-seo-mcp-skills`  
  `#seo #geo #gsc #analytics #keywords #rank-tracking #audit #backlinks #competitor`

---

## Video Analysis

- **claude-video** 🗃️ Git Repo  
  Best for reading on-screen text/UI in screen recordings — uniform frame sampling + --resolution flag  
  🔗 https://github.com/bradautomates/claude-video  
  **Setup:** `git clone https://github.com/bradautomates/claude-video` (see README)  
  `#video #screen-recording #ocr #ui #frames`

- **claude-watch** 🗃️ Git Repo  
  Best for short-form hook/retention analysis — frame-dense sampling at video start  
  🔗 https://github.com/alexlarcheveque/claude-watch  
  **Setup:** `git clone https://github.com/alexlarcheveque/claude-watch` (see README)  
  `#video #retention #hooks #analysis`

- **claude-real-video** 🗃️ Git Repo  
  Scene-aware frame extraction + dedup + Whisper transcript from any URL or local file. Smarter than fixed-interval sampling — grabs frames that matter, skips near-duplicates. Fully local, nothing uploaded  
  🔗 https://github.com/HUANGCHIHHUNGLeo/claude-real-video  
  **Setup:** `pip install claude-real-video` (+ `pip install "claude-real-video[whisper]"` for audio) + `brew install ffmpeg`  
  `#video #scene-detection #dedup #whisper #transcript #local #youtube`

- **MoneyPrinterTurbo** 🗃️ Git Repo  
  Give it a topic → auto-generates script, sources stock footage (Pexels/Pixabay/Coverr), adds TTS voiceover, subtitles (Whisper), background music → renders HD short video (9:16 or 16:9). One-click publish to TikTok, Instagram, YouTube Shorts. 102k ⭐  
  🔗 https://github.com/harry0703/MoneyPrinterTurbo  
  **Setup (Docker):** `git clone https://github.com/harry0703/MoneyPrinterTurbo && docker compose -f docker-compose.release.yml up`  
  `#video #short-form #tiktok #youtube #instagram #ai-generated #tts #subtitles #automation`

- **Pixelle-Video** 🗃️ Git Repo  
  AI short video engine — topic → script → AI images/video → TTS → final video. Deeper than MoneyPrinterTurbo: ComfyUI/RunningHub workflow support, digital avatar presenter, motion transfer, image-to-video. Runs 100% free with Ollama + local ComfyUI  
  🔗 https://github.com/AIDC-AI/Pixelle-Video  
  **Setup:** `git clone https://github.com/AIDC-AI/Pixelle-Video && uv run streamlit run web/app.py`  
  `#video #short-form #comfyui #avatar #motion-transfer #seedance #kling #tts #ai-generated #free`

- **Palmier Pro 💳** 🔌 MCP  
  macOS video editor built for AI agents — Claude, Codex, or Cursor connect via local MCP server and can open a project, build the timeline, make edits, and export the finished video end-to-end. 15+ AI generation models on the same timeline: Seedance 2.5, Kling V3, Runway Aleph 2, FLUX 3, ElevenLabs, GPT Image 2, Topaz upscale. Editor + MCP free; credits 💳 cover generation. YC S26. macOS 26 (Tahoe) required  
  🔗 https://www.palmier.io/  
  **Setup:** Open Palmier Pro → Settings → MCP → connect Claude Code  
  `#video #editing #mcp #ai-generation #seedance #kling #runway #elevenlabs #nle #skills #macos #yc`

- **Open Higgsfield** 🗃️ Git Repo  
  Free, self-hosted open-source alternative to Higgsfield AI. Image + video generation from one prompt bar — 40+ text-to-video models, 60+ image-to-video models including Seedance, Kling, Wan, Flux, SDXL, Ideogram, Runway, Recraft. No subscription, MIT licensed  
  🔗 https://github.com/thehiggsfieldai/OpenHiggsfield  
  **Setup:** Browser-based — visit hosted version or `git clone https://github.com/thehiggsfieldai/OpenHiggsfield`  
  `#video #image #generation #seedance #kling #flux #sdxl #self-hosted #free #multi-model #open-source`

---

## Collections

- **Awesome Claude Design** 🗃️ Git Repo  
  68 curated Claude design systems, UI resources, and component libraries  
  🔗 https://github.com/VoltAgent/awesome-claude-design  
  **Setup:** Reference only — `git clone https://github.com/VoltAgent/awesome-claude-design`  
  `#design #systems #curated #collection #reference`

- **Awesome Agent Skills** 🗃️ Git Repo  
  1000+ curated agent skills from official dev teams (Anthropic, Vercel, Stripe, Cloudflare, Netlify…) and community. Compatible with Claude Code, Codex, Gemini CLI, Cursor  
  🔗 https://github.com/VoltAgent/awesome-agent-skills  
  **Setup:** Browse repo and `npx skills add` individual entries  
  `#collection #skills #curated #voltagent #community`

- **turath-mcp** 🔌 MCP  
  MCP server giving Claude access to 8,500+ classical Arabic and Islamic books from turath.io. Search across tafsir, hadith, fiqh, usul. Full-text search, page-level reading, author biographies, book metadata. Free public API, 30-day offline cache  
  🔗 https://github.com/dihannahdi/turath  
  **Setup:** `claude mcp add turath -- npx -y turath-mcp-server`  
  `#arabic #islamic #books #hadith #tafsir #fiqh #quran #classical #search #free #turath`

---

## Security

- **Repello SkillCheck** 🔌 MCP  
  Upload a .skill zip → get a safety score before installing any skill  
  🔗 https://repello.ai/tools/skills  
  **Setup:** Web tool — visit repello.ai/tools/skills and upload the .skill zip  
  `#security #safety #skill-check #vetting`

- **Security Guidance** ⚡ Skill  
  Official Anthropic security guidance skill — security reviews, threat modelling, and vulnerability assessment  
  🔗 https://github.com/anthropics/skills/tree/main/skills/security-guidance  
  **Setup:** `/plugin marketplace add anthropics/skills && /plugin install example-skills@anthropic-agent-skills`  
  `#security #threat-model #vulnerability #review #official`

---

## Infrastructure

- **CLIProxyAPI ⚠️** 🗃️ Git Repo  
  ⚠️ Grey-area (ToS). Self-hosted Go proxy that wraps Claude/ChatGPT/Gemini/Grok subscriptions as OpenAI-compatible API endpoints — no API keys needed. 39.4k ⭐ Multi-account load balancing supported  
  🔗 https://github.com/router-for-me/CLIProxyAPI  
  **Setup:** `docker compose up -d`  
  `#proxy #api #claude #openai #gemini #self-hosted #subscription #infrastructure`

---

## Writing & Quality

- **Stop-Slop** ⚡ Skill  
  Forces Claude to avoid vague, hollow, and AI-sounding writing  
  🔗 https://github.com/hardikpandya/stop-slop  
  **Setup:** `npx skills add hardikpandya/stop-slop`  
  `#writing #quality #anti-slop`

---

## Utility

- **find-skill** ⚡ Skill  
  Discover and install Claude skills from the CLI  
  🔗 https://github.com/fockus/claude-skill-find-skill  
  **Setup:** `brew install find-skill && find-skill`  
  `#discovery #utility #skills`

- **last30days** ⚡ Skill  
  Summarise and surface insights from the last 30 days of activity  
  🔗 https://github.com/mvanhorn/last30days-skill  
  **Setup:** `npx skills add mvanhorn/last30days-skill -g -y`  
  `#history #summary #insights`

- **DigUp** 🗃️ Git Repo  
  On-device semantic file search — search photos, PDFs, docs, recordings, videos, and code by what's in them, not just filenames. Built on Google DeepMind's EmbeddingGemma 2. Runs fully locally on Mac (stable), Windows and Linux (beta). MIT licensed, ~5.3k ⭐. MCP integration is a planned feature  
  🔗 https://github.com/ARahim3/DigUp  
  **Setup:** Download from GitHub releases (see README for Mac/Windows/Linux install)  
  `#search #semantic #on-device #local #files #pdf #photos #video #gemma #embedding`

- **FluidVoice** 🗃️ Git Repo  
  Fastest macOS on-device dictation app — Parakeet, Nemotron, or Whisper models run fully locally. No cloud, no account, no word limits. Writes to any app. Free, GPL v3, ~12.5k ⭐. Windows + iOS TestFlight available. Android + Linux on waitlist. Great for voice-to-Claude-Code workflows  
  🔗 https://github.com/altic-dev/FluidVoice  
  **Setup:** `brew install --cask fluidvoice` (requires macOS 15+ / Apple Silicon)  
  `#voice #dictation #stt #whisper #parakeet #local #offline #macos #no-cloud #free #gpl`

- **Caveman** ⚡ Skill  
  Cuts ~65% output tokens by making Claude respond in terse caveman-speak. Full technical accuracy kept. 4 modes: lite / full / ultra / wenyan. 69.4k ⭐  
  🔗 https://github.com/JuliusBrussee/caveman  
  **Setup:** `curl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.sh | bash`  
  `#tokens #cost #brevity #caveman #compression`

- **Grill Me** ⚡ Skill  
  Interviews you relentlessly one question at a time until everything you know about a topic is extracted and saved to a file. Claude guesses each answer — you confirm or correct. Great for decision-making and client onboarding  
  🔗 https://github.com/gusinov/grill-me  
  **Setup:** `npx skills add gusinov/grill-me` — trigger: say "grill me about X"  
  `#interview #context #extraction #brainstorm #onboarding #decisions`

---

## Cowork

- **Skill Creator (Anthropic)** ⚡ Skill  
  Official Anthropic skill for creating, testing, and optimising new skills — from the anthropics/skills repo (skill-creator folder)  
  🔗 https://github.com/anthropics/skills/tree/main/skills/skill-creator  
  **Setup:** `/plugin marketplace add anthropics/skills && /plugin install example-skills@anthropic-agent-skills`  
  `#skill #creator #meta #anthropic #official`

- **Claude.md Management** ⚡ Skill  
  Best practices for structuring and maintaining CLAUDE.md files — tips sourced from Anthropic team and community, by Shayan Rais  
  🔗 https://github.com/shanraisshan/claude-code-best-practice  
  **Setup:** Reference repo — `git clone https://github.com/shanraisshan/claude-code-best-practice`  
  `#claude-md #memory #context #best-practice #project`

- **ribbon** 🗃️ Git Repo  
  Slim status band above the Claude Code prompt — shows your 7-day and 5-hour usage remaining, reset times, and whether your prompt cache is warm or cold, plus what your next message will cost. Install once, applies to all projects. MIT licensed  
  🔗 https://github.com/robonuggets/ribbon  
  **Setup:** `/plugin install ribbon --marketplace robonuggets/ribbon` (start a new session to see the band)  
  `#usage #tokens #cache #cost #status #claude-code #plugin #utility`

- **Claude Code Setup (Official)** ⚡ Skill  
  Official Anthropic plugin — scans your codebase and recommends the top 1–2 tailored automations per category: MCP servers, Skills, Hooks, Subagents, and Slash Commands. Read-only, never modifies your files  
  🔗 https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-code-setup  
  **Setup:** `/plugin marketplace add anthropics/claude-plugins-official && /plugin install claude-code-setup@claude-plugins-official`  
  `#setup #official #anthropic #hooks #mcp #skills #subagents #automation #config`

- **Claude for Small Business** ⚡ Skill  
  Official Anthropic product (May 2026) — toggle install inside Claude Cowork that puts Claude inside the tools small businesses already use. 8 integrations: QuickBooks, PayPal, HubSpot, Canva, DocuSign, Google Workspace, Microsoft 365, Slack. 15 ready-to-run agentic workflows: payroll planning, month-end close, invoice chasing, lead triage, contract review, campaign creation, cash-flow monitoring, and more. You approve before anything sends, posts, or pays  
  🔗 https://claude.com/solutions/small-business  
  **Chat Setup:** Go to claude.com/solutions/small-business → toggle on inside Claude Cowork → connect your tools  
  `#small-business #quickbooks #paypal #hubspot #canva #docusign #payroll #invoicing #cowork #official #anthropic #workflows`

---

*97 tools total · Last updated October 2026*
