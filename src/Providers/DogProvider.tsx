import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Dog } from '../Types/types';
import toast from 'react-hot-toast';
import { Requests } from '../api';
import { handleError } from '../Types/errors';
import { UIContext } from './UIProvider';

export type TDogContext = {
  dogs: Dog[];
  setDogs: React.Dispatch<React.SetStateAction<Dog[]>>;
  addDog: (dog: Omit<Dog, 'id'>) => Promise<void>;
  deleteDog: (id: number) => void;
  updateDog: (id: number, isFavorite: boolean) => void;
};

export const DogContext = createContext<TDogContext>({} as TDogContext);

export const DogProvider = ({ children }: { children: ReactNode }) => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const { setIsLoading } = useContext(UIContext);

  useEffect(() => {
    refetchData().catch((error) => handleError(error));
  }, []);

  const refetchData = async () => {
    setDogs(await Requests.getAllDogs());
  };

  const addDog = async (dog: Omit<Dog, 'id'>) => {
    setIsLoading(true);
    await Requests.postDog(dog);
    await refetchData();
    toast.success('Dog Created');
    setIsLoading(false);
  };

  const deleteDog = (id: number) => {
    setDogs(dogs.filter((dog) => dog.id !== id));
    Requests.deleteDogRequest(id).catch((error: unknown) => {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        console.error(error);
      }
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
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        console.error(error);
      }
      setDogs(dogs);
    });
  };

  return (
    <DogContext.Provider
      value={{
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
