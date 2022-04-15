<script setup lang="ts">
    import { useForm } from '@inertiajs/inertia-vue3';
    import { ref } from 'vue';
    import BreezeInput from './Input.vue';
    import { PencilIcon, TrashIcon, DownloadIcon } from '@heroicons/vue/solid';
    import VueQrcode from '@chenfengyuan/vue-qrcode';
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
    const imageUrl = ref('');
    const onReady = (canvas: HTMLCanvasElement) => {
        imageUrl.value = canvas.toDataURL();
    };

    const form = useForm(link);

    const submit = () => {
        form.put(
            route('link.update', {
                link: link,
            }),
            {
                onFinish: () => {
                    showEdit.value = false;
                    form.reset('name');
                    form.reset('url');
                },
            },
        );
    };

    const share = () => {
        const a = document.createElement('a');
        a.href = imageUrl.value;
        a.download = `${link.name}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    const destroy = () => {
        form.delete(
            route('link.destroy', {
                link: link,
            }),
        );
    };
</script>

<template>
    <div class="flex flex-col md:flex-row">
        <div class="flex flex-col items-center m-4">
            <h2 class="m-1">
                {{ link.name }}
            </h2>
            <VueQrcode
                @ready="onReady"
                v-if="link.url"
                :value="link.url"
                class="border-4 border-gray-600 rounded m-0 w-48"
            />
            <div class="flex space-x-2 m-2">
                <button
                    class="bg-secondary-500 text-zinc-100 rounded p-2"
                    @click="showEdit = !showEdit"
                >
                    <PencilIcon class="h-5 w-5" />
                </button>
                <button
                    class="bg-primary-500 text-zinc-100 rounded p-2"
                    @click="share"
                >
                    <DownloadIcon class="h-5 w-5" />
                </button>
                <button
                    class="bg-error-500 text-zinc-100 rounded p-2"
                    @click="destroy"
                >
                    <TrashIcon class="h-5 w-5" />
                </button>
            </div>
        </div>
        <div v-if="showEdit">
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
                    <BreezeButton type="submit" class="bg-secondary-700 hover:bg-secondary-500">Update</BreezeButton>
                </div>
            </form>
        </div>
    </div>
</template>
