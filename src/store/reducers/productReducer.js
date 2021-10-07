const initState = [
    {
        "createdAt": 1632765372,
        "title": "Nike Air Huarache",
        "image": "nike-air-huarache.png",
        "price": 138,
        "id": "1"
    },
    {
        "createdAt": 1632765312,
        "title": "Nike Air Max",
        "image": "nike-air-max.png",
        "price": 117,
        "id": "2"
    },
    {
        "createdAt": 1632765252,
        "title": "Nike Air Force One",
        "image": "nike-air-force-one.png",
        "price": 120,
        "id": "3"
    },
    {
        "createdAt": 1632765192,
        "title": "Nike Air Jordan",
        "image": "nike-air-jordan.png",
        "price": 151,
        "id": "4"
    },
    {
        "createdAt": 1632765132,
        "title": "Nike Flywire Air Max",
        "image": "nike-flywire-air-max.png",
        "price": 124,
        "id": "5"
    },
    {
        "createdAt": 1632765072,
        "title": "Nike Flywire ACG Boot",
        "image": "nike-flywire-acg-boot.png",
        "price": 156,
        "id": "6"
    },
    {
        "createdAt": 1632765012,
        "title": "Nike Air Max Running",
        "image": "nike-air-max-running.png",
        "price": 98,
        "id": "7"
    },
    {
        "createdAt": 1632764952,
        "title": "Nike Training Air Max",
        "image": "nike-training-air-max.png",
        "price": 105,
        "id": "8"
    }
];

const productReduser = (state = initState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default productReduser;