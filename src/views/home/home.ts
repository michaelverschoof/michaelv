import HeroContent from '@/components/header/hero-content.vue';
import Revealer from '@/components/revealer/revealer.vue';
import { useTranslation } from '@/composables/i18n';

export default {
    name: 'home',
    components: {
        HeroContent,
        Revealer
    },
    setup () {
        const { translate } = useTranslation();

        return {
            translate
        }
    }
};
