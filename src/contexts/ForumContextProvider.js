import React, { createContext, useContext } from "react";

export const forumContext = createContext();
export const useForum = () => useContext(useForum);

const INIT_STATE = {
  post: "",
  newPost: "",
};

const reducer = (state, action) => {};

const ForumContextProvider = ({ children }) => {
  return (
    <div>
      <forumContext.Provider>{children}</forumContext.Provider>{" "}
    </div>
  );
};

export default ForumContextProvider;
