import { ViewerContext } from './Viewer';
import { useEffect, useContext } from 'react';
//importしたい機能を「,」の後に追記
import { KmlDataSource } from 'cesium';

export const KmlLoder: React.FC = () => {
    const viewer = useContext(ViewerContext);

    useEffect(() => {
        if (viewer?.isDestroyed() !== false) {
            return;
        }
        //ここから先に追記(中身を削除して)
        var positron = KmlDataSource.load('C:\Users\h1\Desktop\Plateau_2024\plateau-main\data\testdata.kml');
        //viewerに渡せます
        viewer.dataSources.add(positron);
    }, [viewer]);

    return null;
};