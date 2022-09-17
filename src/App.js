import "./App.css";
import { useState } from "react";
import React from "react";
import DropDown from "./DropDown";

function App() {
  const [placeholder, setPlaceholder] = useState("Type '/' for commands");
  const [fontSize, setFontSize] = useState("20px");
  const [fontStyle, setFontStyle] = useState("normal");
  const [visibility, setVisibility] = useState(false);
  const [val, setVal] = useState("");

  const onClickDropDown = (st) => {
    setVal("");
    setPlaceholder(st.title);
    setFontSize(st.fontSize);
    setFontStyle(st.fontStyle);
    setVisibility(false);
  };

  const inputHandler = (event) => {
    if (event.target.value === "/") {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
    setVal(event.target.value);
  };

  return (
    <div className="App">
      <p>Mini Notion</p>
      <input
        onChange={inputHandler}
        placeholder={placeholder}
        value={val}
        style={{
          fontSize: fontSize,
          fontStyle: fontStyle,
        }}
      />
      {visibility && (
        <DropDown fontSize={fontSize} onClickDropDown={onClickDropDown} />
      )}
    </div>
  );
}

export default App;
