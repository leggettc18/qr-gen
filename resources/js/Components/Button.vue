<script lang="ts" setup>

interface Props {
    type: "submit" | "button" | "reset" | undefined
}

const { type = "submit" } = defineProps<Props>();

</script>

<template>
    <button
        :type=type
        class="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-gray-600 active:bg-gray-900 focus:outline-none focus:border-gray-900 dark:focus:border-gray-400 focus:shadow-outline-gray transition ease-in-out duration-150"
    >
        <slot />
    </button>
</template>
