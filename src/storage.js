const storage = window.localStorage;

export const setItem = (key, value) => {
    try {
        storage.setItem(key,value)
    } catch(e){
        console.log(e.message);
    }
}
export const getItem = (key, defaultValue) => {
    try {
        const storedValue = storage.getItem(key);

        if(storedValue){
            return JSON.parse(storedValue);
        }
        return defaultValue
    } catch(e){
        console.log(e.message)
        return defaultValue
    }
}