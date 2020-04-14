import React from "react";
import { useSelector } from "../context";

export default function LevelOne() {
  const player = useSelector((state) => state.player);
  return <p>Greetings {player.name}</p>;
}
