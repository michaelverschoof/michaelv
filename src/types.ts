/**
 * Language select
 */
export const enum Locales {
    EN = 'en',
    NL = 'nl',
}

export interface Language {
    caption: string;
    locale: Locales;
}

export const LANGUAGES: Language[] = [
    { locale: Locales.EN, caption: 'English' },
    { locale: Locales.NL, caption: 'Nederlands' }
];

/**
 * Local storage
 */
export const enum StorageKeys {
    LANGUAGE = 'language'
}

/**
 * Provide / inject identifiers
 */
export const FromHomepageIdentifier = Symbol();
