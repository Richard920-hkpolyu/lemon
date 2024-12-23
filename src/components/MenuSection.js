import { HStack, Heading, VStack, Button } from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "./FullScreenSection";
import Card from "./Card.js";

const foods = [
    {
      title: "Greek Salad",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
      price: "$12.99",
      getImageSrc: () => require("../images/GreekSalad.jpg"),
    },
    {
      title: "Brushetta",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
        price: "$7.99",
      getImageSrc: () => require("../images/Brushetta.jpg"),
    },
    {
      title: "Grilled Fish",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
        price: "$20.00",
      getImageSrc: () => require("../images/GrilledFish.jpg"),
    },
    {
      title: "Pasta",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.",
        price: "$18.99",
      getImageSrc: () => require("../images/Pasta.jpg"),
    },
    {
        title: "Lemon Dessert",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
          price: "$6.99",
        getImageSrc: () => require("../images/Lemon_Dessert.jpg"),
    },
  ];

const MenuSection = () => {
    return(
        <FullScreenSection
        justifyContent="center"
        alignItems="start"
        isDarkBackground
        backgroundColor="#EDEFEE"
        py={12}
        >
            <Heading size="xl" fontWeight="bold" noOfLines={1} color="#333333"id="menu-section">MENU</Heading>
            <HStack gap="3">
                <Button size="md" variant="outline">Lunch</Button>
                <Button size="md" variant="outline">Mains</Button>
                <Button size="md" variant="outline">Desserts</Button>
                <Button size="md" variant="outline">A La Carte</Button>
                <Button size="md" variant="outline">Specials</Button>
            </HStack>
            <VStack alignItems="start" py={6}>
                {foods.map((food) => (
                    <Card
                        key={food.title}
                        title={food.title}
                        description={food.description}
                        price={food.price}
                        imageSrc={food.getImageSrc()}
                    />
                ))}
            </VStack>
        </FullScreenSection>
    );
};

export default MenuSection;