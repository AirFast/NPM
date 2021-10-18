// localStorage.clear();
const appLocalStorage = {
    initAppData: {
        user: {
            id: null,
            isAuth: false,
            exp: null
        },
        wishlist: [],
        cart: []
    },

    set: function () {
        localStorage.setItem('app', JSON.stringify(this.initAppData))
    },

    get: () => JSON.parse(localStorage.getItem('app')),

    userSignIn: function (userId) {
        const appData = this.get();
        const millisecondsPerMonth = 86400 * 1000 * 30;
        const expDate = new Date(Date.now() + millisecondsPerMonth);

        localStorage.setItem('app', JSON.stringify({
            ...appData,
            user: {
                id: userId,
                isAuth: true,
                exp: expDate.getTime()
            }
        }));
    },

    userSignOut: function () {
        const appData = this.get();

        localStorage.setItem('app', JSON.stringify({
            ...appData,
            user: {
                id: null,
                isAuth: false,
                exp: null
            }
        }));
    },

    addLocalStorageItem: function (itemName, itemValue) {
        const appData = this.get();

        localStorage.setItem('app', JSON.stringify({
            ...appData,
            [itemName]: [
                ...appData[itemName],
                itemValue
            ]
        }));
    },

    removeLocalStorageItem: function (itemName, itemValue) {
        const appData = this.get();

        localStorage.setItem('app', JSON.stringify({
            ...appData,
            [itemName]: [
                ...appData[itemName].filter(item => item.id !== itemValue.id),
            ]
        }));
    },

    addWishlistItem: function (item) {
        this.addLocalStorageItem('wishlist', item)
    },

    removeWishlistItem: function (item) {
        this.removeLocalStorageItem('wishlist', item)
    },

    init: function () {
        const appData = this.get();

        if (!appData) {
            this.set()
        }

        if (!!appData.user.exp && appData.user.exp < Date.now()) {
            this.userSignOut();
        }

        return {
            userSignIn: userId => this.userSignIn(userId),
            userSignOut: () => this.userSignOut(),
            addWishlistItem: item => this.addWishlistItem(item),
            removeWishlistItem: item => this.removeWishlistItem(item),
            storage: appData
        }
    }
}

export const getAppLocalStorage = () => appLocalStorage.init();