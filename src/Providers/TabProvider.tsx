import { createContext, ReactNode, useState } from "react";

export type TTabContext = {
  isFavoriteActive: boolean;
  setIsFavoriteActive: React.Dispatch<React.SetStateAction<boolean>>;
  isNotFavoriteActive: boolean;
  setIsNotFavoriteActive: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateDogActive: boolean;
  setIsCreateDogActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TabContext = createContext<TTabContext>({} as TTabContext);

export const TabProvider = ({ children }: { children: ReactNode }) => {
  const [isFavoriteActive, setIsFavoriteActive] = useState(false);
  const [isNotFavoriteActive, setIsNotFavoriteActive] = useState(false);
  const [isCreateDogActive, setIsCreateDogActive] = useState(false);
  return (
    <TabContext.Provider
      value={{
        isFavoriteActive,
        setIsFavoriteActive,
        isNotFavoriteActive,
        setIsNotFavoriteActive,
        isCreateDogActive,
        setIsCreateDogActive,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};
