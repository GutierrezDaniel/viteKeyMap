import React, { createContext, useState } from 'react';

type UserInfo = {
  isValidHash: boolean;
  savedAccounts?: Record<string, unknown>;
};
export const UserProvider = createContext({});
const ControlPlane = ({ children }: { children?: React.ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({ isValidHash: false });

  return <UserProvider.Provider value={userInfo}>{children}</UserProvider.Provider>;
};

export default ControlPlane;
