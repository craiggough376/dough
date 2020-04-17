import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "../context";
import Enemies from "../data/enemies";
import Enemy from "../components/Enemy";
import { navigate } from "@reach/router";

export default function LevelOne() {
  const { player, enemy } = useSelector((state) => state);
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

  function playerTakeDamage(damageAmount) {
    const health = (player.health -= damageAmount);
    dispatch({
      type: "SET_HEALTH",
      data: health,
    });
  }

  function attackEnemy(amount) {
    const health = (enemy.health -= amount);
    dispatch({ type: "SET_ENEMY_HEALTH", data: health });
    if (enemy.health <= 0) {
      navigate("/");
    } else {
      setTimeout(function () {
        playerTakeDamage(enemy.weapon.damage);
      }, 3000);
    }
  }

  waitForEnemy();

  return (
    <>
      <p>Greetings {player.name}</p>
      {showEnemy ? (
        <>
          <Enemy />
          <button
            onClick={() => {
              attackEnemy(player.weapon.damage);
            }}
          >
            Attack Enemy!!
          </button>
        </>
      ) : null}
    </>
  );
}
