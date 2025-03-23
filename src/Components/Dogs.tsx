// Right now these dogs are constant, but in reality we should be getting these from our server

import { useContext } from "react";
import { DogCard } from "./DogCard";
import { TabContext } from "../Providers/TabProvider";
import { DogContext } from "../Providers/DogProvider";

// Todo: Refactor to get rid of props (THERE SHOULD BE NO PROPS DRILLING ON THIS COMPONENT)
export const Dogs = () =>
  // no props allowed
  {
    const { isFavoriteActive, isNotFavoriteActive, isCreateDogActive } =
      useContext(TabContext);
    const { dogs, deleteDog, updateDog, isLoading } = useContext(DogContext);
    return (
      //  the "<> </>"" are called react fragments, it's like adding all the html inside
      // without adding an actual html element
      <>
        {dogs
          .filter((dog) => {
            if (isFavoriteActive) return dog.isFavorite;
            else if (isNotFavoriteActive) return !dog.isFavorite;
            else if (isCreateDogActive) return false;
            else return dog;
          })
          .map((dog) => (
            <DogCard
              key={dog.id}
              dog={dog}
              onEmptyHeartClick={() => {
                updateDog(dog.id, true);
              }}
              onHeartClick={() => {
                updateDog(dog.id, false);
              }}
              //insert delete method here
              onTrashIconClick={() => {
                deleteDog(dog.id);
              }}
              isLoading={isLoading}
            />
          ))}
      </>
    );
  };
