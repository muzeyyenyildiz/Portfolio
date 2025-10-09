

export interface ContactInfo {
    email: string;
    github: string;
    linkedin: string;
    location: string;
    phone: string;
}

export interface ExperienceItem {
    title: string;
    time: string;
    tasks: string[];
    website?: string;
    technologies: string[];
}

export interface ProjectItem {
    name: string;
    description: string;
    link: string;
    vercel: string;
    technologies: string[];
}

export interface EducationItem {
    degree: string;
    school: string;
}



export interface UITitles {
    about: string;
    education: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
    technologiesUsed: string;
    contactFormTitle: string;
    email: string;
    name: string;
    message: string;
    enterName: string;
    enterEmail: string;
    writeMessage: string;
}

export interface UIButtons {
    linkedin: string;
    github: string;
    graduated: string;
    viewOnGithub: string;
    viewOnWebsite: string
    sendMessage: string;
}

export interface UINav {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
}

export interface UILanguage {
    nav: UINav;
    buttons: UIButtons;
    titles: UITitles;
    footer: string;
    locationText: string; // Hata veren özellik buradadır.
}


export interface LanguageContent {
    name: string;
    profession: string;
    summary: string;
    summary2: string;
    contact: ContactInfo;
    skills: string[];
    experience: ExperienceItem[];
    projects: ProjectItem[];
    education: EducationItem[];
    ui: UILanguage;
}


export interface RootContent {
    en: LanguageContent;
    tr: LanguageContent;

}

export type LanguageKey = 'en' | 'tr';

