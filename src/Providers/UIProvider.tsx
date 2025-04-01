import { createContext, ReactNode, useState } from 'react';
import { TTab } from '../Types/types';

// Before Refactoring, I had this as a TabProvider solely for dealing with the tab states
// It made more sense to label this UIProvider and add the isLoading state into it

export type TUIContext = {
  activeTab: TTab;
  setActiveTab: React.Dispatch<React.SetStateAction<TTab>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UIContext = createContext<TUIContext>({} as TUIContext);

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState<TTab>('none');
  const [isLoading, setIsLoading] = useState(false);
  return (
    <UIContext.Provider
      value={{
        activeTab,
        setActiveTab,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
