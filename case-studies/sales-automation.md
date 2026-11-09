## Ein Import, der still scheitert

Ein Vertrieb für Kapitalanlage-Immobilien aus München verkauft Wohnungen am Telefon und per Video. Ein Setter ruft den Lead an und qualifiziert ihn, es folgen zwei Strategiegespräche, dann Finanzierung und Notartermin. Das CRM hat ein Partner eingerichtet, ich baue die Automatisierung und die KI dazu.

Als ich dazukam, war die Fehlerbehandlung der bestehenden Automatisierungen kaputt. Ein Lead-Import konnte einen ganzen Tag lang ausfallen, ohne dass es jemand merkte. Für ein Vertriebsteam heißt das: Menschen haben auf eine Anzeige geklickt, ihre Daten hinterlassen und warten auf einen Anruf, der nicht kommt.

## Vom Lead bis zum Notar

Seit Mitte September läuft der ganze Weg in einer neuen Pipeline, für Deutschland und die Schweiz. Die Frage war nie, wie viele Workflows es braucht, sondern was das Team danach nicht mehr selbst tun muss:

- **Abtippen.** Leads aus der Übergabetabelle stehen nach spätestens zwei Minuten als Person und Deal in Pipedrive, mit einheitlich formatierter Telefonnummer. Gibt es den Kontakt schon, bekommt der offene Deal eine Notiz statt eines Zwillings. Widersprechen sich die Treffer zu E-Mail und Telefon, entscheidet ein Mensch.
- **Mitzählen.** Markiert jemand einen Anruf in Aircall, zählt der Workflow die Versuche, setzt den Status und schiebt den Deal vorwärts, nie zurück. Am nächsten Werktag steht die Rückruf-Aufgabe beim Deal-Owner.
- **Hinterherlaufen.** Bleibt ein Gespräch zehn Minuten unmarkiert, kommt eine Mail mit Buttons: ein Klick, erledigt. Unbeantwortete Anrufe markieren sich selbst.
- **Termine übertragen.** Buchungen und Absagen aus Calendly setzen die Phase im CRM. Bei einer Absage entsteht eine Aufgabe zum Neu-Terminieren.
- **Nachfragen.** Ist nach einem Strategiegespräch am Deal nichts passiert, fragt eine Mail den Berater: stattgefunden, nicht erschienen oder verschoben? Seine Antwort steht mit einem Klick im CRM.
- **Nachfassen.** Liegt ein Deal in der Finanzierung drei Werktage ohne Kontakt, steht morgens eine Anruf-Aufgabe da.

## Jedes Gespräch wird ausgewertet

Die Telefonate der Setter und die Strategiegespräche per Teams werden aufgezeichnet und transkribiert. Ein Sprachmodell liest jedes Transkript mit einem festen Bewertungsbogen:

- **Setter-Gespräche** bekommen Noten in sieben Bereichen, von der Gesprächsführung bis zur Einwandbehandlung, und eine Checkliste mit 20 Punkten: Hat der Setter nach Einkommen, Eigenkapital und weiteren Entscheidern gefragt? Dazu kommen die Stimmung des Leads, sein Persönlichkeitstyp mit einem Hinweis, wie man ihn anspricht, Kaufsignale, Einwände und das Risiko, dass er zum Termin nicht erscheint. Was der Lead zu Einkommen, Eigenkapital und Dringlichkeit sagt, steht danach in den Feldern im CRM, das ganze Audit in Google Drive.
- **Strategiegespräche** landen als Notiz am Deal und setzen die Phase. Ist der Kunde nicht erschienen, erkennt das die Auswertung. Jeder Einwand wird mit Kategorie festgehalten, damit sichtbar ist, welche offen bleiben.
- **Jeden Freitag** bekommt jeder Setter eine Auswertung seiner Woche mit Coaching, das sich auf seine echten Gespräche stützt. Die Geschäftsführung bekommt die Übersicht über alle.

Seit Anfang Oktober sind so 110 Setter-Gespräche bewertet und 36 Strategiegespräche verarbeitet.

## Ein Gedächtnis aus über 2.000 Gesprächen

Jeden Morgen lädt eine Wissensdatenbank alle neuen Telefonate und Strategiegespräche mit Transkript, ordnet sie Person und Deal zu und schreibt zu jedem Deal ein Dossier. Anfang November stehen dort 2.474 Gespräche seit Februar, 2.139 davon mit Transkript. Darauf laufen drei Auswertungen:

- **Was verkauft?** Zu jedem Deal, der beim Notar angekommen ist, entsteht ein Käuferprofil: wer kauft, warum, welche Einwände kamen und was der Vertrieb richtig gemacht hat. Eine zweite Auswertung fasst die bisher 35 Profile zu Mustern über alle Abschlüsse zusammen.
- **Warum verloren?** Geht ein Deal nach dem ersten Strategiegespräch verloren, prüft das Modell den Grund im CRM gegen Notizen, Mails und Gespräche. Am Deal steht danach, ob sich eine neue Ansprache lohnt.
- **Was fragen Leads?** Aus 1.616 Gesprächen mit Leads sind 4.929 Fragen nach Themen sortiert und gezählt. Am häufigsten wollen Leads wissen, wer das Unternehmen ist und was es von anderen unterscheidet.

Workflows, Transkripte und Auswertungen liegen in den Konten des Kunden, nicht bei mir.

## Damit niemand der KI blind glauben muss

Jede neue Version eines Bewertungsbogens läuft zuerst gegen alte Gespräche, bevor sie live geht, bisher in 101 Probeläufen. Nach 14 und nach 30 Tagen wird festgehalten, was aus jedem Gespräch geworden ist. So zeigt sich, ob Noten und No-Show-Vorhersage etwas taugen. Und das Team kann eigene Bewertungen danebenlegen.

Für die Automatisierung gilt dasselbe: Jeder Zweig schreibt eine Protokollzeile, jeder Lead ist nachvollziehbar. Zwei Sperren verhindern, dass ein Lead doppelt verarbeitet wird, auch wenn zwei Läufe gleichzeitig starten. Ein Wächter schaut alle 30 Minuten, ob noch Leads ankommen, und schlägt nach 12 und nach 24 Stunden Stille Alarm. Fehler kommen per Mail bei uns an, derselbe höchstens einmal pro Stunde.

## Für Ihren Vertrieb

Wenn Ihre Leads heute zwischen Tabelle, Telefon und CRM hängen bleiben, fange ich genau da an: Jede Quelle bekommt einen eigenen, überwachten Weg ins CRM, und Ihr Team sieht morgens Aufgaben statt Listen. Telefoniert Ihr Team viel, zeigt eine Auswertung der Gespräche, was in keiner Notiz steht: welche Fragen immer wieder kommen und was am Ende verkauft.

Den Kunden nenne ich hier nicht.
