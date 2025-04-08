"use client";

import { useEffect } from "react";

import styles from "../page.module.css";

export default function Square({ square, handleClick, active }) {
  useEffect(() => {
    isSelected();
  }, [active]);

  function isSelected() {
    if (active.col === square.col && active.row === square.row) {
      return true;
    }
    return false;
  }

  return (
    <div
      className={`${styles.square} ${isSelected() && styles.active}`}
      key={square.id}
      onClick={() => handleClick(square)}
    ></div>
  );
}
