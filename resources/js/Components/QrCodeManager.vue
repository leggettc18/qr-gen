<script setup lang="ts">
    import { useForm } from '@inertiajs/inertia-vue3';
    import { ref } from 'vue';
    import BreezeInput from './Input.vue';
    import { PencilIcon, TrashIcon, ShareIcon } from '@heroicons/vue/solid';
    import VueQrious from 'vue-qrious';
    import BreezeLabel from './Label.vue';
    import BreezeButton from './Button.vue';
    import route from 'ziggy-js';

    interface Props {
        link: {
            id: number;
            name: string;
            url: string;
        };
    }

    const { link } = defineProps<Props>();
    const showEdit = ref(false);

    const form = useForm(link);

    const submit = () => {
        form.put(route('link.update', {
            link: link
        }));
    };
</script>

<template>
    <div class="flex flex-col">
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
                @click="showEdit = !showEdit"
            >
                <PencilIcon class="h-5 w-5" />
            </button>
            <button class="bg-emerald-500 text-gray-100 rounded p-2">
                <ShareIcon class="h-5 w-5" />
            </button>
            <button class="bg-red-500 text-gray-100 rounded p-2">
                <TrashIcon class="h-5 w-5" />
            </button>
        </div>
    </div>
    <div class="p-2" v-if="showEdit">
        <form @submit.prevent="submit">
            <div>
                <BreezeLabel for="name" value="Name" />
                <BreezeInput
                    id="name"
                    type="text"
                    class="mt-1"
                    v-model="form.name"
                />
            </div>
            <div class="mt-4">
                <BreezeLabel for="url" value="URL" />
                <BreezeInput
                    id="url"
                    type="text"
                    class="mt-1"
                    v-model="form.url"
                />
            </div>
            <div class="mt-4">
                <BreezeButton type="submit">Update</BreezeButton>
            </div>
        </form>
    </div>
</template>
