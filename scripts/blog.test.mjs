import assert from 'node:assert/strict'
import { test } from 'node:test'
import { allowedHref, ARTICLE_SCHEMA, brief, buildPrompt, checkArticle, nextTopic, systemPrompt, toMarkdown } from './blog.mjs'

const words = (n) => Array.from({ length: n }, (_, i) => `wort${i}`).join(' ')

/** A draft that passes the gate; tests break one thing at a time. */
function draft(over = {}) {
  return {
    slug: 'prozesse-automatisieren-beispiele',
    title: 'Prozesse automatisieren: zwei Beispiele aus der Praxis',
    description: 'Wie Leads aus Tabelle, Telefon und Terminbuchung überwacht im CRM landen, und woran Sie erkennen, welcher Ablauf sich zuerst lohnt.',
    keyword: 'prozesse automatisieren beispiele',
    intro: `Zwei Beispiele. Mehr in der [Fallstudie](/projekte/sales-automation). ${words(200)}`,
    sections: [1, 2, 3].map((i) => ({ heading: `Abschnitt ${i}`, paragraphs: [words(250)] })),
    faq: [
      { q: 'Frage eins?', a: 'Antwort eins.' },
      { q: 'Frage zwei?', a: 'Antwort zwei.' },
    ],
    ...over,
  }
}

test('a well-formed draft passes the gate', () => {
  assert.deepEqual(checkArticle(draft(), new Set()).errors, [])
})

test('the gate rejects missing fields, duplicates, external links, prices and forbidden claims', () => {
  assert.deepEqual(checkArticle({ ...draft(), title: '' }, new Set()).errors, ['Pflichtfelder fehlen'])
  assert.ok(checkArticle(draft(), new Set(['prozesse-automatisieren-beispiele'])).errors.includes('Slug existiert bereits'))
  const bad = draft({ intro: `Siehe https://example.com, ab 99 € und garantiert datenschutzkonform. [x](/projekte/sales-automation) ${words(200)}` })
  const errors = checkArticle(bad, new Set()).errors
  for (const e of ['Externe URL im Text', 'Preisangabe im Text', 'Verbotene Aussage: Garantie- oder Erfolgsversprechen', 'Verbotene Aussage: Rechtliche Zusicherung']) {
    assert.ok(errors.includes(e), e)
  }
})

test('links: only the brief and existing posts, and at least one to the brief', () => {
  assert.ok(allowedHref('/contact', new Set()))
  assert.ok(allowedHref('/blog/alt', new Set(['alt'])))
  assert.ok(!allowedHref('/blog/neu', new Set(['alt'])))
  assert.ok(!allowedHref('javascript:alert(1)', new Set()))
  const noLink = draft({ intro: `Ohne Link. [weg](/admin) ${words(200)}` })
  const errors = checkArticle(noLink, new Set()).errors
  assert.ok(errors.includes('Nicht erlaubte Links: /admin'))
  assert.ok(errors.some((e) => e.startsWith('Weniger als 1 Link')))
})

test('length bands are enforced', () => {
  const short = draft({ sections: [1, 2, 3].map((i) => ({ heading: `A${i}`, paragraphs: ['kurz'] })) })
  assert.ok(checkArticle(short, new Set()).errors.some((e) => e.endsWith('Wörter (800–3000)')))
})

test('the queue is taken in order and each keyword is used once', () => {
  const topics = [{ keyword: 'A' }, { keyword: 'B' }]
  assert.equal(nextTopic(topics, []).keyword, 'A')
  assert.equal(nextTopic(topics, [{ keyword: 'a' }]).keyword, 'B')
  assert.equal(nextTopic(topics, [{ keyword: 'a' }, { keyword: 'b' }]), null)
})

test('the prompt carries the topic sources and the brief rules', () => {
  const p = buildPrompt({ keyword: 'k', angle: 'w', intent: 'i', sources: ['case-studies/lead-sync.md'] }, [])
  assert.match(p, /<quelle datei="case-studies\/lead-sync.md">/)
  assert.match(p, /alle fünf Minuten/i)
  for (const r of brief.rules) assert.ok(systemPrompt().includes(r))
})

test('every source a topic names exists, and every case study link points at a case study', async () => {
  const { readFileSync, existsSync } = await import('node:fs')
  const root = new URL('..', import.meta.url).pathname
  const topics = JSON.parse(readFileSync(root + 'blog/topics.json', 'utf8'))
  for (const t of topics) for (const s of t.sources) assert.ok(existsSync(root + s), s)
  for (const l of brief.links.filter((l) => l.href.startsWith('/projekte/'))) {
    assert.ok(existsSync(`${root}case-studies/${l.href.slice('/projekte/'.length)}.md`), l.href)
  }
})

test('the schema forbids extra keys and the Markdown keeps every part', () => {
  assert.equal(ARTICLE_SCHEMA.additionalProperties, false)
  const md = toMarkdown({ intro: 'Intro', sections: [{ heading: 'H', paragraphs: ['P'], bullets: ['B'] }], faq: [{ q: 'Q', a: 'A' }] })
  assert.equal(md, 'Intro\n\n## H\n\nP\n\n- B\n\n## Häufige Fragen\n\n### Q\n\nA\n')
})
