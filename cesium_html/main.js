// Cesium ionのアクセストークン（公式に記載があったものを使用しています）
//自前で発行したToken
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4N2M1ZTYxYy1lMDRmLTQwMDItOTI4Mi00M2NkYmEwMjJlYTkiLCJpZCI6MjQ2MTcwLCJpYXQiOjE3MjgxODIzMTV9.38c9GT46xjS21MSl_APZ8CTxKoUyq5KpOkqc7RFYLbI

Cesium.Ion.defaultAccessToken = Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5N2UyMjcwOS00MDY1LTQxYjEtYjZjMy00YTU0ZTg5MmViYWQiLCJpZCI6ODAzMDYsImlhdCI6MTY0Mjc0ODI2MX0.dkwAL1CcljUV7NA7fDbhXXnmyZQU_c-G5zRx8PtEcxE';
// Cesium ViewerをcesiumContainerというIDのHTML要素に初期化
// Terrainの指定（EGM96、国土数値情報5m標高から生成した全国の地形モデル、5m標高データが無い場所は10m標高で補完している）
var viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: new Cesium.CesiumTerrainProvider({
        url: Cesium.IonResource.fromAssetId(770371),
    }),
});

// PLATEAU-Orthoの参照
var imageProvider = new Cesium.UrlTemplateImageryProvider({
    url: 'https://gic-plateau.s3.ap-northeast-1.amazonaws.com/2020/ortho/tiles/{z}/{x}/{y}.png',
    maximumLevel: 19,
});
var current_image = viewer.scene.imageryLayers.addImageryProvider(imageProvider);

// 神奈川県横浜市の建物データ（3D Tiles）
var your_3d_tiles = viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
        url: 'https://assets.cms.plateau.reearth.io/assets/3e/0338f0-82ba-4c36-811b-f755b8f9a4dc/34100_hirosima-shi_city_2022_citygml_3_op_bldg_3dtiles_34102_higashi-ku_lod3_no_texture/tileset.json',
    })
);
// 初期表示時のカメラ位置
viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(139.63148565, 35.4545858, 10000.0),
});
