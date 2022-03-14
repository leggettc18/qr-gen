<script setup lang="ts">
import BreezeGuestLayout from '@/Layouts/Guest.vue';
import { Head } from '@inertiajs/inertia-vue3';
import RegisterForm from '@/Components/Forms/Register.vue';
</script>

<template>
    <BreezeGuestLayout>
        <Head title="Register" />

        <RegisterForm />
    </BreezeGuestLayout>
</template>
