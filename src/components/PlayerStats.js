import React from "react";
import { useSelector } from "../context";
import StatTable from "./StatTable";

export default function PlayerStats() {
  const { player } = useSelector((state) => state);
  return <>{player.name ? <StatTable character={player} /> : null}</>;
}
