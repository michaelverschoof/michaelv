import Hero from '@/components/header/hero.vue';
import Navigation from '@/components/navigation/navigation.vue';
import { onMounted, ref } from 'vue';

export default {
    name: 'app',
    components: {
        Hero,
        Navigation
    },
    setup() {
        const hero = ref();
        const sticking = ref(false);

        const observed: IntersectionObserverCallback = ([entry]): void => {
            sticking.value = !entry.isIntersecting;
        };

        const observer = new IntersectionObserver(observed, {
            threshold: 0.001
        });

        onMounted(() => {
            observer.observe(hero.value);
        });

        return {
            hero,
            sticking
        };
    }
};
