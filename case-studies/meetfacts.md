## Die Idee

Meetings aufnehmen und in Text verwandeln, ohne dass das Audio den Rechner verlässt. Viele Transkriptions-Dienste schicken Gespräche in eine Cloud. Für Gespräche mit Kunden, Bewerbern oder Partnern ist das oft genau das, was man nicht will.

## Was Meetfacts kann

- **Zwei Spuren statt einer:** Ihr Mikrofon und der Ton des Meetings werden getrennt aufgenommen. Dafür braucht es keinen zusätzlichen Audiotreiber. So steht im Protokoll sauber, was Sie gesagt haben und was die anderen.
- **Transkription auf dem Mac:** Ein Spracherkennungsmodell läuft direkt auf dem Gerät und versteht 25 europäische Sprachen, darunter Deutsch.
- **Wer hat was gesagt:** Die Gegenseite wird nach Stimmen getrennt. Eine Stimme benennen Sie einmal, danach erkennt Meetfacts sie in späteren Meetings wieder.
- **Zusammenfassung und Aufgaben:** Zusammenfassungen entstehen mit einem Modell auf dem Mac. Aufgaben aus dem Gespräch lassen sich in Apple Erinnerungen übernehmen.
- **Durchsuchbar:** Alle Mitschriften liegen als Markdown und JSON auf Ihrem Rechner und lassen sich durchsuchen.

## Was den Mac verlässt und was nicht

Die App schickt kein Audio ins Netz. Ins Netz gehen nur die Lizenzprüfung und die Suche nach Updates. Wer Zusammenfassungen über einen eigenen Modell-Server erstellen will, kann das einstellen. Standard ist der eigene Mac, ein anderer Server wird standardmäßig nur verschlüsselt angesprochen. Die Sprachmodelle lädt die App nicht selbst herunter. Sie importieren sie einmal, und die App prüft jede Datei gegen eine Prüfsumme.

## Technik

Native Swift-App für macOS 26 auf Apple-Silicon-Macs.

## Was das für Sie heißt

Meetfacts zeigt, wie ich KI baue, wenn die Daten heikel sind: Die Arbeit passiert dort, wo die Daten schon liegen. Dasselbe Prinzip lässt sich auf Ihre Abläufe übertragen, zum Beispiel auf Gesprächsnotizen im Vertrieb oder auf interne Dokumente.
