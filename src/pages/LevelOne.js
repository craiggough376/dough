import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "../context";
import Enemies from "../data/enemies";
import Enemy from "../components/Enemy";

export default function LevelOne() {
  const player = useSelector((state) => state.player);
  const [showEnemy, setShowEnemy] = useState(false);
  useEffect(() => {
    getRandomEnemy();
  }, []);

  const dispatch = useDispatch();

  function getRandomEnemy() {
    const random = Math.floor(
      Math.random() * Math.floor(Enemies.enemies.length)
    );
    const randomEnemy = Enemies.enemies[random];
    dispatch({ type: "SET_ENEMY", data: randomEnemy });
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
      {showEnemy ? <Enemy /> : null}
    </>
  );
}
