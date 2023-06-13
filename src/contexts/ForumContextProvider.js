import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { API_CATEGORIES, API_POSTS } from "./const";
import { useNavigate } from "react-router-dom";
export const forumContext = createContext();
export const useForum = () => useContext(useForum);

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
    case "GET_CATEGORY":
      return { ...state, category: action.payload };
    default:
      return state;
  }
}

function getAuth() {
  const token = JSON.parse(localStorage.getItem("token"));
  const Authorization = `Bearer ${token.access}`;
  const config = {
    headers: {
      Authorization,
    },
  };
  return config;
}
const ForumContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  const getPosts = async () => {
    try {
      const config = getAuth();
      const res = await axios(`${API_POSTS}/${window.location.search}`, config);
      console.warn(res.data.results);
      dispatch({
        type: "GET_POSTS",
        payload: res.data.results,
      });
      dispatch({
        type: "GET_TOTAL_PAGE",
        payload: Math.ceil(res.data.count / 5),
      });
    } catch (error) {
      console.log(error);
    }
  };

  async function addPost(post) {
    try {
      const config = getAuth();
      const res = await axios.post(`${API_POSTS}/`, post, config);
      navigate("/forum");
    } catch (error) {
      console.log(error);
    }
  }

  async function getCategories() {
    try {
      const res = await axios(`${API_CATEGORIES}`);
      dispatch({
        type: "GET_CATEGORY",
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getOnePost(id) {
    try {
      const res = await axios(`${API_POSTS}/${id}`);
      dispatch({
        type: "GET_ONE_POST",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const values = {
    posts: state.posts,
    category: state.category,
    totalPage: state.totalPage,
    addPost,
    getCategories,
    getPosts,
    getOnePost,
  };
  return (
    <div>
      <forumContext.Provider value={values}>{children}</forumContext.Provider>{" "}
    </div>
  );
};

export default ForumContextProvider;
