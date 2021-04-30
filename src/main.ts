import MichaelV from '@/michaelv.vue';
import en from '@/assets/i18n/en.json';
import nl from '@/assets/i18n/nl.json';
import { useStorage } from '@/composables/storage';
import { router } from '@/router';
import { LANGUAGES, Locales, StorageKeys } from '@/types';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

const storage = useStorage();
const locale = LANGUAGES.find(locale => storage.get(StorageKeys.LANGUAGE) === locale.locale)?.locale || Locales.EN;

const i18n = createI18n({
    legacy: false,
    locale: locale,
    fallbackLocale: Locales.EN,
    messages: {
        [Locales.EN]: en,
        [Locales.NL]: nl
    }
});

createApp(MichaelV)
    .use(router)
    .use(i18n)
    .mount('#app');
