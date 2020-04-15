import React, { useState } from "react";
import { useSelector } from "../context";
import Enemies from "../data/enemies";
import Enemy from "../components/Enemy";

export default function LevelOne() {
  const player = useSelector((state) => state.player);
  const [showEnemy, setShowEnemy] = useState(false);

  function getRandomEnemy() {
    const random = Math.floor(
      Math.random() * Math.floor(Enemies.enemies.length)
    );
    return Enemies.enemies[random];
  }

  function waitForEnemy() {
    setTimeout(function () {
      setShowEnemy(true);
    }, 3000);
  }

  waitForEnemy();

  return (
    <>
      <p>Greetings {player.name}</p>
      {showEnemy ? <Enemy enemy={getRandomEnemy()} /> : null}
    </>
  );
}
