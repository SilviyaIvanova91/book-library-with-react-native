import { createContext, useEffect, useState } from "react";
import { getAll, getFeatured } from "../api/books.api";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const [allBooks, featured] = await Promise.all([
          getAll(),
          getFeatured(),
        ]);

        setBooks(allBooks);
        setFeaturedBooks(featured);
      } catch (error) {
        console.log(
          "Error loading books:",
          error.response?.data || error.message,
        );
      } finally {
        setIsLoading(false);
      }
    };
    loadBooks();
  }, []);

  const filteredBooks = selectedCategory
    ? books.filter((b) =>
        b.category
          ?.split(",")
          .map((c) => c.trim())
          .includes(selectedCategory),
      )
    : books;

  const values = {
    books: filteredBooks,
    allBooks: books,
    setBooks,
    featuredBooks,
    selectedCategory,
    setSelectedCategory,
    isLoading,
  };

  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
};
