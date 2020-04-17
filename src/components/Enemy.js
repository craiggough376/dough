import React, { useEffect } from "react";
import { useSelector, useDispatch } from "../context";

export default function Enemy() {
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
    <>
      <p>A wild {enemy.type} has appeared!!</p>
      <button onClick={() => playerTakeDamage(enemy.weapon.damage)}>
        Attack Player!
      </button>
    </>
  );
}
