import type { FC, ReactNode } from 'react';
import React, { createContext, useState } from 'react';

type Props = {
  children: ReactNode;
};

type ContextType = {
  isSignUpModalOpen: boolean;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (value: boolean) => void;

  setIsSignUpModalOpen: (value: boolean) => void;
};

export const ModalContext = createContext<ContextType>({} as ContextType);

export const ModalProvider: FC<Props> = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isLoginModalOpen, isSignUpModalOpen, setIsLoginModalOpen, setIsSignUpModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
