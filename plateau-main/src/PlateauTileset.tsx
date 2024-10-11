import { Cesium3DTileStyle, Cesium3DTileset } from 'cesium'
import React, { useContext, useEffect, useState } from 'react'
 
import { ViewerContext } from './Viewer'
 
export interface PlateauTilesetProps {
  path: string
  color?: string
}
 
export const PlateauTileset: React.FC<PlateauTilesetProps> = ({
  path,
  color = '#ffffff'
}) => {
  const [tileset, setTileset] = useState<Cesium3DTileset>()
  const viewer = useContext(ViewerContext)
  useEffect(() => {
    if (viewer?.isDestroyed() !== false) {
      return
    }
    const tileset = new Cesium3DTileset({
      url: `https://assets.agi.com/stk-terrain/v1/tilesets/${path}/tileset.json`
    })
    viewer.scene.primitives.add(tileset)
    setTileset(tileset)
    return () => {
      if (!viewer.isDestroyed()) {
        viewer.scene.primitives.remove(tileset)
      }
      setTileset(undefined)
    }
  }, [path, viewer])
 
  useEffect(() => {
    if (tileset != null) {
      tileset.style = new Cesium3DTileStyle({
        color: `color("${color}")`
      })
    }
  }, [color, tileset])
 
  return null
}