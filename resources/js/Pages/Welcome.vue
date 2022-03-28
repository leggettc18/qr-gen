<script setup lang="ts">
    import { Head, Link, useForm, usePage } from '@inertiajs/inertia-vue3';
    import BreezeButton from '../Components/Button.vue';
    import BreezeInput from '../Components/Input.vue';
    import RegisterForm from '@/Components/Forms/Register.vue';
    import { computed, ref } from 'vue-demi';
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
    var qrlinknew = ref('');

    const updateQrLink = () => {
        form.url = 'https://' + qrlinknew.value;
    };

    const form = useForm({
        url: '',
        name: '',
    });

    const postLink = () => {
        form.post(route('link.store'), {
            onFinish: () => {
                form.reset('url');
                form.reset('name');
                form.url = '';
                form.name = '';
                qrlinknew.value = '';
            },
        });
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
        class="flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0 min-w-full"
    >
        <div
            v-if="canLogin"
            class="hidden fixed top-0 right-0 px-6 py-4 sm:block"
        >
            <Link
                v-if="user"
                :href="route('dashboard')"
                method="get"
                class="text-sm text-gray-700 dark:text-gray-500 underline"
                as="button"
                >Dashboard</Link
            >

            <Link
                v-if="user"
                :href="route('logout')"
                method="post"
                class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                as="button"
                >Log Out</Link
            >

            <template v-else>
                <Link
                    :href="route('login')"
                    class="text-sm text-gray-700 dark:text-gray-500 underline"
                    as="button"
                    >Log in</Link
                >

                <Link
                    v-if="canRegister"
                    :href="route('register')"
                    class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                    as="button"
                    >Register</Link
                >
            </template>
        </div>

        <div class="prose flex flex-col items-center min-w-full">
            <h1 class="dark:text-gray-200">QR Gen</h1>
            <div
                v-if="user"
                class="dark:bg-gray-800 dark:text-gray-200 mt-8 p-4 rounded"
            >
                Manage your saved links from your
                <Link
                    :href="route('dashboard')"
                    method="get"
                    as="button"
                    class="dark:bg-gray-900 bg-gray-300 rounded p-2 hover:bg-gray-900 hover:dark:bg-gray-800 hover:text-gray-200 transition ease"
                    >Dashboard</Link
                >
            </div>
            <div class="flex flex-col lg:flex-row justify-around min-w-full">
                <div class="flex flex-col lg:flex-row">
                    <div
                        class="flex flex-col bg-gray-200 dark:bg-gray-800 h-full items-center sm:p-6 lg:p-8 rounded m-4 p-4 space-y-3"
                    >
                        <h2 class="dark:text-gray-200">
                            {{
                                user
                                    ? 'Generate a QR Code'
                                    : 'Just Generate a QR Code...'
                            }}
                        </h2>
                        <div class="flex justify-end flex-wrap space-x-2">
                            <div class="flex items-center">
                                <span
                                    class="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded p-2"
                                    >https://</span
                                >
                            </div>
                            <BreezeInput type="text" v-model="qrlinknew" />
                            <BreezeButton
                                type="button"
                                @click="updateQrLink()"
                                class="mt-2 md:mt-0"
                                >Update</BreezeButton
                            >
                        </div>
                        <div class="h-1/3">
                            <VueQrcode
                                v-if="form.url != ''"
                                :value="form.url"
                                class="border-4 border-gray-600 rounded h-full m-0"
                            />
                        </div>
                        <div
                            v-if="user"
                            class="flex space-x-2 w-full justify-between"
                        >
                            <BreezeInput type="text" v-model="form.name" />
                            <BreezeButton type="button" @click="postLink"
                                >Save</BreezeButton
                            >
                        </div>
                    </div>
                    <div
                        class="h-full sm:p-6 lg:p-8 bg-gray-200 dark:bg-gray-800 rounded m-4 p-4"
                        v-if="!user"
                    >
                        <div class="flex flex-col space-y-5 items-center">
                            <h2 class="dark:text-gray-200">
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
