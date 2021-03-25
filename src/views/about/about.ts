import { useTranslation } from '@/composables/i18n';

export default {
    name: 'about',
    components: {
    },
    setup () {
        const { translate } = useTranslation();

        return {
            translate
        }
    }
};
