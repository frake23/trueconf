export default {
    name: "LocalStorageMixin",
    data: () => {
        return {
            storageState: null
        }
    },
    methods: {
        saveOnReload: (getState) => {
            window.onunload = () => localStorage.setItem('state', JSON.stringify(getState()))
        },
        clearStorageState() {
            localStorage.setItem('state', null);
            this.storageState = null;
        }
    },
    created() {
        this.storageState = JSON.parse(localStorage.getItem('state'))
    }
}