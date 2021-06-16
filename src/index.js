import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Example(props) {
  const [count, setCount] = useState(true);
  const [name, setName] = useState("");

  const onNameChange = (e) => setName(e.target.value); //pass in events value

  useEffect(() => {
    document.title = `the title ${count} ----`;
  });

  return (
    <div>
      <p>
        {document.title}You clicked {count.toString()} {name} times
      </p>
      <button onClick={() => setCount(!count)}>Click me</button>

      <input
        onChange={onNameChange}
        value={name}
        type="text"
        name="name"
        placeholder="Friend's Name"
      />
    </div>
  );
}

ReactDOM.render(
  <>
    <Example name="john" />
    <Example name="Nathan" />
  </>,

  document.getElementById("root")
);
