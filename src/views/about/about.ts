import HeroContent from '@/components/hero/hero-content.vue';
import { useTranslation } from '@/composables/i18n';

export default {
    name: 'about',
    components: {
        HeroContent
    },
    setup() {
        const { translate } = useTranslation();

        return {
            translate
        };
    }
};
