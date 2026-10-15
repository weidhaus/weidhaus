## Der Stapel zum Jahresende

Hunderte Dokumente im Archiv, und irgendwo dazwischen die wenigen, die für die Steuererklärung zählen. Wer mit Paperless-NGX archiviert, hat den Text all dieser Dokumente längst. Was fehlt, ist jemand, der sie einmal durchgeht und sortiert. steuerdocs übernimmt diesen ersten Durchgang.

## Was es tut

steuerdocs holt alle Dokumente eines Steuerjahres aus Paperless und lässt ein Sprachmodell sie in 19 Kategorien einordnen, jede einer ELSTER-Anlage zugeordnet, von Lohn und Gehalt bis „sonstiges Relevantes“. Das Ergebnis landet als Schlagworte direkt im Archiv, und ein Dashboard zeigt die Übersicht nach Anlage.

## Die eine Regel: im Zweifel vorlegen

Ein fälschlich aussortierter Beleg kostet Geld. Ein fälschlich markierter kostet zehn Sekunden. Aus dieser Asymmetrie ist das ganze Werkzeug gebaut:

- Im Zweifel antwortet es „vielleicht“, nie „nein“.
- Auch einen als relevant erkannten Beleg legt es vor, wenn das Modell sich zu weniger als 75 Prozent sicher ist.
- Einen unleserlichen Scan darf das Modell nicht aussortieren.
- Dokumente ohne Text oder mit unverständlicher Antwort werden nicht übersprungen, sondern landen auf der Prüfliste.

Auf der Prüfliste bestätigen oder verwerfen Sie mit einem Klick, und Ihre Entscheidung bleibt auch bei einem neuen Durchlauf stehen.

## Was es nicht tut

Es löscht nichts und überschreibt keine vorhandenen Schlagworte, es ergänzt nur. Ein Testmodus schreibt gar nichts zurück. Das Werkzeug läuft auf dem eigenen Server, die Ergebnisse liegen in einer lokalen Datenbank. Der Text jedes Belegs geht allerdings zur Einordnung an den gewählten Modellanbieter; ein lokales Modell ist noch nicht eingebaut. Rund 50 Tests decken unter anderem die Prüfliste, Wiederholungen bei Fehlern und einen Schutz gegen manipulierte Dokumenttexte ab.

## Das Muster dahinter

KI sortiert vor, ein Mensch entscheidet die Grenzfälle, und nichts geht verloren. Das passt auf Eingangsrechnungen, Bewerbungen und Kundenpost genauso. Die eigentliche Arbeit ist jedes Mal dieselbe Frage: Was darf die Maschine allein entscheiden, und was legt sie Ihnen vor?
