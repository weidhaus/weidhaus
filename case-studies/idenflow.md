## Personio weiß mehr, als Google erfährt

In vielen Unternehmen stehen die Daten über Mitarbeitende in Personio: Abteilung, Team, Standort, Status. Google Workspace, über das sich alle anmelden, erfährt davon nur einen Teil. Die eingebaute Verbindung zwischen beiden ließ sich für unsere Zwecke nicht anpassen. Wir wollten diese Informationen aber in Google nutzen, zum Beispiel für dynamische Gruppen, die sich nach Feldern aus Personio füllen, oder für Statuswechsel, die automatisch bei den Konten ankommen.

## Was idenflow macht

Mit idenflow kommen die Daten aus Personio regelmäßig in Google Workspace an, in Standardfelder wie Abteilung oder Kostenstelle und in eigene Felder, etwa für Gesellschaft oder Vertragsart. Regeln nehmen Konten anhand von Feldern aus Personio in Gruppen auf und verschieben sie in Organisationseinheiten, etwa alle aus dem Vertrieb in sales@ und /Sales. Das klappt in jeder Edition von Google Workspace.

Geschrieben wird nur, was freigegeben ist. Jede Änderung erscheint zuerst in einer Liste, der alte Wert neben dem neuen. Freigeben kann ein Mensch oder eine Regel, die Sie auf automatisch gestellt haben. Bringt ein Abgleich mehr Änderungen als das eingestellte Limit, wird nichts automatisch freigegeben. Vor dem Schreiben prüft idenflow, ob in Google noch der alte Wert steht. Lässt sich eine Person nicht eindeutig einem Google-Konto zuordnen, entscheidet ebenfalls ein Mensch.

## Vom Abgleich zum Onboarding

Aus dem Abgleich wurde mehr. Taucht in Personio eine neue Person auf, startet ein Onboarding: Google-Konto anlegen, Willkommensmail verschicken und das Konto in eine Organisationseinheit setzen, in der Google die Zwei-Faktor-Anmeldung verlangt. Das Startpasswort steht in keiner Mail, sondern hinter einem Link, der es genau einmal zeigt. Ist die Adresse schon vergeben, legt idenflow kein Konto an und lässt einen Menschen entscheiden. Beim Austritt läuft der umgekehrte Weg: Abwesenheitsnotiz einrichten, Mails weiterleiten, Drive und Kalender übergeben, Sitzungen und App-Zugriffe beenden, Passwort zurücksetzen, Lizenzen entfernen, Konto sperren. Gelöscht wird ein Konto nur nach Freigabe.

Welche Schritte wann laufen, legen Admins in Playbooks für Eintritt, Wechsel und Austritt fest, mit Terminen relativ zum Eintrittsdatum oder zum letzten Arbeitstag. Ändert HR ein Datum, plant idenflow den Ablauf neu; hat er schon begonnen, wartet er, bis ein Mensch entscheidet. Ein Dashboard zeigt, wie gut die Zuordnung klappt und ob der Abgleich läuft. So wurde aus einem Synchronisierungsskript ein Werkzeug für Onboarding und Kommunikation, das HR-System und Konten auf demselben Stand hält.

## Was am längsten gedauert hat

Zwei Dinge: ein Automatisierungssystem, das im Hintergrund zuverlässig arbeitet, und Mails, die in jedem Postfach ordentlich formatiert ankommen. Die Willkommensmail ist für neue Mitarbeitende oft die erste Nachricht vom Unternehmen, da darf nichts verrutschen.

## Version 2: von Grund auf neu

Version 1 war produktiv im Einsatz. Version 2 habe ich von Grund auf neu geschrieben, als SaaS für viele Unternehmen. Jede Organisation verbindet ihr eigenes Google Workspace, und eine Person kann mehrere Organisationen betreuen, etwa als IT-Dienstleister. Die Datenbank hält die Organisationen voneinander getrennt. Zugangsdaten, etwa zu Personio, verschlüsselt idenflow mit einem eigenen Schlüssel je Organisation.

Angemeldet wird mit Google statt über Keycloak. Vier Rollen legen fest, wer einrichtet, wer freigibt und wer nur liest. Änderungen am eigenen Konto kann niemand selbst freigeben.

Jede Änderung landet im Audit-Log. Einträge lassen sich dort weder ändern noch löschen, auch nicht mit den Rechten des Datenbank-Eigentümers. Sie sind miteinander verkettet, und der Stand der Kette wird jede Stunde außerhalb der Datenbank festgehalten. So fällt auf, wenn jemand nachträglich etwas umschreibt. Prüfen lässt sich das Log in der Oberfläche, exportieren als CSV.

Mails verschickt idenflow über Gmail, aus einem Postfach Ihrer eigenen Domain. Neu ist auch die Admin-Oberfläche, mit hellem und dunklem Modus und eigenem Logo. Die SaaS-Version ist für Google Cloud in Frankfurt (europe-west3) gebaut. Version 2 ist noch nicht in Betrieb.

Inzwischen hat idenflow eine eigene Website: [idenflow.com](https://idenflow.com). Das Repository ist umgezogen und liegt jetzt unter weidhaus/idenflow auf GitHub.

## Was das für Sie heißt

Mein Ziel ist, dass idenflow die zentrale Verbindung zwischen HR-System und den Konten Ihrer Mitarbeitenden wird. Wenn bei Ihnen beides getrennt gepflegt wird und On- und Offboarding an Checklisten hängen, lässt sich das automatisieren, mit einer Freigabe überall dort, wo ein Mensch entscheiden soll.
