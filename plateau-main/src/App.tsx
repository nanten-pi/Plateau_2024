import React from 'react'

import { Camera } from './Camera'
import { Clock } from './Clock'
import { Lighting } from './Lighting'
import { Viewer } from './Viewer'
//上はPlateau公式の地図,下は地質調査総合センター図
import { PlateauOrtho } from './PlateauOrtho'
import { GeologicalSurveyData } from './GeologicalSurveyData'
import { PlateauTerrain } from './PlateauTerrain'
import { PlateauModelLatest } from './PlateauModelLatest'
export const App: React.FC = () => {
  return (
    <Viewer>
      <Camera />
      <Clock />
      <Lighting />
      <PlateauTerrain />
      <PlateauOrtho />
      <PlateauModelLatest path='https://assets.cms.plateau.reearth.io/assets/28/dda2f5-309c-4e2a-98f1-3961027ed4e5/34100_hirosima-shi_city_2022_citygml_3_op_bldg_3dtiles_34101_naka-ku_lod2' />
      <PlateauModelLatest path='https://assets.cms.plateau.reearth.io/assets/cb/7bac72-24c1-4901-b1f4-9373e2feb738/34100_hirosima-shi_city_2022_citygml_3_op_bldg_3dtiles_34102_higashi-ku_lod2' />
      <PlateauModelLatest path='https://assets.cms.plateau.reearth.io/assets/5d/e5c519-682e-43fc-9bbb-744b8dd665ba/34100_hirosima-shi_city_2022_citygml_3_op_bldg_3dtiles_34103_minami-ku_lod2' />

    </Viewer>
  )
}
