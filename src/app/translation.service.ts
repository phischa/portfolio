import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    public currentLanguage: 'en' | 'de' = 'en';

    private translations = {
        en: {
            title: 'About me',
            content: `Hello, my name is Philip, and I am a frontend developer based in Berlin.<br>
                My focus is on Angular, JavaScript, and object-oriented programming. I have acquired these
                skills through many project experiences, both working on my own and in teams. Take a look at my portfolio further
                down to see for yourself.<br><br>
                I am passionate about web development because I like the unique mix of logical thinking and creativity that the
                job requires.<br><br>
                My achievements as a developer were driven by my high level of willingness to learn and independent work.<br>
                These skills will support my continuous knowledge building in my upcoming role as a frontend developer
                and I am looking forward to joining your team.`
        },
        de: {
            title: 'Über mich',
            content: `Hallo, mein Name ist Philip, und ich bin ein Frontend-Entwickler aus Berlin.<br>
            Mein Fokus liegt auf JavaScript, Angular und objektorientierter Programmierung. Diese Fähigkeiten habe ich mir in intensiver Arbeit,
            sowohl in erfolgreichen Einzel- als auch Teamprojekten, angeeignet 
            Werfen Sie gerne einen Blick auf mein Portfolio weiter unten, um sich selbst davon zu überzeugen.<br><br>
            Ich bin leidenschaftlicher Webentwickler, weil mich die einzigartige Mischung aus logischem Denken und Kreativität begeistert,
            die der Job erfordert.<br><br>
            Meine Kenntnisse als Entwickler habe ich durch ein hohes Maß an Lernbereitschaft und selbstständigem Arbeiten erreicht.
            Diese Fähigkeiten werden meinen stetigen Wissenaufbau auch in meiner zukünftigen Tätigkeit voranbringen und ich freue mich darauf,
            in Ihrem Team mitzuarbeiten.`
        }
    };

    private landingTranslations = {
        en: {
            title: 'I am',
            name: 'Philip Schaper',
            role: 'FRONTEND DEVELOPER',
            getInTouch: 'Get in touch',
            scrollDown: 'Scroll down'
        },
        de: {
            title: 'Ich bin',
            name: 'Philip Schaper',
            role: 'FRONTEND-ENTWICKLER',
            getInTouch: 'Kontakt',
            scrollDown: 'Runter scrollen'
        }
    };

    private skillTranslations = {
        en: {
            contentOne: `My journey involved working on diverse projects, employing a range of
            frontend technologies and concepts. I am open to embracing new frameworks, technologies
            and methodologies to continously enhance my skills and stay ahead in the ever-evolving
            landscape of web development`,
            h2: `Looking for <span class="purple">another skill</span>?`,
            contentTwo: `Feel free to contact me. I'm looking forward to expand my current knowledge.`,
            getInTouch: 'Get in touch',
            continually: 'Continually Learning'
        },
        de: {
            contentOne: `Auf meinem Weg habe ich an verschiedenen Projekten gearbeitet und dabei eine Reihe 
            von Frontend-Technologien und Konzepten eingesetzt. Ich bin offen für neue Frameworks, Technologien 
            und Methoden, um meine Fähigkeiten kontinuierlich zu verbessern und in der sich ständig weiterentwickelnden 
            Webentwicklung up to date zu bleiben.`,
            h2: `Suchen Sie nach <span class="purple">einem anderen Skill</span>?`,
            contentTwo: `Kontaktieren Sie mich gerne. Ich freue mich darauf meine Fähigkeiten auszuweiten.`,
            getInTouch: 'Kontakt',
            continually: 'Kontinuierliches Lernen'
        }
    }

    private portfolioTranslations = {
        en: {
            join: `Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions,
            assign users and categories.`,
            polloLoco: `Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco
            salsa to fight against the crazy hen.`,
            pokedex: `This pokédex is based on the PokéAPI, a simple library that provides and catalogues pokemon information.`,
            liveTest: `Live test`
        },
        de: {
            join: `Task Manager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe
            von Drag-and-Drop-Funktionen und weisen Sie Benutzer und Kategorien zu.`,
            polloLoco: `Sprung-, Lauf- und Wurfspiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, 
            Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.`,
            pokedex: `Dieser Pokédex basiert auf der PokéAPI, einer einfachen Bibliothek, die Pokemon-Informationen bereitstellt und katalogisiert.`,
            liveTest: `Live Test`
        }
    }

    private contactsTranslations = {
        en: {
            contact: 'Contact',
            lookingFor: 'Looking for a <span>frontend developer</span>?',
            feelFree: 'Feel free to contact me. <br> I\'m looking forward to hear from you.',
            namePlaceholder: 'Your name',
            emailPlaceholder: 'Your email',
            messagePlaceholder: 'Your Message',
            privacyPolicy: 'I\'ve read the <a class="td-none" href="/privacy"><span class="green">privacy policy</span></a> and agree to the processing of my data as outlined.',
            send: 'Send',
            successMessage: 'Your message has been sent successfully.',
            nameError: 'Please enter your name.',
            emailError: 'Please enter your email.',
            messageError: 'Please write a message.'
        },
        de: {
            contact: 'Kontakt',
            lookingFor: 'Suchen Sie einen <span>Frontend-Entwickler</span>?',
            feelFree: 'Dann kontaktieren Sie mich gerne. <br> Ich freue mich darauf, mit Ihnen zusammen zu arbeiten.',
            namePlaceholder: 'Ihr Name',
            emailPlaceholder: 'Ihre E-Mail',
            messagePlaceholder: 'Ihre Nachricht',
            privacyPolicy: 'Ich habe die <a class="td-none" href="/privacy"><span class="green">Datenschutzrichtlinie</span></a> gelesen und stimme der Verarbeitung meiner Daten zu.',
            send: 'Senden',
            successMessage: 'Ihre Nachricht wurde erfolgreich gesendet.',
            nameError: 'Bitte geben Sie Ihren Namen ein.',
            emailError: 'Bitte geben Sie Ihre E-Mail ein.',
            messageError: 'Bitte schreiben Sie eine Nachricht.'
        }
    };

    private navBarTranslations = {
        en: {
            aboutMe: 'About Me',
        },
        de: {
            aboutMe: 'Über Mich',
        }
    };

    private footerTranslations = {
        en: {
            imprint: 'Imprint',
        },
        de: {
            imprint: 'Impressum',
        }
    };

    private imprintTranslations = {
        en: {
            title: 'Imprint',
            content: `
                <h2>Responsible:</h2>
                <h2>Philip Schaper</h2>
                <br>
                <h2>Address:</h2>
                <p>Rutnikstraße 38<br>Lichtenberg<br>10367 Berlin</p><br>
                <h2>Contact:</h2>
                <p>Email: ps.dev(a)mailbox.org</p><br>
                <h2>Notes on the Website / Copyright Notices:</h2>
                <p>All images used were created by myself, provided by the Developer Academy, or are<br>
                subject to free use under the Pixabay content license.</p>
                <h2>Responsible for editorial content:</h2>
                <p>Philip Schaper</p>
                <p>This imprint was created with the help of the imprint generator of activeMind AG (Version 2024-07-05).</p>
            `
        },
        de: {
            title: 'Impressum',
            content: `
                <h2>Verantwortlicher:</h2>
                <h2>Philip Schaper</h2>
                <br>
                <h2>Postanschrift:</h2>
                <p>Rutnikstraße 38<br>Lichtenberg<br>10367 Berlin</p><br>
                <h2>Kontakt:</h2>
                <p>E-Mail: ps.dev(a)mailbox.org</p><br>
                <h2>Hinweise zur Website / Urheberrechtliche Hinweise:</h2>
                <p>Alle verwendeten Bilder wurden von mir selbst erstellt, wurden von der Developer Akademie zur Verfügung<br>
                gestellt oder unterliegen der kostenlosen Nutzung unter der Pixabay-Inhaltslizenz.</p>
                <h2>Verantwortlich für redaktionelle Inhalte:</h2>
                <p>Philip Schaper</p>
                <p>Dieses Impressum wurde mit Hilfe des Impressums-Generators der activeMind AG erstellt (Version 2024-07-05).</p>
            `
        }
    };

    private privacyTranslations = {
        en: {
            content: this.sanitizer.bypassSecurityTrustHtml(`
                <div class="head">
                    <h1>Privacy Policy</h1>
                    <p>As of: August 9, 2024</p>
                    <h2 id="m3">Responsible</h2>
                    <p>Philip Schaper</p>
                    <p>Email address: <a href="mailto:ps.dev@mailbox.org">ps.dev (a) mailbox.org</a></p>
                    <p>Imprint: philip.schaper.de/imprint</p>
                </div>
                <h2 id="mOverview">Overview of Processing</h2>
                <p>The following overview summarizes the types of processed data and the purposes of their processing and refers to the affected persons.</p>
                <h3>Types of Processed Data</h3>
                <ul>
                    <li>Inventory data.</li>
                    <li>Contact data.</li>
                    <li>Content data.</li>
                    <li>Usage data.</li>
                    <li>Meta, communication, and procedural data.</li>
                    <li>Log data.</li>
                </ul>
                <h3>Categories of Affected Persons</h3>
                <ul>
                    <li>Communication partners.</li>
                    <li>Users.</li>
                </ul>
                <h3>Purposes of Processing</h3>
                <ul>
                    <li>Communication.</li>
                    <li>Security measures.</li>
                    <li>Organizational and administrative procedures.</li>
                    <li>Feedback.</li>
                    <li>Provision of our online services and user-friendliness.</li>
                    <li>Information technology infrastructure.</li>
                </ul>
                <h2 id="m2427">Relevant Legal Bases</h2>
                <p><strong>Relevant legal bases under the GDPR:</strong> Below you will find an overview of the legal bases of the GDPR on which we process personal data. Please note that in addition to the GDPR regulations, national data protection provisions may apply in your or our country of residence.</p>
                <ul>
                    <li><strong>Contract fulfillment and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b) GDPR)</strong> - Processing is necessary for the fulfillment of a contract to which the data subject is a party or for the performance of pre-contractual measures taken at the request of the data subject.</li>
                    <li><strong>Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR)</strong> - Processing is necessary for the purposes of the legitimate interests pursued by the controller or a third party, provided that the interests, fundamental rights, and freedoms of the data subject do not override those interests.</li>
                </ul>
                <p><strong>National data protection regulations in Germany:</strong> In addition to the data protection regulations of the GDPR, national regulations on data protection in Germany apply. This includes, in particular, the Federal Data Protection Act (BDSG).</p>
                <h2 id="m27">Security Measures</h2>
                <p>We take appropriate technical and organizational measures to ensure a level of protection appropriate to the risk, taking into account the state of the art, implementation costs, and the nature, scope, circumstances, and purposes of processing as well as the varying likelihood and severity of the threat to the rights and freedoms of natural persons.</p>
                <h2 id="m225">Provision of Online Services and Web Hosting</h2>
                <p>We process user data to provide our online services. For this purpose, we process the user's IP address, which is necessary to transmit the content and functions of our online services to the user's browser or device.</p>
                <h2 id="m182">Contact and Inquiry Management</h2>
                <p>When contacting us (e.g., by post, contact form, email, phone, or via social media) and in the context of existing user and business relationships, the information of the inquiring persons is processed as far as necessary to respond to the inquiries and any requested measures.</p>
                <p class="seal"><a href="https://datenschutz-generator.de/" title="Legal text by Dr. Schwenke - click for more information." target="_blank" rel="noopener noreferrer nofollow">Created with free Datenschutz-Generator.de</a></p>
            `)
        },
        de: {
            content: this.sanitizer.bypassSecurityTrustHtml(`
                <div class="head">
                    <h1>Datenschutzerklärung</h1>
                    <p>Stand: 9. August 2024</p>
                    <h2 id="m3">Verantwortlicher</h2>
                    <p>Philip Schaper</p>
                    <p>E-Mail-Adresse: <a href="mailto:ps.dev@mailbox.org">ps.dev (a) mailbox.org</a></p>
                    <p>Impressum: philip.schaper.de/imprint</p>
                </div>
                <h2 id="mOverview">Übersicht der Verarbeitungen</h2>
                <p>Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.</p>
                <h3>Arten der verarbeiteten Daten</h3>
                <ul>
                    <li>Bestandsdaten.</li>
                    <li>Kontaktdaten.</li>
                    <li>Inhaltsdaten.</li>
                    <li>Nutzungsdaten.</li>
                    <li>Meta-, Kommunikations- und Verfahrensdaten.</li>
                    <li>Protokolldaten.</li>
                </ul>
                <h3>Kategorien betroffener Personen</h3>
                <ul>
                    <li>Kommunikationspartner.</li>
                    <li>Nutzer.</li>
                </ul>
                <h3>Zwecke der Verarbeitung</h3>
                <ul>
                    <li>Kommunikation.</li>
                    <li>Sicherheitsmaßnahmen.</li>
                    <li>Organisations- und Verwaltungsverfahren.</li>
                    <li>Feedback.</li>
                    <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
                    <li>Informationstechnische Infrastruktur.</li>
                </ul>
                <h2 id="m2427">Maßgebliche Rechtsgrundlagen</h2>
                <p><strong>Maßgebliche Rechtsgrundlagen nach der DSGVO: </strong>Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten.</p>
                <h2 id="m27">Sicherheitsmaßnahmen</h2>
                <p>Wir treffen nach Maßgabe der gesetzlichen Vorgaben geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.</p>
                <h2 id="m225">Bereitstellung des Onlineangebots und Webhosting</h2>
                <p>Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können.</p>
                <h2 id="m182">Kontakt- und Anfrageverwaltung</h2>
                <p>Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.</p>
                <p class="seal"><a href="https://datenschutz-generator.de/" title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken." target="_blank" rel="noopener noreferrer nofollow">Erstellt mit kostenlosem Datenschutz-Generator.de</a></p>
            `)
        }
    };




    constructor(private sanitizer: DomSanitizer) { }

    get currentText() {
        return {
            title: this.translations[this.currentLanguage].title,
            content: this.sanitizer.bypassSecurityTrustHtml(this.translations[this.currentLanguage].content)
        };
    }

    get currentLandingText() {
        return this.landingTranslations[this.currentLanguage];
    }

    get currentSkillText() {
        return this.skillTranslations[this.currentLanguage];
    }

    get currentContinuallyLearningText() {
        return this.skillTranslations[this.currentLanguage].continually;
    }

    get currentPortfolioText() {
        return this.portfolioTranslations[this.currentLanguage];
    }

    get currentContactText() {
        return this.contactsTranslations[this.currentLanguage];
    }

    get currentNavBarText() {
        return this.navBarTranslations[this.currentLanguage];
    }

    get currentFooterText() {
        return this.footerTranslations[this.currentLanguage];
    }

    get currentImprintText() {
        return this.imprintTranslations[this.currentLanguage];
    }

    get currentPrivacyText() {
        return this.privacyTranslations[this.currentLanguage];
    }

    setLanguage(language: 'en' | 'de') {
        this.currentLanguage = language;
    }
}

