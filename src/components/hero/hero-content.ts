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
    }
};
