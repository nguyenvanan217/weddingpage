import React from "react";
import Snowfall from "react-snowfall";

const SnowEffect = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        zIndex: 100,
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
    >
      <Snowfall snowflakeCount={40} speed={[0.5, 1]} />
    </div>
  );
};

export default SnowEffect;
