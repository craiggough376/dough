import React from "react";
import PlayerInput from "../components/PlayerInput";
import PotionGift from "../components/Gift/PotionGift";

export default function MainContainer() {
  return (
    <>
      <h1>Covidventure!</h1>
      <PlayerInput />
      <PotionGift />
    </>
  );
}
