import React from "react";
import User from "./User";
import Logout from "./Logout";
import useGetAllUser from "../../context/useGetAllUser";

const Users = () => {
  const [allUser,loading]=useGetAllUser();
  console.log(allUser);
  
  return (
    <>
      <h1 className="px-8 py-2 text-white font-semibold text-lg">Messages</h1>
     <div className="py-2 flex-1 overflow-y-auto " style={{maxHeight:"cal(84vh - 10vh)"}}>

      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>

     </div>
    
    </>
  );
};

export default Users;
