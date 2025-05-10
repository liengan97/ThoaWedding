import React from "react";
import Heartbeat from "../Heartbeat/Heartbeat";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="text-lg font-bold text-blue-600 animate-pulse">
        <Heartbeat />
      </div>
    </div>
  );
};

export default LoadingScreen;