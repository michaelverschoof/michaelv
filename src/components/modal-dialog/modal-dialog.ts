import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
    name: 'modal-dialog',
    props: {
        visible: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    emits: [
        'close',
        'open'
    ],
    setup (props, { emit }) {
        const display = ref(props.visible ? 'd-flex' : 'd-none')
        const displaying = ref(false);

        const close = () => {
            displaying.value = false;

            setTimeout(() => {
                display.value = 'd-none';
            }, 200);

            emit('close');
        };

        const open = () => {
            display.value = 'd-flex';

            setTimeout(() => {
                displaying.value = true;
            }, 200);

            emit('open');
        }

        watch(() => props.visible, (after: boolean, before: boolean) => {
            if (after === before) {
                return;
            }

            after ? open() : close();
        });

        return {
            display,
            displaying,
            close,
            open
        };
    }
});
