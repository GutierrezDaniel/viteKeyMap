import React from "react";

const PasswordCard = ({ cardInfo, setEditModalVisible }): JSX.Element => {
  return (
    <div className="flex flex-col bg-amber-400 rounded-sm h-48 mx-2 my-1">
      <div className="w-16 h-16 bg-black m-2 rounded-sm"></div>
      <h2>Title Example</h2>
      <button type="button" onClick={()=> setEditModalVisible(true)}>Set item</button>
    </div>
  );
};

export default PasswordCard;
