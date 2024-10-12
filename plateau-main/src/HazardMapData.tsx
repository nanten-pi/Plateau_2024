import { ViewerContext } from './Viewer';
import { useEffect, useContext } from 'react';
import { UrlTemplateImageryProvider } from 'cesium';
interface HazardMapProps {
    path: string;
}
export const HazardMapData: React.FC<HazardMapProps> = ({
    path
}) => {
    const viewer = useContext(ViewerContext);

    useEffect(() => {
        if (viewer?.isDestroyed() !== false) {
            return;
        }
        var positron = new UrlTemplateImageryProvider({
            url: path,
            credit: '重ねるハザードマップ(国土交通省)'
        });
        viewer.scene.imageryLayers.addImageryProvider(positron);
    }, [viewer]);

    return null;
};