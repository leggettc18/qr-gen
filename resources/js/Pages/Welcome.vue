<script setup lang="ts">
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-vue3";
import BreezeButton from "../Components/Button.vue";
import BreezeInput from "../Components/Input.vue";
import RegisterForm from "@/Components/Forms/Register.vue";
import { computed, ref } from "vue-demi";
import VueQrious from "vue-qrious";
import { Page, PageProps } from "@inertiajs/inertia";
import route from 'ziggy-js';

interface IPageProps extends Page<PageProps> {
    auth: {
        user: Function
        links: Function
    }
}

const user = computed(() => usePage<IPageProps>().props.value.auth.user);
const links = usePage<IPageProps>().props.value.auth.links;
//const route = useRoute();

var qrlinknew = ref("");

const updateQrLink = () => {
    form.url = "https://" + qrlinknew.value;
};

const form = useForm<{
    url: null | string,
    name: null | string
}>({
    url: null,
    name: null
})

const postLink = () => {
    form.post(route('link.store'));
}

const props = defineProps<{
    canLogin: boolean
    canRegister: boolean
    laravelVersion: string
    phpVersion: string
    canResetPassword?: boolean
    status?: string
}>();

</script>

<template>
    <Head title="Welcome" />

    <div
        class="flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0 min-w-full"
    >
        <div v-if="canLogin" class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
            <Link
                v-if="user"
                :href="route('logout')"
                method="post"
                class="text-sm text-gray-700 dark:text-gray-500 underline"
                as="button"
            >Log Out</Link>

            <template v-else>
                <Link
                    :href="route('login')"
                    class="text-sm text-gray-700 dark:text-gray-500 underline"
                    as="button"
                >Log in</Link>

                <Link
                    v-if="canRegister"
                    :href="route('register')"
                    class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                    as="button"
                >Register</Link>
            </template>
        </div>

        <div class="prose flex flex-col items-center min-w-full">
            <h1 class="dark:text-gray-200">QR Gen</h1>
            <div class="flex flex-col lg:flex-row justify-around min-w-full">
                <div class="flex flex-col lg:flex-row">
                    <div
                        class="flex flex-col bg-gray-200 dark:bg-gray-800 h-full items-center sm:p-6 lg:p-8 rounded m-4 p-4 space-y-3"
                    >
                        <h2
                            class="dark:text-gray-200"
                        >{{ user ? "Generate a QR Code" : "Just Generate a QR Code..." }}</h2>
                        <div class="flex space-x-2">
                            <span
                                class="bg-gray-400 dark:bg-gray-700 text-gray-900 dark:text-gray-200 p-2 rounded"
                            >https://</span>
                            <BreezeInput type="text" v-model="qrlinknew" />
                            <BreezeButton type="button" @click="updateQrLink()">Update</BreezeButton>
                        </div>
                        <div class="h-1/3">
                            <VueQrious
                                v-if="form.url"
                                :value="form.url"
                                class="border-4 border-gray-600 rounded h-full m-0"
                            />
                        </div>
                        <div v-if="user" class="flex space-x-2 w-full justify-between">
                            <BreezeInput type="text" v-model="form.name" />
                            <BreezeButton type="button" @click="postLink">Save</BreezeButton>
                        </div>
                    </div>
                    <div
                        class="h-full sm:p-6 lg:p-8 bg-gray-200 dark:bg-gray-800 rounded m-4 p-4"
                        v-if="!user"
                    >
                        <div class="flex flex-col space-y-5 items-center">
                            <h2
                                class="dark:text-gray-200"
                            >...or Register to save your QR Code for later</h2>
                            <RegisterForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>