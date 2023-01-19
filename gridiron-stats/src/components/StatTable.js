import React from "react";
import "./StatTable.css"

function StatTable(props) {
    // console.log(props.stats.player_name[0].name)
    let data = [...props.stats.player_name];
    let keys = Object.keys(data[0]);
    return (
      <div>
        <table className="table ">
          <thead>
            <tr>
                <th>Rank </th>
              {keys.map((key) => (
                <th>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((player) => (
            <tr>
              <td>{player.name}</td>
              <td>{player.team}</td>
              <td>{player.position}</td>
              <td>{player.receptions}</td>
              <td>{player.targets}</td>
              <td>{player.yards}</td>
              <td>{player.touchdowns}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default StatTable;