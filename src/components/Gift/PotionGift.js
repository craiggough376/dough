import React from "react";
import weapons from "../../data/weapons.json";
import { useDispatch } from "../../context/Index";

export default function PotionGift() {
  const dispatch = useDispatch();
  const potions = weapons.health;
  const randomPotion =
    potions[Math.floor(Math.random() * Math.max(potions.length))];

  function getRandomPotion() {
    dispatch({ type: "SET_POTION", data: randomPotion });
  }
  return <button onClick={getRandomPotion}>Click for Potion Gift</button>;
}
