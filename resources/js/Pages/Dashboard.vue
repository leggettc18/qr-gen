<script setup lang="ts">
    import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
    import { PencilIcon, TrashIcon, ShareIcon } from '@heroicons/vue/solid';
    import { Page, PageProps } from '@inertiajs/inertia';
    import { Head, usePage } from '@inertiajs/inertia-vue3';
    import { computed } from 'vue';
    import VueQrious from 'vue-qrious';

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
                            class="flex flex-col items-center dark:bg-gray-700 rounded p-4 m-4 basis-52"
                        >
                            <h2 class="dark:text-gray-200 m-1">
                                {{ link.name }}
                            </h2>
                            <VueQrious
                                v-if="link.url"
                                :value="link.url"
                                class="border-4 border-gray-600 rounded m-0 flex-grow"
                            />
                            <div class="flex space-x-2 m-2">
                                <button
                                    class="bg-blue-500 text-gray-100 rounded p-2"
                                >
                                    <PencilIcon class="h-5 w-5" />
                                </button>
                                <button
                                    class="bg-emerald-500 text-gray-100 rounded p-2"
                                >
                                    <ShareIcon class="h-5 w-5" />
                                </button>
                                <button
                                    class="bg-red-500 text-gray-100 rounded p-2"
                                >
                                    <TrashIcon class="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
