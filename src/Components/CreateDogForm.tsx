import { useContext, useState } from "react";
import { defaultSelectedImage, dogPictures } from "../dog-pictures";
import { DogContext } from "../Providers/DogProvider";

export const CreateDogForm = () =>
  // no props allowed
  {
    const { addDog, isLoading } = useContext(DogContext);
    const [selectedImage, setSelectedImage] = useState(dogPictures.BlueHeeler);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    return (
      <form
        action=""
        id="create-dog-form"
        onSubmit={(e) => {
          e.preventDefault();
          void addDog({
            name: name,
            image: selectedImage,
            description: description,
            isFavorite: false,
          });
          setName("");
          setDescription("");
          setSelectedImage(defaultSelectedImage);
        }}
      >
        <h4>Create a New Dog</h4>
        <label htmlFor="name">Dog Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          disabled={isLoading}
        />
        <label htmlFor="description">Dog Description</label>
        <textarea
          name=""
          id=""
          cols={80}
          rows={10}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          disabled={isLoading}
        ></textarea>
        <label htmlFor="picture">Select an Image</label>
        <select
          id=""
          onChange={(e) => {
            setSelectedImage(e.target.value);
          }}
          disabled={isLoading}
        >
          {Object.entries(dogPictures).map(([label, pictureValue]) => {
            return (
              <option value={pictureValue} key={pictureValue}>
                {label}
              </option>
            );
          })}
        </select>
        <input type="submit" value="submit" disabled={isLoading} />
      </form>
    );
  };
