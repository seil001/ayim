import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { ADMIN, API_AUTH } from "./const";
import { useNavigate } from "react-router-dom";

const authContext = createContext();

export const useAuth = () => useContext(authContext);

const INIT_STATE = {
  user: {},
  error: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  const register = async (user) => {
    console.log(user);
    try {
      const res = await axios.post(`${API_AUTH}/register/`, user);
      console.log(res);
      // const activate = await axios.get(`${API_AUTH}/`);
      navigate("/log");
    } catch (error) {
      console.log(error, "error");
      dispatch({
        type: "SET_ERROR",
        payload: error.message,
      });
    }
  };

  const login = async (user) => {
    try {
      let res = await axios.post(`${API_AUTH}/login/`, user);
      console.log(res);
      localStorage.setItem("token", JSON.stringify(res.data));
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  const checkAuth = async () => {
    try {
      let token = JSON.parse(localStorage.getItem("token"));
      let res = await axios.post(`${API_AUTH}/token/refresh/`, {
        refresh: token.refresh,
      });
      localStorage.setItem(
        "token",
        JSON.stringify({ refresh: token.refresh, access: res.data.access })
      );
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     checkAuth();
  //   }
  // }, []);

  function logout() {
    localStorage.removeItem("token");
    navigate("/log");
  }
  function isAdmin() {
    if (state.user) {
      const bool = ADMIN.includes(state.user.email);
      return bool;
    }
  }

  let values = {
    register,
    login,
    logout,
    isAdmin,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
