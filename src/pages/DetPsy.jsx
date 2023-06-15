import React, { useState } from "react";
import AddPostBtn from "./CreatePostBtn";

function DetPsy() {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost) => {
    // Добавить новый пост в список
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      {/* <PostForm onAddPost={handleAddPost} />
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default DetPsy;
