## Ausgangslage

Neue Leads kommen in einer Tabelle an und müssen an die Lead-Schnittstelle eines Partners. Diese Schnittstelle prüft nur, ob alle Felder vorhanden sind. Sie prüft keine Inhalte und erkennt keine Dubletten: Ein Lead, der zweimal geschickt wird, wird zweimal angenommen. Eine Lead-Nummer als Quittung gibt es auch nicht. Den Nachweis, was wann übergeben wurde, muss also die eigene Seite führen.

## Was ich gebaut habe

Einen kleinen Dienst, der beim Kunden produktiv läuft, rund um die Uhr und ohne Aufsicht:

- **Alle fünf Minuten** liest er die Tabelle und schickt neue Leads an den Partner.
- **Nie doppelt:** Jede Zeile bekommt einen Fingerabdruck aus E-Mail, Telefonnummer, Datum und Name. Was einmal übergeben wurde, geht nicht noch einmal raus.
- **Lieber einmal zu wenig als doppelt:** Ist unklar, ob eine Übergabe angekommen ist, schickt der Dienst sie nicht blind erneut, sondern markiert sie zur Prüfung.
- **Lückenloser Nachweis:** Vor jedem Versand speichert er den exakten Inhalt der Anfrage, dazu Status, Antwortcode, Anzahl der Versuche und Zeitpunkt. Daraus entstehen ein täglicher CSV-Export und Berichte auf Abruf.
- **Schutz vor Unfällen:** Beim ersten Start gelten alle vorhandenen Zeilen als erledigt. Sehen in einem Durchlauf mehr als 25 Zeilen neu aus, etwa weil jemand die Tabelle umsortiert hat, sendet der Dienst nichts und meldet sich.

## Wie es zuverlässig läuft

- Alarme kommen als Push-Nachricht über einen eigenen ntfy-Server, jede Alarmart höchstens einmal pro Stunde, dazu eine tägliche Zusammenfassung.
- Vorübergehende Fehler werden mit wachsendem Abstand bis zu dreimal pro Durchlauf wiederholt, über mehrere Durchläufe bis zu fünfmal. Danach wird der Lead als gescheitert gemeldet.
- Der Container läuft ohne Root-Rechte, mit schreibgeschütztem Dateisystem und ohne offene Ports. Test- und Produktivbetrieb sind getrennt und lassen sich nicht verwechseln.
- 172 automatische Tests laufen ohne Internet gegen nachgebaute Server.

## Was das für Sie heißt

Viele Übergaben zwischen Firmen laufen über „Tabelle rein, Schnittstelle raus“. Das ist schnell gebaut und schwer zu kontrollieren. Dieser Dienst zeigt, wie es zuverlässig geht: Jede Lieferung ist belegbar, Dubletten kommen gar nicht erst raus, und wenn etwas hakt, erfahren Sie es, bevor der Partner anruft.

Der Kunde wird hier nicht genannt.
