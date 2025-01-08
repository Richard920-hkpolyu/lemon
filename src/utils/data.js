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
            { name: "Olives", price: "$3.00" },
            { name: "Feta Cheese", price: "$5.00" },
            { name: "Red Onion", price: "$1.00" }
        ],
        description: "A refreshing Greek salad featuring crisp lettuce, juicy tomatoes, and tangy feta cheese, lightly dressed to enhance its fresh flavors.",
        price: "$49.99",
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
            { name: "Anchovies", price: "$4.00" },
            { name: "Parmesan Cheese", price: "$5.00" },
            { name: "Croutons", price: "$1.00" }
        ],
        description: "A classic Caesar salad with crisp romaine lettuce, creamy dressing, and a sprinkle of parmesan, perfect for a light meal.",
        price: "$47.99",
        getImageSrc: () => require("../images/small/caesar.jpg"),
    },
    {
        id: 3,
        key: 3,
        title: "Bruschetta",
        category: "main",
        type: "bread",
        monthly: 150,
        ingredients: [
            { name: "Garlic", price: "$1.50" },
            { name: "Basil", price: "$2.00" },
            { name: "Mozzarella", price: "$3.50" }
        ],
        description: "Crispy toasted bread topped with fresh tomatoes, garlic, and a hint of basil, offering a delightful bite that captures Italian flavors.",
        price: "$47.99",
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
            { name: "Mayonnaise", price: "$1.50" },
            { name: "Pickles", price: "$2.00" },
            { name: "Mustard", price: "$1.00" }
        ],
        description: "A hearty sandwich layered with fresh ingredients, perfect for a quick lunch or snack, offering a satisfying crunch with every bite.",
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
            { name: "Mushrooms", price: "$4.00" },
            { name: "Olive Oil", price: "$2.00" },
            { name: "Garlic", price: "$1.50" }
        ],
        description: "Delicious pasta served with a rich and flavorful sauce, garnished to perfection for a comforting and hearty meal.",
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
            { name: "Artificial Flavoring", price: "$1.00" },
            { name: "Preservatives", price: "$1.00" },
            { name: "MSG", price: "$1.00" }
        ],
        description: "Instant noodles that are quick to prepare, offering a burst of flavor for those craving a simple and satisfying meal.",
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
            { name: "Pineapple", price: "$2.00" },
            { name: "Olives", price: "$3.00" },
            { name: "Anchovies", price: "$4.00" }
        ],
        description: "A mouth-watering pizza topped with a rich tomato sauce, melted cheese, and your choice of toppings, baked to perfection.",
        price: "$129.99",
        getImageSrc: () => require("../images/small/pizza.jpg"),
    },
    {
        id: 8,
        key: 8,
        title: "Row Egg Rice",
        category: "main",
        type: "rice",
        monthly: 120,
        ingredients: [
            { name: "Raw Egg Protein", price: "$5.00" },
            { name: "Avocado", price: "$6.00" },
            { name: "Raw Salmon", price: "$8.00" }
        ],
        description: "A unique dish featuring raw egg protein served over rice, complemented with creamy avocado and fresh salmon for a rich flavor.",
        price: "$54.99",
        getImageSrc: () => require("../images/small/rawEggRice.png"),
    },
    {
        id: 9,
        key: 9,
        title: "Omelette Rice",
        category: "main",
        type: "rice",
        monthly: 120,
        ingredients: [
            { name: "Eggs", price: "$3.00" },
            { name: "Rice", price: "$2.00" },
            { name: "Ketchup", price: "$1.00" }
        ],
        description: "A delightful combination of fluffy omelette and seasoned rice, topped with ketchup for a comforting and satisfying meal.",
        price: "$128.99",
        getImageSrc: () => require("../images/small/omeletteRice.png"),
    },
    {
        id: 10,
        key: 10,
        title: "Grilled Fish",
        category: "a la carte",
        type: "fish",
        monthly: 50,
        ingredients: [
            { name: "Fish Skin", price: "$5.00" },
            { name: "Lemon Zest", price: "$2.00" },
            { name: "Herbs", price: "$3.00" }
        ],
        description: "Succulent grilled fish seasoned with spices and herbs, served with a side that complements its natural flavors.",
        price: "$70.00",
        getImageSrc: () => require("../images/small/GrilledFish.jpg"),
    },
    {
        id: 11,
        key: 11,
        title: "Veggie",
        category: "a la carte",
        type: "veggie",
        monthly: 10,
        ingredients: [
            { name: "Tofu", price: "$3.00" },
            { name: "Bell Peppers", price: "$2.50" },
            { name: "Zucchini", price: "$1.50" }
        ],
        description: "A colorful veggie dish packed with fresh vegetables, lightly sautéed to retain their crunch and vibrant flavors.",
        price: "$29.99",
        getImageSrc: () => require("../images/small/veggie.jpg"),
    },
    {
        id: 12,
        key: 12,
        title: "Rolled Omelete Skewer",
        category: "a la carte",
        type: "Egg Rolls",
        monthly: 220,
        ingredients: [
            { name: "Eggs", price: "$3.50" },
            { name: "Vegetables", price: "$2.00" },
            { name: "Soy Sauce", price: "$1.50" }
        ],
        description: "Delicious rolled omelette skewers filled with fresh vegetables, perfect as a snack or appetizer.",
        price: "$55.99",
        getImageSrc: () => require("../images/small/rolledOmeleteSkewer.png"),
    },
    {
        id: 13,
        key: 13,
        title: "Lemon Dessert",
        category: "dessert",
        type: "cake",
        monthly: 40,
        ingredients: [
            { name: "Gelatin", price: "$1.50" },
            { name: "Coconut", price: "$2.00" },
            { name: "Marshmallows", price: "$1.50" }
        ],
        description: "A light and zesty lemon dessert that offers a refreshing finish to any meal, perfect for citrus lovers.",
        price: "$19.99",
        getImageSrc: () => require("../images/small/Lemon_Dessert.jpg"),
    },
    {
        id: 14,
        key: 14,
        title: "Snow Meiniang",
        category: "dessert",
        type: "cake",
        monthly: 80,
        ingredients: [
            { name: "Artificial Sweeteners", price: "$2.00" },
            { name: "Food Coloring", price: "$1.00" },
            { name: "Gelatin", price: "$1.00" }
        ],
        description: "A unique dessert featuring a soft, fluffy texture, often enjoyed as a sweet treat to satisfy your cravings.",
        price: "$34.99",
        getImageSrc: () => require("../images/small/dessert2.jpg"),
    },
    {
        id: 15,
        key: 15,
        title: "Tofu Cheesecake",
        category: "dessert",
        type: "cake",
        monthly: 80,
        ingredients: [
            { name: "Strawberry", price: "$2.00" },
            { name: "Mint", price: "$1.50" },
            { name: "Cream Cheese", price: "$2.00" }
        ],
        description: "A creamy tofu cheesecake topped with fresh strawberries and a hint of mint, offering a healthier dessert option.",
        price: "$32.99",
        getImageSrc: () => require("../images/small/tofuCheesecake.png"),
    },
    {
        id: 16,
        key: 16,
        title: "Mixed Berries Yogurt",
        category: "dessert",
        type: "yogurt",
        monthly: 30,
        ingredients: [
            { name: "Yogurt", price: "$3.00" },
            { name: "Mixed Berries", price: "$4.00" },
            { name: "Honey", price: "$2.00" }
        ],
        description: "A delightful yogurt parfait layered with fresh mixed berries and a drizzle of honey for added sweetness.",
        price: "$22.99",
        getImageSrc: () => require("../images/small/mixedBerriesYogurt.png"),
    },
    {
        id: 17,
        key: 17,
        title: "Chocolate Shake",
        category: "drink",
        type: "shake",
        monthly: 10,
        ingredients: [
            { name: "Chocolate Syrup", price: "$2.00" },
            { name: "Whipped Cream", price: "$3.00" },
            { name: "Chocolate Chips", price: "$2.00" }
        ],
        description: "A rich and creamy chocolate shake, blended to perfection for a sweet and indulgent treat any time of the day.",
        price: "$19.99",
        getImageSrc: () => require("../images/small/choclate shake.jpg"),
    },
    {
        id: 18,
        key: 18,
        title: "Fresh Fruit Tea",
        category: "drink",
        type: "tea",
        monthly: 320,
        ingredients: [
            { name: "Fresh Fruits", price: "$3.00" },
            { name: "Tea Leaves", price: "$1.00" },
            { name: "Honey", price: "$1.00" }
        ],
        description: "A refreshing tea infused with fresh fruits, offering a delightful and healthy beverage option.",
        price: "$24.99",
        getImageSrc: () => require("../images/small/fruitTea.png"),
    },
    {
        id: 19,
        key: 19,
        title: "Strawberry Shake",
        category: "drink",
        type: "shake",
        monthly: 10,
        ingredients: [
            { name: "Red Food Coloring", price: "$1.00" },
            { name: "Sugar", price: "$1.50" },
            { name: "Milk Powder", price: "$2.00" }
        ],
        description: "A delightful strawberry shake, bursting with fruity flavor and creamy texture, perfect for cooling down on a hot day.",
        price: "$19.99",
        getImageSrc: () => require("../images/small/strawberry shake.jpg"),
    },
    {
        id: 20,
        key: 20,
        title: "Coffee",
        category: "drink",
        type: "coffee",
        monthly: 10,
        ingredients: [
            { name: "Instant Coffee", price: "$2.00" },
            { name: "Sugar", price: "$1.00" },
            { name: "Creamer", price: "$1.00" }
        ],
        description: "A classic cup of coffee brewed to perfection, offering a warm and comforting experience to start your day.",
        price: "$16.99",
        getImageSrc: () => require("../images/small/coffee.jpg"),
    },
];

