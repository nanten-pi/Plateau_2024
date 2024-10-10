// app/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

const accessToken = process.env.NEXT_PUBLIC_CESIUM_TOKEN;

if (!accessToken) {
  throw new Error('NEXT_PUBLIC_CESIUM_TOKEN is not defined');
}

Cesium.Ion.defaultAccessToken = accessToken;

export default function Home() {
  const cesiumContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cesiumContainerRef.current) {
      Cesium.createWorldTerrainAsync().then(terrainProvider => {
        const viewer = new Cesium.Viewer(cesiumContainerRef.current as Element, {
          terrainProvider: terrainProvider,
        });

        return () => {
          viewer.destroy();
        };
      });
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