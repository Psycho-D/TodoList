import React, { useState } from "react";

function App() {
  const [list, addItem] = useState([]);
  const [item, setItem] = useState("");

  const handleChange = (e) => {
    const item = e.target.value;
    setItem(item);
  };

  const handleClick = () => {
    addItem([...list, item]);
    setItem("");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
