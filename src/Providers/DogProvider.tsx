import { createContext, ReactNode, useEffect, useState } from "react";
import { Dog } from "../types";
import toast from "react-hot-toast";
import { Requests } from "../api";

export type TDogContext = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  dogs: Dog[];
  setDogs: React.Dispatch<React.SetStateAction<Dog[]>>;
  addDog: (dog: Omit<Dog, "id">) => void;
  deleteDog: (id: number) => void;
  updateDog: (id: number, isFavorite: boolean) => void;
};

export const DogContext = createContext<TDogContext>({} as TDogContext);

export const DogProvider = ({ children }: { children: ReactNode }) => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    refetchData().catch((error) => console.log(error));
  }, []);

  const refetchData = () => {
    return Requests.getAllDogs().then(setDogs);
  };

  const addDog = (dog: Omit<Dog, "id">) => {
    setIsLoading(true);
    Requests.postDog(dog)
      .then(refetchData)
      .then(() => toast.success("Dog Created"))
      .finally(() => setIsLoading(false));
  };

  const deleteDog = (id: number) => {
    setDogs(dogs.filter((dog) => dog.id !== id));
    Requests.deleteDogRequest(id).catch((error) => {
      console.log(error);
      setDogs(dogs);
    });
  };

  const updateDog = (id: number, isFavorite: boolean) => {
    setDogs(
      dogs.map((dog) =>
        dog.id === id ? { ...dog, isFavorite: !dog.isFavorite } : dog
      )
    );
    Requests.patchFavoriteForDog(id, isFavorite).catch((error) => {
      console.log(error);
      setDogs(dogs);
    });
  };

  return (
    <DogContext.Provider
      value={{
        isLoading,
        setIsLoading,
        dogs,
        setDogs,
        addDog,
        deleteDog,
        updateDog,
      }}
    >
      {children}
    </DogContext.Provider>
  );
};
