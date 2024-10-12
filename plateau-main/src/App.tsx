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
      <PlateauTileset path='bldg/340006_hiroshima/341002_hiroshima-shi/notexture' />
    </Viewer>
  )
}
