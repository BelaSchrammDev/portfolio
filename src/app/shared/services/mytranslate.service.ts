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

  private language: validLanguage = 'de';

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
    // desc_dabubble
    {
      id: 'desc_dabubble',
      lang: [
        {
          lang: 'en', text: `
          The "DaBubble" project is a comprehensive communication platform that allows users to interact in channels and direct messages. 
          It offers features such as creating and managing channels, sending messages, files, and emoticons, as well as managing user accounts. 
          The platform is responsive, cleanly coded in TypeScript, and optimized for user-friendliness. It also supports features like real-time status indicators, threads,
          and an advanced search to make group and private communication efficient.
          `
        },
        {
          lang: 'de', text: `
          Das Projekt "DaBubble" ist eine umfassende Kommunikationsplattform, die es Benutzern ermöglicht, in Channels und Direktnachrichten zu interagieren.
          Es bietet Funktionen wie das Erstellen und Verwalten von Channels, das Schreiben von Nachrichten, das Senden von Dateien und Emoticons sowie die Verwaltung von Benutzerkonten.
          Die Plattform ist responsive, sauber in TypeScript codiert und auf Benutzerfreundlichkeit optimiert. Zudem unterstützt sie Features wie Echtzeit-Statusanzeigen,
          Threads und eine erweiterte Suche, um die Kommunikation in Gruppen und privat effizient zu gestalten.
          `
        }
      ]
    },
    {
      id: 'desc_join',
      lang: [
        {
          lang: 'en', text: `
          JOIN is a Kanban system developed in Vanilla JavaScript and CSS, with Firebase as the backend. Users can sign up, create tasks, and add subtasks. 
          These tasks can be organized into four different columns and moved around, just like in a Kanban board. The project offers an intuitive and simple solution for task management, 
          providing a clear visualization of progress.
          `
        },
        {
          lang: 'de', text: `
          JOIN ist ein in Vanilla JavaScript und CSS entwickeltes Kanban-System, das Firebase als Backend nutzt. 
          Nutzer können sich anmelden, Aufgaben (Tasks) erstellen und diese mit Unteraufgaben (Subtasks) ergänzen. 
          Die Aufgaben lassen sich in vier verschiedene Spalten einordnen und beliebig verschieben, wie es für Kanban-Boards typisch ist. 
          Das Projekt bietet eine intuitive und einfache Lösung für das Aufgabenmanagement und ermöglicht eine klare Visualisierung des Fortschritts.
          `
        }
      ]
    },
    {
      id: 'desc_pokewiki',
      lang: [
        {
          lang: 'en', text: `
          Pokewiki is a project that lists over 1,000 Pokémon, with data sourced from the PokeAPI. 
          The main focus of this project is on loading speed, with functionality designed to load Pokémon data as quickly and efficiently as possible. 
          Users can also search for specific Pokémon, providing a fast and smooth experience while exploring the Pokémon world.
          `
        },
        {
          lang: 'de', text: `
          Pokewiki ist ein Projekt, das über 1.000 Pokémon auflistet. Die Daten stammen von der PokeAPI. 
          Der besondere Schwerpunkt dieses Projekts liegt auf der Ladegeschwindigkeit: Die Funktionalität ist darauf ausgelegt, 
          die Pokémon-Daten so schnell und performant wie möglich zu laden. Nutzer können zudem gezielt nach Pokémon suchen, um ein schnelles und reibungsloses Erlebnis beim Durchstöbern der Pokémon-Welt zu haben.
          `
        }
      ]
    },
    {
      id: 'desc_epl',
      lang: [
        {
          lang: 'en', text: `El Pollo Loco is a simple 2D jump-and-run game. Playing as Pepe, you must jump on chickens and chicks to avoid taking damage. 
          At the end, there's a big final boss chicken that you can defeat by throwing salsa bottles you've collected earlier. 
          The game offers fun and excitement in a crazy chicken world!`
        },
        {
          lang: 'de', text: `El Pollo Loco ist ein einfaches 2D-Jump-and-Run-Spiel. Mit der Figur Pepe hüpfst du auf Hühner und Küken, um Schaden zu vermeiden. 
          Am Ende erwartet dich ein großes Endboss-Huhn, das du mit zuvor gesammelten Salsa-Flaschen bewerfen und besiegen kannst. 
          Das Spiel bietet Spaß und Spannung in einer verrückten Hühnerwelt!`
        }
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
        { lang: 'de', text: 'Planen Sie ein neues Projekt?' }
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
