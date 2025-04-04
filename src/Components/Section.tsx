import { ReactNode, useContext } from 'react';
import { DogContext } from '../Providers/DogProvider';
import { UIContext } from '../Providers/UIProvider';

export const Section = ({
  label,
  children,
}: {
  // No more props than these two allowed
  label: string;
  children: ReactNode;
}) => {
  const { activeTab, setActiveTab } = useContext(UIContext);
  const { dogs } = useContext(DogContext);
  return (
    <section id='main-section'>
      <div className='container-header'>
        <div className='container-label'>{label}</div>
        <div className='selectors'>
          <div
            className={`selector ${activeTab === 'favorited' ? 'active' : ''}`}
            onClick={() => {
              activeTab !== 'favorited'
                ? setActiveTab('favorited')
                : setActiveTab('none');
            }}
          >
            favorited ( {dogs.filter((dog) => dog.isFavorite).length} )
          </div>

          <div
            className={`selector ${
              activeTab === 'unfavorited' ? 'active' : ''
            }`}
            onClick={() => {
              activeTab !== 'unfavorited'
                ? setActiveTab('unfavorited')
                : setActiveTab('none');
            }}
          >
            unfavorited ( {dogs.filter((dog) => !dog.isFavorite).length} )
          </div>
          <div
            className={`selector ${activeTab === 'createDog' ? 'active' : ''}`}
            onClick={() => {
              activeTab !== 'createDog'
                ? setActiveTab('createDog')
                : setActiveTab('none');
            }}
          >
            create dog
          </div>
        </div>
      </div>
      <div className='content-container'>{children}</div>
    </section>
  );
};
