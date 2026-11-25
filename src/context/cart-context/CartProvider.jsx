import { CartContext } from "./CartContext";
import usePersistedState from "../../hooks/usePersistedState";
import { useMemo } from "react";

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = usePersistedState("cart", []);

  const addToCart = (book) => {
    setCartItems((prevCart) => {
      const existingBook = prevCart.find(
        (item) => String(item.id) === String(book.id),
      );

      if (existingBook) {
        return prevCart.map((item) =>
          String(item.id) === String(book.id)
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1,
              }
            : item,
        );
      }

      return [
        ...prevCart,
        {
          ...book,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const incrementQty = (id) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decrementQty = (id) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            }
          : item,
      ),
    );
  };

  const totalOrderPrice = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + Number(item.price || 0) * item.quantity,
        0,
      ),
    [cartItems],
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    incrementQty,
    decrementQty,
    totalOrderPrice,
    totalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
