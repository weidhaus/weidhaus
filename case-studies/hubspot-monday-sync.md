## Ein CRM-Wechsel mit Lücke

Eine Eventlocation in Berlin zog mit ihrem Vertrieb von Monday zu HubSpot um. Ein Kollege, mit dem ich eng zusammenarbeite, holte mich dazu. HubSpot bot aber nicht alles, was das Team aus Monday kannte und brauchte, allen voran den Kalender, auf dem Aufbau, Veranstaltung und Abbau jeder Buchung zu sehen sind. Bis dahin hieß das: Daten aus HubSpot von Hand nach Monday übertragen.

## Die eingebaute Verbindung reichte nicht

HubSpot bietet eine Integration zu Monday. Für diesen Fall war sie zu begrenzt, und sie synchronisierte nicht zuverlässig. Also habe ich eine eigene Verbindung gebaut, die genau eine Richtung kennt: Sie liest aus HubSpot und schreibt nach Monday. Zurück nach HubSpot geht nur eine einzige Information, der Link zum passenden Eintrag in Monday. HubSpot bleibt so die Quelle, und das Team nutzt beide Systeme für das, was sie jeweils gut können.

## Wo Monday Grenzen setzt

Die meiste Arbeit steckte nicht in HubSpot, sondern in Monday. Dessen Schnittstelle kann manches nicht, was HubSpot anbietet, und vieles ließ sich nur über Umwege so lösen, dass die Informationen in Monday richtig dargestellt werden.

Dazu kommen Regeln, die keine Standard-Integration kennt. Im Kalender steht jede Buchung vom ersten Aufbau bis zum letzten Abbau. Ein Deal kann bis zu fünf Ausweichtermine haben, und solange er offen ist, bekommt jeder davon einen eigenen Eintrag, damit die Option im Kalender sichtbar ist. Gewonnene und verlorene Deals bekommen keine. Das ersetzt einen früheren Behelf, bei dem Deals dupliziert wurden.

## Damit es jahrelang läuft

Die Verbindung läuft seit rund einem Jahr auf einem eigenen Server, ohne Zapier und ohne Kosten pro Vorgang. Namen pflegt das Team nur in HubSpot. Alle sechs Stunden gleicht die Verbindung ab und korrigiert Abweichungen in Monday. Ein Schutz verhindert, dass ein Abgleich massenhaft Einträge löscht. Fällt etwas aus, kommt eine Push-Nachricht. Und jede Änderung an der Verbindung läuft vorher als Probelauf gegen eine Kopie der echten Daten.

## Für Ihre Systeme

Zwei Werkzeuge, die jeweils etwas gut können, müssen sich nicht gegenseitig ersetzen. Wenn bei Ihnen Daten von Hand zwischen zwei Systemen wandern, weil die eingebaute Integration nicht reicht, ist das ein Fall für eine kleine, überwachte Verbindung.

Den Kunden nenne ich hier nicht.
