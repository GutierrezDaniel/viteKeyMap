import React, { useContext, useState } from 'react';
import ModalEdit from '../ModalEdit';
import PasswordCard from '../PasswordCard';
import { arrayMock } from './arrayMock';
import { UserContext } from '../../features/controlPlane/ControlPlane';

const LoggedInApp = ({ setValid }: { setValid: (p: boolean) => void }): JSX.Element => {
  const [editModalVisible, setEditModalVisible] = useState<boolean>(false);
  const contexto = useContext(UserContext);
  return (
    <div className="flex flex-col bg-zinc-700 w-full h-full">
      <button type="button" onClick={() => setValid(false)} className="text-zinc-300">
        Log Out
      </button>
      <div className="grid flex-wrap bg-gray-500 grid-cols-4 gap-6 mx-5 h-4/5 overflow-y-auto">
        {arrayMock.map((cardInfo) => (
          <PasswordCard cardInfo={cardInfo} setEditModalVisible={setEditModalVisible} />
        ))}
      </div>
      <ModalEdit editModalVisible setEditModalVisible={setEditModalVisible} />
    </div>
  );
};

export default LoggedInApp;
