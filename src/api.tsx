import { Dog } from "./Types/types";

export const baseUrl = "http://localhost:3000";

const getAllDogs = async (): Promise<Dog[]> => {
  const response = await fetch(`${baseUrl}/dogs`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response.json() as Promise<Dog[]>;
};

const postDog = async (dog: Omit<Dog, "id">) => {
  return await fetch(`${baseUrl}/dogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dog),
  });
};

const deleteDogRequest = async (id: number) => {
  await fetch(`${baseUrl}/dogs/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
};

const patchFavoriteForDog = async (id: number, isFavorite: boolean) => {
  await fetch(`${baseUrl}/dogs/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ isFavorite: isFavorite }),
  });
};

export const Requests = {
  postDog,
  deleteDogRequest,
  patchFavoriteForDog,
  getAllDogs,
};
