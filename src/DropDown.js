import React from "react";

const normalFontSize = "20px";

const stylesMap = [
  {
    title: "Heading 1",
    fontStyle: "normal",
    fontSize: "50px",
  },
  {
    title: "Heading 2",
    fontStyle: "normal",
    fontSize: "30px",
  },
  {
    title: "Italic Text",
    fontStyle: "italic",
    fontSize: normalFontSize,
  },
  {
    title: "Regular Text",
    fontStyle: "normal",
    fontSize: normalFontSize,
  },
];

const DropDown = (props) => {
  return (
    <div
      style={{
        fontSize: props.fontSize,
        cursor: "pointer",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          padding: "0",
        }}
        id={props.id}
      >
        {stylesMap.map((style) => (
          <li key={style.title} onClick={() => props.onClickDropDown(style)}>
            {style.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
