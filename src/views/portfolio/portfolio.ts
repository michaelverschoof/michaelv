import HeroContent from '@/components/header/hero-content.vue';
import { useTranslation } from '@/composables/i18n';

export default {
    name: 'portfolio',
    components: {
        HeroContent
    },
    setup () {
        const { translate } = useTranslation();

        return {
            translate
        }
    }
};
