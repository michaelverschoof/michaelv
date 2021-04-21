import { useTranslation } from '@/composables/i18n';
import { Routes } from '@/routes';

export default {
    name: 'navigation-menu',
    setup() {
        const { translate } = useTranslation();

        return {
            translate,
            Routes
        };
    }
};
