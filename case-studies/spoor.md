## Jede Anmeldung hinterlässt eine Spur

Wer sich mit dem Firmenkonto von Google oder Microsoft bei einer App anmeldet, hinterlässt eine Spur im Konto des Unternehmens. Dasselbe gilt, wenn eine App Zugriff auf Mails, Dateien oder den Kalender bekommt. Diese Spuren zeigen, welche Software im Unternehmen wirklich genutzt wird, auch die, von der die IT nichts weiß.

Große Anbieter verkaufen diese Übersicht als Premium-Funktion. Dabei liegen die Daten längst in Ihrem Google Workspace oder Microsoft Entra ID. Man muss sie nur lesen.

## Darum heißt es Spoor

Spoor ist das englische Wort für die Fährte eines Tiers. Wer Fährten lesen kann, sieht daran, was vorbeigekommen ist. Spoor liest die Fährten in Ihrem Identitätsanbieter. Das Logo zeigt zwei Trittsiegel: Das ältere ist verblasst, das frische leuchtet, wie die letzte Anmeldung.

## Die Liste, die niemand pflegen muss

Spoor ist für IT-Admins und alle gebaut, die im Unternehmen Zugänge verantworten und schnell wissen müssen, welche Apps genutzt werden. Sie verbinden Google Workspace und Microsoft Entra ID und starten einen Abgleich. Danach steht jede App auf dem Bildschirm, bei der sich jemand mit dem Firmenkonto angemeldet oder der jemand Zugriff erteilt hat. Der erste Abgleich mit Google reicht 90 Tage zurück. Apps ohne Anmeldung über Google oder Microsoft kommen per CSV-Export dazu.

Dieselbe Person erkennt Spoor über alle Systeme hinweg als eine Person, auch wenn sie bei Google und Microsoft unter verschiedenen Adressen geführt wird. Bekannte Apps ordnet ein Katalog automatisch einer Kategorie zu. Anmeldungen von Betriebssystemen und Browsern sortiert er aus, denn die hat niemand als Software ausgewählt.

## Was sonst niemandem auffällt

Aus den Spuren entstehen Hinweise:

- **Ausgeschiedene mit Zugriff.** Ist Personio verbunden, sieht Spoor auch, wessen letzter Arbeitstag vorbei ist, obwohl das Konto noch aktiv ist.
- **Apps mit zu viel Zugriff.** Niemand hat sie freigegeben, aber sie dürfen Mails oder Dateien lesen.
- **Bezahlte Lizenzen ohne Nutzung**, und Verträge, die in den nächsten 60 Tagen verlängert werden.

Ein Hinweis verschwindet von selbst, sobald sein Grund behoben ist.

## Ehrliche Zahlen

Zugriff zu haben heißt nicht, eine App zu nutzen. Als aktiv zählt eine Person nur, wenn eine Quelle tatsächlich Aktivität meldet. Fehlt diese Quelle, steht dort „unbekannt“ und keine geschönte Auslastung. Ungenutzte Lizenzen schlägt Spoor erst vor, wenn der Verlauf das ganze Zeitfenster abdeckt.

## Lesen ja, ändern nur auf Ansage

Spoor liest standardmäßig nur. Ändern kann es zwei Dinge, und beide sind ab Werk ausgeschaltet: ein Offboarding, das ein Admin durch Eintippen der E-Mail-Adresse bestätigt, und Sicherheitsaktionen wie das Entziehen eines App-Zugriffs, die eine zweite verantwortliche Person freigeben muss. Jede Anmeldung, jede Änderung und jeder Export landen in einem Protokoll, das nur wächst. Seine Einträge sind miteinander verkettet, damit nachträgliche Änderungen auffallen. Spoor läuft auf Ihrem eigenen Server, angemeldet wird mit Google oder Microsoft.

## Warum Open Source

Ich will diese Übersicht nicht hinter einer Bezahlschranke halten. Die Daten gehören Ihnen schon, das Werkzeug soll es auch. Spoor ist Open Source unter der AGPL-3.0: Sie dürfen es kostenlos nutzen, anpassen und für Ihr Unternehmen betreiben. Wer eine veränderte Version anderen als Dienst anbietet, muss seine Änderungen veröffentlichen, damit Spoor offen bleibt.

Der Code liegt auf GitHub: [github.com/weidhaus/spoor](https://github.com/weidhaus/spoor). Zum Ausprobieren startet Spoor mit Demodaten per Docker Compose. Die Anleitung steht in der README.

## Was das für Sie heißt

Wenn Sie wissen wollen, welche Software in Ihrem Unternehmen wirklich läuft und wer worauf Zugriff hat: Die Antwort steckt meist schon in Ihren Konten. Spoor liest sie aus, auf Ihrem Server und ohne Lizenzgebühr. Wenn Sie beim Einrichten Unterstützung möchten, sprechen Sie mich an.
