'use client';

import { useEffect, useRef } from 'react';
import * as Cesium from 'cesium';

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5N2UyMjcwOS00MDY1LTQxYjEtYjZjMy00YTU0ZTg5MmViYWQiLCJpZCI6ODAzMDYsImlhdCI6MTY0Mjc0ODI2MX0.dkwAL1CcljUV7NA7fDbhXXnmyZQU_c-G5zRx8PtEcxE';

export default function Home() {
  const cesiumContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cesiumContainerRef.current) {
      Cesium.createWorldTerrainAsync().then(terrainProvider => {
        if (cesiumContainerRef.current) {
          const viewer = new Cesium.Viewer(cesiumContainerRef.current, {
            terrainProvider: terrainProvider,
          });

          return () => {
            viewer.destroy();
          };
        }
      });
    }
  }, []);

  return (
    <div>
      <div
        ref={cesiumContainerRef}
        className="cesium-container"
        style={{ width: '100%', height: '100vh', position: 'absolute' }}
      />
    </div>
  );
}