export const deliveryInfo = [
    {
        id: 1,
        key: 1,
        name: "Richard NG",
        Tel: "+86 188 1890 2621",
        district: "KUWN TONG DISTRICT, KLN, HONG KONG",
        detailAdd: "410, 4 MAN FUK BUILDING, YUET WAH STREET 40",
    },
    {
        id: 2,
        key: 2,
        name: "Anson NG",
        Tel: "+852 5114 2452",
        district: "KUWN TONG DISTRICT, KLN, HONG KONG",
        detailAdd: "912, 4 MAN FUK BUILDING, YUET WAH STREET 40",
    },
];

export const coupons = [
    {
        id: 1,
        key: 1,
        type: "exemption",
        price: -20,
        percentage: 0,
        description: "New user exemption",
    },
    {
        id: 2,
        key: 2,
        type: "discount",
        price: 0,
        percentage: 0.2,
        description: "New user discount",
    },
    {
        id: 3,
        key: 3,
        type: "discount",
        price: 0,
        percentage: 0.5,
        description: "Discount",
    },
    {
        id: 4,
        key: 4,
        type: "exemption",
        price: -10,
        percentage: 0,
        description: "Exemption",
    },
    {
        id: 5,
        key: 5,
        type: "discount",
        price: 0,
        percentage: 0.3,
        description: "Discount",
    },
];