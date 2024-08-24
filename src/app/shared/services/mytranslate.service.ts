import { Injectable } from '@angular/core';

export type validLanguage = 'en' | 'de';

export interface LanguageDefinition {
  lang: validLanguage,
  text: string,
  icon: string
}

interface LanguageText {
  lang: validLanguage,
  text: string
}

interface TranslateableText {
  id: string;
  lang: LanguageText[];
}

@Injectable({
  providedIn: 'root'
})
export class MytranslateService {
  public languages: LanguageDefinition[] = [
    { lang: 'en', text: 'English', icon: '[ENG]' },
    { lang: 'de', text: 'Deutsch', icon: '[DEU]' }
  ];

  private language: validLanguage = 'en';

  private text: TranslateableText[] = [
    {
      id: 'source',
      lang: [
        { lang: 'en', text: 'Source' },
        { lang: 'de', text: 'Quelle' }
      ]
    },
    {
      id: 'phone',
      lang: [
        { lang: 'en', text: 'Phone' },
        { lang: 'de', text: 'Telefon' }
      ]
    },
    {
      id: 'contact',
      lang: [
        { lang: 'en', text: 'Contact' },
        { lang: 'de', text: 'Kontakt' }
      ]
    },
    {
      id: 'imprint',
      lang: [
        { lang: 'en', text: 'Legal Notice' },
        { lang: 'de', text: 'Impressum' }
      ]
    },
    {
      id: 'messagesend1',
      lang: [
        { lang: 'en', text: 'Message has been sent successfully.' },
        { lang: 'de', text: 'Nachricht wurde erfolgreich versendet.' }
      ]
    },
    {
      id: 'messagesend2',
      lang: [
        { lang: 'en', text: 'I will contact you as soon as possible.' },
        { lang: 'de', text: 'Ich werde mich schnellstmöglich bei Ihnen melden.' }
      ]
    },
    {
      id: 'message',
      lang: [
        { lang: 'en', text: 'Message' },
        { lang: 'de', text: 'Nachricht' }
      ]
    },
    {
      id: 'submit_sendet',
      lang: [
        { lang: 'en', text: 'Successfully sent' },
        { lang: 'de', text: 'Erfolgreich versendet' }
      ]
    },
    {
      id: 'submit_sending',
      lang: [
        { lang: 'en', text: 'Message sending...' },
        { lang: 'de', text: 'Nachricht senden...' }
      ]
    },
    {
      id: 'submit',
      lang: [
        { lang: 'en', text: 'Submit' },
        { lang: 'de', text: 'Abschicken' }
      ]
    },
    {
      id: 'error_name',
      lang: [
        { lang: 'en', text: 'enter a name' },
        { lang: 'de', text: 'bitte einen Namen eingeben' }
      ]
    },
    {
      id: 'error_mail',
      lang: [
        { lang: 'en', text: 'enter a valid mailadress' },
        { lang: 'de', text: 'bitte eine gültige Mail Adresse eingeben' }
      ]
    },
    {
      id: 'error_message',
      lang: [
        { lang: 'en', text: 'enter a message' },
        { lang: 'de', text: 'bitte eine Nachricht eingeben' }
      ]
    },
    {
      id: 'error_privacy',
      lang: [
        { lang: 'en', text: 'accept the privacy policy' },
        { lang: 'de', text: 'akzeptieren Sie die Datenschutzerklärung' }
      ]
    },
    {
      id: 'text_privacy1',
      lang: [
        { lang: 'en', text: `I've read the ` },
        { lang: 'de', text: 'Ich habe die ' }
      ]
    },
    {
      id: 'text_privacy2',
      lang: [
        { lang: 'en', text: ' and agree to the processing of my data as outlined' },
        { lang: 'de', text: ' gelesen und akzeptiere die Verarbeitung meiner Daten.' }
      ]
    },
    {
      id: 'portfoliotext',
      lang: [
        { lang: 'en', text: 'Feel free to try out my latest development projects and look into their code..' },
        { lang: 'de', text: 'Probieren Sie meine letzten Projekte, und schauen Sie sich auch den Code an.' }
      ]
    },
    {
      id: 'desc_join',
      lang: [
        { lang: 'en', text: 'A <span class="hl-text">KanBan</span> Board.' },
        { lang: 'de', text: 'Ein Kanban Board.' }
      ]
    },
    {
      id: 'desc_pokewiki',
      lang: [
        { lang: 'en', text: 'A website that displays information about Pokemon using the PokeAPI.' },
        { lang: 'de', text: 'Eine Website zur Anzeige von Informationen über Pokemons.' }
      ]
    },
    {
      id: 'desc_epl',
      lang: [
        { lang: 'en', text: 'A simple Browsergame with chicken.' },
        { lang: 'de', text: 'Eine einfaches Browserspiel mit Hühnern.' }
      ]
    },
    {
      id: 'sayhi',
      lang: [
        { lang: 'en', text: 'Say Hi!' },
        { lang: 'de', text: 'Sag Hallo!' }
      ]
    },
    {
      id: 'sayhi1',
      lang: [
        { lang: 'en', text: 'Want to discuss a new project?' },
        { lang: 'de', text: 'Möchten Sie ein neues Projekt besprechen?' }
      ]
    },
    {
      id: 'sayhi2',
      lang: [
        { lang: 'en', text: `Say hello! let's discuss ideas and make it happen.` },
        { lang: 'de', text: 'Melden Sie sich! Lassen Sie uns Ideen besprechen und sie umsetzen.' }
      ]
    },
    {
      id: 'myskills',
      lang: [
        { lang: 'en', text: 'My Skills' },
        { lang: 'de', text: 'Meine Skills' }
      ]
    },
    {
      id: 'myprojects',
      lang: [
        { lang: 'en', text: 'My Projects' },
        { lang: 'de', text: 'Meine Projekte' }
      ]
    },
    {
      id: 'aboutme',
      lang: [
        { lang: 'en', text: 'About me' },
        { lang: 'de', text: 'Über mich' }
      ]
    },
    {
      id: 'aboutmetext',
      lang: [
        {
          lang: 'en', text: `
          Hello! I am a passionate Front-End Developer from <span class="hl-text">Leipzig</span>. I am excited about helping <span class="hl-text">designers and businesses</span> bring their <span class="hl-text">creative visions</span> to life. I am particularly fascinated by how things work – or sometimes, how they don't. I love understanding the mechanics behind the scenes and analyzing problems in a structured and thorough way.
          With an <span class="hl-text">eye for detail</span> and a structured approach, I tackle every challenge. Bugs in the software? <span class="hl-text">No problem!</span> I see them as exciting puzzles waiting to be solved.
          I am eager to continue building my development career as a web developer and look forward to new, <span class="hl-text">exciting projects.</span> If you think I could be a good fit for your team and your projects, don't hesitate to contact me!
          ` },
        {
          lang: 'de', text: `
          Hallo! Ich bin ein leidenschaftlicher Front-End-Entwickler aus <span class="hl-text">Leipzig</span>. Es begeistert mich, <span class="hl-text">Designern und Unternehmen</span> dabei zu helfen, ihre <span class="hl-text">kreativen Visionen</span> zum Leben zu erwecken. Besonders fasziniert mich, wie Dinge funktionieren – oder manchmal eben nicht. Ich liebe es, die Mechanik hinter den Kulissen zu verstehen und Probleme strukturiert und gründlich zu analysieren.
          Mit einem <span class="hl-text">Auge fürs Detail</span> und einer strukturierten Arbeitsweise gehe ich jede Herausforderung an. Fehler in der Software? <span class="hl-text">Kein Problem!</span> Ich sehe sie als spannende Rätsel, die darauf warten, gelöst zu werden.
          Ich freue mich darauf, meine Entwicklerkarriere als Webentwickler weiter auszubauen und bin gespannt auf neue, <span class="hl-text">aufregende Projekte.</span> Wenn Sie denken, dass ich gut zu Ihrem Team und Ihren Projekten passen könnte, zögern Sie nicht, mich zu kontaktieren!
          ` }
      ]
    },
    {
      id: 'privacy',
      lang: [
        { lang: 'en', text: 'privacy policy' },
        { lang: 'de', text: 'Datenschutzerklährung' }
      ]
    },
    {
      id: 'legalnotice',
      lang: [
        { lang: 'en', text: 'Legal Notice' },
        { lang: 'de', text: 'Impressum' }
      ]
    }
  ];

  constructor() { }

  setLanguage(newLang: validLanguage) {
    this.language = newLang;
  }

  getLanguage(): validLanguage {
    return this.language;
  }

  getTranslation(id: string): string {
    const translation = this.text.find(t => t.id === id);
    if (!translation) return '???';
    const text = translation.lang.find(t => t.lang === this.language);
    return text ? text.text : '???';
  }
}
