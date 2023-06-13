import React, { useContext, useState } from "react";
import { forumContext } from "../contexts/ForumContextProvider";
import { Container } from "@mui/system";
import { TextField, Button, Select, MenuItem } from "@mui/material";

const AddPostPage = () => {
  const { addPost } = useContext(forumContext);
  // console.log(addPost);
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
  });

  const handleAddPost = (e) => {
    let obj = {
      ...post,
      [e.target.name]: e.target.value,
    };
    setPost(obj);
    console.log(obj, "obj");
  };

  function savePost() {
    addPost(post);
  }

  return (
    <Container>
      <div
        style={{
          display: "flex",
          margin: "50px auto",
          width: "40%",
          flexDirection: "column",
          marginTop: "180px",
        }}
      >
        <TextField
          style={{ margin: "10px" }}
          type="text"
          name="title"
          value={post.title}
          onChange={handleAddPost}
          placeholder="Title"
        />
        <TextField
          style={{ margin: "10px" }}
          type="text"
          name="description"
          value={post.description}
          onChange={handleAddPost}
          placeholder="Description"
        />
        <TextField
          style={{ margin: "10px" }}
          type="text"
          name="image"
          value={post.image}
          onChange={handleAddPost}
          placeholder="Image"
        />
        <TextField
          style={{ margin: "10px" }}
          type="text"
          name="category"
          value={post.category}
          onChange={handleAddPost}
          placeholder="Category"
        />

        <Button variant="contained" onClick={savePost}>
          Добавить
        </Button>
      </div>
    </Container>
  );
};
export default AddPostPage;
