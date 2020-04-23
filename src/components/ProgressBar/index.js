import React from "react";
import ProgressLine from "./ProgressLine";

export default function ProgressBar({ character }) {
  const percentageLevel = (character.health / character.originalHealth) * 100;
  const percentageColour = () => {
    if (percentageLevel >= 80) {
      return "green";
    } else if (percentageLevel >= 40) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <ProgressLine
      label="Health"
      visualParts={[
        {
          percentage: `${percentageLevel}%`,
          color: percentageColour(),
        },
      ]}
    />
  );
}
