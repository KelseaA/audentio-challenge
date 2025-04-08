"use client";

import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import Square from "./Square";
import styles from "../page.module.css";

export default function Board({ board, moveKnight }) {
  const [active, setActive] = useState(false);

  function handleClick(square) {
    moveKnight(square);
    setActive(square);
  }

  return (
    <div className={styles.board}>
      {board.map((row) => {
        return (
          <div className={styles.row} key={uuidv4()}>
            {row.map((square) => {
              return (
                <Square
                  key={square.id}
                  square={square}
                  handleClick={handleClick}
                  active={active}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
