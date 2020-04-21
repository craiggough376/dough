import React, { useEffect } from "react";
import { useSelector, useDispatch } from "../context";
import StatTable from "./StatTable";
import "./Enemy.css";

export default function Enemy({ css }) {
  const { player, enemy } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect");
  }, [enemy]);

  function playerTakeDamage(damageAmount) {
    const health = (player.health -= damageAmount);
    dispatch({
      type: "SET_HEALTH",
      data: health,
    });
  }
  return (
    <div className={css ? "enemy-attack" : null}>
      <p>A wild {enemy.name} has appeared!!</p>
      <StatTable character={enemy} />
    </div>
  );
}
