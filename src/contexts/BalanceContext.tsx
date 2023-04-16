import React, { createContext, useContext, useState } from 'react';

type BalanceProviderProps = {
  children: JSX.Element;
};

type BalanceContextValue = {
  balance: number;
  updateBalance: (amount: number) => void;
};

// Create a context for the balance
const BalanceContext = createContext<BalanceContextValue | null>(null);

// Custom hook to access the balance context
export const useBalance = () => {
  const context = useContext(BalanceContext);
  if (!context) {
    throw new Error('useBalance must be used within a BalanceProvider');
  }
  return context;
};

// BalanceProvider component to wrap the app and provide the balance value
export const BalanceProvider = (props: BalanceProviderProps) => {
  const { children } = props;

  const [balance, setBalance] = useState<number>(340); // Initial balance value

  // Helper function to update the balance value
  const updateBalance = (amount: number) => {
    setBalance(balance + amount);
  };

  return (
    <BalanceContext.Provider value={{ balance, updateBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};
