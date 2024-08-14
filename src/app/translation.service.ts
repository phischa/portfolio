import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    private currentLanguage: 'en' | 'de' = 'en';

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

    constructor(private sanitizer: DomSanitizer) { }

    get currentText() {
        return {
            title: this.translations[this.currentLanguage].title,
            content: this.sanitizer.bypassSecurityTrustHtml(this.translations[this.currentLanguage].content)
        };
    }

    setLanguage(language: 'en' | 'de') {
        this.currentLanguage = language;
    }
}

