## Ein Import, der still scheitert

Als ich dazukam, war die Fehlerbehandlung der bestehenden Automatisierungen kaputt. Ein Lead-Import konnte einen ganzen Tag lang ausfallen, ohne dass es jemand merkte. Für ein Vertriebsteam heißt das: Menschen haben auf eine Anzeige geklickt, ihre Daten hinterlassen und warten auf einen Anruf, der nicht kommt.

## Was die Workflows dem Team abnehmen

Ich habe die Strecke vom ersten Kontakt bis zum Termin in n8n neu aufgebaut. Die Frage war nie, wie viele Workflows es braucht, sondern was das Team danach nicht mehr selbst tun muss:

- **Abtippen.** Leads aus der Übergabetabelle stehen nach spätestens zwei Minuten als Person und Deal in Pipedrive, mit einheitlich formatierter Telefonnummer. Gibt es den Kontakt schon, bekommt der offene Deal eine Notiz statt eines Zwillings. Widersprechen sich die Treffer zu E-Mail und Telefon, entscheidet ein Mensch.
- **Mitzählen.** Markiert jemand einen Anruf in Aircall, zählt der Workflow die Versuche, setzt den Status und schiebt den Deal vorwärts, nie zurück. Am nächsten Werktag steht die Rückruf-Aufgabe beim Deal-Owner.
- **Hinterherlaufen.** Bleibt ein Gespräch zehn Minuten unmarkiert, kommt eine Mail mit Buttons: ein Klick, erledigt. Unbeantwortete Anrufe markieren sich selbst.
- **Termine übertragen.** Buchungen und Absagen aus Calendly setzen die Phase im CRM, legen den Termin mit Teams-Link an und erzeugen bei Absagen eine Aufgabe zum Neu-Terminieren.
- **Gesprächsnotizen schreiben.** Mitschriften von Verkaufsgesprächen wertet ein Sprachmodell aus, das Ergebnis liegt in Google Drive und am Deal.

## Damit nie wieder still etwas ausfällt

Jeder Zweig schreibt eine Protokollzeile, jeder Lead ist nachvollziehbar. Zwei Sperren verhindern, dass ein Lead doppelt verarbeitet wird, auch wenn zwei Läufe gleichzeitig starten. Ein Wächter schaut alle 30 Minuten, ob noch Leads ankommen, und schlägt nach 12 und nach 24 Stunden Stille Alarm. Fehler gehen per Mail ans Team.

Ein Wochenbericht zeigt, wie konsequent Anrufe markiert werden, und ein Prüf-Workflow gleicht die Felder der Pipeline ab, ohne etwas anzufassen.

## Für Ihren Vertrieb

Wenn Ihre Leads heute zwischen Tabelle, Telefon und CRM hängen bleiben, fange ich genau da an: Jede Quelle bekommt einen eigenen, überwachten Weg ins CRM, und Ihr Team sieht morgens Aufgaben statt Listen.

Den Kunden nenne ich hier nicht.
