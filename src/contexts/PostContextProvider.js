import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { API_CATEGORIES, API_POSTS } from "./const";
import { useNavigate } from "react-router-dom";
export const postContext = createContext();
export const usePost = () => useContext(postContext);

const INIT_STATE = {
  posts: [],
  onePost: {},
  totalPage: 0,
  category: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_POSTS":
      return { ...state, posts: action.payload };
    case "GET_ONE_POST":
      return { ...state, onePost: action.payload };
    case "GET_TOTAL_PAGE":
      return { ...state, totalPage: action.payload };
    case "GET_CATEGORIES":
      return { ...state, category: action.payload };
    default:
      return state;
  }
}
