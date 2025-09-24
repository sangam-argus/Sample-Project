import React, { useState } from "react";
import type { Receipe } from "../util/Constant";

export type MyContext = {
  searchString: string;
  setSearchString: (newParam: string) => void;
  receipe: Receipe[];
  handleSubmit: (data: string) => void;
  favourite: number[];
  handleFavourites: (data: number) => void;
};
export const GlobalContext = React.createContext<MyContext | null>(null);

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchString, setSearchString] = useState("");
  const [receipe, setReciepe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favourite, setFavourite] = useState<number[] | []>([]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setFavourite([]);
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${searchString}`
      );
      const data = await response.json();
      // setReciepe(data)
      if (data) {
        setReciepe(data.recipes);
        setLoading(false);
      }
    } catch (e: any) {
      setError(e);
      console.log("Error message");
      setLoading(false);
    }
    return { loading, error };
  };

  const handleFavourites = (id: number) => {
    const temp = [...favourite];
    if (temp.includes(id)) {
      setFavourite(temp.filter((item) => item !== id));
    } else {
      temp.push(id);
      setFavourite(temp);
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        searchString,
        setSearchString,
        handleSubmit,
        receipe,
        favourite,
        handleFavourites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
