import { ReactNode } from "react";
import { z } from "zod";

export const dogSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
  description: z.string(),
  isFavorite: z.boolean(),
});

export type Dog = z.infer<typeof dogSchema>;

//Prop Interfaces

export interface ISectionProps {
  children?: ReactNode;
  label: string;
  dogs: Dog[];
  isFavoriteActive: boolean;
  setIsFavoriteActive: React.Dispatch<React.SetStateAction<boolean>>;
  isNotFavoriteActive: boolean;
  setIsNotFavoriteActive: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateDogActive: boolean;
  setIsCreateDogActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IFormProps {
  addDog: (dog: Omit<Dog, "id">) => void;
  isLoading: boolean;
}

export interface IDisplayDogs {
  dogs: Dog[];
  deleteDog: (id: number) => void;
  updateDog: (id: number, isFavorite: boolean) => void;
  isFavoriteActive: boolean;
  isNotFavoriteActive: boolean;
  isCreateDogActive: boolean;
  isLoading: boolean;
}
