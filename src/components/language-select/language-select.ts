import ModalDialog from '@/components/modal-dialog/modal-dialog.vue';
import RadioInput from '@/components/forms/fields/radio/radio-input.vue';
import SaveButton from '@/components/save-button/save-button.vue';
import { useTranslation } from '@/composables/i18n';
import { LANGUAGES } from '@/types';
import { computed, ref } from 'vue';

export default {
    name: 'language-select',
    components: {
        ModalDialog,
        RadioInput,
        SaveButton
    },
    setup () {
        const { getLocale, setLocale, translate } = useTranslation();

        const language = computed(() => LANGUAGES.find(language => language.locale === getLocale()));
        const languages = computed(() => LANGUAGES);

        const languageSelectOpened = ref(false);
        const languageSelected = ref(false);

        const closeLanguageSelect = () => languageSelectOpened.value = false;
        const openLanguageSelect = () => languageSelectOpened.value = true;

        const selectLanguage = (value: string) => {
            setLocale(value);
            languageSelected.value = true;
            closeLanguageSelect();
        };

        const enableLanguageSelect = () => {
            languageSelected.value = false;
        }

        return {
            language,
            languages,
            languageSelectOpened,
            languageSelected,
            closeLanguageSelect,
            enableLanguageSelect,
            openLanguageSelect,
            selectLanguage,
            translate
        }
    }
};