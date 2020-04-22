import React from "react";
import ProgressLine from "./ProgressLine";

export default function ProgressBar({ enemy }) {
  const percentageLevel = (enemy.health / enemy.originalHealth) * 100;

  return (
    <ProgressLine
      label="Health"
      visualParts={[
        {
          percentage: `${percentageLevel}%`,
          color: "tan",
        },
      ]}
    />
  );
}
