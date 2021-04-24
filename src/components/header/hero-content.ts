import { FromHomepageIdentifier } from '@/types';
import { inject, onMounted, ref } from 'vue';

export default {
    name: 'hero-content',
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: false,
            default: null
        }
    },
    setup() {
        const delayHeroAnimation = inject(FromHomepageIdentifier, ref(false));

        const animate = ref(false);

        onMounted(() => (animate.value = true));

        return {
            animate,
            delayHeroAnimation
        };
    }
};
