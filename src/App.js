import React, { useState } from "react";
import trashIcon from "./trash.svg";

function App() {
  const [taskInput, updateTaskInput] = useState("");
  const [toDoList, updateToDoList] = useState([]);

  const addNote = () => {
    toDoList.push({ description: taskInput });
    updateToDoList(toDoList);
    updateTaskInput("");
  };

  const deleteTask = (index) => {
    const newList = toDoList.filter((item, i) => i != index);
    updateToDoList("newList");
  };

  return (
    <div className="app-background">
      <p className="heading-text">Planing Management App</p>

      <div className="task-container">
        <div>
          <input
            className="text-input"
            placeholder="Write a task"
            value={taskInput}
            onChange={(event) => updateTaskInput(event.target.value)}
          />
          <button className="add-button" type="submit" onClick={addNote}>
            ADD
          </button>
        </div>
        {toDoList?.length ? (
          toDoList.map((toDoObject, index) => (
            <ListItem
              index={index}
              itemData={toDoObject}
              deleteTask={deleteTask}
            />
          ))
        ) : (
          <p className="no-item-text">No tasks added.</p>
        )}
      </div>

      <p className="footer-text">
        Developed by <a href="https://www.linkedin.com/in/neoguru/">Oleg</a>{" "}
        <a href="https://github.com/dev-from-cbd">Gribanov</a>
      </p>
    </div>
  );
}

function ListItem(props) {
  return (
    <div className="list-item row jc-space-between">
      <span clastName="list-item">{props.itemData.description}</span>

      <img className="delete-icon" src={trashIcon} />
    </div>
  );
}

export default App;
