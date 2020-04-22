import React from "react";
import { useSelector } from "../context";
import ProgressBar from "./ProgressBar";
import StatTable from "./StatTable";
import "./Enemy.css";

export default function Enemy({ css }) {
  const { enemy } = useSelector((state) => state);

  return (
    <div className={css ? "enemy-attack" : null}>
      <p>A wild {enemy.name} has appeared!!</p>

      <StatTable character={enemy} />
      <ProgressBar enemy={enemy} />
    </div>
  );
}
