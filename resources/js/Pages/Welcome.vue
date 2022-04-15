<script setup lang="ts">
    import { Head, Link, usePage } from '@inertiajs/inertia-vue3';
    import BreezeButton from '../Components/Button.vue';
    import BreezeInput from '../Components/DebouncedInput.vue';
    import RegisterForm from '@/Components/Forms/Register.vue';
    import { DownloadIcon } from '@heroicons/vue/solid';
    import { computed, ref } from 'vue';
    import VueQrcode from '@chenfengyuan/vue-qrcode';
    import { Page, PageProps } from '@inertiajs/inertia';
    import route from 'ziggy-js';

    interface IPageProps extends Page<PageProps> {
        auth: {
            user: {
                links: Function;
            };
        };
    }

    const user = computed(() => usePage<IPageProps>().props.value.auth.user);
    var qrlink = ref('');

    const form = ref({
        url: computed(() => `${qrlink.value === '' ? '' : 'https://'}` + qrlink.value),
    });

    const imageUrl = ref('');
    const onReady = (canvas: HTMLCanvasElement) => {
        imageUrl.value = canvas.toDataURL();
    };

    const share = () => {
        const a = document.createElement('a');
        a.href = imageUrl.value;
        a.download = `qrcode.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    defineProps<{
        canLogin: boolean;
        canRegister: boolean;
        laravelVersion: string;
        phpVersion: string;
        canResetPassword?: boolean;
        status?: string;
    }>();
</script>

<template>
    <Head title="Welcome" />

    <div
        class="flex items-top justify-center min-h-screen sm:items-center sm:pt-0 min-w-full"
    >
        <div
            v-if="canLogin"
            class="hidden fixed top-0 right-0 px-6 py-4 sm:block"
        >
            <Link
                v-if="user"
                :href="route('dashboard')"
                method="get"
                class="text-sm text-zinc-700 dark:text-zinc-500 underline"
                as="button"
                >Dashboard</Link
            >

            <Link
                v-if="user"
                :href="route('logout')"
                method="post"
                class="ml-4 text-sm text-zinc-700 dark:text-zinc-500 underline"
                as="button"
                >Log Out</Link
            >

            <template v-else>
                <Link
                    :href="route('login')"
                    class="text-sm text-zinc-700 dark:text-zinc-500 underline"
                    as="button"
                    >Log in</Link
                >

                <Link
                    v-if="canRegister"
                    :href="route('register')"
                    class="ml-4 text-sm text-zinc-700 dark:text-zinc-500 underline"
                    as="button"
                    >Register</Link
                >
            </template>
        </div>

        <div class="prose prose-zinc dark:prose-invert flex flex-col items-center min-w-full">
            <h1>QR Gen</h1>
            <div
                v-if="user"
                class="dark:bg-primary-800 mt-8 p-4 rounded"
            >
                Manage your saved links from your
                <Link
                    :href="route('dashboard')"
                    method="get"
                    as="button"
                    class="dark:bg-zinc-900 bg-zinc-300 rounded p-2 hover:bg-zinc-900 hover:dark:bg-zinc-800 hover:text-zinc-200 transition ease"
                    >Dashboard</Link
                >
            </div>
            <div class="flex flex-col lg:flex-row justify-around min-w-full">
                <div class="flex flex-col lg:flex-row">
                    <div
                        class="flex flex-col bg-primary-50 dark:bg-primary-900 h-full items-center sm:p-6 lg:p-8 rounded m-4 p-4 space-y-3"
                    >
                        <h2>
                            {{
                                user
                                    ? 'Generate a QR Code'
                                    : 'Just Generate a QR Code...'
                            }}
                        </h2>
                        <div class="flex justify-end flex-wrap space-x-2">
                            <div class="flex items-center">
                                <span
                                    class="bg-primary-100 dark:bg-primary-700 text-zinc-900 dark:text-zinc-200 rounded p-2"
                                    >https://</span
                                >
                            </div>
                            <BreezeInput type="text" v-model="qrlink" />
                        </div>
                        <div
                            v-if="form.url != ''"
                            class="h-1/3 flex space-x-2 items-center mt-4"
                        >
                            <VueQrcode
                                @ready="onReady"
                                v-if="form.url != ''"
                                :value="form.url"
                                class="border-4 border-gray-600 rounded h-full m-0"
                            />
                            <button
                                class="bg-emerald-500 text-zinc-100 rounded p-2"
                                @click="share"
                            >
                                <DownloadIcon class="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                    <div
                        class="h-full sm:p-6 lg:p-8 bg-secondary-50 dark:bg-secondary-800 rounded m-4 p-4"
                        v-if="!user"
                    >
                        <div class="flex flex-col space-y-5 items-center">
                            <h2>
                                ...or Register to save your QR Code for later
                            </h2>
                            <RegisterForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
