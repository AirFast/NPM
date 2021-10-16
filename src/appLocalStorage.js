//localStorage.clear();
const appLocalStorage = {
    initAppData: {
        user: {
            isAuth: false,
            userName: null
        },
        wishlist: [],
        cart: []
    },
    set: function() {
        localStorage.setItem('app', JSON.stringify(this.initAppData))
    },
    get: () => JSON.parse(localStorage.getItem('app')),

    setLocalStorageItem: function(itemName, itemValue) {
        const appData = this.get();

        localStorage.setItem('app', JSON.stringify({
            ...appData,
            [itemName]: [
                ...appData[itemName],
                itemValue
            ]
        }));
    },

    removeLocalStorageItem: function(itemName, itemValue) {
        const appData = this.get();

        localStorage.setItem('app', JSON.stringify({
            ...appData,
            [itemName]: [
                ...appData[itemName].filter(item => item !== itemValue),
            ]
        }));
    },

    setWishlistItem: function(id) {
        this.setLocalStorageItem('wishlist', id)
    },

    removeWishlistItem: function(id) {
        this.removeLocalStorageItem('wishlist', id)
    },

    init: function() {
        const appData = this.get();

        if (!appData) {
            this.set()
        }

        return {
            setWishlistItem: id => this.setWishlistItem(id),
            removeWishlistItem: id => this.removeWishlistItem(id),
            localStorage: this.get()
        }
    }
}

export const getAppLocalStorage = () => appLocalStorage.init();