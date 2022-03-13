<script setup lang="ts">
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-vue3";
import BreezeButton from "../Components/Button.vue";
import BreezeInput from "../Components/Input.vue";
import { computed, ref } from "vue-demi";
import VueQrious from "vue-qrious";
import { Page, PageProps } from "@inertiajs/inertia";
import BreezeCheckbox from '@/Components/Checkbox.vue';
import BreezeLabel from '@/Components/Label.vue';
import BreezeValidationErrors from '@/Components/ValidationErrors.vue';
import route from 'ziggy-js';

const form = useForm({
    email: '',
    password: '',
    remember: false
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};

interface IPageProps extends Page<PageProps> {
    auth: {
        user: Function
    }
}

const user = computed(() => usePage<IPageProps>().props.value.auth.user);
//const route = useRoute();

var qrlinkcurrent = ref("");
var qrlinknew = ref("");

const updateQrLink = () => {
    qrlinkcurrent.value = qrlinknew.value;
};

const props = defineProps<{
    canLogin: boolean
    canRegister: boolean
    laravelVersion: string
    phpVersion: string
    canResetPassword: boolean
    status: string
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
                :href="route('dashboard')"
                class="text-sm text-gray-700 underline"
            >Dashboard</Link>

            <template v-else>
                <Link :href="route('login')" class="text-sm text-gray-700 underline">Log in</Link>

                <Link
                    v-if="canRegister"
                    :href="route('register')"
                    class="ml-4 text-sm text-gray-700 underline"
                >Register</Link>
            </template>
        </div>

        <div class="prose flex flex-col items-center min-w-full">
            <h1 class="text-gray-200">QR Gen</h1>
            <div class="flex justify-around min-w-full">
                <div class="sm:p-6 lg:p-8 bg-gray-800 rounded">
                    <div class="flex flex-col space-y-3 h-full items-center justify-around">
                        <h2
                            class="dark:text-gray-200"
                        >{{ user ? "Generate a QR Code" : "Just Generate a QR Code..." }}</h2>
                        <div class="flex space-x-2">
                            <BreezeInput type="text" v-model="qrlinknew" />
                            <BreezeButton type="button" @click="updateQrLink()">Update</BreezeButton>
                        </div>
                        <VueQrious
                            v-show="qrlinkcurrent != ''"
                            :value="qrlinkcurrent"
                            class="border-4 border-gray-600 rounded"
                        />
                    </div>
                </div>
                <div class="sm:p-6 lg:p-8 bg-gray-800 rounded" v-if="!user">
                    <div class="flex flex-col space-y-5 items-center">
                        <h2 class="dark:text-gray-200">...Or log in to save your QR Code for later</h2>
                        <BreezeValidationErrors class="mb-4" />
                        <form @submit.prevent="submit">
                            <div>
                                <BreezeLabel for="email" value="Email" />
                                <BreezeInput
                                    id="email"
                                    type="email"
                                    class="mt-1 block w-full"
                                    v-model="form.email"
                                    required
                                    autofocus
                                    autocomplete="username"
                                />
                            </div>

                            <div class="mt-4">
                                <BreezeLabel for="password" value="Password" />
                                <BreezeInput
                                    id="password"
                                    type="password"
                                    class="mt-1 block w-full"
                                    v-model="form.password"
                                    required
                                    autocomplete="current-password"
                                />
                            </div>

                            <div class="block mt-4">
                                <label class="flex items-center">
                                    <BreezeCheckbox
                                        name="remember"
                                        v-model:checked="form.remember"
                                    />
                                    <span
                                        class="ml-2 text-sm text-gray-600 dark:text-gray-200"
                                    >Remember me</span>
                                </label>
                            </div>

                            <div class="flex items-center justify-end mt-4">
                                <Link
                                    v-if="canResetPassword"
                                    :href="route('password.request')"
                                    class="underline text-sm text-gray-600 hover:text-gray-900"
                                >Forgot your password?</Link>

                                <BreezeButton
                                    type="submit"
                                    class="ml-4"
                                    :class="{ 'opacity-25': form.processing }"
                                    :disabled="form.processing"
                                >Log in</BreezeButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>