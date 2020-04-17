import React from "react";
import { useSelector } from "../context";

export default function StatTable({ character }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Weapon</th>
          <th>Health</th>
        </tr>
        <tr>
          <td>{character.name}</td>
          <td>{character.weapon.name}</td>
          <td>{character.health}</td>
        </tr>
      </tbody>
    </table>
  );
}
