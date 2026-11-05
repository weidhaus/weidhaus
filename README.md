# Justus-Constantin Weidhaus

I build automations and AI tools for small businesses and founders: lead routing and CRM sync, Google Workspace and HR
plumbing, and local-first AI where the data should not leave the machine. Most of it is self-hosted, containerised and
watched by alerts rather than by people.

Freelance work and case studies: [weidhaus.com](https://weidhaus.com) · Contact: jc@weidhaus.com

## What I build

<!-- projects:start -->
### Process automation

- Vertriebsautomatisierung (client project): Lead import, call tagging, deal-stage logic and follow-up tasks for a sales team, built on n8n and Pipedrive. `n8n · Pipedrive · Google Sheets · Webhooks`
- Lead-Sync (client project): Unattended spreadsheet-to-API lead forwarder with idempotent delivery, stored proof of every request and ntfy alerts. `Go · SQLite · Docker · ntfy`
- HubSpot-Monday-Sync (client project): One-way HubSpot to Monday sync for an event venue: calendar items from set-up to dismantling, alternative dates as their own items, name reconciliation every 6 hours, self-hosted with push alerts. `TypeScript · HubSpot API · Monday API · Docker · ntfy`
- Belegungsplan für HubSpot (client project): Read-only venue booking plan on live HubSpot data: halls as rows, main and alternative dates linked, clashes flagged, insights on capacity and demand; one Cloudflare Worker with an EU-pinned Durable Object. `React · Cloudflare Workers · Durable Objects · HubSpot API`

### AI tools, self-hosted

- **Meetfacts**: Local-first macOS meeting recorder: mic and system audio as separate tracks, on-device transcription, speaker-tagged transcripts. `Swift · macOS · on-device ASR` · [site](https://meetfacts.com)
- **HoldFn**: Push-to-talk dictation daemon for macOS with on-device transcription; text is inserted at the cursor. `Swift · macOS · on-device ASR` · [site](https://holdfn.com)
- **steuerdocs**: Self-hosted LLM triage for Paperless-NGX: tags every document of a tax year, recall-first, with a review queue. `Python · Paperless-NGX · LLM APIs · Docker`
- **meetartifacts**: Matches meeting notes to CRM deals and uploads them, with Google Calendar integration. `TypeScript · HubSpot API · Google Calendar · Docker`
- **ntfy inbox**: Self-hosted topic inventory and searchable report archive for your own ntfy server, with read-only MCP tools. `Python · MCP · ntfy` · [code](https://github.com/weidhaus/ntfy-inbox)

### Google Workspace & HR sync

- **Eigenlaut**: On-brand Gmail signatures for Google Workspace: one template, filled from the directory and kept in step in every mailbox. Hosted on Cloudflare or self-hosted (AGPL-3.0); the earlier Apps Script version is the linked repo. `TypeScript · Cloudflare Workers · Google Workspace Admin SDK` · [site](https://eigenlaut.app) · [code](https://github.com/weidhaus/Gmail-Signature-Manager-for-Google-Workspace)
- **identflow**: Identity sync from Personio to Google Workspace, with Keycloak OIDC login; in production use. `Python · Keycloak · Docker`
- **SaaS-Management**: Discovery-first SaaS management: apps, access paths and licences from Google Workspace, Entra ID and CSV imports; read-only by default, append-only audit log. `Python · FastAPI · Google Workspace Admin SDK · Microsoft Entra ID · Docker`

### Web & native products

- **Regalplaner 3D**: Browser-based 3D shelf planner on a single Cloudflare Worker with D1. `React · TypeScript · Vite · Cloudflare Workers · D1` · [site](https://regalplaner3d.de)
- **Gartenplaner 3D**: Browser-based 3D garden planner: terrain, house, plants, paths, quantity list; runs fully client-side. `React · TypeScript · Vite · Cloudflare Workers`
- **Chronato**: Native Kimai 2 time-tracking client for the macOS menu bar and iPhone. `Swift · Kimai API` · [code](https://github.com/weidhaus/Chronato)
<!-- projects:end -->

<sub>This list is generated from [`projects.json`](projects.json), the same file that feeds the showcase on weidhaus.com.</sub>
