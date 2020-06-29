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
  const [showBlockButton, setShowBlockButton] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [boxPosition, setBoxPosition] = useState([]);
  const [reactionSpeed, setReactionSpeed] = useState(0.75);

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

  // useEffect(() => {
  //   debugger;
  //   function enemyAttack() {
  //     while (enemy.health > 0) {
  //       const randomTime = Math.floor(Math.random() * (4000 - 1000) + 1000);
  //       console.log(randomTime);
  //     }
  //   }
  //   enemyAttack();
  // }, [enemy]);

  const randomTime = Math.floor(Math.random() * (4000 - 1000) + 1000);

  function waitForEnemy() {
    setTimeout(function () {
      setShowEnemy(true);
      setTimeout(function () {
        setShowButton(true);
      }, 1000);
    }, randomTime);
  }

  function playerTakeDamage(damageAmount) {
    const health = (player.health -= damageAmount);
    if (player.health <= 0) {
      dispatch({ type: "SET_HEALTH", data: 0 });
      navigate("/dead");
    }
    dispatch({
      type: "SET_HEALTH",
      data: health,
    });
    setShowButton(true);
  }

  function startTimeAttack() {
    const time = Math.random() * 5000;

    setTimeout(function () {
      setShowBlockButton(true);
      const beginTime = Date.now();
      console.log(beginTime);
      setStartTime(beginTime);
      randomBoxPosition();
    }, time);
  }

  function blockAttack() {
    // setShowAttack(false);
    const clickedTime = Date.now();
    const reactionTime = (clickedTime - startTime) / 1000;
    // setScore(reactionTime);
    console.log(reactionTime);
    if (reactionTime < reactionSpeed) {
      attackEnemy(player.weapon.damage);
    } else {
      playerTakeDamage(enemy.weapon.damage);
    }
    setShowBlockButton(false);
    if (enemy.health > 0) {
      startTimeAttack();
    }
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
      // setTimeout(function () {
      //   playerTakeDamage(enemy.weapon.damage);
      //   setShowEnemyAttack(false);
      // }, 1000);
    }
  }

  function randomBoxPosition() {
    const top = Math.floor(Math.random() * 65);
    const left = Math.floor(Math.random() * 90);
    const randomPositions = [top, left];
    setBoxPosition(randomPositions);
  }

  waitForEnemy();

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
                // attackEnemy(player.weapon.damage);
                startTimeAttack();
              }}
            >
              Begin Round!
            </button>
          ) : null}
          <div className="arena-box">
            {showBlockButton ? (
              <div
                className="reaction-box"
                onClick={blockAttack}
                style={{
                  top: boxPosition[0] + "%",
                  left: boxPosition[1] + "%",
                }}
              ></div>
            ) : null}
          </div>
        </>
      ) : null}
    </div>
  );
}
