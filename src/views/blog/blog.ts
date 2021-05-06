import HeroContent from '@/components/header/hero-content.vue';
import { useTranslation } from '@/composables/i18n';
import { useStories } from '@/composables/stories';
import { computed, onMounted, ref } from 'vue';

export default {
    name: 'blog',
    components: {
        HeroContent
    },
    setup() {
        const { translate } = useTranslation();
        const { stories, get } = useStories();

        const animate = ref(false);

        const show = computed(() => stories.value.length > 0 && animate.value === true);

        onMounted(() => {
            if (!stories.value || stories.value.length === 0) {
                get();
            }

            animate.value = true;
        });

        return {
            show,
            stories,
            translate
        };
    }
};
