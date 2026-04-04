import React from 'react'
import { useState } from 'react'

const useGetAllUser = () => {
    const [allUser,setAllUser]=useState([])
    const [loading,setLoading]=useState(false)

      useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const token = Cookies.get("jwt");
        const response = await axios.get("/api/user/allusers", {
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAllUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error in useGetAllUsers: " + error);
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default useGetAllUser
