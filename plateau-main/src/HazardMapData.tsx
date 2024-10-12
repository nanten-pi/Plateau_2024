import { ViewerContext } from './Viewer';
import { useEffect, useContext } from 'react';
import { UrlTemplateImageryProvider } from 'cesium';

export const HazardMapData: React.FC = () => {
    const viewer = useContext(ViewerContext);

    useEffect(() => {
        if (viewer?.isDestroyed() !== false) {
            return;
        }
        var positron = new UrlTemplateImageryProvider({
            url: 'https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_pref_data/34/{z}/{x}/{y}.png',
            credit: '重ねるハザードマップ(国土交通省)'
        });
        viewer.scene.imageryLayers.addImageryProvider(positron);
    }, [viewer]);

    return null;
};