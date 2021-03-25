import { useTranslation } from '@/composables/i18n';

export default {
    name: 'portfolio',
    components: {
    },
    setup () {
        const { translate } = useTranslation();

        return {
            translate
        }
    }
};
