import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ tileData }) => {
  return (
    <div>
      {tileData.map((data, i) => {
        const { name, ...rest } = data;
        return <Tile key={i} name={name} description={rest} />;
      })}
    </div>
  );
};
