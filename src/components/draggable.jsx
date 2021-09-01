import React, { useState, useEffect } from 'react';

import { useDrag } from "react-dnd";

function Draggable(props) {

  const [, drag] = useDrag(() => ({ type: "draggable" }));
  
  console.log(props)
  return (
    <>
      {props.poemLines.map((item, i) => (
        <div key={"block-" + i}>
          {item.lines.map((line, i) => (
            <div key={"line-" + i}>
              {line.split(" ").map((word, i) => (
                <span ref={drag} className="word" key={"word-" + i}>
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default Draggable;