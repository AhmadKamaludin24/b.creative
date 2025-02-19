import React from "react";


export function GridBackground() {
  return (
    <div
      className="h-screen w-screen z-0 bg-grid-white/[0.040]  absolute top-0 left-0 flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute z-40 pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
    </div>
  );
}
