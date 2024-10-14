import { ViewerContext } from './Viewer';
import { useEffect, useContext } from 'react';
//importしたい機能を「,」の後に追記してください
import { UrlTemplateImageryProvider, Cartesian3, Color } from 'cesium';

export const Poligon: React.FC = () => {
    const viewer = useContext(ViewerContext);

    useEffect(() => {
        if (viewer?.isDestroyed() !== false) {
            return;
        }
        //ここから先に追記(中身を削除して)
        var polygon = viewer.entities.add({
            name: "福井県庁",
            description: "ここは福井県庁です。",
            polygon: {
                hierarchy: Cartesian3.fromDegreesArrayHeights([
                    136.220266, 36.066095, 0,
                    136.220287, 36.063848, 0,
                    136.221542, 36.063857, 0,
                    136.222444, 36.063978, 0,
                    136.222529, 36.064239, 0,
                    136.223495, 36.064516, 0,
                    136.223238, 36.065704, 0,
                    136.223034, 36.065722, 0,
                    136.222948, 36.066190, 0,
                    136.222315, 36.066138, 0,
                    136.221435, 36.066216, 0]),
                extrudedHeight: 333.0,
                width: 5,
                material: Color.RED.withAlpha(0.5),
                outline: true,
                outlineColor: Color.BLACK
            }
        });
    }, [viewer]);

    return null;
};
//最後はApp.tsxにモジュールを読み込ませてください
//例
//import {template_viewer} from './template_viewer'