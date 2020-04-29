import React from "react";
// import ProgressBar from "./ProgressBar";
// import StatTable from "./StatTable";
import { ProgressBar, StatTable } from "./index";
import "./Enemy.css";
import { useSelector } from "../context/Index";

export default function Enemy({ css }) {
  const { enemy } = useSelector((state) => state);

  return (
    <div className={css ? "enemy-attack" : null}>
      <p>A wild {enemy.name} has appeared!!</p>

      <StatTable character={enemy} />
      <ProgressBar character={enemy} />
    </div>
  );
}
