import React from "react";

const ModalEdit = ({editModalVisible, setEditModalVisible}): JSX.Element => {

  

  return (
    <div className={`${editModalVisible ? "hidden" : ""} fixed z-10 left-0 top-0 w-full h-full m-auto overflow-auto bg-slate-800 bg-opacity-80`}>
      <div className="flex flex-col text-lg p-5 w-4/5 h-4/5 bg-amber-400 m-auto">
        <span className="self-end" onClick={()=> setEditModalVisible(false)}>&times;</span>
        <div className="w-16"></div>
        <label htmlFor="userEdit">User:</label>
        <input
          type="text"
          className="mt-2 h-4/5"
          id="userEdit"
          name="userEdit"
        ></input>
        <label htmlFor="passwordEdit">Password:</label>
        <input
          id="passwordEdit"
          name="passwordEdit"
          type="password"
          className="mt-2 h-4/5"
        ></input>
      </div>
    </div>
  );
};

export default ModalEdit;
