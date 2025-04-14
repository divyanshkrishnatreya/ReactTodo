import React from "react";
import { Card, CardContent, Typography, Checkbox, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import "./TodoItem.css";

export function TodoItem({ todo, remove, toggle }) {
  // Define priority colors based on the priority level
  const priorityColors = {
    1: "#D3F9D8", // Pastel Green – Very Low Priority
    2: "#FFF9C4", // Pastel Yellow – Low Priority
    3: "#FFE0B2", // Soft Orange – Medium Priority
    4: "#FFCCBC", // Light Coral – High Priority
    5: "#F8BBD0", // Pastel Pink – Critical Priority    
  };

  // Define priority icons (optional, just in case you want to keep the icons for future reference)
  const priorityIcons = {
    1: <PriorityHighIcon color="success" />,
    2: <PriorityHighIcon color="success" />,
    3: <PriorityHighIcon color="warning" />,
    4: <PriorityHighIcon color="error" />,
    5: <PriorityHighIcon color="error" />,
  };

  return (
    <Card
      className="todo-card"
      sx={{
        flexWrap: "nowrap",
        backgroundColor: priorityColors[todo.priority], // Set the background color based on priority
      }}
    >
      <CardContent>
        <Box id="component-box" display="flex" justifyContent="space-between" alignItems="center" flexDirection="row">
          <Checkbox checked={todo.isCompleted} onChange={toggle} />
          <Typography
            variant="h6"
            className={todo.isCompleted ? "completed-task" : ""}
            sx={{
              flexGrow: 1,
              textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
          >
            {todo.task}
          </Typography>
          <IconButton onClick={remove}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
