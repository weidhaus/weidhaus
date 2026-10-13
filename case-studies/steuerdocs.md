## Ausgangslage

Zum Jahresende liegen hunderte Dokumente im Archiv: Rechnungen, Bescheinigungen, Verträge, Arztrechnungen. Für die Steuererklärung zählt nur ein Teil davon, und welcher, ist mühsam herauszufinden. Wer mit Paperless-NGX archiviert, hat den Text aller Dokumente schon, nur sortiert ist er nicht.

## Was ich gebaut habe

Ein Werkzeug, das alle Dokumente eines Steuerjahres aus Paperless-NGX holt und von einem Sprachmodell vorsortieren lässt:

- **Kategorien nach Steuerformular:** 19 Kategorien, jede einer ELSTER-Anlage zugeordnet, von Lohn und Gehalt bis „sonstiges Relevantes“.
- **Ergebnis direkt im Archiv:** Die Dokumente bekommen Schlagworte für Jahr und Kategorie in Paperless. Ein Dashboard zeigt die Übersicht nach Anlage.
- **Prüfliste statt Blindflug:** Alles, was unsicher ist, bekommt das Schlagwort „Steuer: Prüfen“ und landet in einer Prüfliste. Ein Klick bestätigt oder verwirft, und diese Entscheidung bleibt auch bei einem neuen Durchlauf erhalten.

## Lieber einmal zu viel prüfen

Ein fälschlich aussortierter Beleg kostet Geld, ein fälschlich markierter zehn Sekunden. Deshalb ist das Werkzeug darauf ausgelegt, nichts zu übersehen:

- Im Zweifel lautet die Antwort „vielleicht“, nie „nein“.
- Auch ein als relevant erkannter Beleg kommt auf die Prüfliste, wenn das Modell sich zu weniger als 75 Prozent sicher ist.
- Ist der Text eines Scans unleserlich, kann das Modell den Beleg nicht aussortieren.
- Dokumente ohne Text oder mit unverständlicher Antwort werden nicht übersprungen, sondern zur Prüfung vorgelegt.

## Sicherheit und Datenschutz

- Das Werkzeug löscht keine Dokumente und überschreibt keine vorhandenen Schlagworte, es ergänzt nur. Ein Testmodus schreibt gar nichts zurück.
- Das Werkzeug selbst läuft auf dem eigenen Server, die Ergebnisse liegen in einer lokalen Datenbank. Der Text jedes Belegs geht aber zur Einordnung an den gewählten Modellanbieter. Ein lokales Modell ist noch nicht eingebaut.
- Rund 50 automatische Tests decken unter anderem die Prüfliste, Wiederholungen bei Fehlern und einen Schutz gegen manipulierte Dokumenttexte ab.

## Was das für Sie heißt

Das Muster passt auf viele Büros: KI sortiert vor, ein Mensch entscheidet die Grenzfälle, und nichts geht verloren. Ob Eingangsrechnungen, Bewerbungen oder Kundenpost, die Frage ist immer dieselbe: Was darf die Maschine allein entscheiden, und was legt sie Ihnen vor?
