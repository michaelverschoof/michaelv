import { useTranslation } from '@/composables/i18n';
import { Routes } from '@/routes';
import LanguageSelect from '@/components/language-select/language-select.vue';

export default {
    name: 'navigation-menu',
    components: {
        LanguageSelect
    },
    setup () {
        const { translate } = useTranslation();

        return {
            translate,
            Routes
        }
    }
};
