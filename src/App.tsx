import { useContext } from "react";
import { CreateDogForm } from "./Components/CreateDogForm";
import { Dogs } from "./Components/Dogs";
import { Section } from "./Components/Section";
import { TabContext } from "./Providers/TabProvider";

export function App() {
  const { isCreateDogActive } = useContext(TabContext);

  return (
    <div className="App" style={{ backgroundColor: "skyblue" }}>
      <header>
        <h1>pup-e-picker (Functional)</h1>
      </header>
      <Section label={"Dogs: "}>
        <Dogs />
        {isCreateDogActive && <CreateDogForm />}
      </Section>
    </div>
  );
}
