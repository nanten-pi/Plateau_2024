import React from 'react'
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
import { Pointer } from './Pointer'
export const App: React.FC = () => {
  return (
    <>
    <title>Plateau</title>
    <Viewer>
      <Camera />
      <Clock />
      <Lighting />
      <PlateauTerrain />
      <OpenChiriinchizu />
      <HazardMapData path='https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_pref_data/34/{z}/{x}/{y}.png' />
      <PlateauModelLatest path='https://assets.cms.plateau.reearth.io/assets/cb/7bac72-24c1-4901-b1f4-9373e2feb738/34100_hirosima-shi_city_2022_citygml_3_op_bldg_3dtiles_34102_higashi-ku_lod2' />
      <PlateauModelLatest path='https://assets.cms.plateau.reearth.io/assets/5d/e5c519-682e-43fc-9bbb-744b8dd665ba/34100_hirosima-shi_city_2022_citygml_3_op_bldg_3dtiles_34103_minami-ku_lod2' />
      <PlateauModelLatest path='https://assets.cms.plateau.reearth.io/assets/a6/2ab468-91d9-4f5b-bdb2-058037d6e257/34100_hirosima-shi_city_2022_citygml_3_op_bldg_3dtiles_34105_asaminami-ku_lod1' />
      <Pointer />
    </Viewer>
    </>
  )
}
