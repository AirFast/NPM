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

    set() {
        localStorage.setItem('app', JSON.stringify(this.initAppData))
    },

    get() {
        return JSON.parse(localStorage.getItem('app'))
    },

    userSignIn(userId) {
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

    userSignOut() {
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

    addLocalStorageItem(itemName, itemValue) {
        const appData = this.get();

        localStorage.setItem('app', JSON.stringify({
            ...appData,
            [itemName]: [
                ...appData[itemName],
                itemValue
            ]
        }));
    },

    removeLocalStorageItem(itemName, itemValue) {
        const appData = this.get();

        localStorage.setItem('app', JSON.stringify({
            ...appData,
            [itemName]: [
                ...appData[itemName].filter(item => item.productId !== itemValue.productId),
            ]
        }));
    },

    addWishlistItem(item) {
        this.addLocalStorageItem('wishlist', item)
    },

    removeWishlistItem(item) {
        this.removeLocalStorageItem('wishlist', item)
    },

    addCartItem(item) {
        this.addLocalStorageItem('cart', item)
    },

    removeCartItem(item) {
        this.removeLocalStorageItem('cart', item)
    },

    init() {
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
            addCartItem: item => this.addCartItem(item),
            removeCartItem: item => this.removeCartItem(item),
            storage: appData
        }
    }
}

export const getAppLocalStorage = () => appLocalStorage.init();