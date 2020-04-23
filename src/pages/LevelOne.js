import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "../context";
import Enemies from "../data/enemies";
import Enemy from "../components/Enemy";
import { navigate } from "@reach/router";
import "./LevelOne.css";

export default function LevelOne() {
  const { player, enemy } = useSelector((state) => state);
  const [showEnemy, setShowEnemy] = useState(false);
  const [showEnemyAttack, setShowEnemyAttack] = useState(false);
  useEffect(() => {
    getRandomEnemy();
    return () => {
      console.log("CLEANUP!");
    };
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
      const experience = (player.experiencePoints += enemy.experienceGiven);
      dispatch({
        type: "SET_EXPERIENCE",
        data: experience,
      });
      navigate("/level_two");
    } else {
      setTimeout(function () {
        setShowEnemyAttack(true);
        setTimeout(function () {
          setShowEnemyAttack(false);
        }, 3000);
        playerTakeDamage(enemy.weapon.damage);
      }, 3000);
    }
  }

  waitForEnemy();

  return (
    <div className="enemy-container">
      <p>Greetings {player.name}</p>
      {showEnemy ? (
        <>
          <Enemy css={showEnemyAttack} />
          {showEnemyAttack ? (
            <p>Enemy Attacks!!</p>
          ) : (
            <button
              onClick={() => {
                attackEnemy(player.weapon.damage);
              }}
            >
              Attack Enemy!!
            </button>
          )}
        </>
      ) : null}
    </div>
  );
}
