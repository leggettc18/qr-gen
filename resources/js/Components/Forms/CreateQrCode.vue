<script setup lang="ts">
    import VueQrcode from '@chenfengyuan/vue-qrcode';
    import BreezeButton from '@/Components/Button.vue';
    import BreezeInput from '@/Components/Input.vue';
    import BreezeLabel from '@/Components/Label.vue';
    import route from 'ziggy-js';
    import { useForm } from '@inertiajs/inertia-vue3';
    import { ref } from 'vue';

    const form = useForm({
        url: '',
        name: '',
    });

    const updateQrLink = () => {
        form.url = 'https://' + qrlinknew.value;
    };

    var qrlinknew = ref('');

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
</script>

<template>
    <div
        class="flex flex-col dark:bg-gray-800 h-full items-center sm:p-6 lg:p-8 rounded m-4 p-4 space-y-3"
    >
        <h2 class="dark:text-gray-200">Generate a QR Code</h2>
        <div class="flex flex-wrap space-x-2">
            <div class="flex items-center">
                <span
                    class="bg-indigo-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded p-2"
                    >https://</span
                >
            </div>
            <BreezeInput type="text" v-model="qrlinknew" />
            <BreezeButton
                type="button"
                @click="updateQrLink()"
                class="mt-2 md:mt-0 bg-indigo-900"
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
        <div v-if="form.url != ''" class="flex space-x-2 w-fit justify-center">
            <form @submit.prevent="postLink">
                <BreezeLabel for="name" value="Name" />
                <BreezeInput
                    id="name"
                    type="text"
                    v-model="form.name"
                    required
                />
                <BreezeButton
                    type="submit"
                    class="bg-indigo-900"
                    >Save</BreezeButton
                >
            </form>
        </div>
    </div>
</template>
