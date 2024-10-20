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
                    35.33833333, 134.19875000, 0,
                    35.33854167, 134.19875000, 0,
                    35.33875000, 134.19875000, 0,
                    35.33895833, 134.19875000, 0,
                    35.33916667, 134.19875000, 0,
                    35.33937500, 134.19875000, 0,
                    35.33937500, 134.19843750, 0,
                    35.33916667, 134.19843750, 0,
                    35.33895833, 134.19843750, 0,
                    35.33875000, 134.19843750, 0,
                    35.33854167, 134.19843750, 0,
                    35.33833333, 134.19843750, 0,
                    35.33833333, 134.19875000]),
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