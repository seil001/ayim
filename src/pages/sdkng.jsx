// import React, { useState } from "react";

// function PostForm({ onAddPost }) {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Создать новый пост
//     const newPost = {
//       title,
//       content,
//     };

//     // Отправить пост родительскому компоненту
//     onAddPost(newPost);

//     // Очистить поля формы
//     setTitle("");
//     setContent("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Заголовок"
//         value={title}
//         onChange={(event) => setTitle(event.target.value)}
//       />
//       <textarea
//         placeholder="Содержимое"
//         value={content}
//         onChange={(event) => setContent(event.target.value)}
//       />
//       <button type="submit">Создать пост</button>
//     </form>
//   );
// }

// export default PostForm;
