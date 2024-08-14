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
            content: `Hello, my name is Philip and I am a frontend developer based in Berlin.<br>
                I am passionate about web development because I like the unique mix of logical thinking and creativity that the
                job requires.<br><br>
                My focus is on Angular, JavaScript and object-oriented programming. I have acquired these
                skills through many project experiences, both working alone and in teams. Take a look at my portfolio further
                down to see for yourself.<br><br>
                My study achievements were driven by a high level of willingness to learn and independent working.<br>
                These skills will support my continuous knowledge building in my upcoming role as a frontend developer
                and I am looking forward to join your team.`
        },
        de: {
            title: 'Über mich',
            content: `Hallo, mein Name ist Philip und ich bin ein Frontend-Entwickler aus Berlin.<br>
            Ich bin leidenschaftlicher Webentwickler, weil ich die einzigartige Mischung aus logischem Denken und Kreativität mag, die der Job erfordert.<br><br>
            Mein Fokus liegt auf Angular, JavaScript und objektorientierter Programmierung. Diese Fähigkeiten habe ich mir durch viele Projekterfahrungen,
            sowohl im Team als auch alleine, angeeignet. Werfen Sie einen Blick auf mein Portfolio weiter unten, um sich selbst davon zu überzeugen.<br><br>
            Meine Studienerfolge wurden durch ein hohes Maß an Lernbereitschaft und selbstständigem Arbeiten vorangetrieben.
            Diese Fähigkeiten werden mich bei meiner zukünftigen Tätigkeit als Frontend-Entwickler unterstützen und ich freue mich darauf, in Ihrem Team mitzuarbeiten.`
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
            getInTouch: 'Get in touch',
            scrollDown: 'Scroll down'
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
        },
        de: {
            contentOne: `Auf meinem Weg habe ich an verschiedenen Projekten gearbeitet und dabei eine Reihe 
            von Frontend-Technologien und Konzepten eingesetzt. Ich bin offen für neue Frameworks, Technologien 
            und Methoden, um meine Fähigkeiten kontinuierlich zu verbessern und in der sich ständig weiterentwickelnden 
            Webentwicklung up to date zu bleiben.`,
            h2: `Suchen Sie nach <span class="purple">einem anderen Skill</span>?`,
            contentTwo: `Kontaktieren Sie mich gerne. Ich freue mich darauf meine Fähigkeiten auszuweiten.`,
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

    get currentPortfolioText() {
        return this.portfolioTranslations[this.currentLanguage];
    }

    setLanguage(language: 'en' | 'de') {
        this.currentLanguage = language;
    }
}

