import React from "react";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const useGetAllUser = () => {
  const [allUser, setAllUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const token = Cookies.get("jwt");
        const response = await axios.get("/api/user/alluser", {
          // credentials: "include",
           withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAllUser(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error in useGetAllUsers: " + error);
      }
    };
    getUsers();
  }, []);

  return [allUser, loading];
};

export default useGetAllUser;
