import React, { useState } from "react";
import { useDispatch } from "../context";
import { navigate } from "@reach/router";
import Weapons from "../data/weapons.json";

export default function PlayerInput() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setName(event.target.name.value);
    dispatch({ type: "SET_NAME", data: event.target.name.value });
    navigate("/level_one");
  }

  const weaponOptions = Weapons.melee.map((weapon) => {
    return <option value={weapon}>{Object.keys(weapon)}</option>;
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name"></input>
        <label htmlFor="weapon">Weapon</label>
        <select>{weaponOptions}</select>
        <input type="submit" value="submit"></input>
      </form>
    </>
  );
}
