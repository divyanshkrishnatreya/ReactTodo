import React, { useState } from "react";
import {
  ListItem,
  TextField,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { StyledRating } from "./components/PrioritySlider.jsx";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

export const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState(2);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text, priority);
    setText("");
    setPriority(2);
  };

  return (
    <ListItem>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            width: "100%",
          }}
        >
          {/* Text Field taking ~80% width */}
          <Box sx={{ flexGrow: 1 }}>
            <TextField
              fullWidth
              label="Add a task"
              variant="outlined"
              onChange={handleChange}
              value={text}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" type="submit">
                      <AddTaskIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Priority rating next to the text field */}
          <Box sx={{ whiteSpace: "nowrap" }}>
            <p>Priority:</p>
            <StyledRating
              name="priority"
              value={priority}
              onChange={(event, newValue) => {
                if (newValue !== null) {
                  setPriority(newValue);
                }
              }}
              IconContainerComponent={({ value, ...other }) => (
                <span {...other}>
                  {
                    {
                      1: <PriorityHighIcon color="success" />,
                      2: <PriorityHighIcon color="success" />,
                      3: <PriorityHighIcon color="warning" />,
                      4: <PriorityHighIcon color="error" />,
                      5: <PriorityHighIcon color="error" />,
                    }[value]
                  }
                </span>
              )}
              getLabelText={(value) =>
                ({
                  1: "eh",
                  2: "hmm",
                  3: "Important!",
                  4: "Real Shit",
                  5: "Top priority!",
                }[value])
              }
              highlightSelectedOnly
            />
          </Box>
        </Box>
      </form>
    </ListItem>
  );
};
