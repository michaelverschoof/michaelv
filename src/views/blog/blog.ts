import HeroContent from '@/components/header/hero-content.vue';
import { useTranslation } from '@/composables/i18n';
import { useStories } from '@/composables/stories';
import { FromHomepageIdentifier } from '@/types';
import { computed, inject, onMounted, ref } from 'vue';

export default {
    name: 'blog',
    components: {
        HeroContent
    },
    setup() {
        const delay = inject(FromHomepageIdentifier, ref(false));

        const { translate } = useTranslation();
        const { stories, get } = useStories();

        const show = ref(false);
        const animate = computed(() => stories.value.length > 0 && show.value === true);

        onMounted(() => {
            if (!stories.value || stories.value.length === 0) {
                get();
            }

            show.value = true;
        });

        return {
            delay,
            animate,
            stories,
            translate
        };
    }
};
