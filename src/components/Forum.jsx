import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { forumContext } from "../contexts/ForumContextProvider";
import { useEffect } from "react";
import AdminPage from "../pages/AdminPage";
import { useState } from "react";
import { Box } from "@mui/material";
import styles from "./Forum.modul.css";
import { Link } from "react-router-dom";
import ay2 from "../assets/ay2.jpeg";
import AddPostBtn from "../pages/CreatePostBtn";

export default function Forum() {
  const { category, getCategories } = useContext(forumContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <AddPostBtn />
      </div>
      {category.map((item, index) => (
        // <Card maxWidth={800} key={item.title} value={item.title}>
        //   {item.title}
        <Card
          sx={{
            marginTop: 30,
            maxWidth: 550,
            height: 140,
            margin: 4,
            display: "flex",
          }}
          key={index}
        >
          <CardMedia
            sx={{}}
            component="img"
            // alt="green iguana"
            height="140"
            image={ay2}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/post">
              <Button size="small">Перейти на страницу</Button>
            </Link>
          </CardActions>
        </Card>
      ))}{" "}
    </div>
  );
}
{
  /* <form
        // onSubmit={(e) => handleSubmit(e)}
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <TextField style={{ margin: "10px" }} title={formValue.title} />
        <TextField style={{ margin: "10px" }} body={formValue.body} />
      </form> */
}

{
  /* <AdminPage title={title} /> */
}
