import { HStack, Heading, VStack, Button, ButtonGroup, SimpleGrid, Badge } from "@chakra-ui/react";
import React, { useEffect, useState,  } from "react";
import FullScreenSection from "./FullScreenSection";
import Card from "./Card.js";
import { fooditems, } from "../utils/data";

const MenuSection = () => {

    //buttonElement.style.backgroundColor = "#495E57" ;
    //buttonElement.style.color = "#495E57" ;
    const [foodList, setFoodList] = useState(fooditems);
    const [bool, setBool] = useState("all");
    const buttons = [
        { id: 1, type: "All" },
        { id: 2, type: "Main" },
        { id: 3, type: "A La Carte" },
        { id: 4, type: "Dessert" },
        { id: 5, type: "Drink" },
    ];
    const handleFilter = (type) => {
        let filterdList;
        if (type === "All") {
          setBool("all");
          filterdList = fooditems
              .sort((a, b) => a.id - b.id);
          setFoodList(fooditems);
        } else if (type === "Main") {
            setBool("main");
            filterdList = fooditems
              .filter((item) => item.category === "main")
              .sort((a, b) => a.id - b.id);
            setFoodList(filterdList);
        } else if (type === "A La Carte") {
          setBool("a la carte");
          filterdList = fooditems
            .filter((item) => item.category === "a la carte")
            .sort((a, b) => a.id - b.id);
          setFoodList(filterdList);
        } else if (type === "Dessert") {
          setBool("dessert");
          filterdList = fooditems
            .filter(
              (item) => item.category === "dessert"
            )
            .sort((a, b) => a.id - b.id);
          setFoodList(filterdList);
        }else {
            setBool("drink");
            filterdList = fooditems
              .filter((item) => item.category === "drink")
              .sort((a, b) => a.id - b.id);
            setFoodList(filterdList);
        }
    };

    return(
        <FullScreenSection
        justifyContent="center"
        alignItems="start"
        isDarkBackground
        backgroundColor="#FFFFFF"
        py={{ base: 6, md: 12 }}
        width={{ base: "96vw", md: "96vw" }}
        borderRadius="md"
        >
            <Heading size={{ base: "md", md: "xl" }} fontWeight="bold" noOfLines={1} color="#333333">&nbsp;MENU</Heading>
            <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', maxWidth: '100%', scrollbarWidth: 'none',}}>
              <ButtonGroup gap={{ base: "0.2rem", md: "0.8rem" }}>
                  {buttons.map((item) => (
                      <Button
                          size="md"
                          variant="outline"
                          key={item.id}
                          _hover={{ bg: "#495E57", color: "#EDEFEE" }}
                          onClick={() => handleFilter(item.type)}
                      >
                          {item.type}
                      </Button>
                  ))}
              </ButtonGroup>
            </div>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 10 }}>
                {foodList.map((food) => (
                    <Card
                        key={food.id}
                        id={food.id}
                        title={food.title}
                        category={food.category}
                        type={food.type}
                        monthly={food.monthly}
                        ingredients={food.ingredients}
                        description={food.description}
                        price={food.price}
                        imageSrc={food.getImageSrc()}
                    />
                ))}
            </SimpleGrid>
        </FullScreenSection>
    );
};

export default MenuSection;
