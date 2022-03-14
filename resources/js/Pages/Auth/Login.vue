<script lang="ts" setup>
import BreezeGuestLayout from '@/Layouts/Guest.vue';
import { Head } from '@inertiajs/inertia-vue3';
import LoginForm from '@/Components/Forms/Login.vue';
</script>

<template>
    <BreezeGuestLayout>
        <Head title="Log in" />

        <LoginForm />
    </BreezeGuestLayout>
</template>
