import { createContext, useState } from "react";
import { books } from "../data/books";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredBooks = selectedCategory
    ? books.filter((b) => b.category.includes(selectedCategory))
    : books;

  const values = {
    books: filteredBooks,
    selectedCategory,
    setSelectedCategory,
  };

  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
};
