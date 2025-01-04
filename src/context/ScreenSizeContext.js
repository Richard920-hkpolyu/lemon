import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import useConfetti from "../hooks/Confetti";
const ScreenSizeContext = createContext();

const ScreenSizeProvider = ({ children }) => {
  const fireConfetti = useConfetti();
  const [items, setItems] = useState([]);
  const [screenSize, setScreenSize] = useState({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
  });

  const modifyItems = useCallback((id, count, ingredients) => {
    setItems((prevItems) => {
        const existingIndex = prevItems.findIndex((item) =>
            item.id === id &&
            item.ingredients.length === ingredients.length &&
            item.ingredients.every(ingredient =>
                ingredients.some(addIngredient => addIngredient.name === ingredient.name)
            )
        );

        if (existingIndex !== -1) {
            // If the ID and ingredients match, update the count
            const updatedItems = [...prevItems];
            updatedItems[existingIndex] = {
                ...updatedItems[existingIndex],
                count
            };
            return updatedItems;
        } else {
            // Find the largest key in prevItems
            const maxKey = prevItems.reduce((max, item) => Math.max(max, item.key || 0), 0);
            const newKey = maxKey + 1;
            //console.log("newKey",newKey);
            // If no match, add a new entry
            return [...prevItems, { id, count, ingredients, key: newKey }];
        }
    });
  }, []);
  //console.log('items',items)
  const contextValue = useMemo(
    () => ({
      screenSize,
      modifyItems,
      items,
      setItems,
      fireConfetti,
    }),
    [
      screenSize,
      modifyItems,
      items,
      setItems,
      fireConfetti,
    ]
  );
    //console.log("item",items);
  return (
    <ScreenSizeContext.Provider value={contextValue}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSize = () => useContext(ScreenSizeContext);

export default ScreenSizeProvider;
