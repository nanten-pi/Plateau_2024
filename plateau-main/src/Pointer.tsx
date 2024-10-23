import { ViewerContext } from './Viewer';
import { useEffect, useContext } from 'react';
//importしたい機能を「,」の後に追記
import { Cartesian3, Color} from 'cesium';

export const Pointer: React.FC = () => {
    const viewer = useContext(ViewerContext);

    useEffect(() => {
        if (viewer?.isDestroyed() !== false) {
            return;
        }
        var point = viewer.entities.add({
            name: "福井市", //レイヤ名
            description: "ここは福井市です。",　//レイヤの説明
            //経度,緯度,高さをjsonから読み込みたい...
            position: Cartesian3.fromDegrees(136.223554, 36.061957, 100), //経度,緯度,高さ
            point: {
                pixelSize: 10, //ポイントのサイズ
                color: Color.BLUE //ポイントの色
            }
        });
    }, [viewer]);

    return null;
};
//最後はApp.tsx(のviewer直下)にモジュールを読み込ませてください
//例
//import {template_viewer} from './template_viewer'