import React from "react";
import { useSelector } from "../context/Index";
import StatTable from "./StatTable";
import ProgressBar from "./ProgressBar";
export default function PlayerStats() {
  const { player } = useSelector((state) => state);
  return (
    <>
      {player.name ? (
        <>
          <StatTable character={player} /> <ProgressBar character={player} />
        </>
      ) : null}
    </>
  );
}
