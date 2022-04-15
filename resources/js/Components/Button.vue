<script lang="ts" setup>
    interface Props {
        type?: 'submit' | 'button' | 'reset' | undefined;
    }

    const { type = 'submit' } = defineProps<Props>();
</script>

<template>
    <button
        :type="type"
        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-400 focus:shadow-outline-zinc transition ease-in-out duration-150"
    >
        <slot />
    </button>
</template>
