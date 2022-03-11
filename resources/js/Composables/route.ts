import route, { Config, RouteParamsWithQueryOverload, Router } from 'ziggy-js';
import { Ref, ref } from 'vue';

export const useRoute: () => Ref<(name: string,
    params?: RouteParamsWithQueryOverload,
    absolute?: boolean,
    config?: Config,) => string> = () => {
    return ref<(name: string,
    params?: RouteParamsWithQueryOverload,
    absolute?: boolean,
    config?: Config,) => string>(route);
}