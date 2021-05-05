import Hero from '@/components/header/hero.vue';
import Navigation from '@/components/navigation/navigation.vue';
import { Routes } from '@/routes';
import { FromHomepageIdentifier } from '@/types';
import { onMounted, provide, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
    name: 'app',
    components: {
        Hero,
        Navigation
    },
    setup() {
        const page = ref();
        const fromHomePage = ref(false)
        provide(FromHomepageIdentifier, fromHomePage);

        const route = useRoute();
        watch(() => route.name, (to, from) => {
            fromHomePage.value = Routes.HOME === from;
            page.value = to;
        })

        const hero = ref();
        const sticking = ref(false);

        const observer = new IntersectionObserver(
            ([entry]) => { sticking.value = !entry.isIntersecting; },
            { threshold: 0.0 }
        );

        onMounted(() => {
            observer.observe(hero.value);
        });

        return {
            page,
            hero,
            sticking
        };
    }
};
