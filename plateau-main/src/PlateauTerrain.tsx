import { ViewerContext } from './Viewer';
import { useEffect, useContext } from 'react';
import { CesiumTerrainProvider, IonResource } from 'cesium';

export const PlateauTerrain: React.FC = () => {
    const viewer = useContext(ViewerContext);

    useEffect(() => {
        if (viewer?.isDestroyed() !== false) {
            return;
        }

        // https://github.com/Project-PLATEAU/plateau-streaming-tutorial/blob/main/terrain/plateau-terrain-streaming.md
        CesiumTerrainProvider.fromUrl(IonResource.fromAssetId(770371), {
            requestVertexNormals: true,
            requestWaterMask: true
        }).then(terrainProvider => {
            viewer.terrainProvider = terrainProvider;
        }).catch(error => {
            console.error('Failed to create terrain provider:', error);
        });
    }, [viewer]);

    return null;
};