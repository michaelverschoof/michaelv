import { FormElementEvents } from '@/components/forms/types';
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'radio-input',
    props: {
        name: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        },
        selected: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    emits: [
        FormElementEvents.CREATED,
        FormElementEvents.CHANGED
    ],
    setup (props, { emit }) {
        emit(FormElementEvents.CREATED, props.value);

        const identifier = computed(() => props.name + '-' + props.value);
        const checked = ref(props.selected);

        const onChange = () => {
            emit(FormElementEvents.CHANGED, props.value);
        };

        return {
            identifier,
            checked,
            onChange
        };
    }
});