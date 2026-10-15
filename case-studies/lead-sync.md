## Das Problem mit „angekommen“

Eine Tabelle, eine Schnittstelle bei einem Partner, dazwischen Leads. Klingt nach einem Nachmittag Arbeit. Der Haken: Die Schnittstelle nimmt alles an. Sie prüft nur, ob die Felder ausgefüllt sind. Wer einen Lead zweimal schickt, hat ihn dort zweimal. Eine Quittung gibt es nicht. Wenn später jemand fragt, was wann geliefert wurde, hat die Gegenseite keine Antwort. Also muss die Antwort auf unserer Seite liegen.

## Lieber einmal zu wenig als doppelt

Die wichtigste Entscheidung in diesem Projekt war eine Abwägung. Bleibt nach einem Versand unklar, ob er angekommen ist, gibt es zwei Wege: noch einmal schicken und eine Dublette riskieren, oder anhalten und nachsehen. Lead-Sync hält an. Ein doppelter Lead liegt beim Partner und lässt sich nicht zurückholen. Ein angehaltener kostet eine Minute Prüfung.

Daraus folgt der Rest. Jede Zeile bekommt einen Fingerabdruck aus E-Mail, Telefonnummer, Datum und Name, und was einmal raus ist, geht nie wieder raus. Vor jedem Versand speichert der Dienst den genauen Inhalt der Anfrage, dazu Antwortcode, Versuche und Zeitpunkt. Aus diesem Protokoll entstehen der tägliche CSV-Export und jeder Bericht, den jemand nachfragt.

## Gebaut für den Tag, an dem jemand die Tabelle umsortiert

Tabellen bearbeiten Menschen. Irgendwann sortiert jemand um, und plötzlich sehen hunderte alte Zeilen neu aus. Deshalb sendet Lead-Sync nichts, wenn in einem Durchlauf mehr als 25 Zeilen neu erscheinen, und meldet sich stattdessen. Beim ersten Start gilt der vorhandene Bestand als erledigt.

Meldungen kommen als Push über einen eigenen ntfy-Server, jede Alarmart höchstens einmal pro Stunde, dazu eine tägliche Zusammenfassung. Vorübergehende Fehler wiederholt der Dienst mit wachsendem Abstand, bevor er einen Lead als gescheitert meldet. Er läuft ohne Root-Rechte und ohne offene Ports, und 172 Tests prüfen ihn ohne Internet gegen nachgebaute Server.

So läuft er beim Kunden produktiv, alle fünf Minuten, ohne dass jemand danebensitzt.

## Für Ihre Übergaben

„Tabelle rein, Schnittstelle raus“ ist in vielen Firmen Alltag und selten kontrolliert. Wenn bei Ihnen Daten zwischen Systemen wandern und niemand sicher sagen kann, was wirklich angekommen ist, ist das genau die Art Problem, die ich gern löse.

Den Kunden nenne ich hier nicht.
