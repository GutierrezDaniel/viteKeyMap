import React, { createContext, useState } from 'react';

type UserData = {
  isValidHash: boolean;
  savedAccounts?: Record<string, unknown>;
};
export const UserContext = createContext({});
const UserProvider = ({ children }: { children?: React.ReactNode }) => {
  const [userData, setUserData] = useState<UserData>({ isValidHash: false });

  return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};

export default UserProvider;
