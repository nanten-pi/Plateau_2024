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
export const App: React.FC = () => {
  return (
    <>
    <title>Plateau</title>
    <Style />
    </>
  )
}
