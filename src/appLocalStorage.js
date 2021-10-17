//localStorage.clear();
const appLocalStorage = {
    initAppData: {
        user: {
            id: null,
            isAuth: false,
            userName: null,
            exp: null
        },
        wishlist: [],
        cart: []
    },
    
    set: function() {
        localStorage.setItem('app', JSON.stringify(this.initAppData))
    },

    get: () => JSON.parse(localStorage.getItem('app')),

    addLocalStorageItem: function(itemName, itemValue) {
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
                ...appData[itemName].filter(item => item.id !== itemValue.id),
            ]
        }));
    },

    addWishlistItem: function(item) {
        this.addLocalStorageItem('wishlist', item)
    },

    removeWishlistItem: function(item) {
        this.removeLocalStorageItem('wishlist', item)
    },

    init: function() {
        const appData = this.get();

        if (!appData) {
            this.set()
        }

        return {
            addWishlistItem: item => this.addWishlistItem(item),
            removeWishlistItem: item => this.removeWishlistItem(item),
            storage: this.get()
        }
    }
}

export const getAppLocalStorage = () => appLocalStorage.init();