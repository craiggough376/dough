import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "../context/Index.js";
import Enemies from "../data/enemies";
import { Enemy } from "../components";
import { navigate } from "@reach/router";
import "./LevelOne.css";

export default function LevelTwo() {
  const { player } = useSelector((state) => state);
  const [roundStarted, setRoundStarted] = useState(false);
  const [showEnemy, setShowEnemy] = useState(false);
  const [enemyPreparing, setEnemyPreparing] = useState(false);
  const [showAttack, setShowAttack] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [score, setScore] = useState(0);
  const [health, setHealth] = useState(10);

  const dispatch = useDispatch();

  const enemy = {
    name: "Idiot",
    health: 200,
    originalHealth: 200,
    weapon: {
      name: "Hugging",
      damage: 10,
    },
  };

  // function getRandomEnemy() {
  //   const random = Math.floor(
  //     Math.random() * Math.floor(Enemies.enemies.length)
  //   );
  //   const randomEnemy = Enemies.enemies[random];
  //   dispatch({ type: "SET_ENEMY", data: randomEnemy });
  //   console.log(enemy);
  //   return randomEnemy;
  // }

  function makeAttack() {
    const time = Math.random() * 5000;

    setTimeout(function () {
      setShowAttack(true);
      const startTime = Date.now();
      setStartTime(startTime);
    }, time);
  }

  function blockAttack() {
    setShowAttack(false);
    const clickedTime = Date.now();
    const reactionTime = (clickedTime - startTime) / 1000;
    setScore(reactionTime);
    console.log(reactionTime);
  }

  // function startEnemyAttack() {
  //   setTimeout(function () {
  //     setEnemyPreparing(true);
  //     setTimeout(function () {
  //       setEnemyPreparing(false);
  //       // attackPlayer();
  //     }, 5000);
  //   }, 2500);
  // }

  // function blockAttack() {
  //   clearInterval(attackPlayer);
  //   console.log("block");
  // }

  // const attackPlayer = setInterval(function () {
  //   console.log(player);
  //   console.log(enemy);

  //   // dispatch({
  //   //   type: "SET_HEALTH",
  //   //   data: player.health -= enemy.weapon.damage,
  //   // });
  // }, 1000);

  // function startRound() {
  //   Promise.resolve(getRandomEnemy()).then(() => {
  //     setRoundStarted(true);
  //     setShowEnemy(true);
  //     startEnemyAttack();
  //   });
  // }

  return (
    <div className="enemy-container">
      <p>Arena</p>
      {/* {roundStarted ? null : (
        <button onClick={startRound}>Click to being fight!</button>
      )} */}
      Enemy Health: {health}
      <button onClick={makeAttack}>Start Round</button>
      {showAttack ? <button onClick={blockAttack}>Block</button> : null}
      {score}
      {/* {showEnemy ? <Enemy /> : null}
      {enemyPreparing ? (
        <p>Enemy is preparing to attack! Get ready to block!</p>
      ) : null} */}
    </div>
  );
}

//Get random enemy
//Make button Begin round
//Read message "enemy is about to attack! Be ready to block"
//attack appears on screen
//
