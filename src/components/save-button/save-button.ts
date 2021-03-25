import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
    name: 'save-button',
    props: {
        saving: {
            type: Boolean,
            required: false,
            default: false
        },
        saved: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    emits: [
        'clicked',
        'enabled'
    ],
    setup (props, { emit }) {
        const completed = ref(props.saved);

        watch(() => props.saved, (after: boolean, before: boolean) => {
            if (after === before || !after) {
                return;
            }

            completed.value = true;
            emit('enabled');

            // Note that the timeout here is linked to the animation time in save-button.ts
            setTimeout(() => completed.value = false, 1500);
        });

        return {
            completed
        }
    }
});