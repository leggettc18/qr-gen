// Provides an interface for a generic function type that can have any
// arguments and any return value.
interface FunctionWithArguments {
    (...args: any): any;
}

// Provides an interface to a Generic DeboucedFunction Type, which takes
// any function and wraps its return type in a Promise.
interface DebouncedFunction<F extends FunctionWithArguments> { (...args: Parameters<F>): Promise<ReturnType<F>>; }

// Provides an interface for a generic DebouceReturn type, which returns
// an array containing the DebouncedFunction (derived from the 
// FunctionWithArguments that was supplied), and the teardown function
// (which has no arguments and does not return anything).
interface DebounceReturn<F extends FunctionWithArguments> extends Array<DebouncedFunction<F> | (() => void)> {
    0: (...args: Parameters<F>) => Promise<ReturnType<F>>;
    1: () => void;
}

// Takes a callback function and returns another function which runs the same
// function after a delay (specified by timeout) and returns the value wrapped in a Promise.
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