import {faInstagram, faGithub, faLinkedin, faTiktok, faWhatsapp} from "@fortawesome/free-brands-svg-icons";

export const socials = [
    {
        icon: faInstagram,
        url: "https://www.instagram.com/n.t.y_rc/profilecard/?igsh=aHVmbTA3a2dmZnl",
    },
    {
        icon: faWhatsapp,
        url: "",
    },
    {
        icon: faTiktok,
        url: "https://v.douyin.com/CeiJy3jyk/ 1@5.com :1pm",
    },
    {
        icon: faGithub,
        url: "https://github.com/Richard920-hkpolyu",
    },
    {
        icon: faLinkedin,
        url: "https",
    },
];


export const fooditems = [
    {
        id: 1,
        key: 1,
        title: "Greek Salad",
        category: "main",
        type: "salad",
        monthly: 200,
        ingredients: [
            { name: "Vegetable", price: "$1.00" },
            { name: "Ground Beef", price: "$1.00" },
            { name: "Minced Pork", price: "$1.00" }
        ],
        description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        price: "$39.99",
        getImageSrc: () => require("../images/small/GreekSalad.jpg"),
    },
    {
        id: 2,
        key: 2,
        title: "Caesar Salad",
        category: "main",
        type: "salad",
        monthly: 210,
        ingredients: [
            { name: "Vegetable", price: "$1.00" },
            { name: "Ground Beef", price: "$1.00" },
            { name: "Minced Pork", price: "$1.00" }
        ],
        description:
        "The famous caesar salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        price: "$37.99",
        getImageSrc: () => require("../images/small/caesar.jpg"),
    },
    {
        id: 3,
        key: 3,
        title: "Brushetta",
        category: "main",
        type: "bread",
        monthly: 150,
        ingredients: [
            { name: "Vegetable", price: "$1.00" },
            { name: "Ground Beef", price: "$1.00" },
            { name: "Minced Pork", price: "$1.00" }
        ],
        description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
        price: "$37.99",
        getImageSrc: () => require("../images/small/Brushetta.jpg"),
    },
    {
        id: 4,
        key: 4,
        title: "Sandwich",
        category: "main",
        type: "bread",
        monthly: 80,
        ingredients: [
            { name: "Vegetable", price: "$1.00" },
            { name: "Ground Beef", price: "$1.00" },
            { name: "Minced Pork", price: "$1.00" }
        ],
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price: "$27.99",
        getImageSrc: () => require("../images/small/sandwich.jpg"),
    },
    {
        id: 5,
        key: 5,
        title: "Pasta",
        category: "main",
        type: "pasta",
        monthly: 200,
        ingredients: [
            { name: "Vegetable", price: "$1.00" },
            { name: "Ground Beef", price: "$1.00" },
            { name: "Minced Pork", price: "$1.00" }
        ],
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.",
        price: "$38.99",
        getImageSrc: () => require("../images/small/Pasta.jpg"),
    },
    {
        id: 6,
        key: 6,
        title: "Maggi",
        category: "main",
        type: "pasta",
        monthly: 90,
        ingredients: [
            { name: "Vegetable", price: "$1.00" },
            { name: "Ground Beef", price: "$1.00" },
            { name: "Minced Pork", price: "$1.00" }
        ],
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price: "$34.99",
        getImageSrc: () => require("../images/small/maggi.jpg"),
    },
    {
        id: 7,
        key: 7,
        title: "Pizza",
        category: "main",
        type: "pizza",
        monthly: 140,
        ingredients: [
            { name: "Vegetable", price: "$1.00" },
            { name: "Ground Beef", price: "$1.00" },
            { name: "Minced Pork", price: "$1.00" }
        ],
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price: "$129.99",
        getImageSrc: () => require("../images/small/pizza.jpg"),
    },
    {
        id: 8,
        key: 8,
        title: "Grilled Fish",
        category: "a la carte",
        type: "fish",
        monthly: 50,
        ingredients: [
            { name: "Vegetable", price: "$1.00" },
            { name: "Ground Beef", price: "$1.00" },
            { name: "Minced Pork", price: "$1.00" }
        ],
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
        price: "$70.00",
        getImageSrc: () => require("../images/small/GrilledFish.jpg"),
    },
    {
        id: 9,
        key: 9,
        title: "Veggie",
        category: "a la carte",
        type: "veggie",
        monthly: 10,
        ingredients: [
            { name: "Vegetable", price: "$1.00" },
            { name: "Ground Beef", price: "$1.00" },
            { name: "Minced Pork", price: "$1.00" }
        ],
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price: "$29.99",
        getImageSrc: () => require("../images/small/veggie.jpg"),
    },
    {
        id: 10,
        key: 10,
        title: "Lemon Dessert",
        category: "dessert",
        type: "cake",
        monthly: 40,
        ingredients: [
            { name: "Vegetable", price: "$1.00" },
            { name: "Ground Beef", price: "$1.00" },
            { name: "Minced Pork", price: "$1.00" }
        ],
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
        price: "$14.99",
        getImageSrc: () => require("../images/small/Lemon_Dessert.jpg"),
    },
    {
        id: 11,
        key: 11,
        title: "Choclate Shake",
        category: "drink",
        type: "shake",
        monthly: 10,
        ingredients: [
            { name: "Vegetable", price: "$1.00" },
            { name: "Ground Beef", price: "$1.00" },
            { name: "Minced Pork", price: "$1.00" }
        ],
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price: "$19.99",
        getImageSrc: () => require("../images/small/choclate shake.jpg"),
    },
    {
        id: 12,
        key: 12,
        title: "Strawberry Shake",
        category: "drink",
        type: "shake",
        monthly: 10,
        ingredients: [
            { name: "Vegetable", price: "$1.00" },
            { name: "Ground Beef", price: "$1.00" },
            { name: "Minced Pork", price: "$1.00" }
        ],
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price: "$19.99",
        getImageSrc: () => require("../images/small/strawberry shake.jpg"),
    },
    {
        id: 13,
        key: 13,
        title: "Coffee",
        category: "drink",
        type: "coffee",
        monthly: 10,
        ingredients: [
            { name: "Vegetable", price: "$1.00" },
            { name: "Ground Beef", price: "$1.00" },
            { name: "Minced Pork", price: "$1.00" }
        ],
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price: "$12.99",
        getImageSrc: () => require("../images/small/coffee.jpg"),
    },
    {
        id: 14,
        key: 14,
        title: "Snow Meiniang",
        category: "dessert",
        type: "cake",
        monthly: 80,
        ingredients: [
            { name: "Vegetable", price: "$1.00" },
            { name: "Ground Beef", price: "$1.00" },
            { name: "Minced Pork", price: "$1.00" }
        ],
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
        price: "$24.99",
        getImageSrc: () => require("../images/small/dessert2.jpg"),
    },
];