export interface MySignal<T> {
    (): T;
    set: (value: T) => void;
    update(updater: (value: T) => T): void;
}

export function mySignal<T>(value: T): MySignal<T> {
    const func = () => value;

    func.set = (newValue: T) => {
        value = newValue;
    };

    func.update = (updater: (value: T) => T) => {
        value = updater(value);
    };

    return func;

}