import React from 'react';

import Cesium, { Cartesian3 } from "cesium";
import {
  Viewer,
  Entity,
  PointGraphics,
  EntityDescription,
  Cesium3DTileset,
} from "resium";

function App() {
  let viewer: Cesium.Viewer; // This will be raw Cesium's Viewer object.
  const handleReady = (tileset: Cesium.Cesium3DTileset) => {
    if (viewer) {
      viewer.zoomTo(tileset);
    }
  };
  return (
    <Viewer
      full
      ref={(e) => {
        if (e?.cesiumElement) {
          viewer = e.cesiumElement;
        }
      }}
    >
      <Cesium3DTileset
        url="http://localhost:3000/13102_chuo-ku/tileset.json" // ダウンロードした地図データのパス
        onReady={handleReady}
      />
    </Viewer>
  );
}

export default App;
