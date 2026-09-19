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
      id: 'desc_pim',
      lang: [
        {
          lang: 'en', text: `
          Production Inventory Manager (PIM) is a C# script for the game Space Engineers that automatically sorts inventories, 
          feeds refineries and assemblers, and keeps a base running without manual micromanagement. Published on the Steam Workshop and actively used by other players. 
          Since a single script tick has a hard instruction budget, the whole system is built as cooperative jobs that each do a slice of work per tick and hand control back — 
          around 7,000 lines across 70-odd files, with unit tests and a CI pipeline on GitHub.
          `
        },
        {
          lang: 'de', text: `
          Production Inventory Manager (PIM) ist ein C#-Skript für das Spiel Space Engineers, das Inventare automatisch sortiert, 
          Raffinerien und Assembler versorgt und eine Basis ohne manuelles Eingreifen am Laufen hält. Veröffentlicht im Steam Workshop und von anderen Spielern aktiv genutzt. 
          Da ein einzelner Skript-Tick ein festes Instruktionsbudget hat, ist das System als kooperative Jobs aufgebaut, die pro Tick jeweils einen Teil der Arbeit erledigen und die Kontrolle wieder abgeben — 
          rund 7.000 Zeilen über etwa 70 Dateien, mit Unit-Tests und einer CI-Pipeline auf GitHub.
          `
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
          Hello! I am a software developer focused on <span class="hl-text">C#/.NET</span>, currently working at Wiesecker Group in Weißenfels. There I help develop the company's in-house ERP software as part of a migration from a legacy <span class="hl-text">Access/VBA</span> solution to a modern .NET application, building desktop UIs in WinForms and WPF and maintaining unit and UI tests.
          Alongside that, I completed a <span class="hl-text">Front-End training</span> in Angular and TypeScript, which is also where the projects on this page come from. Before moving into software development, I spent over <span class="hl-text">20 years in CNC manufacturing</span>, most recently with responsibility for technology and a production team — a background that still shapes how I work today: structured, precise, and focused on how systems actually behave in practice.
          I am open to new, <span class="hl-text">challenging projects</span> across the stack. If you think I could be a good fit for your team, don't hesitate to contact me!
                    <br><br>
          I also spoke about this career change in more detail in a <a class="hl-text" href="https://www.youtube.com/watch?v=ZPTSr2pomHs" target="_blank" rel="noopener noreferrer">podcast interview</a>.
          ` },
        {
          lang: 'de', text: `
          Hallo! Ich bin Softwareentwickler mit Schwerpunkt <span class="hl-text">C#/.NET</span>, aktuell bei der Wiesecker Group in Weißenfels tätig. Dort entwickle ich die hauseigene ERP-Software im Rahmen einer Migration von einer <span class="hl-text">Access-/VBA-Lösung</span> zu einer modernen .NET-Anwendung mit, inklusive Desktop-Oberflächen in WinForms und WPF sowie der Pflege von Unit- und UI-Tests.
          Daneben habe ich eine <span class="hl-text">Front-End-Ausbildung</span> in Angular und TypeScript abgeschlossen, aus der auch die Projekte auf dieser Seite stammen. Vor dem Wechsel in die Softwareentwicklung war ich über <span class="hl-text">20 Jahre in der CNC-Fertigung</span> tätig, zuletzt mit Technologie- und Teamverantwortung – das prägt bis heute meine strukturierte, präzise Arbeitsweise und mein Verständnis für technische Abläufe.
          Ich bin offen für neue, <span class="hl-text">herausfordernde Projekte</span> über den gesamten Stack hinweg. Wenn Sie denken, dass ich gut zu Ihrem Team passen könnte, zögern Sie nicht, mich zu kontaktieren!
                    <br><br>
          Über diesen Karrierewechsel habe ich auch ausführlicher in einem <a class="hl-text" href="https://www.youtube.com/watch?v=ZPTSr2pomHs" target="_blank" rel="noopener noreferrer">Podcast-Interview</a> gesprochen.
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
