import React, { useState } from "react";
import type { Receipe } from "../util/Constant";

export type MyContext = {
  searchString: string;
  setSearchString: (newParam: string) => void;
  receipe: Receipe[];
  handleSubmit: (e:React.FormEvent) => void;
  favourite: Receipe[];
  handleFavourites: (data: Receipe) => void;
  loading:(boolean)
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
  const [favourite, setFavourite] = useState<Receipe[] | []>([]);

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault()
    setSearchString("")
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
      setLoading(false);
    }
    return { loading, error };
  };

  const handleFavourites = (receipeItem: Receipe) => {
    const temp = [...favourite];
    const index = temp.findIndex(item=> item.id === receipeItem.id)

    if(index === -1) {
      temp.push(receipeItem)
    } else {
      temp.splice(index)
    }

    setFavourite(temp)
  
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
        loading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
