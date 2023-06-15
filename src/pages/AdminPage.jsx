import React, { useContext, useEffect, useState } from "react";
import { forumContext } from "../contexts/ForumContextProvider";

import { TextField, Button } from "@mui/material";

const AdminPage = () => {
  const { addCategory, getCategories } = useContext(forumContext);
  // console.log(getCategories, "categ");
  // const [formValue, setFormValue] = useState({
  //   title: "",
  //   body: "",
  // });
  useEffect(() => {
    getCategories();
  }, []);

  const addCat = {
    title: "",
    body: "",
  };
  const [adminCategory, setAdminCategory] = useState(addCat);
  console.log(adminCategory, "aC");
  const handleChange = (e) => {
    let obj = {
      ...adminCategory,
      [e.target.name]: e.target.value,
    };
    setAdminCategory(obj);
  };

  function handleSubmit(e) {
    e.preventDefault();

    addCategory(adminCategory);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "8px" }}>Добавить категории</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <TextField
          style={{ margin: "10px" }}
          type="text"
          name="title"
          label="Title"
          value={adminCategory.title}
          onChange={(e) => handleChange(e)}
          placeholder="Title"
        />
        <TextField
          style={{ margin: "10px" }}
          type="text"
          name="body"
          label="Body"
          value={adminCategory.body}
          onChange={(e) => handleChange(e)}
          placeholder="Body"
        />

        <Button
          variant="contained"
          onClick={(e) => handleSubmit(e)}
          // style={{ margin: "5px" }}
          type="submit"
        >
          Добавить
        </Button>
      </form>
    </div>
  );
};
export default AdminPage;
