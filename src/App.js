import React, { useState } from "react";
import trashIcon from "./trash.svg";

function App() {
  const [taskInput, updateTaskInput] = useState("");

  return (
    <div className="app-background">
      <p className="heading-text">Planing Management App</p>

      <div className="task-container">
        <div>
          <input
            className="text-input"
            placeholder="Write a task"
            value={taskInput}
            onChange={updateTaskInput}
          />
          <button className="add-button" type="submit">
            Add
          </button>
        </div>

        <p className="no-item-text">No tasks added.</p>

        <ListItem />
      </div>

      <p className="footer-text">Developed by Oleg Gribanov</p>
    </div>
  );
}

function ListItem(props) {
  return (
    <div className="list-item row jc-space-between">
      <span>List Item</span>

      <img className="delete-icon" src={trashIcon} />
    </div>
  );
}

export default App;
