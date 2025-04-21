import { useState } from "react";
import { v4 as uuid } from "uuid";
import Button from "./Button";

const Addtask = ({ task, setTask, setAll }) => {
  const handleChange = (event) => {
    setTask(event.target.value);
    console.log(event.target.value);
  };

  const handleAdd = () => {
    const randomId = uuid();
    if (task === "") {
      alert("Please enter a task name");
      return;
    }

    setAll((prev) => [
      ...prev,
      { taskName: task, taskChecked: false, id: randomId },
    ]);
    setTask("");
  };

  const handleClear = () => {
    setTask("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 5,
        justifyContent: "center",
        width: "100%",
        maxWidth: 345,
      }}
    >
      <input
        style={{
          height: "40px",
          border: "0.3px solid grey",
          width: "100%",
          maxWidth: 280,
          borderRadius: "6px",
          padding: "0 10px",
        }}
        id="task-id"
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={handleChange}
        aria-label="Add a new task"
      />
      <Button onClick={handleAdd} text="Add" backgroundColor="#3C82F6" />
      <Button onClick={handleClear} text="clear" backgroundColor="#3C82F6" />
    </div>
  );
};

export default Addtask;
