// git: ein open source, verteiltes Versionskontrollsystem, ermöglicht es mehreren Menschen , an einem Projekt zu arbeiten. lokal auf dem System installiert
// GitHub: eine Plattform zum Hosten und Zusammenarbeiten an Git-Repositories (gespeichert Projekt)
// commit: ein Git-Objekt, ein Snapshot das gesamten Repositorys, komprimiert in einen SHA
// branch: eine Kopie des Hauptrepositorys, an dem ich arbeiten kann und das ich nach Abschluss mit dem Original zusammenführe
// clone: a local version of a repository, including all commits and branches - git clone [url]
// remote: ein gemeinsames Repository auf GitHub, das alle Teammitglieder zum Austausch ihrer Änderungen verwenden.
// fork: eine Kopie eines Repositorys auf GitHub, das einem anderen Benutzer gehört
// pull request: ein Ort zum Vergleichen und Besprechen der in einem Zweig eingeführten Unterschiede mit Bewertungen, Kommentaren, integrierten Tests und mehr
// HEAD: Der HEAD-Zeiger stellt Ihr aktuelles Arbeitsverzeichnis dar, the HEAD pointer can be moved to different branches, tags, or commits when using (git checkout)

//! Warum Git verwenden?
// 🏗 Versionskontrolle: Verfolgt Änderungen und ermöglicht Entwicklern, bei Bedarf zu vorherigen Versionen zurückzukehren.
// 👨‍💻 Ermöglicht mehreren Entwicklern, ohne Konflikte am selben Projekt zu arbeiten.
// ⚡ Entwickler können Zweige erstellen, unabhängig arbeiten und Änderungen nahtlos zusammenführen.
// 🚀 Code wird sicher gespeichert, wodurch das Risiko eines Datenverlusts verringert wird.



//! Konfiguration
// Benutzerinformationen konfigurieren
// git config --global user.email "[E-Mail-Adresse]"
// git config --global user.name "[Name]"
// Erstellen Sie ein lokales Repository: git init
// Mit GitHub verbinden : git remote add origin https://github.com/your-username/repository-name.git
// Dateien zum Repository hinzufügen:  git add . 
// Änderungen committen: git commit -m "Initial commit"
// git status
// Änderungen an Remote übertrage (Push changes to remote ): git push origin main

// Andere Teammitglieder klonen das Repository auf ihre lokalen Maschinen: git clone <repository-url>
// Jeder Entwickler erstellt einen neuen Branch für seine Aufgabe (z. B. Hinzufügen einer Anmeldefunktion): git checkout -b feature-login // git branch (to check)
// Das Arbeiten in Zweigen verhindert Konflikte und sorgt für die Stabilität der Hauptleitung.
// Entwickler arbeiten an ihrem Zweig, nehmen häufig Änderungen vor und committen diese:    git add .     git commit -m "Added login functionality"

// Sobald eine Funktion fertig ist, übertragen Sie sie per Push auf GitHub: git push origin feature-login
// Öffnen Sie dann GitHub und erstellen Sie einen Pull Request (PR), um das Feature-Login in Main zu integrieren.

// Andere Entwickler überprüfen den PR.
// Wenn er genehmigt wird, führt der Betreuer ihn in das Hauptverzeichnis ein: git checkout main // git pull origin main // git merge feature-login // git push origin main

// Branch löschen : git branch -d feature-login


// Bevor Entwickler mit neuen Arbeiten beginnen, sollten sie ihren lokalen Hauptzweig aktualisieren (Pull latest changes):   git checkout main  // git pull origin main

//! Umgang mit Zusammenführungskonflikten
// Git markiert Konflikte in betroffenen Dateien.
// Entwickler lösen Konflikte manuell.
// Nach der Behebung führen Sie Folgendes aus:  git add . // git commit -m "Resolved merge conflict" // git push origin branch-name


// .gitignore (.env)