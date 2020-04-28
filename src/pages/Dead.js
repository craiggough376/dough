import React from "react";
import { useSelector } from "../context/Index";

export default function Dead() {
  const {
    player: { experiencePoints },
  } = useSelector((state) => state);

  return (
    <div>
      <h1>You are Dead</h1>
      <p>Your score is {experiencePoints}</p>
    </div>
  );
}
