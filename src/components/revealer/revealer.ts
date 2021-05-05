import { onMounted, ref } from 'vue';

export default {
    name: 'revealer',
    props: {
        transition: {
            type: String,
            required: false,
            default: 'fade'
        }
    },
    setup() {
        const target = ref();
        const animate = ref(false);

        const observer = new IntersectionObserver(
            ([entry]) => {
                animate.value = entry.isIntersecting;
            },
            {
                threshold: 0.3,
                rootMargin: '-10%'
            }
        );

        onMounted(() => {
            observer.observe(target.value);
        });

        return {
            animate,
            target
        };
    }
};
