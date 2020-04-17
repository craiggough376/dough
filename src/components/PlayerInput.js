import React, { useState } from "react";
import { useDispatch } from "../context";
import { navigate } from "@reach/router";
import Weapons from "../data/weapons.json";

export default function PlayerInput() {
  const dispatch = useDispatch();
  const [weapon, setWeapon] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({
      type: "SET_PLAYER",
      data: {
        name: event.target.name.value,
        weapon,
      },
    });
    navigate("/level_one");
  }

  const weaponOptions = Weapons.attacks.map((weapon, index) => {
    return (
      <option value={index} key={index}>
        {weapon.name}
      </option>
    );
  });

  function handleChange(event) {
    setWeapon(Weapons.attacks[event.target.value]);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name"></input>
        <label htmlFor="weapon">Weapon</label>
        <select onChange={handleChange} defaultValue={"DEFAULT"}>
          <option disabled value="DEFAULT">
            Choose a weapon...
          </option>
          {weaponOptions}
        </select>
        <input type="submit" value="submit"></input>
      </form>
    </>
  );
}
