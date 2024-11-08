import React, { useEffect, useState } from 'react'
import { Camera } from './Setting/Camera'
import { Clock } from './Setting/Clock'
import { Lighting } from './Setting/Lighting'
import { Viewer } from './Viewer'
//1.Plateau公式の地図,2.地質調査総合センター図 3.ハザードマップ図
import { PlateauOrtho } from './MapLayer/PlateauOrtho'
import { GeologicalSurveyData } from './MapLayer/GeologicalSurveyData'
import { HazardMapData } from './MapLayer/HazardMapData'
import { PlateauTerrain } from './Setting/PlateauTerrain'
import { PlateauModelLatest } from './PlateauModelLatest'
import {OpenChiriinchizu} from './MapLayer/OpenChiriinchizu'
import { Pointer,PointerProps} from './Pointer'
import { JsoWriter } from './JsoWriter'

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
      <Viewer>
        {lists.map((list) => (
          <li key={list.id}>
            <Pointer longitude={list.longitude} latitude={list.latitude} altitude={list.altitude} names={list.name}/>
          </li>
        ))}
        <Camera />
        <Clock />
        <Lighting />
        <PlateauTerrain />
        <OpenChiriinchizu />
        <JsoWriter />
        <HazardMapData path='https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_pref_data/34/{z}/{x}/{y}.png' />
        <PlateauModelLatest path='https://assets.cms.plateau.reearth.io/assets/cb/7bac72-24c1-4901-b1f4-9373e2feb738/34100_hirosima-shi_city_2022_citygml_3_op_bldg_3dtiles_34102_higashi-ku_lod2' />
        <PlateauModelLatest path='https://assets.cms.plateau.reearth.io/assets/5d/e5c519-682e-43fc-9bbb-744b8dd665ba/34100_hirosima-shi_city_2022_citygml_3_op_bldg_3dtiles_34103_minami-ku_lod2' />
        <PlateauModelLatest path='https://assets.cms.plateau.reearth.io/assets/a6/2ab468-91d9-4f5b-bdb2-058037d6e257/34100_hirosima-shi_city_2022_citygml_3_op_bldg_3dtiles_34105_asaminami-ku_lod1' />
      </Viewer>
    </>
  )
}
