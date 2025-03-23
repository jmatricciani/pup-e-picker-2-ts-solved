import { ReactNode, useContext } from "react";
import { TabContext } from "../Providers/TabProvider";
import { DogContext } from "../Providers/DogProvider";

export const Section = ({
  label,
  children,
}: {
  // No more props than these two allowed
  label: string;
  children: ReactNode;
}) => {
  const {
    isFavoriteActive,
    setIsFavoriteActive,
    isNotFavoriteActive,
    setIsNotFavoriteActive,
    isCreateDogActive,
    setIsCreateDogActive,
  } = useContext(TabContext);
  const { dogs } = useContext(DogContext);
  return (
    <section id="main-section">
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          {/* This should display the favorited count */}
          <div
            className={`selector ${isFavoriteActive ? "active" : ""}`}
            onClick={() => {
              if (!isFavoriteActive) {
                setIsFavoriteActive(true);
                setIsNotFavoriteActive(false);
                setIsCreateDogActive(false);
              } else {
                setIsFavoriteActive(false);
              }
            }}
          >
            favorited ( {dogs.filter((dog) => dog.isFavorite).length} )
          </div>

          {/* This should display the unfavorited count */}
          <div
            className={`selector ${isNotFavoriteActive ? "active" : ""}`}
            onClick={() => {
              if (!isNotFavoriteActive) {
                setIsNotFavoriteActive(true);
                setIsFavoriteActive(false);
                setIsCreateDogActive(false);
              } else {
                setIsNotFavoriteActive(false);
              }
            }}
          >
            unfavorited ( {dogs.filter((dog) => !dog.isFavorite).length} )
          </div>
          <div
            className={`selector ${isCreateDogActive ? "active" : ""}`}
            onClick={() => {
              if (!isCreateDogActive) {
                setIsCreateDogActive(true);
                setIsFavoriteActive(false);
                setIsNotFavoriteActive(false);
              } else {
                setIsCreateDogActive(false);
              }
            }}
          >
            create dog
          </div>
        </div>
      </div>
      <div className="content-container">{children}</div>
    </section>
  );
};
