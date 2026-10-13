## Ausgangslage

Ein Vertriebsteam bekommt seine Leads aus mehreren Richtungen: aus Werbeanzeigen, die in einer Übergabetabelle landen, aus Telefonaten und aus gebuchten Terminen. Alles soll im CRM (Pipedrive) zusammenlaufen, ohne dass jemand Daten abtippt. Vor dem Projekt war die Fehlerbehandlung der Automatisierungen defekt: Ein fehlgeschlagener Import konnte einen ganzen Tag lang unbemerkt bleiben.

## Was ich gebaut habe

n8n-Workflows, die den ganzen Weg vom ersten Kontakt bis zum Termin abdecken:

- **Lead-Import:** Alle zwei Minuten liest ein Workflow die Übergabetabelle und legt Person und Deal in Pipedrive an. Er sucht vorhandene Kontakte getrennt nach E-Mail und Telefonnummer. Widersprechen sich die Treffer, entscheidet ein Mensch. Gibt es schon einen offenen Deal, bekommt dieser eine Notiz statt eines zweiten Deals. Telefonnummern werden in ein einheitliches internationales Format gebracht.
- **Anruf-Auswertung:** Wird ein Anruf in der Telefonanlage (Aircall) markiert, zählt der Workflow die Kontaktversuche, setzt den Lead-Status und schiebt den Deal nur vorwärts, nie zurück. „Nummer falsch“ schließt den Deal als verloren. Für den Deal-Owner entsteht eine Rückruf-Aufgabe zum nächsten Werktag.
- **Erinnerung statt Nachhaken:** Unbeantwortete Anrufe werden automatisch markiert. Bleibt ein Gespräch zehn Minuten unmarkiert, kommt eine E-Mail mit Buttons, über die man es mit einem Klick nachträgt.
- **Termine:** Eine Buchung oder Absage über Calendly setzt die Phase im CRM, legt die Termin-Aktivität mit Teams-Link an und erzeugt bei Absagen eine Aufgabe zum Neu-Terminieren.
- **Gesprächsauswertung:** Mitschriften von Verkaufsgesprächen werden mit einem Sprachmodell ausgewertet und in Google Drive und beim Deal in Pipedrive abgelegt.
- **Wochenbericht und Feldprüfung:** Ein Bericht zeigt, wie konsequent Anrufe markiert werden. Ein Prüf-Workflow gleicht die Felder und Auswahloptionen der Pipeline ab, ohne etwas zu ändern.

## Wie es zuverlässig läuft

- Jeder Zweig schreibt eine Protokollzeile, so ist jeder Lead nachvollziehbar.
- Zwei Sperren verhindern, dass ein Lead doppelt verarbeitet wird, auch wenn zwei Läufe gleichzeitig starten.
- Ein Wächter prüft alle 30 Minuten, ob noch Leads ankommen, und schlägt nach 12 und 24 Stunden Stille Alarm.
- Fehler gehen per E-Mail an das Team. Scheitert ein Aufruf an Pipedrive, versucht es der nächste Lauf erneut.

## Was das für Sie heißt

Wenn Ihre Leads heute zwischen Tabellen, Telefon und CRM verloren gehen, ist das der Bauplan: Jede Quelle bekommt einen eigenen, überwachten Weg ins CRM, Dubletten werden abgefangen, und Ihr Team sieht morgens Aufgaben statt Listen.

Der Kunde wird hier nicht genannt.
