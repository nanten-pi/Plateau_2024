import { useEffect, useState, useContext } from 'react';
import { Cesium3DTileset, Cesium3DTileStyle } from 'cesium';
import { ViewerContext } from './Viewer';

interface PlateauTilesetProps {
  path: string;
  color?: string;
}

export const PlateauTileset: React.FC<PlateauTilesetProps> = ({
  path,
  color = '#ffffff'
}) => {
  const [tileset, setTileset] = useState<Cesium3DTileset>();
  const viewer = useContext(ViewerContext);

  useEffect(() => {
    if (viewer?.isDestroyed() !== false) {
      return;
    }
    Cesium3DTileset.fromUrl(`https://plateau.geospatial.jp/main/data/3d-tiles/${path}/tileset.json`)
      .then((tileset) => {
        viewer.scene.primitives.add(tileset);
        setTileset(tileset);
      })
      .catch(error => {
        console.log("Error loading tileset", error);
      });
    return () => {
      if (!viewer.isDestroyed()) {
        viewer.scene.primitives.remove(tileset);
      }
      setTileset(undefined);
    };
  }, [path, viewer]);

  useEffect(() => {
    if (tileset != null) {
      tileset.style = new Cesium3DTileStyle({
        color: `color("${color}")`
      });
    }
  }, [color, tileset]);

  return null;
};