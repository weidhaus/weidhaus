## Gespräche, die den Raum nicht verlassen sollen

Bewerbungsgespräche, Kundentermine, Verhandlungen: Genau die Meetings, bei denen ein Protokoll am meisten hilft, lädt man ungern bei einem Transkriptionsdienst in der Cloud hoch. Meetfacts nimmt auf, schreibt mit und fasst zusammen, und das Audio verlässt dabei den Mac nicht.

## Wie es sich anfühlt

Sie starten die Aufnahme, und Meetfacts nimmt zwei Spuren auf: Ihr Mikrofon und den Ton des Meetings, ohne zusätzlichen Audiotreiber. Deshalb steht im Protokoll später sauber getrennt, was Sie gesagt haben und was die anderen. Die Gegenseite trennt die App nach Stimmen. Eine Stimme benennen Sie einmal, in späteren Meetings erkennt Meetfacts sie wieder.

Muss das Gespräch kurz unterbrochen werden, pausieren Sie die Aufnahme. Solange sie pausiert, nimmt Meetfacts nichts auf, und die Mikrofonanzeige des Macs ist aus. Es bleibt eine Aufnahme mit einem Protokoll, in dem jede Pause markiert ist. Auf Wunsch fragt Meetfacts vor jeder Aufnahme, ob alle Beteiligten einverstanden sind, und speichert die Antwort mit der Aufnahme.

Die Spracherkennung läuft auf dem Gerät und versteht 25 europäische Sprachen, Deutsch eingeschlossen. Die Zusammenfassung schreibt standardmäßig Apples Sprachmodell auf dem Mac. Aufgaben aus dem Gespräch übernehmen Sie in Apple Erinnerungen. Alle Mitschriften liegen als Markdown und JSON auf Ihrem Rechner und sind durchsuchbar.

## Was ins Netz geht, und was nicht

Diese Frage soll sich in wenigen Sätzen beantworten lassen. Audio geht nie ins Netz. Meetfacts verbindet sich in vier Fällen. Die Sprachmodelle lädt es einmal von Hugging Face, aber erst, wenn Sie den Download starten, und prüft jede Datei gegen eine Prüfsumme. Wer das nicht möchte, besorgt die Dateien selbst und importiert sie. Dazu kommen die Suche nach Updates und, nur mit gekaufter Lizenz, die Lizenzprüfung. Wer Zusammenfassungen lieber auf einem eigenen Modell-Server erstellt, kann ihn eintragen. Dorthin geht dann der Text des Transkripts mit Titel und Teilnehmernamen, nie das Audio, und ein Server außerhalb des Macs wird standardmäßig nur verschlüsselt angesprochen.

Meetfacts ist eine native Swift-App für macOS 26 auf Apple-Silicon-Macs.

## Warum das für Ihr Unternehmen zählt

KI heißt nicht automatisch, dass Ihre Daten irgendwohin wandern. Wenn die Daten heikel sind, baue ich die Verarbeitung dorthin, wo sie schon liegen. Das gilt für Gesprächsnotizen im Vertrieb genauso wie für interne Dokumente.
