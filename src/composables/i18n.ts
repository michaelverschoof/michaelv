import { useI18n } from 'vue-i18n';
import { useStorage } from '@/composables/storage';
import { LANGUAGES, StorageKeys } from '@/types';

export const useTranslation = () => {

    const { t, locale, n } = useI18n();
    const storage = useStorage();

    const setLocale = (value: string) => {
        const found = LANGUAGES.find(language => language.locale === value)?.locale;
        if (!found) {
            console.warn(`Could not set language. Locale "${value}" could not be found.`);
            return;
        }

        locale.value = found;
        storage.set(StorageKeys.LANGUAGE, found);
    };

    const getLocale = (): string => {
        return locale.value as string;
    }

    return {
        getLocale,
        setLocale,
        number: n,
        translate: t
    };
};