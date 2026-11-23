# My Tools Dashboard

141 AI tools — Skills ⚡, MCPs 🔌, and Git Repos 🗃️ — curated for Claude Code and Cowork workflows.  
💳 = paid / subscription required · ⚠️ = grey-area or broken, use with caution

> **For AI agents:** the source of truth is [`tools.json`](tools.json). Read [`CLAUDE.md`](CLAUDE.md) for how to search and add tools. This README is generated — do not edit by hand.

**Jump to:** [Use-case index](#use-case-index) · [Quick index](#quick-index) · [Details by category](#details-by-category)

---

## Use-case index

*"I want to…" → the tools for it.*

- **Make a launch / release video for my app** → [brag](#t78) · [stageshow](#t98) · [motionmaxxing](#t138) · [WhatShips](#t121)
- **Turn a product or footage into video ads** → [Arcads Claude Code](#t50) · [MoneyPrinterTurbo](#t49) · [Pixelle-Video](#t59)
- **Generate short-form videos (TikTok, Reels, Shorts) from a topic** → [MoneyPrinterTurbo](#t49) · [Pixelle-Video](#t59) · [Open Higgsfield](#t80)
- **Generate AI images or video on my own machine** → [Open Higgsfield](#t80) · [OmniChar Studio](#t74) · [Pixelle-Video](#t59)
- **Edit video with AI** → [Palmier Pro](#t66) 💳 · [JoyAI-Video-Edit](#t123) · [motionmaxxing](#t138)
- **Let Claude watch / analyze a video or screen recording** → [claude-video](#t23) · [claude-real-video](#t44) · [claude-watch](#t24)
- **Schedule and automate social media posts** → [Postiz](#t114) · [Instagram Agent Skill](#t124) · [Kevs-IOS-Agents](#t71) ⚠️
- **Spy on competitors' marketing and launches** → [Reverse Engineer Marketing](#t134) · [WhatShips](#t121) · [Agent Reach](#t51)
- **SEO, ad data and site analytics** → [openSEO](#t75) 💳 · [Windsor.ai](#t20) · [PostHog MCP](#t73) · [Orion](#t141) 💳
- **Write marketing copy / avoid AI-sounding writing** → [Marketing Skills](#t11) · [Stop-Slop](#t12)
- **Make UI look designed, not AI-generated** → [unslop](#t99) · [Hallmark](#t112) · [Taste Skill](#t5) · [Impeccable v4.0](#t13) · [better-ui](#t53) · [UI/UX Pro Max](#t3) · [Front-end Design](#t40)
- **Find UI components and design inspiration** → [21st.dev Magic](#t16) · [21st.dev](#t119) · [Uiverse](#t45) · [ThreeUI](#t64) 💳 · [Ponytail](#t8) · [Awesome Claude Design](#t21) · [Supahero](#t120) · [Mobbin MCP](#t25) 💳 · [Refero MCP](#t47) 💳 · [MagicPath](#t90) 💳 · [UI Builder](#t96)
- **Add web animation and motion** → [GSAP Skills (official)](#t9) · [GSAP Master MCP](#t19) · [Motion.dev](#t122) · [Emil Kowalski](#t4) · [emilkowalski/skills (full)](#t100) · [apple-design](#t58) · [Rive MCP](#t89)
- **Typography, colors, layout and accessibility** → [better-typography](#t54) · [better-colors](#t55) · [better-layout](#t57) · [better-accessibility](#t56)
- **Animated icons and logos** → [Kubai Icons](#t128) · [logo-design-skill](#t93)
- **Product demo visuals and spec drawings** → [stageshow](#t98) · [dimensional-drawing](#t88)
- **3D, scroll worlds and 3D scans** → [Spline 3D Integration](#t10) · [Scroll-World](#t46) 💳 · [3d-model-anything](#t110)
- **Generative art and hand-drawn animation (p5.js)** → [ClaudeAnimationBase](#t125) · [p5.brush](#t135)
- **Charts and infographics** → [AntV Infographic](#t6) · [Graphify](#t7)
- **Review, clean up and improve code** → [Code Review (Addy)](#t32) · [Code Simplifier](#t31) · [shadcn/improve](#t63) · [Feature Dev](#t30) · [Elephant-Goldfish Model](#t104)
- **Understand or untangle a codebase** → [floorplan](#t103) · [Caldo Skills](#t140) · [TypeScript LSP](#t34) · [shadcn/improve](#t63)
- **Test a web app** → [Playwright / Webapp Testing](#t33)
- **Get up-to-date library docs** → [Context7](#t36)
- **A better agent workflow / methodology** → [Superpowers](#t27) · [G-stack](#t28) · [gstack](#t62) · [Karpathy Skills](#t29) · [paul-graham-skills](#t109) · [Context Engineering](#t2)
- **Give agents memory, RAG or file search** → [memvid](#t107) · [LEANN](#t108) · [GBrain](#t61) · [DigUp](#t92)
- **Automate a browser / scrape the web** → [HeadlessX](#t76) · [browsentic](#t111) · [ego lite](#t48) · [Agent Reach](#t51) · [jev-browser-skill](#t68) 💳 · [jev-ultrafast](#t69) 💳
- **Let AI control my desktop or phone** → [agent-desktop](#t126) · [Pinky](#t129) · [UI-TARS Desktop](#t130) · [Kevs-IOS-Agents](#t71) ⚠️
- **Voice: speech-to-text, text-to-speech, audio** → [EG2 Transcribe](#t133) · [FluidVoice](#t97) · [TinyTTS](#t82) · [Sophon-Realtime](#t132) · [earshot](#t106)
- **Run or fine-tune LLMs locally** → [MiniCPM](#t72) · [swarmLLM](#t83) · [Unsloth](#t113) · [Kev](#t85) · [Laya](#t70)
- **Use multiple models / route between them** → [LLM Council](#t1) · [CLIProxyAPI](#t26) ⚠️ · [DeepSeek Harness](#t79)
- **Deploy and self-host (apps, email)** → [Coolify](#t105) · [Cloud Mail](#t139)
- **Security: vet skills, reverse-engineer, protect code** → [Repello SkillCheck](#t22) · [Security Guidance](#t39) · [ghidra-mcp](#t101) · [BLA](#t102) · [ClearCam](#t127)
- **Study AI system prompts (grey-area)** → [system_prompts_leaks](#t116) ⚠️ · [CL4R1T4S](#t117) ⚠️
- **Build games** → [GameDev Resources](#t115) · [Genex Desktop](#t137) · [MengTo Skills](#t65)
- **iOS / Android / car app dev** → [simslim](#t94) · [AndroidAutoMaker](#t136)
- **Find more skills and tool collections** → [find-skill](#t14) · [Awesome Agent Skills](#t42) · [Awesome Claude Design](#t21) · [Skillry](#t118) 💳 · [Caldo Skills](#t140)
- **Set up and tune Claude Code / Cowork** → [Claude Code Setup (Official)](#t52) · [Claude.md Management](#t38) · [Skill Creator (Anthropic)](#t37) · [ribbon](#t91) · [Herdr](#t87) · [Caveman](#t41) · [Claude for Small Business](#t67) · [last30days](#t15)
- **Predict scenarios / decision models** → [MiroFish](#t86) · [jev-trade](#t81) ⚠️ · [Laya](#t70) · [Kev](#t85)
- **Get interviewed to extract what I know** → [Grill Me](#t43)
- **Classical Arabic & Islamic books** → [turath-mcp](#t77)
- **Terminal and desktop OS for agents** → [Herdr](#t87) · [Omarchy](#t84) · [Screenpipe](#t60) 💳

---

## Quick index

| # | Tool | Type | Category | What it does |
|---|---|---|---|---|
| 1 | [LLM Council](#t1) | ⚡ | AI & LLM | Multi-LLM consensus — routes queries across models and synthesises a council answer |
| 2 | [Context Engineering](#t2) | ⚡ | AI & LLM | Better agent context management — structuring, pruning, and injecting context |
| 3 | [UI/UX Pro Max](#t3) | ⚡ | Design & Animation | Expert-level UI/UX design skill with creative direction capabilities |
| 4 | [Emil Kowalski](#t4) | ⚡ | Design & Animation | Design-focused skill by Emil Kowalski — motion, polish, and interaction detail |
| 5 | [Taste Skill](#t5) | ⚡ | Design & Animation | Adds aesthetic taste and visual judgment to Claude's output |
| 6 | [AntV Infographic](#t6) | ⚡ | Design & Animation | AntV-powered infographic and data visualisation generation |
| 7 | [Graphify](#t7) | ⚡ | Design & Animation | Generate charts and graphs directly from Claude output |
| 8 | [Ponytail](#t8) | ⚡ | Design & Animation | Tailwind-focused UI component skill for building polished interfaces |
| 9 | [GSAP Skills (official)](#t9) | ⚡ | Design & Animation | Official GreenSock GSAP animation skill — timelines, ScrollTrigger, and more |
| 10 | [Spline 3D Integration](#t10) | ⚡ | Design & Animation | 3D design integration via Spline — install through mcpmarket |
| 11 | [Marketing Skills](#t11) | ⚡ | Marketing | Marketing-focused skill set — campaigns, copy, strategy, and positioning |
| 12 | [Stop-Slop](#t12) | ⚡ | Writing & Quality | Forces Claude to avoid vague, hollow, and AI-sounding writing |
| 13 | [Impeccable v4.0](#t13) | ⚡ | Design & Animation | v4.0 ↑ Design language skill — auto-detects job type (greenfield / redesign / refinement), generates 7 direct… |
| 14 | [find-skill](#t14) | ⚡ | Utility | Discover and install Claude skills from the CLI |
| 15 | [last30days](#t15) | ⚡ | Utility | Summarise and surface insights from the last 30 days of activity |
| 16 | [21st.dev Magic](#t16) | 🔌 | Design & Animation | AI-powered UI component generation from 21st.dev design system |
| 17 | [Framer MCP](#t17) | 🔌 | Design & Animation | Connect Claude directly to Framer for design and layout generation |
| 18 | [Spline MCP](#t18) ⚠️ | 🔌 | Design & Animation | Currently broken — no public Spline API yet. Watch the repo for updates |
| 19 | [GSAP Master MCP](#t19) | 🔌 | Design & Animation | GSAP animation MCP server — advanced timelines and scroll effects |
| 20 | [Windsor.ai](#t20) | 🔌 | Marketing | Marketing data connector — ad spend, multi-touch attribution, analytics |
| 21 | [Awesome Claude Design](#t21) | 🗃️ | Collections | 68 curated Claude design systems, UI resources, and component libraries |
| 22 | [Repello SkillCheck](#t22) | 🔌 | Security | Upload a .skill zip → get a safety score before installing any skill |
| 23 | [claude-video](#t23) | 🗃️ | Video Analysis | Best for reading on-screen text/UI in screen recordings — uniform frame sampling + --resolution flag |
| 24 | [claude-watch](#t24) | 🗃️ | Video Analysis | Best for short-form hook/retention analysis — frame-dense sampling at video start |
| 25 | [Mobbin MCP](#t25) 💳 | 🔌 | Design & Animation | Paid (Mobbin Pro $10/mo). Access to 620k+ real app screens and 140k+ user flows as live UI reference for Clau… |
| 26 | [CLIProxyAPI](#t26) ⚠️ | 🗃️ | Infrastructure | Grey-area (ToS). Self-hosted Go proxy that wraps Claude/ChatGPT/Gemini/Grok subscriptions as OpenAI-compatibl… |
| 27 | [Superpowers](#t27) | ⚡ | AI & LLM | Complete agentic dev methodology — spec → plan → subagent-driven TDD. Works across Claude Code, Cursor, Codex… |
| 28 | [G-stack](#t28) | ⚡ | AI & LLM | Garry Tan's (YC) exact Claude Code setup — 23 opinionated skills covering CEO, Designer, Eng Manager, Release… |
| 29 | [Karpathy Skills](#t29) | ⚡ | AI & LLM | CLAUDE.md skill derived from Andrej Karpathy's observations on LLM coding pitfalls — don't assume, simplify,… |
| 30 | [Feature Dev](#t30) | ⚡ | Engineering | Feature development skill from VoltAgent's 1000+ curated collection of production skills by official dev team… |
| 31 | [Code Simplifier](#t31) | ⚡ | Engineering | Takes recently modified code and makes it cleaner without changing what it does — from VoltAgent's curated sk… |
| 32 | [Code Review (Addy)](#t32) | ⚡ | Engineering | Production-grade code review and QA skills by Addy Osmani (Chrome DevRel). Covers review, testing, performanc… |
| 33 | [Playwright / Webapp Testing](#t33) | ⚡ | Engineering | Official Anthropic webapp testing skill (webapp-testing folder) — Playwright-based browser automation and end… |
| 34 | [TypeScript LSP](#t34) | 🔌 | Dev Tools | Language Server Protocol MCP — gives Claude semantic code intelligence: go-to-definition, references, rename,… |
| 35 | [GitHub MCP (official)](#t35) | 🔌 | Dev Tools | Official MCP connector for GitHub — repos, PRs, issues, commits, branches. Part of the modelcontextprotocol/s… |
| 36 | [Context7](#t36) | 🔌 | Dev Tools | Fetches live, version-specific library docs and code examples for any package — eliminates hallucinated API u… |
| 37 | [Skill Creator (Anthropic)](#t37) | ⚡ | Cowork | Official Anthropic skill for creating, testing, and optimising new skills — from the anthropics/skills repo (… |
| 38 | [Claude.md Management](#t38) | ⚡ | Cowork | Best practices for structuring and maintaining CLAUDE.md files — tips sourced from Anthropic team and communi… |
| 39 | [Security Guidance](#t39) | ⚡ | Security | Official Anthropic security guidance skill — security reviews, threat modelling, and vulnerability assessment… |
| 40 | [Front-end Design](#t40) | ⚡ | Design & Animation | Official Anthropic front-end design skill — UI/component design, styling, and layout guidance (frontend-desig… |
| 41 | [Caveman](#t41) | ⚡ | Utility | Cuts ~65% output tokens by making Claude respond in terse caveman-speak. Full technical accuracy kept. 4 mode… |
| 42 | [Awesome Agent Skills](#t42) | 🗃️ | Collections | 1000+ curated agent skills from official dev teams (Anthropic, Vercel, Stripe, Cloudflare, Netlify…) and comm… |
| 43 | [Grill Me](#t43) | ⚡ | Utility | Interviews you relentlessly one question at a time until everything you know about a topic is extracted and s… |
| 44 | [claude-real-video](#t44) | 🗃️ | Video Analysis | Scene-aware frame extraction + dedup + Whisper transcript from any URL or local file. Smarter than fixed-inte… |
| 45 | [Uiverse](#t45) | 🗃️ | Design & Animation | Largest community-built library of open-source UI elements — 7,400+ buttons, cards, loaders, forms, tooltips,… |
| 46 | [Scroll-World](#t46) 💳 | ⚡ | Design & Animation | Paid (AI image + video credits). Builds a scroll-scrubbed "fly through the world" 3D landing page for any bra… |
| 47 | [Refero MCP](#t47) 💳 | 🔌 | Design & Animation | Paid (Refero subscription). Connects Claude to 135k+ real product screens and 10k+ full user flows. Agent res… |
| 48 | [ego lite](#t48) | 🗃️ | Dev Tools | macOS browser where you and AI agents work in parallel — each agent gets its own isolated Space while your ta… |
| 49 | [MoneyPrinterTurbo](#t49) | 🗃️ | Video Analysis | Give it a topic/keyword → auto-generates script, sources stock footage (Pexels/Pixabay/Coverr), adds TTS voic… |
| 50 | [Arcads Claude Code](#t50) | 🗃️ | Marketing | Claude Code + Cursor workspace for the Arcads API — AI-generated ad video creation. Agent handles all API cal… |
| 51 | [Agent Reach](#t51) | 🗃️ | Dev Tools | Gives Claude Code eyes to read & search 17+ internet platforms — Twitter/X, Reddit, YouTube transcripts, GitH… |
| 52 | [Claude Code Setup (Official)](#t52) | ⚡ | Cowork | Official Anthropic plugin — scans your codebase and recommends the top 1–2 tailored automations per category:… |
| 53 | [better-ui](#t53) | ⚡ | Design & Animation | UI polish principles — concentric border radius, optical alignment, layered shadows, interruptible animations… |
| 54 | [better-typography](#t54) | ⚡ | Design & Animation | Web typography — font formats (.woff2), variable fonts, type scale, line-height by role, letter-spacing by si… |
| 55 | [better-colors](#t55) | ⚡ | Design & Animation | OKLCH color space for web — converts hex/hsl to oklch, generates palettes with stable hue, checks APCA/WCAG c… |
| 56 | [better-accessibility](#t56) | ⚡ | Design & Animation | Accessibility engineering — focus rings (:focus-visible), full keyboard support (APG patterns), focus trappin… |
| 57 | [better-layout](#t57) | ⚡ | Design & Animation | Layout structure — group with space not lines, align to shared edges, logical properties for RTL (margin-inli… |
| 58 | [apple-design](#t58) | ⚡ | Design & Animation | Fluid interface principles from Apple WWDC design talks (esp. Designing Fluid Interfaces 2018) — spring anima… |
| 59 | [Pixelle-Video](#t59) | 🗃️ | Video Analysis | AI short video engine — topic → script → AI images/video → TTS → final video. Deeper than MoneyPrinterTurbo:… |
| 60 | [Screenpipe](#t60) 💳 | 🔌 | Dev Tools | Desktop app $400 one-time (CLI/MCP free). Records everything you see, say, and hear 24/7 — locally, privately… |
| 61 | [GBrain](#t61) | 🔌 | Engineering | Garry Tan's (YC president) opinionated agent brain. Runs as an MCP server — adds get_page, put_page, search,… |
| 62 | [gstack](#t62) | 🗃️ | Engineering | Garry Tan's exact Claude Code setup — 23 opinionated tools that give Claude Code role personas: CEO, Designer… |
| 63 | [shadcn/improve](#t63) | ⚡ | Engineering | Read-only senior advisor skill by shadcn — surveys your codebase and generates prioritized, self-contained im… |
| 64 | [ThreeUI](#t64) 💳 | 🗃️ | Design & Animation | Meng To's (Design+Code) React component library — 50 community parent components, 164 variants with live inte… |
| 65 | [MengTo Skills](#t65) | ⚡ | Design & Animation | Agent skills by Meng To for designers and builders — UI design-first prompting, Three.js game development, we… |
| 66 | [Palmier Pro](#t66) 💳 | 🔌 | Video Analysis | macOS video editor built for AI agents — Claude, Codex, or Cursor connect via local MCP server and can open a… |
| 67 | [Claude for Small Business](#t67) | ⚡ | Cowork | Official Anthropic product (May 2026) — toggle install inside Claude Cowork that puts Claude inside the tools… |
| 68 | [jev-browser-skill](#t68) 💳 | ⚡ | Dev Tools | Plug-and-play Claude Code / Codex skill that lets Jev (TypeSafe's ~100ms System-1 decision model) drive your… |
| 69 | [jev-ultrafast](#t69) 💳 | 🗃️ | Dev Tools | Production-grade browser agent using TypeSafe's Jev model — the complete version of jev-browser-skill with li… |
| 70 | [Laya](#t70) | 🗃️ | AI & LLM | Free, open-source, Jev-compatible System-1 decision model by Convai Innovations — runs locally via Node.js +… |
| 71 | [Kevs-IOS-Agents](#t71) ⚠️ | 🗃️ | Marketing | Automation may violate TikTok/Instagram ToS — use at own risk. A farm of real iPhones run from your Mac: open… |
| 72 | [MiniCPM](#t72) | 🗃️ | AI & LLM | SOTA on-device LLMs by OpenBMB — small but powerful. MiniCPM5 (2B params) uses standard LlamaForCausalLM arch… |
| 73 | [PostHog MCP](#t73) | 🔌 | Engineering | Official PostHog plugin + MCP server for Claude Code — query analytics, manage feature flags, investigate err… |
| 74 | [OmniChar Studio](#t74) | 🗃️ | AI & LLM | AI character studio for portable identity — build multi-model consistent characters, train LoRAs, and generat… |
| 75 | [openSEO](#t75) 💳 | 🔌 | Marketing | Open-source SEO + GEO skills for Claude on your real GSC/GA4/ads data. Free MCP connects to Search Console, A… |
| 76 | [HeadlessX](#t76) | 🗃️ | Dev Tools | Self-hosted headless browser automation platform powered by Camoufox (Firefox) — 0% bot detection rates. MCP… |
| 77 | [turath-mcp](#t77) | 🔌 | Collections | MCP server giving Claude access to 8,500+ classical Arabic and Islamic books from turath.io (a Nuqayah projec… |
| 78 | [brag](#t78) | ⚡ | Dev Tools | Claude Code skill by Latent Spaces — turns the project you just built into a short shareable launch video wit… |
| 79 | [DeepSeek Harness](#t79) | 🗃️ | Engineering | DeepSeek's open-source MIT-licensed AI agent runtime — 207k+ GitHub stars in Aug 2026. Model-agnostic layer a… |
| 80 | [Open Higgsfield](#t80) | 🗃️ | Video Analysis | Free, self-hosted open-source alternative to Higgsfield AI. Image + video generation from one prompt bar — 40… |
| 81 | [jev-trade](#t81) ⚠️ | 🗃️ | AI & LLM | Paper trading only — no broker connection, no real money. Market-data trading simulator powered by auditable… |
| 82 | [TinyTTS](#t82) | 🗃️ | AI & LLM | Ultra-lightweight end-to-end text-to-speech model — 1.62M parameters, 3.4MB. Synthesizes ~5s of 44.1kHz natur… |
| 83 | [swarmLLM](#t83) | 🗃️ | AI & LLM | Peer-to-peer LLM inference across browser tabs — every device brings a slice, together they run the whole mod… |
| 84 | [Omarchy](#t84) | 🗃️ | Dev Tools | Beautiful, agentic Linux by DHH (creator of Rails, Hey, Basecamp). Omakase Linux desktop on Arch + Hyprland +… |
| 85 | [Kev](#t85) | 🗃️ | AI & LLM | Open-source Jev-inspired decision model by Jared Palmer — LoRA adapter + small readout head on Qwen2.5-0.5B.… |
| 86 | [MiroFish](#t86) | ⚡ | AI & LLM | AI simulation chat for scenario prediction — turn text, PDF, MD, or TXT into graph building, multi-agent simu… |
| 87 | [Herdr](#t87) | 🗃️ | Dev Tools | Terminal multiplexer rebuilt for AI coding agents — one sidebar shows every agent (Claude Code, Codex, Pi, Op… |
| 88 | [dimensional-drawing](#t88) | ⚡ | Design & Animation | Turns any UI component (repo file, Storybook story, URL, or screenshot) into a one-page, monochrome Apple-sty… |
| 89 | [Rive MCP](#t89) | 🔌 | Design & Animation | Official Rive MCP server — connects Claude to the Rive editor to edit scenes, state machines, and animations… |
| 90 | [MagicPath](#t90) 💳 | 🗃️ | Design & Animation | Freemium (Pro $29/mo). AI UI design tool on an infinite canvas — text prompt → high-quality UI screens + comp… |
| 91 | [ribbon](#t91) | 🗃️ | Cowork | Slim status band above the Claude Code prompt — shows how much of your 7-day and 5-hour usage remains, reset… |
| 92 | [DigUp](#t92) | 🗃️ | Utility | On-device semantic file search for your computer — search photos, PDFs, docs, recordings, videos, and code by… |
| 93 | [logo-design-skill](#t93) | ⚡ | Design & Animation | Comprehensive logo design skill — brief → research → concepts → checkpoint (user picks direction) → productio… |
| 94 | [simslim](#t94) | 🗃️ | Dev Tools | Run more iOS simulators on one Mac by disabling background daemons a simulator doesn't need. A fresh iOS simu… |
| 95 | [Ant Design CLI/MCP](#t95) | 🔌 | Design & Animation | Official Ant Design MCP server + agent skill — 8 tools for component props, docs, demos, design tokens, chang… |
| 96 | [UI Builder](#t96) | 🗃️ | Design & Animation | Open-source Figma-style drag & drop visual editor that drops into your React app — uses your existing compone… |
| 97 | [FluidVoice](#t97) | 🗃️ | Utility | Fastest macOS on-device dictation app — Parakeet, Nemotron, or Whisper models run fully locally. No cloud, no… |
| 98 | [stageshow](#t98) | ⚡ | Design & Animation | Benji Taylor's (X head of design) skill for building faux product UI and animated demos — cursor animations,… |
| 99 | [unslop](#t99) | ⚡ | Design & Animation | Turns vibecoded, AI-looking UI into a designed interface — audits for purple gradients, glows, emoji labels,… |
| 100 | [emilkowalski/skills (full)](#t100) | ⚡ | Design & Animation | 10+ design-engineering skills by Emil Kowalski (250k+ installs) — includes animate (easing/duration rules), r… |
| 101 | [ghidra-mcp](#t101) | 🔌 | Security | Production-ready MCP server giving Claude 193+ tools for Ghidra binary analysis — decompile functions, run/ma… |
| 102 | [BLA](#t102) | 🔌 | Security | Blind LLM Agents — defensive shield that protects your binaries, Electron apps, JS bundles, Python, and WebAs… |
| 103 | [floorplan](#t103) | 🗃️ | Engineering | Claude Code / Codex plugin that reads your codebase and draws an interactive, plain-English map of every part… |
| 104 | [Elephant-Goldfish Model](#t104) | ⚡ | Engineering | Google's internal AI coding workflow (Apache 2.0) — Elephant holds full project context and authors the desig… |
| 105 | [Coolify](#t105) | 🗃️ | Infrastructure | Open-source, self-hostable PaaS alternative to Vercel, Heroku & Netlify — deploy static sites, databases, ful… |
| 106 | [earshot](#t106) | 🔌 | AI & LLM | Ears for coding agents — gives Claude the ability to listen to, review, and create sound. CLI + MCP server +… |
| 107 | [memvid](#t107) | 🗃️ | AI & LLM | Single-file AI memory layer inspired by video encoding — stores, indexes, and retrieves knowledge from one .m… |
| 108 | [LEANN](#t108) | 🗃️ | AI & LLM | MLSys 2026 Best Paper — on-device private RAG with 97% storage savings vs standard vector DBs. HNSW + DiskANN… |
| 109 | [paul-graham-skills](#t109) | ⚡ | AI & LLM | 5 behavioral discipline skills distilled from ~37 Paul Graham essays — each a SKILL.md you load into Claude C… |
| 110 | [3d-model-anything](#t110) | 🗃️ | Design & Animation | iPhone LiDAR scan + photos → editable Three.js 3D room scene, powered by an AI coding agent (Claude Code or C… |
| 111 | [browsentic](#t111) | 🗃️ | Dev Tools | Agentic browser harness — AI side panel + orb in your own logged-in Chrome, Edge, Arc, Brave, or Firefox, dri… |
| 112 | [Hallmark](#t112) | ⚡ | Design & Animation | Anti-AI-slop design skill by Nutlope (Hassan El Mghari) — makes AI-generated UIs look made, not generated. 48… |
| 113 | [Unsloth](#t113) | 🗃️ | AI & LLM | Fast LLM fine-tuning — 2–5× faster, 70% less VRAM than standard training. Supports 500+ open-source models (L… |
| 114 | [Postiz](#t114) | 🗃️ | Marketing | The ultimate agentic social media scheduling platform — schedule, automate, and analyze posts across Instagra… |
| 115 | [GameDev Resources](#t115) | 🗃️ | Collections | Curated list of game development resources covering 2D/3D engines & frameworks (Godot, Unity, Phaser, Three.j… |
| 116 | [system_prompts_leaks](#t116) ⚠️ | 🗃️ | Security | Grey-area — extracted system prompts, not officially released. Full system prompts of 30+ AI tools: ChatGPT,… |
| 117 | [CL4R1T4S](#t117) ⚠️ | 🗃️ | Security | Grey-area — extracted system prompts, not officially released. By Pliny the Liberator (elder-plinius, TIME100… |
| 118 | [Skillry](#t118) 💳 | 🗃️ | Collections | Paid — skill and prompt library with curated Claude skills and video walkthroughs including Opus 5.5 demos |
| 119 | [21st.dev](#t119) | 🗃️ | Design & Animation | AI-ready UI component registry — ship polished React components built for AI-assisted development |
| 120 | [Supahero](#t120) | 🗃️ | Design & Animation | Hero section design inspiration library — curated collection of landing-page hero patterns for rapid reference |
| 121 | [WhatShips](#t121) | 🗃️ | Marketing | 2,000+ startup launch videos from X — curated library of real product launches to study shipping strategies |
| 122 | [Motion.dev](#t122) | 🗃️ | Design & Animation | Open-source animation library for React, JS and Vue (formerly Framer Motion) — gestures, layout animations, s… |
| 123 | [JoyAI-Video-Edit](#t123) | 🗃️ | Video Analysis | Real-time streaming AI video editing — text-driven edits on live video via HuggingFace inference, 2k ⭐ |
| 124 | [Instagram Agent Skill](#t124) | ⚡ | Marketing | 13 Claude skills for Instagram — automate posting, caption writing, hashtag research, analytics, and DM workf… |
| 125 | [ClaudeAnimationBase](#t125) | 🗃️ | Design & Animation | Hand-painted cartoon animation starter kit with p5.js — generative art and animation base used with Claude, 2… |
| 126 | [agent-desktop](#t126) | 🗃️ | Dev Tools | Computer use CLI for AI agents via accessibility tree — Vercel Labs tool enabling agents to control the deskt… |
| 127 | [ClearCam](#t127) | 🗃️ | Security | Self-hosted AI security camera NVR with real-time object detection — runs locally on Mac/Linux, 2k ⭐ |
| 128 | [Kubai Icons](#t128) | ⚡ | Design & Animation | Claude skill for generating animated SVG icons on demand — describe the icon, get back polished SVG with anim… |
| 129 | [Pinky](#t129) | 🗃️ | Utility | Let AI agents use your phone, with you in the loop — by DIYgod, bridges AI agents to your mobile device safely |
| 130 | [UI-TARS Desktop](#t130) | 🗃️ | Engineering | Open-source multimodal AI agent stack by ByteDance — connects cutting-edge AI models and agent infra, 39.6k ⭐ |
| 131 | [Mercury Agent](#t131) | 🗃️ | AI & LLM | Soul-driven AI agent with permission-hardened tools, token budgets, and multi-channel access — runs 24/7 from… |
| 132 | [Sophon-Realtime](#t132) | 🗃️ | AI & LLM | Open full-duplex voice model family — hears tone, laughs and sighs in replies. #1 open model on VoiceBench. A… |
| 133 | [EG2 Transcribe](#t133) | 🗃️ | Utility | EmbeddingGemma 2 turned into speech-to-text — transcribes 1 hour of audio in 13 seconds on base MacBook Air.… |
| 134 | [Reverse Engineer Marketing](#t134) | 🔌 | Marketing | Paste a URL, get the whole marketing machine — paid ads, SEO, social, founders, funnel. CLI + MCP server + lo… |
| 135 | [p5.brush](#t135) | 🗃️ | Design & Animation | Natural drawing for p5.js — pencils, markers, watercolor, oil paint and more. Brush Maker with live preview i… |
| 136 | [AndroidAutoMaker](#t136) | 🗃️ | Dev Tools | Make any app run on Android Auto — takes an APK/XAPK and prepares it as a parked game on your car screen |
| 137 | [Genex Desktop](#t137) | 🗃️ | Dev Tools | Open-source AI desktop app for game dev — agents build, test and iterate in Unreal Engine, Unity, Godot or Th… |
| 138 | [motionmaxxing](#t138) | ⚡ | Design & Animation | Looksmaxxing for motion graphics — Claude Code skill that turns AI slop videos into films that look motion-de… |
| 139 | [Cloud Mail](#t139) | 🗃️ | Infrastructure | Cloudflare-based self-hosted email service — send/receive with attachments, RBAC, Workers AI for OTP recognit… |
| 140 | [Caldo Skills](#t140) | ⚡ | Dev Tools | Caldo plugin marketplace for Claude Code — includes untangle-codebase skill that maps and cleans up messy cod… |
| 141 | [Orion](#t141) 💳 | 🗃️ | Marketing | SaaS — predicts where each visitor looked from session replays with no webcam, scores every visit for frictio… |

---

## Details by category

### AI & LLM

<a id="t1"></a>
#### #1 · LLM Council — ⚡ Skill

Multi-LLM consensus — routes queries across models and synthesises a council answer

🔗 https://github.com/aiwithremy/claude-skills-llm-council  

```bash
npx skills add aiwithremy/claude-skills-llm-council
```

`#llm #council #reasoning`

<a id="t2"></a>
#### #2 · Context Engineering — ⚡ Skill

Better agent context management — structuring, pruning, and injecting context

🔗 https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering  

```bash
npx skills add muratcankoylan/Agent-Skills-for-Context-Engineering
```

`#context #agent #engineering #prompt`

<a id="t27"></a>
#### #27 · Superpowers — ⚡ Skill

Complete agentic dev methodology — spec → plan → subagent-driven TDD. Works across Claude Code, Cursor, Codex, and 10+ agents. 246k ⭐

🔗 https://github.com/obra/superpowers  

```bash
# Official Claude marketplace (easiest)
/plugin install superpowers@claude-plugins-official

# Or via Superpowers marketplace
/plugin marketplace add obra/superpowers-marketplace
/plugin install superpowers@superpowers-marketplace
```

`#methodology #tdd #subagent #planning #workflow`

<a id="t28"></a>
#### #28 · G-stack — ⚡ Skill

Garry Tan's (YC) exact Claude Code setup — 23 opinionated skills covering CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA roles

🔗 https://github.com/garrytan/gstack  

```bash
npx skills add garrytan/gstack
# Or clone and follow setup script
git clone https://github.com/garrytan/gstack && ./gstack/setup
```

`#yc #workflow #roles #engineering #setup`

<a id="t29"></a>
#### #29 · Karpathy Skills — ⚡ Skill

CLAUDE.md skill derived from Andrej Karpathy's observations on LLM coding pitfalls — don't assume, simplify, state assumptions, goal-driven execution

🔗 https://github.com/multica-ai/andrej-karpathy-skills  

```bash
npx skills add multica-ai/andrej-karpathy-skills
```

`#karpathy #guidelines #llm #pitfalls #best-practice`

<a id="t70"></a>
#### #70 · Laya — 🗃️ Git Repo

Free, open-source, Jev-compatible System-1 decision model by Convai Innovations — runs locally via Node.js + ONNX Runtime, no Python, no API key. Same request/response shape as TypeSafe Jev API. Give it a state (ticket, email, JSON) + typed questions → calibrated probabilities in one forward pass: choice (pick one), score (ordered rubric), noul (P(true) for yes/no). ~140ms on Apple Silicon, ~1.7GB model weights. Free drop-in for Jev in any agent pipeline

🔗 https://github.com/receptron/laya  

```bash
npm install @receptron/laya
# Node.js 20+ required
# Weights (~1.7GB) download from HuggingFace on first use
# ~/.cache/receptron-laya

# Usage:
# import { Laya } from "@receptron/laya"
# const laya = await Laya.load()
# const result = await laya.systemOne(state, questions)
```

`#system-one #decision-model #onnx #local #free #jev-compatible #choice #score #noul #typescript #no-api`

<a id="t72"></a>
#### #72 · MiniCPM — 🗃️ Git Repo

SOTA on-device LLMs by OpenBMB — small but powerful. MiniCPM5 (2B params) uses standard LlamaForCausalLM architecture, loads in any inference engine with no custom kernels or forks. Runs locally on phones, laptops, edge devices. Benchmarks rival much larger models. Free, open-source

🔗 https://github.com/OpenBMB/MiniCPM  

```bash
git clone https://github.com/OpenBMB/MiniCPM
# Load with any standard inference engine (llama.cpp, vLLM, transformers, Ollama)
# Example with Ollama:
ollama run minicpm
# Or with transformers:
# pip install transformers && python -c "from transformers import AutoModelForCausalLM, AutoTokenizer; ..."
```

`#on-device #small-model #llm #edge #local #2b #efficient #openbmb`

<a id="t74"></a>
#### #74 · OmniChar Studio — 🗃️ Git Repo

AI character studio for portable identity — build multi-model consistent characters, train LoRAs, and generate on your own GPU. Free-form node canvas for building generative pipelines frame-by-frame. Inline Core engine does actual image/video generation via diffusion models (Z-Image Turbo + others) locally, plus closed models via fal.ai. GPL-3.0, free

🔗 https://github.com/omnichar/OmniChar  

```bash
git clone https://github.com/omnichar/OmniChar
cd OmniChar
# Single repo: UI client + Inline Core Python engine, runs on one process/port
# Follow README for setup — local generation + training costs nothing
```

`#character #lora #training #identity #diffusion #ai-generation #local #canvas #pipeline #gpu`

<a id="t81"></a>
#### #81 · jev-trade ⚠️ — 🗃️ Git Repo

⚠️ Paper trading only — no broker connection, no real money. Market-data trading simulator powered by auditable Jev judgments. Freezes Jev's typed view of a stock before the outcome is known, applies deterministic risk + paper-trading rules, scores the result against simple baselines. A public experiment testing Jev decision quality on markets. Also: aowang-ai/jev-trade runs live on Hyperliquid (real trading, use with caution)

🔗 https://github.com/rikkooo/jev-trade  

```bash
git clone https://github.com/rikkooo/jev-trade
# Requires TYPESAFE_API_KEY for Jev
# Paper trading simulator — no real orders placed
# See README for setup and Evidence Lab docs
```

`#trading #simulation #jev #typesafe #paper-trading #market-data #finance #experiment`

<a id="t82"></a>
#### #82 · TinyTTS — 🗃️ Git Repo

Ultra-lightweight end-to-end text-to-speech model — 1.62M parameters, 3.4MB. Synthesizes ~5s of 44.1kHz natural speech in 92ms via ONNX (≈53× real-time on laptop CPU). No GPU needed. Runs fully local. Also: pschatzmann/TinyTTS is a pure C++ neural TTS for microcontrollers with no runtime dependencies

🔗 https://github.com/tronghieuit/tiny-tts  

```bash
git clone https://github.com/tronghieuit/tiny-tts
# ONNX runtime — pip install onnxruntime
# Model: 3.4MB, runs on CPU
# For microcontrollers: github.com/pschatzmann/TinyTTS (pure C++)
```

`#tts #local #onnx #lightweight #cpu #edge #fast #offline`

<a id="t83"></a>
#### #83 · swarmLLM — 🗃️ Git Repo

Peer-to-peer LLM inference across browser tabs — every device brings a slice, together they run the whole model. From-scratch WebGPU engine + WebRTC runtime split a 27B model over devices in a room. A 10KB activation vector passes between devices over direct WebRTC. Achieves 9 tok/s (16 tok/s with speculative decoding) on a GB10. Also: enapt/SwarmLLM is a decentralized P2P LLM network — single Rust binary, BitTorrent-inspired incentives, OpenAI-compatible API

🔗 https://github.com/jm00517/swarmllm  

```bash
# Browser-based — open the URL in Chrome on each device
git clone https://github.com/jm00517/swarmllm
# All devices in same room join the swarm via WebRTC
# Each holds a slice of the 27B model

# Rust/API alternative:
git clone https://github.com/enapt/SwarmLLM
```

`#p2p #distributed #webgpu #webrtc #inference #27b #browser #swarm #decentralized #local`

<a id="t85"></a>
#### #85 · Kev — 🗃️ Git Repo

Open-source Jev-inspired decision model by Jared Palmer — LoRA adapter + small readout head on Qwen2.5-0.5B. Reads a document once and answers many typed questions in parallel in one forward pass (no decoding). Drop-in API replacement for TypeSafe's Jev: same TypeSafe SDK works unmodified with a base_url change. ~160ms on Apple M5, trains in ~1h45m. 79.7% accuracy vs Jev's 81.1% (in-distribution). Three question types: noul (yes/no), choice (2-255 options), score (ordered levels). Apache-2.0, free, runs fully local. Includes a playground + chess demo. Alternative to Laya (#70)

🔗 https://github.com/jaredpalmer/kev  

```bash
git clone https://github.com/jaredpalmer/kev.git && cd kev
uv sync --extra serve

# Download weights (Qwen2.5-0.5B base)
uv run --extra serve python -m kev.serve --run jaredpalmer/kev-0.5b --port 8009

# Use TypeSafe SDK with local server:
# client = TypeSafeClient(api_key="local", base_url="http://127.0.0.1:8009", model="kev-latest")

# Playground
cd playground && npm install && npm run dev -- -p 3001
```

`#decision-model #jev-compatible #lora #qwen #local #free #choice #noul #score #typed #apache2 #jaredpalmer`

<a id="t86"></a>
#### #86 · MiroFish — ⚡ Skill

AI simulation chat for scenario prediction — turn text, PDF, MD, or TXT into graph building, multi-agent simulation, reporting, and follow-up chat in one continuous workflow. Extracts actors/relationships into a knowledge graph, runs personas across simulated social surfaces over multiple rounds, generates a prediction report (turning points, risks, confidence signals), then lets you keep asking questions against the generated world. Use cases: campaign pressure testing, pricing reaction modeling, policy stress tests, market narrative simulation. Web app, no install

🔗 https://mirofish.homes  

```bash
# Web app — visit mirofish.homes
# Start with a plain-language question
# Optionally attach PDF, MD, or TXT as seed material
# Workflow: seed → knowledge graph → agent simulation → prediction report → follow-up chat
```

`#simulation #prediction #multi-agent #scenario #knowledge-graph #persona #narrative #market #policy #web`

<a id="t106"></a>
#### #106 · earshot — 🔌 MCP

Ears for coding agents — gives Claude the ability to listen to, review, and create sound. CLI + MCP server + two agent skills (earshot and real-sound). Includes a 201-sound code-generated library, sfx timing to exact frames, and an optional Gemini-backed audio critique. CPU-only, open source, ~3k ⭐

🔗 https://github.com/Leonxlnx/earshot  

```bash
claude mcp add earshot -- earshot mcp
# Check with /mcp in Claude Code
# Skills: earshot (describe/find/create sound) + real-sound (code-generated SFX)
```

`#audio #sound #sfx #mcp #skill #critique #video #earshot #cpu #open-source #generative-audio`

<a id="t107"></a>
#### #107 · memvid — 🗃️ Git Repo

Single-file AI memory layer inspired by video encoding — stores, indexes, and retrieves knowledge from one .mv2 file with hybrid lexical + semantic search. Drop-in replacement for RAG pipelines. +35% SOTA on LoCoMo (project's own claim). Apache 2.0

🔗 https://github.com/memvid/memvid  

```bash
pip install memvid
# or
uv pip install memvid

# Usage:
# from memvid import MemVid
# mv = MemVid()
# mv.add("your knowledge here")
# results = mv.search("query")
```

`#memory #rag #search #hybrid #semantic #lexical #knowledge #single-file #embeddings #retrieval`

<a id="t108"></a>
#### #108 · LEANN — 🗃️ Git Repo

MLSys 2026 Best Paper — on-device private RAG with 97% storage savings vs standard vector DBs. HNSW + DiskANN backends, incremental adds/removes, hybrid vector + BM25 search. Code-focused MCP server and multimodal (image-text via CLIP) on roadmap. `uv pip install leann`. Apache 2.0

🔗 https://github.com/StarTrail-org/LEANN  

```bash
uv pip install leann
# DiskANN extra (better performance):
uv pip install "leann[cpu]"
# macOS extra setup needed — see README

# Usage:
# from leann import LEANN
# db = LEANN()
# db.add(documents)
# db.search("query")
```

`#rag #vector-db #hnsw #diskann #bm25 #hybrid #local #private #on-device #embeddings #mlsys #efficient`

<a id="t109"></a>
#### #109 · paul-graham-skills — ⚡ Skill

5 behavioral discipline skills distilled from ~37 Paul Graham essays — each a SKILL.md you load into Claude Code. Includes "discover-not-persuade" (don't switch modes under pressure) and 4 others. Apache 2.0

🔗 https://github.com/WinterDDo/paul-graham-skills  

```bash
git clone https://github.com/WinterDDo/paul-graham-skills
# Copy individual skill directories into ~/.claude/skills/
# Claude auto-discovers them at session start
```

`#paul-graham #essays #behavior #discipline #mindset #founder #discover #execution #principles`

<a id="t113"></a>
#### #113 · Unsloth — 🗃️ Git Repo

Fast LLM fine-tuning — 2–5× faster, 70% less VRAM than standard training. Supports 500+ open-source models (LLaMA, Mistral, Qwen, Phi, Gemma, DeepSeek, vision, embedding, TTS). Methods: LoRA, QLoRA, 4-bit, SFT, DPO, ORPO, GRPO, full fine-tuning, RL. Can fine-tune 8B models on a single 12 GB GPU. Includes Unsloth Studio (web UI). Apache 2.0, 35k+ ⭐

🔗 https://github.com/unslothai/unsloth  

```bash
pip install unsloth
# Or with extras:
pip install "unsloth[colab-new] @ git+https://github.com/unslothai/unsloth.git"
# Run notebooks on Google Colab or local GPU
```

`#llm #fine-tuning #lora #qlora #training #gpu #llama #mistral #qwen #deepseek #rl #dpo #grpo #open-source`

<a id="t131"></a>
#### #131 · Mercury Agent — 🗃️ Git Repo

Soul-driven AI agent with permission-hardened tools, token budgets, and multi-channel access — runs 24/7 from CLI, Telegram or more

🔗 https://github.com/cosmicstack-labs/mercury-agent  

```bash
git clone https://github.com/cosmicstack-labs/mercury-agent
```

`#agent #telegram #cli #24/7 #permissions #token-budget #multi-channel`

<a id="t132"></a>
#### #132 · Sophon-Realtime — 🗃️ Git Repo

Open full-duplex voice model family — hears tone, laughs and sighs in replies. #1 open model on VoiceBench. Apache-2.0, 32B

🔗 https://github.com/adventists-ai/sophon-realtime  

```bash
pip install sophon-realtime && sophon-realtime serve
```

`#voice #full-duplex #realtime #speech #tts #stt #llm #open-source`

### Design & Animation

<a id="t3"></a>
#### #3 · UI/UX Pro Max — ⚡ Skill

Expert-level UI/UX design skill with creative direction capabilities

🔗 https://ui-ux-pro-max-skill.nextlevelbuilder.io  

```bash
npx claude-code-templates@latest --skill creative-design/ui-ux-pro-max
```

`#ui #ux #design #creative`

<a id="t4"></a>
#### #4 · Emil Kowalski — ⚡ Skill

Design-focused skill by Emil Kowalski — motion, polish, and interaction detail

🔗 https://emilkowal.ski/skill  

```bash
npx skills add emilkowalski/skill
```

`#design #motion #interaction #polish`

<a id="t5"></a>
#### #5 · Taste Skill — ⚡ Skill

Adds aesthetic taste and visual judgment to Claude's output

🔗 https://github.com/Leonxlnx/taste-skill  

```bash
npx skills add https://github.com/Leonxlnx/taste-skill
```

`#taste #aesthetics #design`

<a id="t6"></a>
#### #6 · AntV Infographic — ⚡ Skill

AntV-powered infographic and data visualisation generation

🔗 https://github.com/antvis/Infographic  

```bash
/plugin marketplace add https://github.com/antvis/Infographic.git
```

`#infographic #dataviz #antv #charts`

<a id="t7"></a>
#### #7 · Graphify — ⚡ Skill

Generate charts and graphs directly from Claude output

🔗 https://github.com/safishamsi/graphify  

```bash
pip install graphifyy && graphify install
```

`#charts #dataviz`

<a id="t8"></a>
#### #8 · Ponytail — ⚡ Skill

Tailwind-focused UI component skill for building polished interfaces

🔗 https://github.com/DietrichGebert/ponytail  

```bash
npx skills add DietrichGebert/ponytail
```

`#tailwind #ui #components`

<a id="t9"></a>
#### #9 · GSAP Skills (official) — ⚡ Skill

Official GreenSock GSAP animation skill — timelines, ScrollTrigger, and more

🔗 https://github.com/greensock/gsap-skills  

```bash
/plugin marketplace add greensock/gsap-skills
```

`#gsap #animation #greensock #scroll`

<a id="t10"></a>
#### #10 · Spline 3D Integration — ⚡ Skill

3D design integration via Spline — install through mcpmarket

🔗 https://mcpmarket.com/tools/skills/spline-3d-integration  

```bash
# Install via mcpmarket
# Visit: https://mcpmarket.com/tools/skills/spline-3d-integration
```

`#spline #3d #design`

<a id="t13"></a>
#### #13 · Impeccable v4.0 — ⚡ Skill

v4.0 ↑ Design language skill — auto-detects job type (greenfield / redesign / refinement), generates 7 direction options, and gives each job the right amount of creative freedom. Redesigns replace, not polish

🔗 https://github.com/pbakaus/impeccable  

```bash
npx impeccable skills install
```

`#design #ui #redesign #greenfield #directions #quality #frontend`

<a id="t16"></a>
#### #16 · 21st.dev Magic — 🔌 MCP

AI-powered UI component generation from 21st.dev design system

🔗 https://github.com/21st-dev/magic-mcp  

```bash
npx -y @21st-dev/magic@latest
```

`#ui #components #ai-generation #magic`

<a id="t17"></a>
#### #17 · Framer MCP — 🔌 MCP

Connect Claude directly to Framer for design and layout generation

🔗 https://www.framer.com/marketplace/plugins/mcp/  

```bash
Install via the Framer app → Marketplace → MCP plugin
```

`#framer #design #prototyping #web`

<a id="t18"></a>
#### #18 · Spline MCP ⚠️ — 🔌 MCP

⚠️ Currently broken — no public Spline API yet. Watch the repo for updates

🔗 https://github.com/aydinfer/spline-mcp-server  

```bash
claude mcp add-json "spline-design" ...
# ⚠️ Broken — no public Spline API yet
```

`#spline #3d #broken #watch`

<a id="t19"></a>
#### #19 · GSAP Master MCP — 🔌 MCP

GSAP animation MCP server — advanced timelines and scroll effects

🔗 https://github.com/bruzethegreat/gsap-master-mcp-server  

```bash
claude mcp add-json gsap-master ...
# See repo for full JSON config
```

`#gsap #animation #greensock`

<a id="t25"></a>
#### #25 · Mobbin MCP 💳 — 🔌 MCP

💳 Paid (Mobbin Pro $10/mo). Access to 620k+ real app screens and 140k+ user flows as live UI reference for Claude

🔗 https://mobbin.com/mcp  

```bash
claude mcp add mobbin --scope user --transport http https://api.mobbin.com/mcp
# Then authenticate via browser with your Mobbin account
```

`#design #ui #screens #reference #flows #paid`

<a id="t40"></a>
#### #40 · Front-end Design — ⚡ Skill

Official Anthropic front-end design skill — UI/component design, styling, and layout guidance (frontend-design folder in anthropics/skills)

🔗 https://github.com/anthropics/skills/tree/main/skills/frontend-design  

```bash
Available on Claude.ai paid plans
```

`#frontend #design #ui #components #css #official`

<a id="t45"></a>
#### #45 · Uiverse — 🗃️ Git Repo

Largest community-built library of open-source UI elements — 7,400+ buttons, cards, loaders, forms, tooltips, backgrounds. Copy as HTML/CSS, Tailwind, React, or Figma. MIT licensed, 100% free

🔗 https://github.com/uiverse-io/galaxy  

```bash
Paste any Uiverse element's code into Claude and ask it to theme, extend, or adapt it to your design system
```

`#ui #components #css #tailwind #react #figma #free #library #open-source`

<a id="t46"></a>
#### #46 · Scroll-World 💳 — ⚡ Skill

💳 Paid (AI image + video credits). Builds a scroll-scrubbed "fly through the world" 3D landing page for any brand — camera flies from outside each scene into its interior with no cuts. Interviews you → generates AI isometric dioramas + video clips → wires up a portable scroll engine. 8k ⭐

🔗 https://github.com/oso95/scroll-world  

```bash
# Claude Code plugin (recommended)
/plugin marketplace add oso95/scroll-world
/plugin install scroll-world@scroll-world

# Or via skills CLI (Codex, Cursor, etc.)
npx skills add oso95/scroll-world

# Requires: Monid CLI + Higgsfield CLI + ffmpeg + Python 3 + Pillow
```

`#3d #scroll #landing-page #animation #video #brand #immersive #ai-generation`

<a id="t47"></a>
#### #47 · Refero MCP 💳 — 🔌 MCP

💳 Paid (Refero subscription). Connects Claude to 135k+ real product screens and 10k+ full user flows. Agent researches actual UI references before generating code — instead of guessing "make it clean", it studies how real products solve the same problem

🔗 https://refero.design/mcp  

```bash
Add via Claude.ai connector settings or:
claude mcp add refero --transport http https://refero.design/mcp
# Requires a Refero account
```

`#design #ui #ux #reference #screens #flows #inspiration #paid`

<a id="t53"></a>
#### #53 · better-ui — ⚡ Skill

UI polish principles — concentric border radius, optical alignment, layered shadows, interruptible animations, stagger/enter/exit transitions, contextual icon animations, scale-on-press (0.96), image outlines, 44px hit areas. Outputs before/after review tables

🔗 https://github.com/jakubkrehel/skills/tree/main/skills/better-ui  

```bash
npx skills add jakubkrehel/skills
# Installs all better-* skills from this repo
# Or individually: clone and copy skills/better-ui/ to ~/.claude/skills/
```

`#ui #polish #animation #shadows #border-radius #micro-interactions #hover #design`

<a id="t54"></a>
#### #54 · better-typography — ⚡ Skill

Web typography — font formats (.woff2), variable fonts, type scale, line-height by role, letter-spacing by size, text-wrap (balance/pretty), tabular numbers on changing values, iOS 16px input rule, WCAG contrast floors, RTL logical properties. Works in any styling system

🔗 https://github.com/jakubkrehel/skills/tree/main/skills/better-typography  

```bash
npx skills add jakubkrehel/skills
```

`#typography #fonts #type-scale #line-height #tabular-nums #text-wrap #rtl #woff2`

<a id="t55"></a>
#### #55 · better-colors — ⚡ Skill

OKLCH color space for web — converts hex/hsl to oklch, generates palettes with stable hue, checks APCA/WCAG contrast, handles gamut boundaries, derives dark mode by reversing L mapping. Covers Tailwind v4 @theme. Eliminates hue drift and broken palettes

🔗 https://github.com/jakubkrehel/skills/tree/main/skills/better-colors  

```bash
npx skills add jakubkrehel/skills
```

`#oklch #colors #palette #contrast #dark-mode #gamut #tailwind #apca #wcag`

<a id="t56"></a>
#### #56 · better-accessibility — ⚡ Skill

Accessibility engineering — focus rings (:focus-visible), full keyboard support (APG patterns), focus trapping, ARIA semantics, form labels/errors, screen reader live regions, alt text rules, prefers-reduced-motion, minimum hit areas. Outputs severity-rated findings tables

🔗 https://github.com/jakubkrehel/skills/tree/main/skills/better-accessibility  

```bash
npx skills add jakubkrehel/skills
```

`#accessibility #wcag #aria #keyboard #focus #screen-reader #reduced-motion`

<a id="t57"></a>
#### #57 · better-layout — ⚡ Skill

Layout structure — group with space not lines, align to shared edges, logical properties for RTL (margin-inline-start), progressive disclosure affordances, breathing room between targets, container queries over device breakpoints, plan for i18n string growth

🔗 https://github.com/jakubkrehel/skills/tree/main/skills/better-layout  

```bash
npx skills add jakubkrehel/skills
```

`#layout #spacing #alignment #rtl #breakpoints #container-queries #responsive #whitespace`

<a id="t58"></a>
#### #58 · apple-design — ⚡ Skill

Fluid interface principles from Apple WWDC design talks (esp. Designing Fluid Interfaces 2018) — spring animations, gesture-driven UI, drag/swipe/sheet interactions, translucent materials (vibrancy), momentum and interruptible transitions. Distinct from Emil's general design skill (#4)

🔗 https://github.com/emilkowalski/skills/tree/main/skills/apple-design  

```bash
npx skills add emilkowalski/skills --skill apple-design
# Or install all emilkowalski skills:
npx skills add emilkowalski/skills
```

`#apple #ios #fluid #spring #gesture #drag #swipe #vibrancy #motion #wwdc`

<a id="t64"></a>
#### #64 · ThreeUI 💳 — 🗃️ Git Repo

Meng To's (Design+Code) React component library — 50 community parent components, 164 variants with live interactive renderers, variant picker, and complete source. Three.js runtime baked in for 3D-style visuals. Community edition is free/MIT. Pro 💳 unlocks more components via CLI (OAuth-gated). npm: @designcodeio/threeui

🔗 https://github.com/MengTo/threeui  

```bash
# Install community package
npm install @designcodeio/threeui

# Import a component
# import { AtTheHorizon } from "@designcodeio/threeui"
# import "@designcodeio/threeui/style.css"

# Pro: add specific components (requires threeui.com account)
npx @designcodeio/threeui-cli add <component-name>

# Run community catalog locally
npm install && npm run dev
```

`#react #components #threejs #3d #animation #ui #library #designcode #mengto #interactive`

<a id="t65"></a>
#### #65 · MengTo Skills — ⚡ Skill

Agent skills by Meng To for designers and builders — UI design-first prompting, Three.js game development, web design, landing pages, and reusable frontend workflows. Works with Claude Code, Codex, Cursor, and other AI coding agents. Covers turning references into prompts, generating rich landing pages, and building playable Three.js systems

🔗 https://github.com/MengTo/Skills  

```bash
npx skills add MengTo/Skills
# Installs all skills: ui prompting, game-dev (Three.js), web design
# Or browse and install individual skills from the repo
```

`#ui #design #threejs #gamedev #landing-page #prompt #frontend #mengto #skill`

<a id="t88"></a>
#### #88 · dimensional-drawing — ⚡ Skill

Turns any UI component (repo file, Storybook story, URL, or screenshot) into a one-page, monochrome Apple-style technical spec drawing. Companion skill dimensional-drawing-motion animates the finished sheet into a ~10-second video via Claude Motion or headless Playwright + ffmpeg. MIT licensed, ~414 ⭐

🔗 https://github.com/enesozturk/dimensional-drawing  

```bash
# Claude Code
npx skills add enesozturk/dimensional-drawing

# Or both skills at once
npx skills add enesozturk/dimensional-drawing enesozturk/dimensional-drawing-motion

# Claude.ai / Desktop: zip the skills/ folder and upload under Settings → Capabilities → Skills
```

`#design #apple #technical-drawing #spec #svg #animation #motion #monochrome #components #ui`

<a id="t89"></a>
#### #89 · Rive MCP — 🔌 MCP

Official Rive MCP server — connects Claude to the Rive editor to edit scenes, state machines, and animations in-editor. Also: community rive-mcp (ODU33104) is editor-free with 32 tools for creating, inspecting, rendering, and live-previewing .riv files from Claude Code without opening Rive at all

🔗 https://rive.app/docs/editor/ai/mcp  

```bash
# Official (in-editor)
# Open Rive desktop app → enable MCP server (Early Access)
claude mcp add --transport http rive http://127.0.0.1:9791/mcp
```

`#rive #animation #state-machine #interactive #motion #mcp #official #community #riv`

<a id="t90"></a>
#### #90 · MagicPath 💳 — 🗃️ Git Repo

💳 Freemium (Pro $29/mo). AI UI design tool on an infinite canvas — text prompt → high-quality UI screens + components. MagicPath 2.0 (May 2026) adds a multiplayer canvas where Claude Code, Codex, or Cursor agents build screens in parallel in real time. Exports production-ready React, TypeScript, and Tailwind CSS code. Also exports to Figma

🔗 https://www.magicpath.ai/  

```bash
Web app — visit magicpath.ai
# Prompt in plain language → AI generates screens
# Connect Claude Code or Codex via the agent panel (MagicPath 2.0)
```

`#ui #design #canvas #multiplayer #agent #react #tailwind #figma #code-export #ai-design #paid`

<a id="t93"></a>
#### #93 · logo-design-skill — ⚡ Skill

Comprehensive logo design skill — brief → research → concepts → checkpoint (user picks direction) → production-ready SVG files + brand guidelines. Includes a 1,400+ classified SVG reference library to study construction and avoid look-alikes, plus dependency-free Python tools for SVG auditing, test sheets, presentation boards, and favicon/app-icon export. By Kaan Kızıltuğ. MIT licensed, ~5k ⭐

🔗 https://github.com/kaankiziltug/logo-design-skill  

```bash
# Claude Code plugin
/plugin marketplace add kaankiziltug/logo-design-skill

# Or via skills CLI
npx skills add kaankiziltug/logo-design-skill

# Lite version (no SVG library, smaller zip) also available in releases
```

`#logo #branding #svg #identity #design #reference #icons #favicon #python #audit`

<a id="t95"></a>
#### #95 · Ant Design CLI/MCP — 🔌 MCP

Official Ant Design MCP server + agent skill — 8 tools for component props, docs, demos, design tokens, changelogs, linting, and migration guides. Works offline with bundled metadata. Claude Code is a supported client. Companion skill teaches agents when to use each command. Part of @ant-design/cli ≥ v6.3.5

🔗 https://github.com/ant-design/ant-design-cli  

```bash
antd setup --client claude
# Configures MCP or skill mode for Claude automatically
```

`#ant-design #antd #components #mcp #skill #docs #tokens #linting #migration #react #offline #official`

<a id="t96"></a>
#### #96 · UI Builder — 🗃️ Git Repo

Open-source Figma-style drag & drop visual editor that drops into your React app — uses your existing components (shadcn/ui, Chakra UI, or any library), lets non-developers build pages and dashboards, and saves layouts as plain JSON for easy versioning. Stack: React + shadcn/ui + Tailwind + Zustand + Zod. Now part of the BTST full-stack toolkit

🔗 https://github.com/olliethedev/ui-builder  

```bash
npm install ui-builder
# Or follow the quick-start guide:
# https://www.uibuilder.app/docs/quick-start

# Integrates with Next.js, React Router, TanStack Start
```

`#drag-drop #visual-editor #react #shadcn #tailwind #json #cms #no-code #components #open-source`

<a id="t98"></a>
#### #98 · stageshow — ⚡ Skill

Benji Taylor's (X head of design) skill for building faux product UI and animated demos — cursor animations, bento grids, React kits. 7-step workflow in SKILL.md, gold examples, self-check scripts. MIT licensed

🔗 https://github.com/benjitaylor/skills/tree/main/stageshow  

```bash
npx skills add benjitaylor/skills --skill stageshow
```

`#demo #animation #ui #bento #react #cursor #faux-product #staging #presentation`

<a id="t99"></a>
#### #99 · unslop — ⚡ Skill

Turns vibecoded, AI-looking UI into a designed interface — audits for purple gradients, glows, emoji labels, shouty copy, and uneven spacing, sets a design direction from your product, then fixes the screen pass by pass. Works on React, Vue, Svelte, Tailwind, or plain HTML/CSS. CC-BY-4.0, ~3.7k ⭐

🔗 https://github.com/heydamir/unslop  

```bash
# Claude Code
# Copy the skill folder into .claude/skills/ (project) or ~/.claude/skills/ (global)
# Then run: /unslop
```

`#ui #design #anti-slop #audit #vibecode #gradient #polish #react #tailwind #svelte`

<a id="t100"></a>
#### #100 · emilkowalski/skills (full) — ⚡ Skill

10+ design-engineering skills by Emil Kowalski (250k+ installs) — includes animate (easing/duration rules), review-animations (strict motion audit), find-animation-opportunities, mobile-native (web-to-app polish), prototype (multi-version UI switcher), apple-design (#58), and more. Install the full set at once

🔗 https://github.com/emilkowalski/skills  

```bash
npx skills@latest add emilkowalski/skills
# Installs all ~11 skills at once
# Or install individually:
npx skills add emilkowalski/skills --skill animate
npx skills add emilkowalski/skills --skill review-animations
npx skills add emilkowalski/skills --skill mobile-native
npx skills add emilkowalski/skills --skill prototype
```

`#design #animation #motion #polish #mobile #prototype #review #easing #emilkowalski #collection`

<a id="t110"></a>
#### #110 · 3d-model-anything — 🗃️ Git Repo

iPhone LiDAR scan + photos → editable Three.js 3D room scene, powered by an AI coding agent (Claude Code or Codex). Includes iPhone capture app, Three.js viewer, and a scan-to-threejs agent skill. Agent renders from same camera positions as reference photos and iterates. MIT licensed

🔗 https://github.com/wesbos/3d-model-anything  

```bash
# Install the agent skill
npx skills add wesbos/3d-model-anything --skill scan-to-threejs

# Workflow:
# 1. Scan a room with the 3D Model Anything iPhone app
# 2. Export the scan
# 3. Ask Claude: "Run scan-to-threejs on this export"
# See wesbos.com/3d-model-anything for full tutorial
```

`#lidar #ios #threejs #3d #room #scan #reconstruction #skill #claude-code #codex`

<a id="t112"></a>
#### #112 · Hallmark — ⚡ Skill

Anti-AI-slop design skill by Nutlope (Hassan El Mghari) — makes AI-generated UIs look made, not generated. 48 design themes, automated checks, and three commands: /hallmark (new page from prompt), /hallmark redesign <path> (rebuild keeping content + wiring), /hallmark audit <path> (report only). Powered by Together AI. MIT licensed, 31k+ ⭐

🔗 https://github.com/nutlope/hallmark  

```bash
npx skills add nutlope/hallmark -g
# -g installs for every project
# Then:
# /hallmark — design a new page
# /hallmark redesign <path> — redesign existing page
# /hallmark audit <path> — audit only
```

`#design #anti-slop #ui #themes #audit #redesign #codex #cursor #claude-code #together-ai`

<a id="t119"></a>
#### #119 · 21st.dev — 🗃️ Git Repo

AI-ready UI component registry — ship polished React components built for AI-assisted development

🔗 https://21st.dev  

```bash
npx shadcn@latest add "https://21st.dev/r/[component]"
```

`#ui #components #react #shadcn #ai-ready #registry`

<a id="t120"></a>
#### #120 · Supahero — 🗃️ Git Repo

Hero section design inspiration library — curated collection of landing-page hero patterns for rapid reference

🔗 https://supahero.io  

```bash
# Browse at https://supahero.io — no install needed
```

`#hero #landing-page #design #inspiration #ui`

<a id="t122"></a>
#### #122 · Motion.dev — 🗃️ Git Repo

Open-source animation library for React, JS and Vue (formerly Framer Motion) — gestures, layout animations, scroll effects

🔗 https://motion.dev  

```bash
npm install motion
```

`#animation #react #vue #framer-motion #gsap #scroll #gesture`

<a id="t125"></a>
#### #125 · ClaudeAnimationBase — 🗃️ Git Repo

Hand-painted cartoon animation starter kit with p5.js — generative art and animation base used with Claude, 2.7k ⭐

🔗 https://github.com/JohnHeibel/ClaudeAnimationBase  

```bash
git clone https://github.com/JohnHeibel/ClaudeAnimationBase
```

`#animation #p5js #generative-art #cartoon #creative-coding #claude`

<a id="t128"></a>
#### #128 · Kubai Icons — ⚡ Skill

Claude skill for generating animated SVG icons on demand — describe the icon, get back polished SVG with animation

🔗 https://github.com/kubai087/kubai-icons  

```bash
git clone https://github.com/kubai087/kubai-icons ~/.claude/skills/kubai-icons
```

`#icons #svg #animated #skill #claude #design`

<a id="t135"></a>
#### #135 · p5.brush — 🗃️ Git Repo

Natural drawing for p5.js — pencils, markers, watercolor, oil paint and more. Brush Maker with live preview included

🔗 https://github.com/acamposuribe/p5.brush  

```bash
npm install p5.brush
```

`#p5js #drawing #generative-art #watercolor #brush #creative-coding #canvas`

<a id="t138"></a>
#### #138 · motionmaxxing — ⚡ Skill

Looksmaxxing for motion graphics — Claude Code skill that turns AI slop videos into films that look motion-designer-made. 117 ⭐

🔗 https://github.com/Tejashmakwana/motionmaxxing  

```bash
git clone https://github.com/Tejashmakwana/motionmaxxing ~/.claude/skills/motionmaxxing && bash ~/.claude/skills/motionmaxxing/install.sh
```

`#motion-graphics #animation #skill #video #gsap #claude-code #design`

### Video Analysis

<a id="t23"></a>
#### #23 · claude-video — 🗃️ Git Repo

Best for reading on-screen text/UI in screen recordings — uniform frame sampling + --resolution flag

🔗 https://github.com/bradautomates/claude-video  

```bash
git clone https://github.com/bradautomates/claude-video
# See repo README for usage
```

`#video #screen-recording #ocr #ui #frames`

<a id="t24"></a>
#### #24 · claude-watch — 🗃️ Git Repo

Best for short-form hook/retention analysis — frame-dense sampling at video start

🔗 https://github.com/alexlarcheveque/claude-watch  

```bash
git clone https://github.com/alexlarcheveque/claude-watch
# See repo README for usage
```

`#video #retention #hooks #analysis`

<a id="t44"></a>
#### #44 · claude-real-video — 🗃️ Git Repo

Scene-aware frame extraction + dedup + Whisper transcript from any URL or local file. Smarter than fixed-interval sampling — grabs frames that matter, skips near-duplicates. Fully local, nothing uploaded

🔗 https://github.com/HUANGCHIHHUNGLeo/claude-real-video  

```bash
# Install (core)
pip install claude-real-video

# With audio transcription
pip install "claude-real-video[whisper]"

# Requires: brew install ffmpeg

# Run
crv "https://youtube.com/watch?v=..."
# → crv-out/frames/ + transcript.txt + MANIFEST.txt
```

`#video #scene-detection #dedup #whisper #transcript #local #youtube`

<a id="t49"></a>
#### #49 · MoneyPrinterTurbo — 🗃️ Git Repo

Give it a topic/keyword → auto-generates script, sources stock footage (Pexels/Pixabay/Coverr), adds TTS voiceover, subtitles (Whisper), background music → renders HD short video (9:16 or 16:9). Has WebUI, API, CLI, Docker. One-click publish to TikTok, Instagram, YouTube Shorts. 102k ⭐

🔗 https://github.com/harry0703/MoneyPrinterTurbo  

```bash
# Docker (easiest)
git clone https://github.com/harry0703/MoneyPrinterTurbo
cd MoneyPrinterTurbo
docker compose -f docker-compose.release.yml up
# WebUI: http://127.0.0.1:8501

# Or local (macOS/Linux)
uv sync --frozen && sh webui.sh

# Or use as Agent Skill directly:
# Ask Claude: "Use this skill: https://raw.githubusercontent.com/harry0703/MoneyPrinterTurbo/main/docs/skill/SKILL.md"
```

`#video #short-form #tiktok #youtube #instagram #ai-generation #tts #subtitles #automation`

<a id="t59"></a>
#### #59 · Pixelle-Video — 🗃️ Git Repo

AI short video engine — topic → script → AI images/video → TTS → final video. Deeper than MoneyPrinterTurbo: ComfyUI/RunningHub workflow support, digital avatar presenter, motion transfer, image-to-video, direct API for Seedance/Kling/Wan/Seedream. Each component swappable. Runs 100% free with Ollama + local ComfyUI

🔗 https://github.com/AIDC-AI/Pixelle-Video  

```bash
# macOS/Linux
git clone https://github.com/AIDC-AI/Pixelle-Video
cd Pixelle-Video
brew install ffmpeg
uv run streamlit run web/app.py
# WebUI: http://localhost:8501

# Windows: download one-click package from releases
```

`#video #short-form #comfyui #avatar #motion-transfer #seedance #kling #tts #ai-generation #free`

<a id="t66"></a>
#### #66 · Palmier Pro 💳 — 🔌 MCP

macOS video editor built for AI agents — Claude, Codex, or Cursor connect via local MCP server and can open a project, build the timeline, make edits, and export the finished video end-to-end. 15+ AI generation models on the same timeline: Seedance 2.5, Kling V3, Runway Aleph 2, FLUX 3, ElevenLabs, GPT Image 2, Topaz upscale, and more. Skills system: edit one video → save the workflow → auto-apply to every video after. Full NLE underneath (trim, keyframes, color grade). Exports XML to Premiere, DaVinci, Final Cut. Editor + MCP free; credits 💳 cover generation. YC S26, 100k+ downloads. macOS 26 (Tahoe) required

🔗 https://www.palmier.io/  

```bash
# Connect Palmier MCP to Claude
# Open Palmier Pro → Settings → MCP
# Then in Claude Code:
claude mcp add palmier -- <palmier-local-mcp-command>
# Or use built-in Palmier Chat (generation credits included on Pro)
```

`#video #editing #mcp #ai-generation #seedance #kling #runway #elevenlabs #nle #skill #macos #yc`

<a id="t80"></a>
#### #80 · Open Higgsfield — 🗃️ Git Repo

Free, self-hosted open-source alternative to Higgsfield AI. Image + video generation from one prompt bar — 40+ text-to-video models, 60+ image-to-video models including Seedance, Kling, Wan, Flux, SDXL, Ideogram, Runway, Recraft. No subscription, no closed ecosystem. MIT licensed. Browser-based, no Node.js setup needed

🔗 https://github.com/thehiggsfieldai/OpenHiggsfield  

```bash
# Browser-based — no install needed
# Visit the hosted version or self-host:
git clone https://github.com/thehiggsfieldai/OpenHiggsfield
# Bring your own API keys for each model
# Or use: github.com/Autom8AI/Open-Higgsfield-AI (Muapi gateway version)
```

`#video #image #ai-generation #seedance #kling #flux #sdxl #self-hosted #free #multi-model #open-source`

<a id="t123"></a>
#### #123 · JoyAI-Video-Edit — 🗃️ Git Repo

Real-time streaming AI video editing — text-driven edits on live video via HuggingFace inference, 2k ⭐

🔗 https://github.com/jd-opensource/JoyAI-Video-Edit  

```bash
git clone https://github.com/jd-opensource/JoyAI-Video-Edit
```

`#video #realtime #streaming #editing #huggingface #text-to-edit`

### Marketing

<a id="t11"></a>
#### #11 · Marketing Skills — ⚡ Skill

Marketing-focused skill set — campaigns, copy, strategy, and positioning

🔗 https://github.com/coreyhaines31/marketingskills  

```bash
npx skills add coreyhaines31/marketingskills
```

`#marketing #copy #campaign #strategy`

<a id="t20"></a>
#### #20 · Windsor.ai — 🔌 MCP

Marketing data connector — ad spend, multi-touch attribution, analytics

🔗 https://github.com/windsor-ai/windsor_mcp  

```bash
Connect at mcp.windsor.ai via Claude settings → Integrations
```

`#marketing #analytics #attribution #ads`

<a id="t50"></a>
#### #50 · Arcads Claude Code — 🗃️ Git Repo

Claude Code + Cursor workspace for the Arcads API — AI-generated ad video creation. Agent handles all API calls, polling, cost confirmation, and file organisation. Includes workflows for image gen, video gen (Seedance 2.0: 4–15s clips, native audio, image-to-video). Needs Arcads API key

🔗 https://github.com/krusemediallc/arcads-claude-code  

```bash
git clone https://github.com/krusemediallc/arcads-claude-code
cd arcads-claude-code
# Copy .env.example → .env and add your ARCADS_API_KEY
# Then open in Claude Code or Cursor and follow AGENTS.md
```

`#ads #video #marketing #arcads #seedance #api #claude-code #cursor`

<a id="t71"></a>
#### #71 · Kevs-IOS-Agents ⚠️ — 🗃️ Git Repo

⚠️ Automation may violate TikTok/Instagram ToS — use at own risk. A farm of real iPhones run from your Mac: open-source iOS (+ Android) device automation with live control, Postgres-backed scheduler, and built-in social workflows. TikTok and Instagram enabled by default. Instagram automation: warmup, following-feed engagement, cold DMs, and publishing. Automations dashboard with publishing queues, recurring schedules, device queue controls, and activity monitoring. Self-hosted, Apache-2.0. Creator also has 49 agent skills at kevinbadi/skills

🔗 https://github.com/kevinbadi/Kevs-IOS-Agents  

```bash
git clone https://github.com/kevinbadi/Kevs-IOS-Agents
cd Kevs-IOS-Agents
# Follow README — requires Mac, real iPhones/Android devices, Postgres
# See docs for device registration and scheduler setup
```

`#ios #android #automation #tiktok #instagram #social #scheduler #postgres #self-hosted #farm #dms #publishing`

<a id="t75"></a>
#### #75 · openSEO 💳 — 🔌 MCP

Open-source SEO + GEO skills for Claude on your real GSC/GA4/ads data. Free MCP connects to Search Console, Analytics, and ads. 8 MIT-licensed skills: keyword research, rank tracking, site audits, backlinks, competitor gaps, AI visibility. DataForSEO 💳 built in (pay per use). Also: every-app/open-seo is a full open-source Semrush/Ahrefs alternative

🔗 https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills  

```bash
claude mcp add ryze --transport http https://connector.get-ryze.ai/mcp
# Then use SEO skills directly in Claude Code
# /seo:keywords, /seo:audit, /seo:competitors, /seo:backlinks
```

`#seo #geo #gsc #analytics #keywords #rank-tracking #audit #backlinks #competitor #dataseo`

<a id="t114"></a>
#### #114 · Postiz — 🗃️ Git Repo

The ultimate agentic social media scheduling platform — schedule, automate, and analyze posts across Instagram, YouTube, LinkedIn, X/Twitter, TikTok, Facebook, Pinterest, Threads, Reddit, Bluesky, Slack, Discord, Mastodon and more. AI content generation, team collaboration, MCP server, public API, N8N/Make/Zapier integration. Self-hosted = unlimited channels, posts, and team members. AGPL-3.0, 40k+ ⭐

🔗 https://github.com/gitroomhq/postiz-app  

```bash
# Docker (recommended)
git clone https://github.com/gitroomhq/postiz-app
cd postiz-app
cp .env.example .env  # edit with your keys
docker compose up -d
# Or see: https://docs.postiz.com/quickstart
# MCP: https://postiz.com/mcp
```

`#social #scheduling #instagram #twitter #linkedin #tiktok #facebook #bluesky #threads #reddit #mcp #api #team #self-hosted #automation #n8n`

<a id="t121"></a>
#### #121 · WhatShips — 🗃️ Git Repo

2,000+ startup launch videos from X — curated library of real product launches to study shipping strategies

🔗 https://whatships.com  

```bash
# Browse at https://whatships.com — no install needed
```

`#launches #startup #twitter #video #marketing #inspiration`

<a id="t124"></a>
#### #124 · Instagram Agent Skill — ⚡ Skill

13 Claude skills for Instagram — automate posting, caption writing, hashtag research, analytics, and DM workflows

🔗 https://github.com/Jakeschincariol/instagram-agent-skill  

```bash
git clone https://github.com/Jakeschincariol/instagram-agent-skill ~/.claude/skills/instagram
```

`#instagram #social #automation #captions #hashtags #skill`

<a id="t134"></a>
#### #134 · Reverse Engineer Marketing — 🔌 MCP

Paste a URL, get the whole marketing machine — paid ads, SEO, social, founders, funnel. CLI + MCP server + local web app

🔗 https://github.com/dansugc/reverse-engineer-marketing  

```bash
claude mcp add reverse-engineer-marketing -- npx -y reverse-engineer-marketing mcp
```

`#marketing #competitor-analysis #ads #seo #mcp #cli #growth #spy`

<a id="t141"></a>
#### #141 · Orion 💳 — 🗃️ Git Repo

💳 SaaS — predicts where each visitor looked from session replays with no webcam, scores every visit for friction. by Paradigm Machines

🔗 https://app.paradigmmachines.ai  

```bash
# SaaS — sign up at https://app.paradigmmachines.ai
```

`#analytics #ux #heatmap #gaze #session-replay #friction #saas #paid`

### Engineering

<a id="t30"></a>
#### #30 · Feature Dev — ⚡ Skill

Feature development skill from VoltAgent's 1000+ curated collection of production skills by official dev teams (Anthropic, Vercel, Stripe, Cloudflare…)

🔗 https://github.com/VoltAgent/awesome-agent-skills  

```bash
# Browse the full collection, then install the skill you want
npx skills add VoltAgent/awesome-agent-skills
# Or pick feature-dev specifically from the repo
```

`#feature #development #engineering #voltagent`

<a id="t31"></a>
#### #31 · Code Simplifier — ⚡ Skill

Takes recently modified code and makes it cleaner without changing what it does — from VoltAgent's curated skills collection

🔗 https://github.com/VoltAgent/awesome-agent-skills  

```bash
# Browse VoltAgent/awesome-agent-skills for code-simplifier
npx skills add VoltAgent/awesome-agent-skills
```

`#refactor #simplify #clean #code #quality`

<a id="t32"></a>
#### #32 · Code Review (Addy) — ⚡ Skill

Production-grade code review and QA skills by Addy Osmani (Chrome DevRel). Covers review, testing, performance, and engineering best practices

🔗 https://github.com/addyosmani/agent-skills  

```bash
npx skills add addyosmani/agent-skills
```

`#review #qa #testing #performance #production`

<a id="t33"></a>
#### #33 · Playwright / Webapp Testing — ⚡ Skill

Official Anthropic webapp testing skill (webapp-testing folder) — Playwright-based browser automation and end-to-end testing

🔗 https://github.com/anthropics/skills/tree/main/skills/webapp-testing  

```bash
Available on Claude.ai paid plans — mention "webapp testing" or "Playwright"
```

`#playwright #testing #e2e #browser #automation`

<a id="t61"></a>
#### #61 · GBrain — 🔌 MCP

Garry Tan's (YC president) opinionated agent brain. Runs as an MCP server — adds get_page, put_page, search, query, add_link, traverse_graph, sync_brain, file_upload + 22 more tools. On first run: 12-question onboarding generates a personalized SOUL.md and installs 70 of Garry's personal agent skills. Persistent, searchable knowledge brain for Claude Code. MIT licensed, free

🔗 https://github.com/garrytan/gbrain  

```bash
# Install gbrain
npm install -g gbrain

# Add as MCP server to Claude Code
claude mcp add gbrain -- gbrain serve

# Run onboarding (12 questions → SOUL.md + 70 skills)
gbrain onboard
```

`#agent #brain #memory #skill #soul #mcp #knowledge #yc #garrytan #onboarding`

<a id="t62"></a>
#### #62 · gstack — 🗃️ Git Repo

Garry Tan's exact Claude Code setup — 23 opinionated tools that give Claude Code role personas: CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA. Each persona brings its own judgment and decision-making style. Companion to GBrain (#61). MIT licensed, free

🔗 https://github.com/garrytan/gstack  

```bash
# Clone and install
git clone https://github.com/garrytan/gstack
cd gstack
# Follow README to wire personas into Claude Code
# Works alongside GBrain for full Garry Tan setup
```

`#personas #ceo #designer #eng-manager #qa #roles #claude-code #yc #garrytan`

<a id="t63"></a>
#### #63 · shadcn/improve — ⚡ Skill

Read-only senior advisor skill by shadcn — surveys your codebase and generates prioritized, self-contained implementation plans. Finds bugs, security gaps, performance issues, test coverage holes, tech debt, migrations, and DX improvements. Never modifies code — only writes plans under plans/ or advisor-plans/ for cheaper models to execute. Can fan out with parallel read-only subagents per category. Use your best model to audit; hand off to cheaper models to fix. 23k+ installs

🔗 https://github.com/shadcn/improve  

```bash
npx -y skills add shadcn/improve --agent claude-code
```

`#audit #advisor #codebase #planning #security #performance #tech-debt #read-only #shadcn`

<a id="t73"></a>
#### #73 · PostHog MCP — 🔌 MCP

Official PostHog plugin + MCP server for Claude Code — query analytics, manage feature flags, investigate errors, run A/B experiments, all from Claude. Slash commands: /posthog:flags, /posthog:insights, /posthog:errors, /posthog:experiments. Connects to your real PostHog data

🔗 https://github.com/PostHog/posthog-for-claude  

```bash
# In Claude Code
/mcp
# Follow browser prompts to connect PostHog
# Then use:
/posthog:flags
/posthog:insights
/posthog:errors
/posthog:experiments
```

`#analytics #feature-flags #errors #experiments #posthog #product #data #mcp #official`

<a id="t79"></a>
#### #79 · DeepSeek Harness — 🗃️ Git Repo

DeepSeek's open-source MIT-licensed AI agent runtime — 207k+ GitHub stars in Aug 2026. Model-agnostic layer above the model: handles reasoning, tool use, memory, scheduling. Supports Claude, OpenAI, DeepSeek, Ollama, Bedrock, Google Vertex, Azure. Skill layer + MCP tool registry (all replaceable plugins). Claude Code and Codex fold in as ordinary plugins. Benchmarks published using Harness (Terminal Bench, DeepSWE)

🔗 https://github.com/deepseek-ai/deepseek-harness  

```bash
git clone https://github.com/deepseek-ai/deepseek-harness
cd deepseek-harness
# Configure model adapter (Claude, OpenAI, Ollama, etc.)
# Add MCP tool servers
# Define skills as reusable agent behaviors
# See .claude/skills for Claude integration
```

`#agent-runtime #model-agnostic #orchestration #mcp #skill #memory #deepseek #open-source`

<a id="t103"></a>
#### #103 · floorplan — 🗃️ Git Repo

Claude Code / Codex plugin that reads your codebase and draws an interactive, plain-English map of every part, file, and web request — with health checks for exposed secrets and open DB rules. Also maps what needs to be built from a PRD. Exports as single HTML file. Runs 100% locally, ~1.6k ⭐

🔗 https://github.com/haydenschmitty/floorplan  

```bash
claude plugin marketplace add haydenschmitty/floorplan
claude plugin install floorplan@floorplan
# Or Codex: codex plugin marketplace add haydenschmitty/floorplan
```

`#codebase #map #architecture #diagram #health-check #prd #planning #interactive #claude-code #plugin`

<a id="t104"></a>
#### #104 · Elephant-Goldfish Model — ⚡ Skill

Google's internal AI coding workflow (Apache 2.0) — Elephant holds full project context and authors the design doc; Goldfish reviewers start fresh each review and catch assumptions the author stopped noticing. Three commands: egm-brainstorm → egm-draft → egm-review. Used daily by 1000s of Googlers. Not an officially supported Google product

🔗 https://github.com/google/elephant-goldfish-model  

```bash
# Claude Code
git clone https://github.com/google/elephant-goldfish-model
# Follow README to wire egm-brainstorm, egm-draft, egm-review into Claude Code
# Or use Google Antigravity plugin (native support)
```

`#design-doc #review #workflow #brainstorm #google #draft #assumptions #goldfish #elephant #engineering`

<a id="t130"></a>
#### #130 · UI-TARS Desktop — 🗃️ Git Repo

Open-source multimodal AI agent stack by ByteDance — connects cutting-edge AI models and agent infra, 39.6k ⭐

🔗 https://github.com/bytedance/UI-TARS-desktop  

```bash
git clone https://github.com/bytedance/UI-TARS-desktop
```

`#agent #multimodal #bytedance #computer-use #desktop #ai-stack #gui`

### Dev Tools

<a id="t34"></a>
#### #34 · TypeScript LSP — 🔌 MCP

Language Server Protocol MCP — gives Claude semantic code intelligence: go-to-definition, references, rename, and diagnostics across any LSP-supported language

🔗 https://github.com/modelcontextprotocol/servers  

```bash
# isaacphi/mcp-language-server (recommended)
npx -y mcp-language-server
# Or jonrad/lsp-mcp
npx -y lsp-mcp
```

`#lsp #typescript #language-server #semantic #ide`

<a id="t35"></a>
#### #35 · GitHub MCP (official) — 🔌 MCP

Official MCP connector for GitHub — repos, PRs, issues, commits, branches. Part of the modelcontextprotocol/servers reference collection

🔗 https://github.com/modelcontextprotocol/servers  

```bash
Add via Claude.ai connector settings → GitHub
```

`#github #git #pr #issues #repos #official`

<a id="t36"></a>
#### #36 · Context7 — 🔌 MCP

Fetches live, version-specific library docs and code examples for any package — eliminates hallucinated API usage

🔗 https://github.com/upstash/context7  

```bash
Add remote MCP in Claude.ai settings: https://mcp.context7.com/mcp
```

`#docs #library #npm #sdk #live #context`

<a id="t48"></a>
#### #48 · ego lite — 🗃️ Git Repo

macOS browser where you and AI agents work in parallel — each agent gets its own isolated Space while your tabs stay yours. Shares your Chrome logins/cookies with agents via ego-browser skill. JS-based tool calls (not CLI) run 2.5× faster with fewer tokens. Best page snapshots on the market, handles nested iframes

🔗 https://github.com/citrolabs/ego-lite  

```bash
# Download macOS app (installs ego-browser skill automatically)
# Apple Silicon: https://cdn.ego.app/setup/macos/arm64/egolite.dmg
# Intel: https://cdn.ego.app/setup/macos/x64/egolite.dmg

# Or via Claude Code plugin
/plugin marketplace add citrolabs/ego-lite

# Then in any agent:
/ego-browser <task>
```

`#browser #automation #agent #macos #parallel #logins #skill #claude-code`

<a id="t51"></a>
#### #51 · Agent Reach — 🗃️ Git Repo

Gives Claude Code eyes to read & search 17+ internet platforms — Twitter/X, Reddit, YouTube transcripts, GitHub, LinkedIn, Bilibili, 小红书, 抖音 and more. Zero API keys, zero config. Smart routing picks the right scraper per query. Also runs as MCP stdio server

🔗 https://github.com/Panniantong/Agent-Reach  

```bash
# Via pipx (recommended)
pipx install https://github.com/Panniantong/agent-reach/archive/main.zip

# Or clone
git clone https://github.com/Panniantong/Agent-Reach
cd Agent-Reach && pip install -e .

# Or as skill
npx skills add Panniantong/agent-reach
```

`#browser #scraping #twitter #reddit #youtube #github #social #internet #no-api`

<a id="t60"></a>
#### #60 · Screenpipe 💳 — 🔌 MCP

💳 Desktop app $400 one-time (CLI/MCP free). Records everything you see, say, and hear 24/7 — locally, privately. MCP server lets Claude query your full screen history in natural language. "Pipes" are scheduled AI agents triggered by your activity (Obsidian sync, todo extraction, idea tracker). YC S26

🔗 https://github.com/screenpipe/screenpipe  

```bash
claude mcp add screenpipe -- npx -y screenpipe-mcp@latest
# Then ask: "what did I see in the last hour?" or "summarise today's meetings"
```

`#memory #screen-recording #audio #mcp #pipes #agent #local #private #productivity`

<a id="t68"></a>
#### #68 · jev-browser-skill 💳 — ⚡ Skill

Plug-and-play Claude Code / Codex skill that lets Jev (TypeSafe's ~100ms System-1 decision model) drive your browser. No npm install, no Playwright — clone to ~/.claude/skills/ and go. Jev clicks, types, and selects its way through goals at a few hundred ms/decision: 8-step Hacker News login+search = 8 seconds. Drives your own Chrome (via remote debugging) or opens a dedicated Jev window. Logs calibrated probabilities at every step. 💳 Requires TypeSafe API key (fraction of a cent per decision)

🔗 https://github.com/zurfyx/jev-browser-skill  

```bash
git clone https://github.com/zurfyx/jev-browser-skill ~/.claude/skills/jev-browser
export TYPESAFE_API_KEY=apikey_...
# Then ask Claude: "Use Jev to search Wikipedia for Alan Turing and open his article."
```

`#browser #automation #jev #typesafe #system-one #fast #chrome #devtools #no-playwright #skill`

<a id="t69"></a>
#### #69 · jev-ultrafast 💳 — 🗃️ Git Repo

Production-grade browser agent using TypeSafe's Jev model — the complete version of jev-browser-skill with live inspector, region narrowing, stale-page guards, and a text-generating helper model. Handles large pages (250+ controls) by narrowing regions first. Jev reads structured element tables (not pixels) and returns calibrated multi-choice decisions in one forward pass. 💳 Requires TypeSafe API key

🔗 https://github.com/browser-use/jev-ultrafast  

```bash
git clone https://github.com/browser-use/jev-ultrafast
cd jev-ultrafast
# Follow README for setup
export TYPESAFE_API_KEY=apikey_...
```

`#browser #automation #jev #typesafe #inspector #region-narrowing #system-one #production`

<a id="t76"></a>
#### #76 · HeadlessX — 🗃️ Git Repo

Self-hosted headless browser automation platform powered by Camoufox (Firefox) — 0% bot detection rates. MCP endpoint for Claude Code and other agents. Queue-backed jobs, web dashboard, protected API. MIT licensed alternative to Browserless. Agent skill pack for Cursor, Claude Code, Warp, Windsurf, OpenCode

🔗 https://github.com/unreasonablygood/headlessx  

```bash
claude mcp add headlessx -- npx -y headlessx-mcp
# Or connect via your self-hosted instance MCP endpoint
```

`#headless #browser #camoufox #firefox #stealth #undetected #self-hosted #mcp #scraping #automation`

<a id="t78"></a>
#### #78 · brag — ⚡ Skill

Claude Code skill by Latent Spaces — turns the project you just built into a short shareable launch video with one command. Music, motion, and share copy included. Reads your code, plans a brag concept, scripts and storyboards, hands a composition brief to Hyperframes, renders, and writes share copy. Tone flags: --tone chaotic, --tone polished. Format: --format vertical

🔗 https://github.com/latent-spaces/brag  

```bash
/plugin marketplace add latent-spaces/brag
/plugin install brag@brag
# Then in any project:
/brag
/brag --tone polished --format vertical
```

`#launch #video #demo #share #hyperframes #motion #storytelling #marketing #branding`

<a id="t84"></a>
#### #84 · Omarchy — 🗃️ Git Repo

Beautiful, agentic Linux by DHH (creator of Rails, Hey, Basecamp). Omakase Linux desktop on Arch + Hyprland + Quickshell — keyboard-first workstation with system-wide themes, packaged updates, and integrated coding agents (Claude, Codex, Grok, OpenRouter, Hermes). Agents can automate tasks and reshape the system itself. Also: omarchy-web (browser-based OS) and OmarchyOS (Android mobile). Free, open-source

🔗 https://github.com/omacom/omarchy  

```bash
# Full install (Arch Linux required)
git clone https://github.com/omacom/omarchy
cd omarchy && ./install.sh
# Or see omarchy.org for guided setup

# Web OS (runs in browser):
git clone https://github.com/wolferd-wolf/omarchy-web
```

`#linux #arch #hyprland #desktop #keyboard-first #dhh #agent #os #coding-agent #claude #self-hosted`

<a id="t87"></a>
#### #87 · Herdr — 🗃️ Git Repo

Terminal multiplexer rebuilt for AI coding agents — one sidebar shows every agent (Claude Code, Codex, Pi, OpenCode, Cursor, Devin, Kimi, and more) with live state: blocked / working / done / idle. Each agent gets its own real PTY pane, sessions survive detach/SSH, and a local Unix socket API lets agents create workspaces, split panes, spawn helpers, and control each other. v0.9 adds remote machine support so agents on different machines appear in the same sidebar. YC F26, $6M seed, ~15k ⭐. Free, open-source (Rust)

🔗 https://github.com/ogulcancelik/herdr  

```bash
# macOS / Linux
brew install herdr
# or
mise use -g herdr
# or
nix run github:ogulcancelik/herdr

# Windows
powershell -ExecutionPolicy Bypass -c "irm https://herdr.dev/install.ps1 | iex"

# Docs: https://herdr.dev/docs
```

`#terminal #multiplexer #agent #claude-code #codex #tmux #pty #ssh #rust #yc #open-source #agent-control`

<a id="t94"></a>
#### #94 · simslim — 🗃️ Git Repo

Run more iOS simulators on one Mac by disabling background daemons a simulator doesn't need. A fresh iOS simulator boots ~180 background services — simslim kills the ones it doesn't use, cutting each simulator's memory ~4×. Built by MobAI for running fleets of AI-agent-driven simulators (each one driven by its own Claude Code). Go, MIT licensed, ~3.2k ⭐

🔗 https://github.com/MobAI-App/simslim  

```bash
# Homebrew (recommended)
brew install mobai-app/tap/simslim

# Or Go install
go install github.com/mobai-app/simslim@latest

# Requires: Xcode + iOS Simulator runtime ≥ 18.5
# Persistent slimming needs the runtime installed, not just downloaded
```

`#ios #simulator #xcode #memory #agent #testing #automation #mobai #claude-code #go`

<a id="t111"></a>
#### #111 · browsentic — 🗃️ Git Repo

Agentic browser harness — AI side panel + orb in your own logged-in Chrome, Edge, Arc, Brave, or Firefox, driven by Claude Code, Codex, or Antigravity. No separate API key needed. Also runs as MCP server so any MCP client can share the same browser session. Apache 2.0

🔗 https://github.com/imshaikot/browsentic  

```bash
claude mcp add browsentic -- browsentic mcp
# Then start a new session (existing sessions won't have Browsentic tools)
# Side panel: install browser extension from Chrome/Firefox store
```

`#browser #automation #side-panel #mcp #claude-code #codex #chrome #firefox #agent #harness #no-api`

<a id="t126"></a>
#### #126 · agent-desktop — 🗃️ Git Repo

Computer use CLI for AI agents via accessibility tree — Vercel Labs tool enabling agents to control the desktop, 21.6k ⭐

🔗 https://github.com/vercel-labs/agent-desktop  

```bash
npx agent-desktop
```

`#computer-use #accessibility #cli #agent #desktop #vercel`

<a id="t136"></a>
#### #136 · AndroidAutoMaker — 🗃️ Git Repo

Make any app run on Android Auto — takes an APK/XAPK and prepares it as a parked game on your car screen

🔗 https://github.com/malebuffy/AndroidAutoMaker  

```bash
git clone https://github.com/malebuffy/AndroidAutoMaker && npm install && npm start
```

`#android #android-auto #car #apk #sideload #mobile`

<a id="t137"></a>
#### #137 · Genex Desktop — 🗃️ Git Repo

Open-source AI desktop app for game dev — agents build, test and iterate in Unreal Engine, Unity, Godot or Three.js. 842 ⭐

🔗 https://genex.games/desktop  

```bash
# Download at https://genex.games/desktop (macOS, Linux, Windows) | github.com/genex-games/genex-desktop
```

`#gamedev #unreal #unity #godot #agent #open-source #desktop`

<a id="t140"></a>
#### #140 · Caldo Skills — ⚡ Skill

Caldo plugin marketplace for Claude Code — includes untangle-codebase skill that maps and cleans up messy codebases for agents. 44 ⭐

🔗 https://github.com/caldoai/skills  

```bash
/plugin marketplace add caldoai/skills
```

`#skill #codebase #agent #plugin #marketplace #refactor #claude-code`

### Cowork

<a id="t37"></a>
#### #37 · Skill Creator (Anthropic) — ⚡ Skill

Official Anthropic skill for creating, testing, and optimising new skills — from the anthropics/skills repo (skill-creator folder)

🔗 https://github.com/anthropics/skills/tree/main/skills/skill-creator  

```bash
Available on Claude.ai paid plans
```

`#skill #creator #meta #anthropic #official`

<a id="t38"></a>
#### #38 · Claude.md Management — ⚡ Skill

Best practices for structuring and maintaining CLAUDE.md files — tips sourced from Anthropic team and community, by Shayan Rais

🔗 https://github.com/shanraisshan/claude-code-best-practice  

```bash
# Reference repo — clone and adapt CLAUDE.md patterns to your project
git clone https://github.com/shanraisshan/claude-code-best-practice
```

`#claude-md #memory #context #best-practice #project`

<a id="t52"></a>
#### #52 · Claude Code Setup (Official) — ⚡ Skill

Official Anthropic plugin — scans your codebase and recommends the top 1–2 tailored automations per category: MCP servers, Skills, Hooks, Subagents, and Slash Commands. Read-only, never modifies your files. The "how should I set up Claude Code for this project?" skill

🔗 https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-code-setup  

```bash
/plugin marketplace add anthropics/claude-plugins-official
/plugin install claude-code-setup@claude-plugins-official
```

`#setup #official #anthropic #hooks #mcp #skill #subagents #automation #config`

<a id="t67"></a>
#### #67 · Claude for Small Business — ⚡ Skill

Official Anthropic product (May 2026) — toggle install inside Claude Cowork that puts Claude inside the tools small businesses already use. 8 integrations: QuickBooks, PayPal, HubSpot, Canva, DocuSign, Google Workspace, Microsoft 365, Slack. 15 ready-to-run agentic workflows: payroll planning, month-end close, invoice chasing, lead triage, contract review, campaign creation, cash-flow monitoring, business pulse report, margin analyzer, tax organizer, and more. 15 skills built on the most common owner bottlenecks. You approve before anything sends, posts, or pays. Your existing permissions hold. Also includes a free AI Fluency course (with PayPal)

🔗 https://claude.com/solutions/small-business  

```bash
# Toggle on inside Claude Cowork
# Go to: claude.com/solutions/small-business
# Connect your tools: QuickBooks, PayPal, HubSpot, Canva, DocuSign, Google Workspace, Microsoft 365, Slack
# Pick a workflow and run it — you approve before anything sends/posts/pays

# Free AI Fluency course:
# https://anthropic.skilljar.com/ai-fluency-for-small-businesses
```

`#small-business #quickbooks #paypal #hubspot #canva #docusign #payroll #invoicing #cowork #official #anthropic #workflows`

<a id="t91"></a>
#### #91 · ribbon — 🗃️ Git Repo

Slim status band above the Claude Code prompt — shows how much of your 7-day and 5-hour usage remains, reset times, and whether your prompt cache is warm or cold, plus what your next message will cost. Install once, applies to all projects. MIT licensed

🔗 https://github.com/robonuggets/ribbon  

```bash
/plugin install ribbon --marketplace robonuggets/ribbon
# Start a new Claude Code session to see the band
```

`#usage #tokens #cache #cost #status #claude-code #plugin #utility`

### Utility

<a id="t14"></a>
#### #14 · find-skill — ⚡ Skill

Discover and install Claude skills from the CLI

🔗 https://github.com/fockus/claude-skill-find-skill  

```bash
brew install find-skill && find-skill
```

`#discovery #utility #skill`

<a id="t15"></a>
#### #15 · last30days — ⚡ Skill

Summarise and surface insights from the last 30 days of activity

🔗 https://github.com/mvanhorn/last30days-skill  

```bash
npx skills add mvanhorn/last30days-skill -g -y
```

`#history #summary #insights`

<a id="t41"></a>
#### #41 · Caveman — ⚡ Skill

Cuts ~65% output tokens by making Claude respond in terse caveman-speak. Full technical accuracy kept. 4 modes: lite / full / ultra / wenyan. 69.4k ⭐

🔗 https://github.com/JuliusBrussee/caveman  

```bash
# macOS / Linux / WSL
curl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.sh | bash

# Windows (PowerShell)
irm https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.ps1 | iex

# Trigger: type /caveman or "talk like caveman"
```

`#tokens #cost #brevity #caveman #compression`

<a id="t43"></a>
#### #43 · Grill Me — ⚡ Skill

Interviews you relentlessly one question at a time until everything you know about a topic is extracted and saved to a file. Claude guesses each answer — you confirm or correct. Great for decision-making and client onboarding

🔗 https://github.com/gusinov/grill-me  

```bash
npx skills add gusinov/grill-me
# Or manually: copy grill-me/ folder to ~/.claude/skills/
# Trigger: say "grill me about X"
```

`#interview #context #extraction #brainstorm #onboarding #decisions`

<a id="t92"></a>
#### #92 · DigUp — 🗃️ Git Repo

On-device semantic file search for your computer — search photos, PDFs, docs, recordings, videos, and code by what's in them, not just the filename. Built on Google DeepMind's EmbeddingGemma 2. Runs fully locally on Mac (stable), Windows and Linux (beta). MIT licensed, ~5.3k ⭐. MCP server integration is a planned feature (issue #160)

🔗 https://github.com/ARahim3/DigUp  

```bash
# Download from GitHub releases
git clone https://github.com/ARahim3/DigUp
# See README for Mac/Windows/Linux install
# macOS: Full release · Windows/Linux: Beta
```

`#search #semantic #on-device #local #files #pdf #photos #video #gemma #embeddings`

<a id="t97"></a>
#### #97 · FluidVoice — 🗃️ Git Repo

Fastest macOS on-device dictation app — Parakeet, Nemotron, or Whisper models run fully locally. No cloud, no account, no word limits. Writes to any app. Free, GPL v3, ~12.5k ⭐. Windows + iOS TestFlight available. Android + Linux on waitlist. Useful for voice-to-Claude-Code workflows

🔗 https://github.com/altic-dev/FluidVoice  

```bash
# macOS (Homebrew)
brew install --cask fluidvoice

# Or download DMG from GitHub releases
# Requires macOS 15+ / Apple Silicon
# Windows: see GitHub releases · iOS: TestFlight
```

`#voice #dictation #stt #whisper #parakeet #local #offline #macos #no-cloud #free #gpl`

<a id="t129"></a>
#### #129 · Pinky — 🗃️ Git Repo

Let AI agents use your phone, with you in the loop — by DIYgod, bridges AI agents to your mobile device safely

🔗 https://github.com/DIYgod/pinky  

```bash
git clone https://github.com/DIYgod/pinky
```

`#phone #mobile #agent #computer-use #ios #android #control`

<a id="t133"></a>
#### #133 · EG2 Transcribe — 🗃️ Git Repo

EmbeddingGemma 2 turned into speech-to-text — transcribes 1 hour of audio in 13 seconds on base MacBook Air. Free Mac app

🔗 https://eg2.haku.sh  

```bash
# Download free Mac app at https://eg2.haku.sh/download (macOS 14+, Apple Silicon)
```

`#stt #macos #local #fast #gemma #on-device #free`

### Security

<a id="t22"></a>
#### #22 · Repello SkillCheck — 🔌 MCP

Upload a .skill zip → get a safety score before installing any skill

🔗 https://repello.ai/tools/skills  

```bash
Web tool — visit repello.ai/tools/skills and upload the .skill zip
```

`#security #safety #skill-check #vetting`

<a id="t39"></a>
#### #39 · Security Guidance — ⚡ Skill

Official Anthropic security guidance skill — security reviews, threat modelling, and vulnerability assessment (security-guidance folder in anthropics/skills)

🔗 https://github.com/anthropics/skills/tree/main/skills/security-guidance  

```bash
Available on Claude.ai paid plans
```

`#security #threat-model #vulnerability #review #official`

<a id="t101"></a>
#### #101 · ghidra-mcp — 🔌 MCP

Production-ready MCP server giving Claude 193+ tools for Ghidra binary analysis — decompile functions, run/manage scripts, cross-binary documentation transfer via SHA-256 function hashing, P-code emulation, and debugger integration via TraceRmi. One prompt → Claude lists functions, decompiles main(), and explains the binary

🔗 https://github.com/bethington/ghidra-mcp  

```bash
# Requires Ghidra installed
# Run the setup script from the repo root
# ./setup.sh (Linux/macOS) or setup.ps1 (Windows)
# Then add as MCP in Claude Code:
claude mcp add ghidra -- <path-to-server>
# See CLAUDE.md in repo for full setup
```

`#ghidra #reverse-engineering #binary #decompile #mcp #security #malware #elf #pe #analysis`

<a id="t102"></a>
#### #102 · BLA — 🔌 MCP

Blind LLM Agents — defensive shield that protects your binaries, Electron apps, JS bundles, Python, and WebAssembly against AI reverse-engineering agents. Injects adversarial patterns to poison context windows, exhaust token budgets, and induce hallucinations during automated code analysis. Installs as Claude Code MCP + skill. MIT licensed

🔗 https://github.com/qybaihe/bla  

```bash
npx bla-agents setup
# Registers BLA as MCP + skill with Claude Code, Cursor, Codex, Gemini CLI
# Then use bla protect <binary/bundle> to add adversarial defense to your artifacts
```

`#security #defense #reverse-engineering #anti-rea #binary #electron #webassembly #mcp #skill #protection`

<a id="t116"></a>
#### #116 · system_prompts_leaks ⚠️ — 🗃️ Git Repo

⚠️ Grey-area — extracted system prompts, not officially released. Full system prompts of 30+ AI tools: ChatGPT, Claude, Gemini, Grok, OpenAI Codex, Claude Code, Google Antigravity, Cursor, Perplexity, DeepSeek, Qwen, Kimi, Replit, Lovable and more. Every version since May 2025, updated daily. CC0-1.0 public domain, 71.1k ⭐

🔗 https://github.com/asgeirtj/system_prompts_leaks  

```bash
git clone https://github.com/asgeirtj/system_prompts_leaks
# Browse by tool name in the repo
# Updated daily automatically
```

`#system-prompts #leaked #chatgpt #claude #gemini #grok #cursor #perplexity #deepseek #transparency #reverse-engineering #ai-safety`

<a id="t117"></a>
#### #117 · CL4R1T4S ⚠️ — 🗃️ Git Repo

⚠️ Grey-area — extracted system prompts, not officially released. By Pliny the Liberator (elder-plinius, TIME100 AI 2025) — leaked system prompts for ChatGPT, Claude, Gemini, Grok, Perplexity, Cursor, Lovable, Replit and more, 51.5k ⭐. Same author's other repos: L1B3RT4S (jailbreak prompts, 22k ⭐), T3MP3ST (autonomous red-teaming platform, 6.6k ⭐), OBLITERATUS (Python red-team toolkit, 8.9k ⭐)

🔗 https://github.com/elder-plinius/CL4R1T4S  

```bash
git clone https://github.com/elder-plinius/CL4R1T4S
# See also:
# github.com/elder-plinius/L1B3RT4S  — jailbreak prompts
# github.com/elder-plinius/T3MP3ST   — red-team platform
# github.com/elder-plinius/OBLITERATUS — Python toolkit
```

`#system-prompts #leaked #jailbreak #red-team #chatgpt #claude #gemini #grok #transparency #pliny #ai-safety #security-research`

<a id="t127"></a>
#### #127 · ClearCam — 🗃️ Git Repo

Self-hosted AI security camera NVR with real-time object detection — runs locally on Mac/Linux, 2k ⭐

🔗 https://github.com/roryclear/clearcam  

```bash
git clone https://github.com/roryclear/clearcam && cd clearcam && pip install -r requirements.txt
```

`#security #camera #nvr #object-detection #self-hosted #privacy #local`

### Infrastructure

<a id="t26"></a>
#### #26 · CLIProxyAPI ⚠️ — 🗃️ Git Repo

⚠️ Grey-area (ToS). Self-hosted Go proxy that wraps Claude/ChatGPT/Gemini/Grok subscriptions as OpenAI-compatible API endpoints — no API keys needed. 39.4k ⭐ Multi-account load balancing supported

🔗 https://github.com/router-for-me/CLIProxyAPI  

```bash
# Docker (easiest)
docker compose up -d

# Or build from source (Go)
# Full docs: https://help.router-for.me/
```

`#proxy #api #claude #openai #gemini #self-hosted #subscription #infrastructure`

<a id="t105"></a>
#### #105 · Coolify — 🗃️ Git Repo

Open-source, self-hostable PaaS alternative to Vercel, Heroku & Netlify — deploy static sites, databases, full-stack apps, and 360+ one-click services on your own servers. Git push deploys, PR previews, rollbacks, webhooks. Managed via dashboard, API, CLI, or MCP. Apache 2.0

🔗 https://github.com/coollabsio/coolify  

```bash
# Self-hosted install (one command)
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
# Then visit http://your-server:8000
# MCP: connect via Coolify API from Claude Code
```

`#paas #self-hosted #deploy #vercel-alternative #heroku-alternative #docker #databases #mcp #open-source #infrastructure`

<a id="t139"></a>
#### #139 · Cloud Mail — 🗃️ Git Repo

Cloudflare-based self-hosted email service — send/receive with attachments, RBAC, Workers AI for OTP recognition. 14.6k ⭐

🔗 https://github.com/maillab/cloud-mail  

```bash
git clone https://github.com/maillab/cloud-mail && cd cloud-mail && npm install
```

`#email #cloudflare #workers #self-hosted #smtp #infrastructure #d1`

### Collections

<a id="t21"></a>
#### #21 · Awesome Claude Design — 🗃️ Git Repo

68 curated Claude design systems, UI resources, and component libraries

🔗 https://github.com/VoltAgent/awesome-claude-design  

```bash
# Reference only — no install
git clone https://github.com/VoltAgent/awesome-claude-design
```

`#design #systems #collection #reference`

<a id="t42"></a>
#### #42 · Awesome Agent Skills — 🗃️ Git Repo

1000+ curated agent skills from official dev teams (Anthropic, Vercel, Stripe, Cloudflare, Netlify…) and community. Compatible with Claude Code, Codex, Gemini CLI, Cursor

🔗 https://github.com/VoltAgent/awesome-agent-skills  

```bash
# Browse the repo and npx skills add individual entries
git clone https://github.com/VoltAgent/awesome-agent-skills
```

`#collection #skill #voltagent #community`

<a id="t77"></a>
#### #77 · turath-mcp — 🔌 MCP

MCP server giving Claude access to 8,500+ classical Arabic and Islamic books from turath.io (a Nuqayah project). Search across tafsir, hadith, fiqh, usul. Full-text search, page-level reading, author biographies, book metadata. Free public API, 30-day offline cache. Works with Claude Desktop, Claude Web, ChatGPT, Cursor, VS Code

🔗 https://github.com/dihannahdi/turath  

```bash
claude mcp add turath -- npx -y turath-mcp-server
# Or via Streamable HTTP transport — see repo for hosted endpoint
```

`#arabic #islamic #books #hadith #tafsir #fiqh #quran #classical #search #free #turath`

<a id="t115"></a>
#### #115 · GameDev Resources — 🗃️ Git Repo

Curated list of game development resources covering 2D/3D engines & frameworks (Godot, Unity, Phaser, Three.js, Bevy, Raylib…), free/paid assets, audio tools, pixel editors, spritesheet tools, terrain generators, tile/level editors, game source code (Doom, Quake, Diablo…), design tools, tutorials, and game jams. 6.9k ⭐

🔗 https://github.com/kavex/gamedev-resources  

```bash
# Browse the README for resource lists
git clone https://github.com/kavex/gamedev-resources
```

`#gamedev #collection #engines #assets #godot #unity #phaser #threejs #bevy #raylib #pixel-art #tutorials #game-jam #2d #3d`

<a id="t118"></a>
#### #118 · Skillry 💳 — 🗃️ Git Repo

💳 Paid — skill and prompt library with curated Claude skills and video walkthroughs including Opus 5.5 demos

🔗 https://skillry.dev  

```bash
# Visit https://skillry.dev/ai-videos/opus-5-5 for video walkthroughs
```

`#skill #prompt #library #claude #opus #video #paid`

### Writing & Quality

<a id="t12"></a>
#### #12 · Stop-Slop — ⚡ Skill

Forces Claude to avoid vague, hollow, and AI-sounding writing

🔗 https://github.com/hardikpandya/stop-slop  

```bash
npx skills add hardikpandya/stop-slop
```

`#writing #quality #anti-slop`

---

*141 tools total · generated from tools.json*
