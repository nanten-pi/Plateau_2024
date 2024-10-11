import React from 'react';
import { Camera } from './Camera';
import { Clock } from './Clock';
import { Lighting } from './Lighting';
import { PlateauTileset } from './PlateauTileset';
import { Viewer } from './Viewer';

export const App: React.FC = () => {
  return (
    <Viewer>
      <Camera />
      <Clock />
      <Lighting />
      <PlateauTileset path='bldg/13100_tokyo/13101_chiyoda-ku/notexture' />
      {/*<PlateauTileset path='bldg/13100_tokyo/13102_chuo-ku/notexture' />*/}
    </Viewer>
  );
};