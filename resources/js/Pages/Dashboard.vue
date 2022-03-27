<script setup lang="ts">
    import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
    import { Page, PageProps } from '@inertiajs/inertia';
    import { Head, usePage } from '@inertiajs/inertia-vue3';
    import { computed } from 'vue';
import QrCodeManager from '@/Components/QrCodeManager.vue';

    interface IPageProps extends Page<PageProps> {
        auth: {
            user: {
                links: Function;
            };
        };
    }
    const user = computed(() => usePage<IPageProps>().props.value.auth.user);
</script>

<template>
    <Head title="Dashboard" />

    <BreezeAuthenticatedLayout>
        <template #header>
            <h2
                class="font-semibold text-xl text-gray-800 dark:text-gray-100 leading-tight"
            >
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 prose">
                <div
                    class="bg-white dark:bg-gray-900 overflow-hidden shadow-sm sm:rounded-lg"
                >
                    <div
                        class="p-6 bg-white dark:bg-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800 flex flex-wrap justify-center sm:justify-around"
                    >
                        <div
                            v-for="link in user.links"
                            :key="link.id"
                            class="flex justify-center dark:bg-gray-900 rounded-3xl p-4 m-4"
                        >
                            <QrCodeManager :link="link"></QrCodeManager>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
