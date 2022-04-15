<script setup lang="ts">
    import { onMounted, ref } from 'vue';

    defineProps(['modelValue']);

    const emit = defineEmits(['update:modelValue']);

    const input = ref<HTMLInputElement | null>(null);

    const handleInput = (target: EventTarget | null) => {
        if (target) {
            emit('update:modelValue', (target as HTMLInputElement).value);
        }
    };

    onMounted(() => {
        if (input.value?.hasAttribute('autofocus')) {
            input.value.focus();
        }
    });
</script>

<template>
    <input
        class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm text-zinc-900"
        :value="modelValue"
        @input="handleInput($event.target)"
        ref="input"
    />
</template>
