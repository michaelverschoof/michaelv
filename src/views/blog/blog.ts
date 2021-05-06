import HeroContent from '@/components/header/hero-content.vue';
import { useTranslation } from '@/composables/i18n';
import { ref } from 'vue';

export default {
    name: 'blog',
    components: {
        HeroContent
    },
    setup() {
        const { translate } = useTranslation();

        const stories = ref();

        const get = () => {
            fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@michael-verschoof')
            .then(response => response.json())
            .then(body => (stories.value = body.items))
            .catch(
                exception => console.error(exception)
                // Do error handling
            );
        };

        get();

        return {
            stories,
            translate
        };
    }
};
