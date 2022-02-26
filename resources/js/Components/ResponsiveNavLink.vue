<script setup>
import { computed } from "vue";
import { Link } from "@inertiajs/inertia-vue3";

const props = defineProps(["href", "active"]);

const classes = computed(() =>
  props.active
    ? "block pl-3 pr-4 py-2 border-l-4 border-indigo-400 dark:border-emerald-500 text-base font-medium text-indigo-700 dark:text-emerald-50 bg-indigo-50 dark:bg-emerald-700 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 dark:focus:bg-emerald-500 focus:border-indigo-700 transition duration-150 ease-in-out"
    : "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 dark:text-gray-300 dark:focus:text-gray-400 focus:border-gray-300 dark:focus:border-gray-800 transition duration-150 ease-in-out"
);
</script>

<template>
  <Link :href="href" :class="classes">
    <slot />
  </Link>
</template>
