<script setup lang="ts">
    import BreezeButton from '@/Components/Button.vue';
    import BreezeInput from '@/Components/Input.vue';
    import BreezeLabel from '@/Components/Label.vue';
    import BreezeValidationErrors from '@/Components/ValidationErrors.vue';
    import { Link, useForm } from '@inertiajs/inertia-vue3';
    import route from 'ziggy-js';

    const form = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        terms: false,
    });

    const submit = () => {
        form.post(route('register'), {
            onFinish: () => form.reset('password', 'password_confirmation'),
        });
    };
</script>

<template>
    <BreezeValidationErrors class="mb-4" />

    <form @submit.prevent="submit" class="w-full">
        <div>
            <BreezeLabel for="name" value="Name" />
            <BreezeInput
                id="name"
                type="text"
                class="mt-1 block w-full"
                v-model="form.name"
                required
                autofocus
                autocomplete="name"
            />
        </div>

        <div class="mt-4">
            <BreezeLabel for="email" value="Email" />
            <BreezeInput
                id="email"
                type="email"
                class="mt-1 block w-full"
                v-model="form.email"
                required
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
                autocomplete="new-password"
            />
        </div>

        <div class="mt-4">
            <BreezeLabel for="password_confirmation" value="Confirm Password" />
            <BreezeInput
                id="password_confirmation"
                type="password"
                class="mt-1 block w-full"
                v-model="form.password_confirmation"
                required
                autocomplete="new-password"
            />
        </div>

        <div class="flex items-center justify-end mt-4">
            <Link
                :href="route('login')"
                class="underline text-md text-success-500 hover:text-success-700 dark:text-success-200 dark:hover:text-success-400"
                >Already registered?</Link
            >

            <BreezeButton
                class="ml-4 bg-secondary-900 hover:bg-secondary-700"
                :class="{ 'opacity-25': form.processing }"
                :disabled="form.processing"
                >Register</BreezeButton
            >
        </div>
    </form>
</template>
