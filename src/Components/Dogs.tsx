// Right now these dogs are constant, but in reality we should be getting these from our server

import { useContext } from 'react';
import { DogCard } from './DogCard';
import { DogContext } from '../Providers/DogProvider';
import { UIContext } from '../Providers/UIProvider';

// Todo: Refactor to get rid of props (THERE SHOULD BE NO PROPS DRILLING ON THIS COMPONENT)
export const Dogs = () =>
  // no props allowed
  {
    const { activeTab, isLoading } = useContext(UIContext);
    const { dogs, deleteDog, updateDog } = useContext(DogContext);
    return (
      //  the "<> </>"" are called react fragments, it's like adding all the html inside
      // without adding an actual html element
      <>
        {dogs
          .filter((dog) => {
            switch (activeTab) {
              case 'favorited':
                return dog.isFavorite;
              case 'unfavorited':
                return !dog.isFavorite;
              case 'createDog':
                return false;
              case 'none':
                return dog;
            }
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
