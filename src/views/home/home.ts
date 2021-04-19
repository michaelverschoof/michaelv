import HeroContent from '@/components/hero/hero-content.vue';
import { useTranslation } from '@/composables/i18n';

export default {
    name: 'home',
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
