<script setup lang="ts">
    //import BreezeApplicationLogo from '@/Components/ApplicationLogo.vue';
    import { Link } from '@inertiajs/inertia-vue3';
    import { QrcodeIcon } from '@heroicons/vue/solid';
</script>

<template>
    <div
        class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0"
    >
        <div>
            <Link href="/">
                <QrcodeIcon
                    class="w-20 h-20 fill-current text-zinc-500 dark:text-zinc-300"
                />
            </Link>
        </div>

        <div
            class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-zinc-800 shadow-md overflow-hidden sm:rounded-lg"
        >
            <slot />
        </div>
    </div>
</template>
