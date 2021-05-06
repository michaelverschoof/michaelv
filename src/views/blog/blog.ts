import HeroContent from '@/components/header/hero-content.vue';
import { useTranslation } from '@/composables/i18n';
import { useStories } from '@/composables/stories';

export default {
    name: 'blog',
    components: {
        HeroContent
    },
    setup() {
        const { translate } = useTranslation();
        const { stories, get } = useStories();

        if (!stories.value || stories.value.length === 0) {
            get();
        }

        return {
            stories,
            translate
        };
    }
};
