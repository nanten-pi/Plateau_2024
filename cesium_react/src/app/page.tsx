// app/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import { Ion, Viewer } from 'cesium';

Ion.defaultAccessToken = process.env.NEXT_PUBLIC_CESIUM_TOKEN;

export default function Home() {
  const cesiumContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cesiumContainerRef.current) {
      const viewer = new Viewer(cesiumContainerRef.current, {
        terrainProvider: Cesium.createWorldTerrain(),
      });

      return () => {
        viewer.destroy();
      };
    }
  }, []);

  return (
    <div>
      <div
        ref={cesiumContainerRef}
        style={{ width: '100%', height: '100vh', position: 'absolute' }}
      />
    </div>
  );
}
