<script setup lang="ts">
import { computed } from 'vue';

type Booleanish = boolean | 'true' | 'false'

const emit = defineEmits(['update:checked']);

interface Props {
    checked?: any[] | Booleanish | undefined;
    value?: any;
}

const { checked = false, value = null} = defineProps<Props>();

const proxyChecked = computed<any[] | Booleanish | undefined>({
    get() {
        return checked;
    },

    set(val) {
        emit("update:checked", val);
    },
});
</script>

<template>
    <input type="checkbox" :value="value" v-model="proxyChecked"
           class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
</template>
