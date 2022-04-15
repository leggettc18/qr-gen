<script setup lang="ts">
    import { onMounted, ref, onBeforeUnmount } from 'vue';
    import { debounce } from '@/Helpers';

    defineProps(['modelValue']);

    const emit = defineEmits(['update:modelValue']);

    const input = ref<HTMLInputElement | null>(null);

    const handleInput = debounce((target: EventTarget | null) => {
        if (target) {
            emit('update:modelValue', (target as HTMLInputElement).value);
        }
    }, 600);

    onMounted(() => {
        if (input.value?.hasAttribute('autofocus')) {
            input.value.focus();
        }
    });

    onBeforeUnmount(() => {
        handleInput.cancel();
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
