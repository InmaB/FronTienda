import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [items, setItems] = useLocalStorage("items", []);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setItems((prevItems) => [...prevItems, { item: item, quantity: quantity }]);
    }
  };

  const isInCart = id => {
    return Array.isArray(items) && items.some(element => element.item && element.item.id === id);
  }

  const removeItem = id => {
    let itemAux = [...items]
    itemAux = itemAux.filter(element => element.item && element.item.id !== id)
    setItems(itemAux)
  }

  const clearAllItems = () => setItems([])

  const countItemQuantity = () => {
    let count = 0
    for (const iterator of items) {
      count += iterator.quantity
    }
    return count
  }

  const totalPriceCart = () => {
    let total = 0
    for (const element of items) {
      if (element.item && element.item.price) {
        total += element.item.price * element.quantity
      }
    }
    return total;
  }

  return (
    <CartContext.Provider
      value={{
        items: items,
        addItem: addItem,
        removeItem: removeItem,
        clearAllItems: clearAllItems,
        countItemQuantity: countItemQuantity,
        totalPriceCart: totalPriceCart,
        setItems: setItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
