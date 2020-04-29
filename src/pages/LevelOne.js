import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "../context/Index.js";
import Enemies from "../data/enemies";
import Enemy from "../components/Enemy";
import { navigate } from "@reach/router";
import "./LevelOne.css";

export default function LevelOne() {
  const { player, enemy } = useSelector((state) => state);
  const [showEnemy, setShowEnemy] = useState(false);
  const [showEnemyAttack, setShowEnemyAttack] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    waitForEnemy();
    function playerTakeDamage(enemy) {
      setInterval(() => {
        if (enemy.health > 0) {
          const health = (player.health -= enemy.weapon.damage);
          dispatch({
            type: "SET_HEALTH",
            data: health,
          });
        }
      }, 4000);
    }
    function promiseFunction() {
      Promise.resolve(getRandomEnemy()).then((enemy) =>
        playerTakeDamage(enemy)
      );
    }
    function getRandomEnemy() {
      const random = Math.floor(
        Math.random() * Math.floor(Enemies.enemies.length)
      );
      const randomEnemy = Enemies.enemies[random];
      dispatch({ type: "SET_ENEMY", data: randomEnemy });
      return randomEnemy;
    }
    promiseFunction();
  }, [dispatch, player]);

  function waitForEnemy() {
    setTimeout(function () {
      setShowEnemy(true);
      setTimeout(function () {
        setShowButton(true);
      }, 1000);
    }, 1000);
    console.log("SETTIMEOUT");
  }

  function attackEnemy(amount) {
    if (player.health <= 0) {
      dispatch({ type: "SET_HEALTH", data: 0 });
      navigate("/dead");
    }
    setShowButton(false);
    const health = (enemy.health -= amount);
    dispatch({ type: "SET_ENEMY_HEALTH", data: health });
    if (enemy.health <= 0) {
      const experience = (player.experiencePoints += enemy.experienceGiven);
      dispatch({
        type: "SET_EXPERIENCE",
        data: experience,
      });
      navigate("/level_two");
    } else {
      setShowEnemyAttack(true);
      setTimeout(function () {
        //   // playerTakeDamage(enemy.weapon.damage);
        setShowButton(true);
      }, 1000);
    }
  }

  const heal = () => {
    let health = player.potion.healthAmount + player.health;
    if (health > player.originalHealth) {
      health = player.originalHealth;
    }
    dispatch({ type: "SET_HEALTH", data: health });
  };

  return (
    <div className="enemy-container">
      <p>Greetings {player.name}</p>
      {showEnemy ? (
        <>
          <Enemy css={showEnemyAttack} />

          {showEnemyAttack ? <p>Enemy Attacks!!</p> : null}

          {showButton ? (
            <button
              onClick={() => {
                attackEnemy(player.weapon.damage);
              }}
            >
              Attack Enemy!!
            </button>
          ) : null}
          {player.potion ? <button onClick={heal}>Heal</button> : null}
        </>
      ) : null}
    </div>
  );
}
