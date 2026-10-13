// Renders the project list in README.md from projects.json, between the projects markers.
// `node scripts/build-readme.mjs` writes it; `--check` exits 1 when README.md is stale.
import { readFileSync, writeFileSync } from 'node:fs'

const START = '<!-- projects:start -->'
const END = '<!-- projects:end -->'

const SECTIONS = [
  ['automation', 'Process automation'],
  ['ai', 'AI tools, local-first'],
  ['workspace', 'Google Workspace & HR sync'],
  ['product', 'Web & native products'],
]

/** Builds the Markdown block for the given projects. */
export function render(projects) {
  const out = []
  for (const [service, title] of SECTIONS) {
    const items = projects.filter((p) => p.service === service)
    if (!items.length) continue
    out.push(`### ${title}`, '')
    for (const p of items) {
      const links = [p.site && `[site](${p.site})`, p.repo && `[code](${p.repo})`].filter(Boolean)
      const name = p.kind === 'client' ? `${p.name} (client project)` : `**${p.name}**`
      out.push(`- ${name}: ${p.summary_en} \`${p.stack.join(' · ')}\`${links.length ? ` · ${links.join(' · ')}` : ''}`)
    }
    out.push('')
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
