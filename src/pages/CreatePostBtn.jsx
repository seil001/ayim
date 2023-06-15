import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import Select from "@mui/material";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import FormatBold from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Check from "@mui/icons-material/Check";
import { useState } from "react";
import { useForum } from "../contexts/ForumContextProvider";
import { InputLabel, TextField, Typography } from "@mui/material";

export default function CreatePostBtn() {
  const { addPost, category } = useForum();
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState("normal");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);

  const createPost = {
    title: "",
    body: "",
    // category: "",
  };
  const [userPost, setUserPost] = useState(createPost);
  //   console.log(setUserPost, "SetUserPost");

  const handleChange = (e) => {
    let obj = {
      ...userPost,
      [e.target.name]: e.target.value,
    };
    setUserPost(obj);
  };

  function handleSubmit(e) {
    e.preventDefault();

    addPost(createPost);
  }

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          placeholder="Содержимое"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button type="submit">Создать пост</button>
      </form>
      <Box sx={{ width: "40vw", m: "auto" }}>
        <Typography>Добавить пост</Typography>
        <TextField
          sx={{ m: 1 }}
          label="Title"
          variant="outlined"
          fullWidth
          name="title"
          value={item.title}
          onChange={handleChange}
        />

        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            name="category"
            label="Category"
            value={item.category}
            onChange={handleChange}
          >
            {category.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          sx={{ m: 1 }}
          type="file"
          name="image"
          value={product.image}
          onChange={handleChange}
        />
        <Button
          sx={{ m: 1 }}
          fullWidth
          variant="outlined"
          size="large"
          onClick={handleSave}
        >
          Add Product
        </Button>
      </Box> */}
    </div>
  );
}
{
  /* <FormControl sx={{ maxWidth: 250 }}>
        <Button sx={{ margin: 3 }} onClick={setOpen}>
          <FormLabel>Создать пост</FormLabel>
        </Button>
        {open && (
          <Textarea
            placeholder="Type something here…"
            minRows={3}
            endDecorator={
              <Box
                sx={{
                  display: "flex",
                  gap: "var(--Textarea-paddingBlock)",
                  pt: "var(--Textarea-paddingBlock)",
                  borderTop: "1px solid",
                  borderColor: "divider",
                  flex: "auto",
                }}
              >
                <IconButton
                  variant="plain"
                  color="neutral"
                  onClick={(event) => setAnchorEl(event.currentTarget)}
                >
                  <FormatBold />
                  <KeyboardArrowDown fontSize="md" />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                  size="sm"
                  placement="bottom-start"
                  sx={{ "--ListItemDecorator-size": "24px" }}
                >
                  {["200", "normal", "bold"].map((weight) => (
                    <MenuItem
                      key={weight}
                      selected={fontWeight === weight}
                      onClick={() => {
                        setFontWeight(weight);
                        setAnchorEl(null);
                      }}
                      sx={{ fontWeight: weight }}
                    >
                      <ListItemDecorator>
                        {fontWeight === weight && <Check fontSize="sm" />}
                      </ListItemDecorator>
                      {weight === "200" ? "lighter" : weight}
                    </MenuItem>
                  ))}
                </Menu>
                <IconButton
                  variant={italic ? "soft" : "plain"}
                  color={italic ? "primary" : "neutral"}
                  aria-pressed={italic}
                  onClick={() => setItalic((bool) => !bool)}
                >
                  <FormatItalic />
                </IconButton>
                <Button sx={{ ml: "auto" }}>Отправить</Button>
              </Box>
            }
            sx={{
              minWidth: 300,
              fontWeight,
              fontStyle: italic ? "italic" : "initial",
            }}
          />
        )}
      </FormControl> */
}
