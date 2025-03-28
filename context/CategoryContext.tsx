import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the category type
export interface Category {
  id: number;
  title: string;
  image: any;
  matches: Match[];
}

// Define the match type
export interface Match {
  id: string;
  team1: {
    name: string;
    logo: any;
  };
  team2: {
    name: string;
    logo: any;
  };
  date: string;
  time: string;
}

// Define the context type
interface CategoryContextType {
  selectedCategory: Category | null;
  setSelectedCategory: (category: Category | null) => void;
}

// Create the context
const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

// Create a provider component
export function CategoryProvider({ children }: { children: ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

// Create a hook to use the context
export function useCategoryContext() {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error('useCategoryContext must be used within a CategoryProvider');
  }
  return context;
}
