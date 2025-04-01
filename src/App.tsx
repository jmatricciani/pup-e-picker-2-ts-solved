import { useContext } from 'react';
import { CreateDogForm } from './Components/CreateDogForm';
import { Dogs } from './Components/Dogs';
import { Section } from './Components/Section';
import { UIContext } from './Providers/UIProvider';

export function App() {
  const { activeTab } = useContext(UIContext);

  return (
    <div
      className='App'
      style={{ backgroundColor: 'skyblue' }}
    >
      <header>
        <h1>pup-e-picker (Functional)</h1>
      </header>
      <Section label={'Dogs: '}>
        <Dogs />
        {activeTab === 'createDog' && <CreateDogForm />}
      </Section>
    </div>
  );
}
