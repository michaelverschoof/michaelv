import { Story } from '@/types';
import { ref } from 'vue';

const stories = ref([] as Story[]);

export const useStories = () => {

    const get = () => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@michael-verschoof')
        .then(response => response.json())
        .then(body => { stories.value = body.items })
        .catch(exception => console.error(exception));
    };

    return {
        stories,
        get
    };
};
