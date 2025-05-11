import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  let baseurl = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("admin_token");
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
    axios
      .get(`${baseurl}/auth/verify-token`, {
        // token: token,
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        setIsAuth(true);
      })
      .catch((err) => {
        setIsAuth(false);
      });

    // if (!token) {
    //   navigate("/login");
    // }
  }, [token, baseurl, navigate]);

  return (
    <div>{children}</div>
    //   token ? children : null;
  );
};

export default ProtectedRoute;
