import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { TodoItem } from "./TodoItem";
import { TodoForm } from "./TodoForm";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import "./TodoList.css";

const initialTodo = [
  {
    id: uuid(),
    task: "Walk The Fish",
    priority: 4,
    isCompleted: true,
  },
];

export function TodoList() {
  const [todo, setTodo] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : initialTodo;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const removeTodo = (id) =>
    setTodo((current) => current.filter((t) => t.id !== id));

  const toggleTodo = (id) =>
    setTodo((current) =>
      current.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );

  const addTodo = (text, priority) => {
    setTodo((current) => [
      ...current,
      {
        id: uuid(),
        task: text,
        priority: priority || 0,
        isCompleted: false,
      },
    ]);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(todo);
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);
  setTodo(reordered)
}

  return (
    <div className="todo-list-container">
      <h2 className="todo-list-heading">TODO WHAT TODO!</h2>

      <TodoForm addTodo={addTodo} />

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <Grid
              container
              spacing={2}
              className="todo-grid"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {todo.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TodoItem
                        todo={item}
                        remove={() => removeTodo(item.id)}
                        toggle={() => toggleTodo(item.id)}
                      />
                    </Grid>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
