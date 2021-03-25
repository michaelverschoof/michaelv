import { useTranslation } from '@/composables/i18n';

export default {
    name: 'blog',
    components: {
    },
    setup () {
        const { translate } = useTranslation();

        return {
            translate
        }
    }
};
