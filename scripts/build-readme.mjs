// Renders the project list in README.md from projects.json, between the projects markers: logos come from weidhaus.com\n// (projects.json `logo`), so a new logo shows here once the site serves it.
// `node scripts/build-readme.mjs` writes it; `--check` exits 1 when README.md is stale.
import { readFileSync, writeFileSync } from 'node:fs'

const START = '<!-- projects:start -->'
const END = '<!-- projects:end -->'

const SECTIONS = [
  ['automation', 'Process automation'],
  ['ai', 'AI tools, self-hosted'],
  ['workspace', 'Google Workspace & HR sync'],
  ['product', 'Web & native products'],
]

const SITE = 'https://weidhaus.com'
const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const link = (href, text) => `<a href="${href}">${text}</a>`

/** One project as a table row: its logo from weidhaus.com, name, summary and stack, then its links. */
function row(p) {
  const logo = p.logo ? `<img src="${SITE}${p.logo}" width="44" height="44" alt="">` : ''
  const who = p.kind === 'client' ? ' <sub>client project</sub>' : ''
  const links = [
    p.caseStudy && link(`${SITE}/projekte/${p.id}/`, 'Case study'),
    p.site && link(p.site, 'Site'),
    p.repo && link(p.repo, 'Code'),
  ].filter(Boolean)
  return `<tr><td width="56">${logo}</td><td><b>${esc(p.name)}</b>${who}<br>${esc(p.summary_en)}<br><sub>${esc(p.stack.join(' · '))}</sub></td><td>${links.join('<br>')}</td></tr>`
}

/** Builds the Markdown block for the given projects: the open-source repos first, then one table per service. */
export function render(projects) {
  const out = []
  const open = projects.filter((p) => p.repo)
  if (open.length) out.push(`**Open source:** ${open.map((p) => `[${p.repo.split('/').pop()}](${p.repo})`).join(' · ')}`, '')
  for (const [service, title] of SECTIONS) {
    const items = projects.filter((p) => p.service === service)
    if (!items.length) continue
    out.push(`### ${title}`, '', '<table>', ...items.map(row), '</table>', '')
  }
  return out.join('\n').trimEnd()
}

/** Replaces the marked block in a README string. */
export function inject(readme, block) {
  const a = readme.indexOf(START)
  const b = readme.indexOf(END)
  if (a < 0 || b < a) throw new Error(`README.md needs ${START} and ${END}`)
  return `${readme.slice(0, a + START.length)}\n${block}\n${readme.slice(b)}`
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const { projects } = JSON.parse(readFileSync('projects.json', 'utf8'))
  const current = readFileSync('README.md', 'utf8')
  const next = inject(current, render(projects))
  if (process.argv.includes('--check')) {
    if (next !== current) {
      console.error('README.md is out of date: run node scripts/build-readme.mjs')
      process.exit(1)
    }
  } else {
    writeFileSync('README.md', next)
  }
}
