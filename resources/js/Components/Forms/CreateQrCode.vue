<script setup lang="ts">
    import VueQrcode from '@chenfengyuan/vue-qrcode';
    import BreezeButton from '@/Components/Button.vue';
    import BreezeInput from '@/Components/DebouncedInput.vue';
    import BreezeLabel from '@/Components/Label.vue';
    import route from 'ziggy-js';
    import { useForm } from '@inertiajs/inertia-vue3';
    import { ref } from 'vue';
    import { computed } from '@vue/reactivity';

    const qrlink = ref('');

    const form = useForm({
        url: computed(() => `${qrlink.value === '' ? '' : 'https://'}` + qrlink.value),
        name: '',
    });

    const postLink = () => {
        form.post(route('link.store'), {
            onFinish: () => {
                form.reset('name');
                form.reset('url');
                form.name = '';
                qrlink.value = ''
            },
        });
    };
</script>

<template>
    <div
        class="flex flex-col h-full items-center sm:p-6 lg:p-8 rounded p-4 space-y-3"
    >
        <h2 class="dark:text-zinc-200">Generate a QR Code</h2>
        <div class="flex flex-wrap space-x-2">
            <div class="flex items-center">
                <span
                    class="bg-primary-100 dark:bg-primary-700 text-zinc-900 dark:text-zinc-200 rounded p-2"
                    >https://</span
                >
            </div>
            <BreezeInput type="text" v-model="qrlink" />
        </div>
        <div class="h-1/3">
            <VueQrcode
                v-if="form.url != ''"
                value="form.url"
                class="border-4 border-gray-600 rounded h-full m-0"
            />
        </div>
        <div v-if="form.url != ''">
            <form @submit.prevent="postLink">
                <BreezeLabel for="name" value="Name" />
                <BreezeInput
                    id="name"
                    type="text"
                    v-model="form.name"
                    required
                />
                <BreezeButton type="submit" class="bg-primary-700 hover:bg-primary-500 ml-2"
                    >Save</BreezeButton
                >
            </form>
        </div>
    </div>
</template>
