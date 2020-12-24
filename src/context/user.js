import React from 'react';

export const UserContext = React.createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser: (u) => setUser(u),
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
