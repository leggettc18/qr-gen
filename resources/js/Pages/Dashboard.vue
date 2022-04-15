<script setup lang="ts">
    import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
    import { Page, PageProps } from '@inertiajs/inertia';
    import { Head, usePage } from '@inertiajs/inertia-vue3';
    import { computed } from 'vue';
    import QrCodeManager from '@/Components/QrCodeManager.vue';
    import CreateQrCode from '@/Components/Forms/CreateQrCode.vue';

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
                class="font-semibold text-xl text-zinc-800 dark:text-zinc-100 leading-tight"
            >
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl sm:px-6 lg:px-8 prose prose-zinc dark:prose-invert">
                <div
                    class="bg-primary-50 dark:bg-primary-900 overflow-hidden shadow-sm sm:rounded-lg mb-4"
                >
                    <CreateQrCode />
                </div>
                <div
                    class="bg-white dark:bg-zinc-900 overflow-hidden shadow-sm sm:rounded-lg"
                >
                    <div
                        class="p-6 bg-secondary-50 dark:bg-secondary-900 border-b border-gray-200 dark:border-gray-800 flex flex-wrap justify-center sm:justify-around"
                    >
                        <div
                            v-for="link in user.links"
                            :key="link.id"
                            class="flex justify-center rounded-3xl p-4 m-4"
                        >
                            <QrCodeManager :link="link"></QrCodeManager>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
