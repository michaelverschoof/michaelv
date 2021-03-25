import { useTranslation } from '@/composables/i18n';

export default {
    name: 'home',
    components: {
    },
    setup () {
        const { translate } = useTranslation();

        return {
            translate
        }
    }
};
