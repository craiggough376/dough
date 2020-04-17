import React, { useEffect } from "react";
import { useSelector, useDispatch } from "../context";
import StatTable from "./StatTable";

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
      <p>A wild {enemy.name} has appeared!!</p>
      <StatTable character={enemy} />
    </>
  );
}
