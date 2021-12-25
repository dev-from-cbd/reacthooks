import React from "react";
import trashIcon from "./trash.svg";

function ListItem(props) {
  return (
    <div className="list-item row jc-space-between">
      <span>List Item</span>

      <img className="delete-icon" src={trashIcon} />
    </div>
  );
}

function App() {
  return (
    <div className="app-background">
      <p className="heading-text">Planing Management App</p>

      <div className="task-container">
        <div>
          <input className="text-input" placeholder="Write a task" />
          <button className="add-button" type="submit">
            Add
          </button>
        </div>

        <p className="no-item-text">No tasks added.</p>

        <ListItem />
      </div>
    </div>
  );
}

export default App;
