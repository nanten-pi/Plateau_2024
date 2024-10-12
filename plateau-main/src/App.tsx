import React from 'react'

import { Camera } from './Camera'
import { Clock } from './Clock'
import { Lighting } from './Lighting'
import { PlateauTileset } from './PlateauTileset'
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
      <PlateauModelLatest path='https://assets.cms.plateau.reearth.io/assets/e4/24967c-e7c8-4909-a187-aa7af98f7ae5/34100_hirosima-shi_city_2022_citygml_3_op_bldg_3dtiles_34101_naka-ku_lod2_no_texture/' />
    </Viewer>
  )
}
