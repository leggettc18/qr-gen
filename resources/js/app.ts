import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import route from 'ziggy-js';

import '../css/app.css';

const appName =
    window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => {
        const pages = import.meta.glob('./Pages/**/*.vue');

        return (await pages[`./Pages/${name}.vue`]()).default;
    },
    setup({ el, app, props, plugin }) {
        createApp({ render: () => h(app, props) })
            .use(plugin)
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
