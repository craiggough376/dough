import React from "react";
import { useSelector } from "../context";

export default function PlayerStats() {
  const { player } = useSelector((state) => state);
  const Table = () => {
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Weapon</th>
            <th>Health</th>
          </tr>
          <tr>
            <td>{player.name}</td>
            <td>{Object.keys(player.weapon)}</td>
            <td>{player.health}</td>
          </tr>
        </tbody>
      </table>
    );
  };
  return <>{player.name ? <Table /> : null}</>;
}
