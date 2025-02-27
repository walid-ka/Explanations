/**
 * ============================
 * Wie das Web funktioniert: Request/Response, URL, HTTP
 * ============================
 */

// Das Web ist ein System aus verknüpften Dokumenten und Ressourcen, die über das Internet mit Webbrowsern aufgerufen werden.
// Es folgt dem Client-Server-Modell:
// - Client: Dein (Frontend, Browser) oder eine App, die Daten von einem Webserver anfordert. => HTML, CSS, JavaScript
// - Server: (Backend, Server) Ein entfernter Computer, der angeforderte Daten speichert und bereitstellt.  Code läuft auf dem Server => (PHP, Node.js)

// Wenn du eine Website besuchst, sendet dein Browser (Client) eine Anfrage an den Webserver,
// der die Anfrage verarbeitet und eine Antwort zurücksendet, meistens in Form eines HTML-Dokuments.

/**
 * ============================
 * URL (Uniform Resource Locator)
 * ============================
 */

// Eine URL ist die Adresse, um auf Web-Ressourcen zuzugreifen.
// Beispiel: https://www.beispiel.de/pfad?query=wert
//
// Bestandteile einer URL:
// - Protokoll: 'https://' (Definiert die Kommunikationsweise, z.B. HTTP oder HTTPS)
// - Domainname: 'www.beispiel.de' (Identifiziert die Webadresse)
// - Path: '/Path' (Gibt eine bestimmte Ressource oder Seite auf der Website an)
// - Query-String: '?query=wert' (Enthält Parameter, die an den Server gesendet werden)



/**
 * ============================
 * HTTP (Hypertext Transfer Protocol)
 * ============================
 */

// HTTP ist die Grundlage der Kommunikation zwischen Webbrowsern und Servern.
// Es definiert Regeln für Anfragen und Antworten (request and response).
//
// HTTP-Methoden:
// - GET: Daten vom Server abrufen (z.B. eine Webseite besuchen)
// - POST: Daten an den Server senden (z.B. ein Formular absenden)
// - PUT: Eine Ressource auf dem Server aktualisieren
// - DELETE: Eine Ressource vom Server entfernen
//
// Beispiel einer HTTP-Anfrage:
// GET /index.html HTTP/1.1
// Host: www.beispiel.de

/**
 * ============================
 * Request-Response-Cycle
 * ============================
 */

// Wenn du eine URL in deinen Browser eingibst:
// 1. Der Browser sendet eine HTTP-Anfrage an den Server.
// 2. Der Server verarbeitet die Anfrage und ruft die erforderliche Ressource ab.
// 3. Der Server sendet eine HTTP-Antwort mit:
//    - Statuscode (z.B. 200 OK, 404 Not Found, 500 Internal Server Error)
//    - Header (Metadata zur Antwort)
//    - Body (Actual content, such as HTML, JSON, or text)
// 4. Der Browser verarbeitet die Antwort und zeigt die Webseite an.


/**
 * ============================
 * HTTPS (Sichere Version von HTTP)
 * ============================
 */

// HTTPS (Hypertext Transfer Protocol Secure) ist die verschlüsselte (encrypted) Version von HTTP.
// Es verwendet SSL/TLS-Verschlüsselung zur Sicherung der Datenübertragung zwischen Client und Server.
// Websites mit HTTPS bieten Privatsphäre, Datenintegrität und Authentifizierung.


/**
 * ============================
 * Webbrowser und Rendering
 * ============================
 */

// Webbrowser verarbeiten die vom Server zurückgegebenen HTML-, CSS- und JavaScript-Dateien und rendern die Seite visuell.
// Schritte:
// 1. HTML parsen → DOM (Document Object Model) aufbauen
// 2. CSS parsen → Stile anwenden
// 3. JavaScript ausführen → Interaktive Elemente
// 4. Endgültige Seite für den Nutzer anzeigen


/**
 * ============================
 * Webhosting
 * ============================
 */

// Webhosting bedeutet, eine Website auf einem Server bereitzustellen, sodass sie über das Internet erreichbar ist.
//
// Enthält:
// ✔ Webserver: Hosten von Websites und Bearbeitung von HTTP-Anfragen (z.B. Apache, Nginx).
// ✔ Domain & DNS: Übersetzt Domainnamen in IP-Adressen.
// ✔ Speicherplatz & Bandbreite: Ressourcen für die Website.
// ✔ Datenbanken: Speichert dynamische Daten (MySQL, PostgreSQL).


/**
 * ============================
 * Netzwerkgrundlagen
 * ============================
 */

// 🔹 IPv4 & IPv6
// - IPv4: Nutzt 4 Zahlenblöcke (z.B. 192.168.1.1), begrenzte Adressen.
// - IPv6: Nutzt Hexadezimalblöcke (z.B. 2001:0db8:85a3::8a2e:0370:7334), löst Adressknappheit.
//
// 🔹 DNS (Domain Name System)
// - Übersetzt menschenlesbare Domains (example.com) in IP-Adressen (192.168.1.1).
//
// 🔹 DHCP (Dynamic Host Configuration Protocol)
// - Weist Geräten automatisch IP-Adressen zu, ohne manuelle Konfiguration.



/**
 * ============================
 * Statische Website bereitstellen
 * ============================
 */

// Schritte:
// 1️⃣ Website lokal erstellen.
// 2️⃣ Webhost wählen.
// 3️⃣ Dateien via FTP/SFTP hochladen.
// 4️⃣ Website testen.

/**
 * ============================
 * Apache2 Server einrichten
 * ============================
 */

// Apache2 ist ein Webserver zum Hosten von Websites.
// Standardseite unter http://localhost/ erreichbar.
// Dateien liegen in /var/www/html/.

/**
 * ============================
 * Deployment via SFTP
 * ============================
 */

// SFTP ist ein sicheres Protokoll zum Hochladen von Dateien auf einen Server.
// Schritte:
// 1️⃣ Mit Server verbinden.
// 2️⃣ Dateien hochladen.
// 3️⃣ Website testen (http://deinedomain.com).