import { ViewerContext } from './Viewer';
import { useEffect, useContext } from 'react';
//importしたい機能を「,」の後に追記してください
import { UrlTemplateImageryProvider } from 'cesium';

export const template_viewer: React.FC = () => {
    const viewer = useContext(ViewerContext);

    useEffect(() => {
        if (viewer?.isDestroyed() !== false) {
            return;
        }
        //ここから先に追記(中身を削除して)
        var positron = new UrlTemplateImageryProvider({
            url: 'https://gbank.gsj.jp/seamless/v2/api/1.2/tiles/{z}/{y}/{x}.png',
            credit: '地質調査総合センター'
        });
        //viewerに渡せます
        viewer.scene.imageryLayers.addImageryProvider(positron);
    }, [viewer]);

    return null;
};
//最後はApp.tsxにモジュールを読み込ませてください
//例
//import {template_viewer} from './template_viewer'