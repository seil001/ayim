// import React, { useContext, useState } from "react";
// import { forumContext } from "../contexts/ForumContextProvider";
// import { Container } from "@mui/system";
// import { TextField, Button } from "@mui/material";

// const Forum = () => {
//   const { addTheme } = useContext(forumContext);
//   // console.log(addPost);

//   const initPost = {
//     title: "",
//     description: "",
//     image: "",
//     category: "",
//   };

//   const [post, setPost] = useState(initTheme);
//   console.log(theme, "theme");

//   function handleAddTheme(e) {
//     let obj = {
//       ...theme,
//       [e.target.name]: e.target.value,
//     };
//     setTheme(obj);
//     console.log(obj, "obj");
//   }

//   function saveTheme() {
//     addTheme(theme);
//   }

//   return (
//     <Container>
//       <div
//         style={{
//           display: "flex",
//           margin: "50px auto",
//           width: "40%",
//           flexDirection: "column",
//           marginTop: "180px",
//         }}
//       >
//         <TextField
//           style={{ margin: "10px" }}
//           type="text"
//           name="title"
//           value={theme.title}
//           onChange={handleAddTheme}
//           placeholder="Title"
//         />
//         <TextField
//           style={{ margin: "10px" }}
//           type="text"
//           name="description"
//           value={theme.description}
//           onChange={handleAddTheme}
//           placeholder="Description"
//         />
//         <TextField
//           style={{ margin: "10px" }}
//           type="text"
//           name="image"
//           value={theme.image}
//           onChange={handleAddTheme}
//           placeholder="Image"
//         />
//         <TextField
//           style={{ margin: "10px" }}
//           type="text"
//           name="category"
//           value={theme.category}
//           onChange={handleAddTheme}
//           placeholder="Category"
//         />
//         <Button variant="contained" onClick={saveTheme}>
//           Добавить
//         </Button>
//       </div>
//     </Container>
//   );
// };
// export default Forum;
