interface FunctionWithArguments {
    (...args: any): any;
}

interface DebouncedFunction<F extends FunctionWithArguments> { (...args: Parameters<F>): Promise<ReturnType<F>>; }

interface DebounceReturn<F extends FunctionWithArguments> extends Array<DebouncedFunction<F> | (() => void)> {
    0: (...args: Parameters<F>) => Promise<ReturnType<F>>;
    1: () => void;
}

export const debounce: (<F extends FunctionWithArguments>(callback: F, timeout: number) => DebounceReturn<F>) = <F extends FunctionWithArguments>(callback: F, timeout: number) => {
    let timer: ReturnType<typeof setTimeout>;

    const debouncedFunc: DebouncedFunction<F> = (...args) =>
        new Promise((resolve) => {
            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(() => {
                resolve(callback(...args as unknown[]));
            }, timeout);
        });
    const teardown = () => clearTimeout(timer);

    return [debouncedFunc, teardown];
}