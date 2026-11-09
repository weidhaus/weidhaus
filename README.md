<picture><source media="(prefers-color-scheme: dark)" srcset="wlogo.svg"><img src="blogo.svg" height="44" alt="weidhaus"></picture>

# Justus-Constantin Weidhaus

I build automations and AI tools for small businesses and founders: lead routing and CRM sync, Google Workspace and HR
plumbing, and local-first AI where the data should not leave the machine. Most of it is self-hosted, containerised and
watched by alerts rather than by people.

Freelance work and case studies: [weidhaus.com](https://weidhaus.com) · Contact: jc@weidhaus.com

## What I build

<!-- projects:start -->
**Open source:** [Gmail-Signature-Manager-for-Google-Workspace](https://github.com/weidhaus/Gmail-Signature-Manager-for-Google-Workspace) · [spoor](https://github.com/weidhaus/spoor) · [Chronato](https://github.com/weidhaus/Chronato) · [ntfy-inbox](https://github.com/weidhaus/ntfy-inbox)

### Process automation

<table>
<tr><td width="56"><img src="https://weidhaus.com/logos/sales-automation.svg" width="44" height="44" alt=""></td><td><b>Vom Lead zum Notartermin</b> <sub>client project</sub><br>The whole sales funnel of a property sales team in Munich, lead to notary, on n8n and Pipedrive: lead import, call tagging, deal-stage logic, follow-up tasks, plus LLM audits of every setter and strategy call, a call knowledge base, buyer profiles and lost-deal checks.<br><sub>n8n · Pipedrive · Aircall · Calendly · Fireflies · Google Sheets · Google Drive · LLM APIs</sub></td><td><a href="https://weidhaus.com/projekte/sales-automation/">Case study</a></td></tr>
<tr><td width="56"><img src="https://weidhaus.com/logos/lead-sync.svg" width="44" height="44" alt=""></td><td><b>Leads mit Lieferschein</b> <sub>client project</sub><br>Unattended spreadsheet-to-portal lead forwarder for a lead provider: idempotent delivery, stored proof of every request and ntfy alerts.<br><sub>Go · SQLite · Docker · ntfy</sub></td><td><a href="https://weidhaus.com/projekte/lead-sync/">Case study</a></td></tr>
<tr><td width="56"><img src="https://weidhaus.com/logos/hubspot-monday-sync.svg" width="44" height="44" alt=""></td><td><b>HubSpot-Deals im Monday-Kalender</b> <sub>client project</sub><br>One-way HubSpot to Monday sync for an event venue in Berlin: calendar items from set-up to dismantling, alternative dates as their own items, name reconciliation every 6 hours, self-hosted with push alerts.<br><sub>TypeScript · HubSpot API · Monday API · Docker · ntfy</sub></td><td><a href="https://weidhaus.com/projekte/hubspot-monday-sync/">Case study</a></td></tr>
<tr><td width="56"><img src="https://weidhaus.com/logos/hubspot-calendar.svg" width="44" height="44" alt=""></td><td><b>Belegungsplan für HubSpot</b> <sub>client project</sub><br>Read-only booking plan for an event venue in Berlin on live HubSpot data: halls as rows, main and alternative dates linked, clashes flagged, insights on capacity and demand; one Cloudflare Worker with an EU-pinned Durable Object.<br><sub>React · Cloudflare Workers · Durable Objects · HubSpot API</sub></td><td><a href="https://weidhaus.com/projekte/hubspot-calendar/">Case study</a></td></tr>
</table>

### AI tools, self-hosted

<table>
<tr><td width="56"><img src="https://weidhaus.com/logos/meetfacts.svg" width="44" height="44" alt=""></td><td><b>Meetfacts</b><br>Local-first macOS meeting recorder: mic and system audio as separate tracks, on-device transcription, speaker-tagged transcripts.<br><sub>Swift · macOS · on-device ASR</sub></td><td><a href="https://weidhaus.com/projekte/meetfacts/">Case study</a><br><a href="https://meetfacts.com">Site</a></td></tr>
<tr><td width="56"><img src="https://weidhaus.com/logos/holdfn.svg" width="44" height="44" alt=""></td><td><b>HoldFn</b><br>Push-to-talk dictation daemon for macOS with on-device transcription; text is inserted at the cursor.<br><sub>Swift · macOS · on-device ASR</sub></td><td><a href="https://weidhaus.com/projekte/holdfn/">Case study</a><br><a href="https://holdfn.com">Site</a></td></tr>
<tr><td width="56"></td><td><b>meetartifacts</b><br>Matches meeting notes to CRM deals and uploads them, with Google Calendar integration.<br><sub>TypeScript · HubSpot API · Google Calendar · Docker</sub></td><td></td></tr>
<tr><td width="56"></td><td><b>ntfy inbox</b><br>Self-hosted topic inventory and searchable report archive for your own ntfy server, with read-only MCP tools.<br><sub>Python · MCP · ntfy</sub></td><td><a href="https://github.com/weidhaus/ntfy-inbox">Code</a></td></tr>
</table>

### Google Workspace & HR sync

<table>
<tr><td width="56"><img src="https://weidhaus.com/logos/gmail-signatures.svg" width="44" height="44" alt=""></td><td><b>Eigenlaut</b><br>On-brand Gmail signatures for Google Workspace: one template, filled from the directory and kept in step in every mailbox. Hosted on Cloudflare or self-hosted (AGPL-3.0); the earlier Apps Script version is the linked repo.<br><sub>TypeScript · Cloudflare Workers · Google Workspace Admin SDK</sub></td><td><a href="https://weidhaus.com/projekte/gmail-signatures/">Case study</a><br><a href="https://eigenlaut.app">Site</a><br><a href="https://github.com/weidhaus/Gmail-Signature-Manager-for-Google-Workspace">Code</a></td></tr>
<tr><td width="56"><img src="https://weidhaus.com/logos/idenflow.svg" width="44" height="44" alt=""></td><td><b>idenflow</b><br>Multi-tenant SaaS that keeps Google Workspace in line with Personio: changes as a reviewable plan, joiner, mover and leaver playbooks, per-tenant encryption, a tamper-evident audit log and Google sign-in instead of Keycloak. v2, rebuilt from scratch, built to run on Google Cloud in Frankfurt.<br><sub>Python · FastAPI · PostgreSQL · React · Google Cloud</sub></td><td><a href="https://weidhaus.com/projekte/idenflow/">Case study</a></td></tr>
<tr><td width="56"><img src="https://weidhaus.com/logos/spoor.svg" width="44" height="44" alt=""></td><td><b>Spoor</b><br>Open-source SaaS discovery from the identity provider: finds the apps people use from sign-ins and OAuth grants in Google Workspace and Entra ID, plus CSV imports; access paths, licences, leavers with access; read-only by default, append-only audit log. AGPL-3.0.<br><sub>Python · FastAPI · React · SQLite · Google Workspace Admin SDK · Microsoft Entra ID · Docker</sub></td><td><a href="https://weidhaus.com/projekte/spoor/">Case study</a><br><a href="https://github.com/weidhaus/spoor">Code</a></td></tr>
</table>

### Web & native products

<table>
<tr><td width="56"><img src="https://weidhaus.com/logos/regalplaner3d.svg" width="44" height="44" alt=""></td><td><b>Regalplaner 3D</b><br>Browser-based 3D shelf planner on a single Cloudflare Worker with D1.<br><sub>React · TypeScript · Vite · Cloudflare Workers · D1</sub></td><td><a href="https://weidhaus.com/projekte/regalplaner3d/">Case study</a><br><a href="https://regalplaner3d.de">Site</a></td></tr>
<tr><td width="56"><img src="https://weidhaus.com/logos/chronato.png" width="44" height="44" alt=""></td><td><b>Chronato</b><br>Native Kimai 2 time-tracking client for the macOS menu bar and iPhone.<br><sub>Swift · Kimai API</sub></td><td><a href="https://weidhaus.com/projekte/chronato/">Case study</a><br><a href="https://github.com/weidhaus/Chronato">Code</a></td></tr>
</table>
<!-- projects:end -->

<sub>This list is generated from [`projects.json`](projects.json), the same file that feeds the showcase on weidhaus.com.</sub>
