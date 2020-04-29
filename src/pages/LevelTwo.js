import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "../context/Index";
import Enemies from "../data/enemies";
import { Enemy } from "../components";
import { navigate } from "@reach/router";
import "./LevelOne.css";

export default function LevelTwo() {
  const { player, enemy } = useSelector((state) => state);
  const [showEnemy, setShowEnemy] = useState(false);
  const [showEnemyAttack, setShowEnemyAttack] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    function getRandomEnemy() {
      const random = Math.floor(
        Math.random() * Math.floor(Enemies.enemies.length)
      );
      const randomEnemy = Enemies.enemies[random];
      dispatch({ type: "SET_ENEMY", data: randomEnemy });
    }
    getRandomEnemy();
    return () => {
      console.log("CLEANUP!");
    };
  }, [dispatch]);

  function waitForEnemy() {
    setTimeout(function () {
      setShowEnemy(true);
      setTimeout(function () {
        setShowButton(true);
      }, 1000);
    }, 1000);
  }

  function playerTakeDamage(damageAmount) {
    const health = (player.health -= damageAmount);
    dispatch({
      type: "SET_HEALTH",
      data: health,
    });
    setShowButton(true);
  }

  function attackEnemy(amount) {
    setShowButton(false);
    const health = (enemy.health -= amount);
    dispatch({ type: "SET_ENEMY_HEALTH", data: health });
    if (enemy.health <= 0) {
      navigate("/level_two");
    } else if (player.health <= 0) {
      navigate("/dead");
    } else {
      setShowEnemyAttack(true);
      setTimeout(function () {
        playerTakeDamage(enemy.weapon.damage);
        setShowEnemyAttack(false);
      }, 1000);
    }
  }

  waitForEnemy();
  return (
    <div className="enemy-container">
      <p>Greetings {player.name} You've reached Level Two!</p>
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
        </>
      ) : null}
    </div>
  );
}
