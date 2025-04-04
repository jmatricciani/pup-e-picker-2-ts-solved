import { useContext, useState } from 'react';
import { defaultSelectedImage, dogPictures } from '../dog-pictures';
import { DogContext } from '../Providers/DogProvider';
import { UIContext } from '../Providers/UIProvider';
import toast from 'react-hot-toast';
import { validateForm } from '../Types/errors';

export const CreateDogForm = () =>
  // no props allowed
  {
    const { addDog } = useContext(DogContext);
    const { isLoading } = useContext(UIContext);
    const [selectedImage, setSelectedImage] = useState(defaultSelectedImage);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const resetForm = () => {
      setName('');
      setDescription('');
      setSelectedImage(defaultSelectedImage);
    };

    return (
      <form
        action=''
        id='create-dog-form'
        onSubmit={(e) => {
          e.preventDefault();
          try {
            if (validateForm(name, description)) {
              void addDog({
                name: name,
                image: selectedImage,
                description: description,
                isFavorite: false,
              });
              resetForm();
            }
          } catch (errors) {
            //Struggled a little with this in typescript as the error from the catch block comes as type any or unknown
            //I found that putting the array into a seperate variable and using the "as" keyword is a work around
            //I know Jon says to avoid using the "as" keyword as much as possible, but I hope this is acceptable since
            //we know that we are throwing an Error[]
            const displayErrors: Error[] = errors as Error[];
            displayErrors.forEach((error) => {
              toast.error(error.message);
            });
          }
        }}
      >
        <h4>Create a New Dog</h4>
        <label htmlFor='name'>Dog Name</label>
        <input
          type='text'
          value={name}
          onChange={(event) => setName(event.target.value)}
          disabled={isLoading}
        />
        <label htmlFor='description'>Dog Description</label>
        <textarea
          name=''
          id=''
          cols={80}
          rows={10}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          disabled={isLoading}
        ></textarea>
        <label htmlFor='picture'>Select an Image</label>
        <select
          id=''
          onChange={(e) => {
            setSelectedImage(e.target.value);
          }}
          value={selectedImage}
          disabled={isLoading}
        >
          {Object.entries(dogPictures).map(([label, pictureValue]) => {
            return (
              <option
                value={pictureValue}
                key={pictureValue}
              >
                {label}
              </option>
            );
          })}
        </select>
        <input
          type='submit'
          value='submit'
          disabled={isLoading}
        />
      </form>
    );
  };
