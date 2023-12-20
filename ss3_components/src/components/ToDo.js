import React, { useState } from "react";

const Todo = () => {
  const [list, setList] = useState(["Học React"]);
  const [item, setItem] = useState("");

  const handleChange = (event) => {
    const newItem = event.target.value;
    setItem(newItem);
  };

  const handleAddItem = () => {
  if (item !== "") {
    setList(prevList => [...prevList, item]);
    setItem("");
  }
};

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Todo List</h1>
      <input type="text" value={item} onChange={handleChange} />
      <button type="button" onClick={handleAddItem}>
        ADD
      </button>
      <div
        className="table table-striped"
        style={{ position: "absolute", left: "50%" }}
      >
        <table>
          <thead>
            <tr>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;
