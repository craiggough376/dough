import React from "react";

export default function StatTable({ character }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Weapon</th>
          <th>Health</th>
          {character.experiencePoints >= 0 ? <th>Experience</th> : null}
          {character.potion ? <th>Potion</th> : null}
        </tr>
        <tr>
          <td>{character.name}</td>
          <td>{character.weapon.name}</td>
          <td>{character.health}</td>
          {character.experiencePoints >= 0 ? (
            <td>{character.experiencePoints}</td>
          ) : null}
          {character.potion ? <td>{character.potion.name}</td> : null}
        </tr>
      </tbody>
    </table>
  );
}
