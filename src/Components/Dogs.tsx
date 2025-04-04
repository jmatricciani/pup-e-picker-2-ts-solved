// Right now these dogs are constant, but in reality we should be getting these from our server

import { useContext } from 'react';
import { DogCard } from './DogCard';
import { DogContext } from '../Providers/DogProvider';
import { UIContext } from '../Providers/UIProvider';

export const Dogs = () => {
  const { activeTab, isLoading } = useContext(UIContext);
  const { dogs, deleteDog, updateDog } = useContext(DogContext);
  return (
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
            onTrashIconClick={() => {
              deleteDog(dog.id);
            }}
            isLoading={isLoading}
          />
        ))}
    </>
  );
};
