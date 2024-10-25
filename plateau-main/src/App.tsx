import React, { useEffect, useState } from 'react'
import { Style } from './Style'
import { Camera } from './Camera'
import { Clock } from './Clock'
import { Lighting } from './Lighting'
import { Viewer } from './Viewer'
//1.Plateau公式の地図,2.地質調査総合センター図 3.ハザードマップ図
import { PlateauOrtho } from './PlateauOrtho'
import { GeologicalSurveyData } from './GeologicalSurveyData'
import { HazardMapData } from './HazardMapData'
import { PlateauTerrain } from './PlateauTerrain'
import { PlateauModelLatest } from './PlateauModelLatest'
import {OpenChiriinchizu} from './OpenChiriinchizu'
import { ToolBar } from './ToolBar'
import { ST } from 'next/dist/shared/lib/utils'
import { Poligon } from './Poligon'
import { KmlLoder } from './KmlLoder'
import { Pointer,PointerProps} from './Pointer'
import Fetch from './JsoReader'

export const App: React.FC = () => {

  interface ListItem {
    id: number;
    name: string;
    longitude: number;
    latitude: number;
    altitude: number;
  }

  const [lists, setLists] = useState<ListItem[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/lists') // Express APIのエンドポイント
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setLists(data.lists); // APIのデータをStateにセット/ ローディング状態を解除
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <>
    <title>Plateau</title>
    <div>

    </div>
      <Style />
    </>
  )
}
