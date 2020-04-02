import React from "react";
import Feature from "./feature";

export default function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div>
        <h3>no rooms matched</h3>
      </div>
    );
  }
  return <Feature features={rooms} />;
}
