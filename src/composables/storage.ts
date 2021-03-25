export const useStorage = () => {

    const get = (key: string): string | null => {
        return window.localStorage.getItem(key);
    };

    const set = (key: string, value: string) => {
        window.localStorage.setItem(key, value);
    };

    const remove = (key: string): void => {
        window.localStorage.removeItem(key);
    };

    return {
        get,
        set,
        remove
    };
};