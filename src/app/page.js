"use client";

import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Board from "./components/Board";
import styles from "./page.module.css";

export default function Home() {
  const [board, setBoard] = useState([]);
  const [knightPosition, setKnightPosition] = useState(null);

  useEffect(() => {
    createBoard();
  }, []);

  function createBoard() {
    const arr = [];
    const rows = 10;
    const cols = 10;

    for (let i = 0; i < rows; i++) {
      arr[i] = [];
      for (let j = 0; j < cols; j++) {
        arr[i][j] = { id: uuidv4(), row: i, col: j };
      }
    }

    setBoard(arr);
  }

  function moveKnight(square) {
    const { row, col } = square;
    // TODO: call checkValidMove before setting new position
    setKnightPosition({ row, col });
  }

  function checkValidMove() {
    // TODO: check if it's valid for the user to move to the clicked square
  }

  return (
    <div className={styles.page}>
      <Board board={board} moveKnight={moveKnight} />
    </div>
  );
}
