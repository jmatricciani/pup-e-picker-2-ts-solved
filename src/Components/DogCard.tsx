import { Dog } from "../Types/types";
import { FavoriteButton } from "./FavoriteButton";
import { TrashButton } from "./TrashButton";
import { UnfavoriteButton } from "./UnfavoriteButton";

// ! Do Not Make Changes To This File
export const DogCard = ({
  dog: { name, image, description, isFavorite },
  onTrashIconClick,
  onEmptyHeartClick,
  onHeartClick,
  isLoading,
}: {
  dog: Dog;
  onTrashIconClick: () => void;
  onEmptyHeartClick: () => void;
  onHeartClick: () => void;
  isLoading: boolean;
}) => {
  return (
    <div className="dog-card">
      {/* Choose which button to show depending on if dog is a favorite */}
      {isFavorite ? (
        <UnfavoriteButton
          onClick={() => {
            onHeartClick();
          }}
          disabled={isLoading}
        />
      ) : (
        <FavoriteButton
          onClick={() => {
            onEmptyHeartClick();
          }}
          disabled={isLoading}
        />
      )}

      {/* Use this button to delete a puppy :( */}
      <TrashButton
        onClick={() => {
          onTrashIconClick();
        }}
        disabled={isLoading}
      />

      {/* Ignore this  */}
      {/* You can temporarily set a favorite overlay after a user favorites a dog */}
      {/* Try making className "favorite-overlay active"*/}
      <div className={`favorite-overlay `}>{"<3"}</div>

      {/* Ignore this  */}
      {/* You can temporarily set a favorite overlay after a user favorites a dog */}
      {/* Try making className "favorite-overlay active"*/}
      {isLoading && <div className={`loading-overlay`}></div>}

      {/* Ignore this  */}
      {/* You can temporarily set a unfavorite overlay after a user favorites a dog */}
      {/* Try making className "unfavorite-overlay active"*/}
      <div className="unfavorite-overlay">{"</3"}</div>

      {/* A Dogs Name */}
      <p className="dog-name">{name}</p>

      {/* A Dogs Image */}
      <img src={image} alt={name} />

      {/*  A Dogs description*/}
      <p className="dog-description">{description}</p>
    </div>
  );
};
