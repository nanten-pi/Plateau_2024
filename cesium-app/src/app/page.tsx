'use client';

import { useEffect, useRef } from 'react';
import { Viewer } from 'cesium';

export default function Page() {
  const cesiumContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewer = new Viewer(cesiumContainer.current!);

    return () => {
      viewer.destroy();
    };
  }, []);

  return <div ref={cesiumContainer} style={{ width: '100%', height: '100vh' }} />;
}
