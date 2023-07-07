import backgroundWaves from "./wave.svg";

import React from "react";

const BackgroundWaves: React.FC = () => {
  // Lógica e código do componente BackgroundWaves

  return (
    <img
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: -1,
      }}
      src={backgroundWaves}
      alt=" Background Waves"
    />
  );
};

export default BackgroundWaves;
