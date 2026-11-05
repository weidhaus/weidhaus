## Eine Domain zieht um

Eigenlaut fing mit einem Umzug an. Bei getolo wechselte die Hauptdomain von dentolo.de auf getolo.com, und damit musste jede E-Mail-Signatur im Unternehmen mit. Niemand sollte dafür seine Signatur von Hand umschreiben, und die neue Marke sollte in jeder Mail gleich aussehen. Also habe ich ein Google Apps Script geschrieben, das die Signaturen aller Postfächer aus dem Google-Workspace-Verzeichnis füllt.

## Vom Skript zur App

Das Skript blieb nicht lange ein Umzugshelfer. Es wurde zur Signaturverwaltung, und irgendwann stieß es an die Grenzen von Apps Script. Also habe ich Eigenlaut als eigene App neu gebaut: mit denselben Platzhaltern und Vorlagen wie das Skript, aber mit einer Oberfläche, die auch ohne Programmierkenntnisse zu bedienen ist.

## So funktioniert es

Ein Admin entwirft die Signatur einmal. Platzhalter wie Vorname, Position oder Telefonnummer füllt Eigenlaut aus den Daten, die Google ohnehin hat. Regeln legen fest, wer welche Vorlage bekommt: nach Abteilung, Gruppe oder Organisationseinheit. Vor dem Ausrollen zeigt eine Vorschau, wie die Signatur bei jeder einzelnen Person aussieht. Für Aktionen gibt es Banner mit Start- und Enddatum.

Ein täglicher Abgleich hält alles aktuell, wenn jemand neu anfängt, die Position wechselt oder die eigene Signatur von Hand verändert. Neue Mitarbeitende kopieren also keine Signatur mehr aus einer Vorlage-Mail, und jede Signatur folgt den Regeln des Unternehmens. Eigenlaut ist heute bei mehreren Unternehmen im Einsatz.

## Die eigentliche Hürde

Der schwierigste Teil war nicht der Code, sondern die Einrichtung in der Google Cloud Console: Dienstkonto, Delegation und Berechtigungen müssen genau zusammenpassen, sonst darf die App keine einzige Signatur setzen.

## Datensparsam von Anfang an

Eigenlaut speichert keine Mailinhalte, keine Namen oder Positionen und keine IP-Adressen, und es fragt bei Google nur drei Berechtigungen an. Jede Änderung, jede Anmeldung und jeder Lauf stehen im Protokoll. Wer es lieber selbst betreibt, installiert es im eigenen Cloudflare-Konto.

## Was das für Sie heißt

Ein Umzug, ein Rebranding, eine neue Telefonnummer: Solche Kleinigkeiten fallen in jedem Postfach einzeln an, und genau deshalb gehören sie an eine zentrale Stelle. Mein Ziel für Eigenlaut ist eine Signaturverwaltung, die einfach funktioniert und sich trotzdem an Ihr Unternehmen anpassen lässt.
