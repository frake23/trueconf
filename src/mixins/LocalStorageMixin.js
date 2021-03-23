export default {
    name: "LocalStorageMixin",
    data: () => {
        return {
            storageState: null
        }
    },
    methods: {
        saveOnReload: (state) => {
            window.onunload = () => localStorage.setItem('state', JSON.stringify(state()))
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