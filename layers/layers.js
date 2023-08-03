ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:28191").setExtent([23469.846955, 56445.701432, 351129.847289, 262439.701642]);
var wms_layers = [];

var lyr_ABD_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "ABD",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ABD_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3901224.171635, 3794239.683515, 3901526.294224, 3794624.560643]
                            })
                        });

        var lyr_BingVirtualEarth_1 = new ol.layer.Tile({
            'title': 'Bing Virtual Earth',
            'type': 'base',
            'opacity': 0.714000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_HilshadeQalqilyaTARABOT_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hilshade-Qalqilya-TARABOT",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HilshadeQalqilyaTARABOT_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3890631.664268, 3784678.493504, 3911380.380469, 3796482.721890]
                            })
                        });
var lyr_FilledQalqilyaTARABOT_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Filled-Qalqilya-TARABOT",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FilledQalqilyaTARABOT_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3890418.478377, 3784273.485329, 3911614.351375, 3796879.559937]
                            })
                        });

        var lyr_OSMStandard_5 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_clippedstrahlerqalq_6 = new ol.format.GeoJSON();
var features_clippedstrahlerqalq_6 = format_clippedstrahlerqalq_6.readFeatures(json_clippedstrahlerqalq_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_clippedstrahlerqalq_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedstrahlerqalq_6.addFeatures(features_clippedstrahlerqalq_6);
var lyr_clippedstrahlerqalq_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_clippedstrahlerqalq_6, 
                style: style_clippedstrahlerqalq_6,
                interactive: true,
                title: '<img src="styles/legend/clippedstrahlerqalq_6.png" /> clipped-strahler-qalq'
            });
var format_VectorChannelsQalqilya_7 = new ol.format.GeoJSON();
var features_VectorChannelsQalqilya_7 = format_VectorChannelsQalqilya_7.readFeatures(json_VectorChannelsQalqilya_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_VectorChannelsQalqilya_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorChannelsQalqilya_7.addFeatures(features_VectorChannelsQalqilya_7);
var lyr_VectorChannelsQalqilya_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorChannelsQalqilya_7, 
                style: style_VectorChannelsQalqilya_7,
                interactive: true,
                title: '<img src="styles/legend/VectorChannelsQalqilya_7.png" /> Vector-Channels-Qalqilya'
            });
var format_channelsQalqilyaTARABOT_8 = new ol.format.GeoJSON();
var features_channelsQalqilyaTARABOT_8 = format_channelsQalqilyaTARABOT_8.readFeatures(json_channelsQalqilyaTARABOT_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_channelsQalqilyaTARABOT_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_channelsQalqilyaTARABOT_8.addFeatures(features_channelsQalqilyaTARABOT_8);
var lyr_channelsQalqilyaTARABOT_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_channelsQalqilyaTARABOT_8, 
                style: style_channelsQalqilyaTARABOT_8,
                interactive: true,
                title: '<img src="styles/legend/channelsQalqilyaTARABOT_8.png" /> channels-Qalqilya-TARABOT'
            });
var format_ClippedQalqiyacatchmentvectorTARABOT_9 = new ol.format.GeoJSON();
var features_ClippedQalqiyacatchmentvectorTARABOT_9 = format_ClippedQalqiyacatchmentvectorTARABOT_9.readFeatures(json_ClippedQalqiyacatchmentvectorTARABOT_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_ClippedQalqiyacatchmentvectorTARABOT_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClippedQalqiyacatchmentvectorTARABOT_9.addFeatures(features_ClippedQalqiyacatchmentvectorTARABOT_9);
var lyr_ClippedQalqiyacatchmentvectorTARABOT_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ClippedQalqiyacatchmentvectorTARABOT_9, 
                style: style_ClippedQalqiyacatchmentvectorTARABOT_9,
                interactive: true,
                title: '<img src="styles/legend/ClippedQalqiyacatchmentvectorTARABOT_9.png" /> Clipped-Qalqiya-catchment-vector -TARABOT'
            });
var format_ContourLinesTARABOT_10 = new ol.format.GeoJSON();
var features_ContourLinesTARABOT_10 = format_ContourLinesTARABOT_10.readFeatures(json_ContourLinesTARABOT_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_ContourLinesTARABOT_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourLinesTARABOT_10.addFeatures(features_ContourLinesTARABOT_10);
var lyr_ContourLinesTARABOT_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ContourLinesTARABOT_10, 
                style: style_ContourLinesTARABOT_10,
                interactive: true,
                title: '<img src="styles/legend/ContourLinesTARABOT_10.png" /> Contour-Lines-TARABOT '
            });
var format_AreaABC_11 = new ol.format.GeoJSON();
var features_AreaABC_11 = format_AreaABC_11.readFeatures(json_AreaABC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_AreaABC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaABC_11.addFeatures(features_AreaABC_11);
var lyr_AreaABC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaABC_11, 
                style: style_AreaABC_11,
                interactive: true,
    title: 'Area-A-B-C-<br />\
    <img src="styles/legend/AreaABC_11_0.png" /> Area A<br />\
    <img src="styles/legend/AreaABC_11_1.png" /> Area B<br />\
    <img src="styles/legend/AreaABC_11_2.png" /> Area C<br />\
    <img src="styles/legend/AreaABC_11_3.png" /> Area H1<br />\
    <img src="styles/legend/AreaABC_11_4.png" /> Area H2<br />\
    <img src="styles/legend/AreaABC_11_5.png" /> Natural Reserves<br />\
    <img src="styles/legend/AreaABC_11_6.png" /> <br />'
        });
var format_Districts_12 = new ol.format.GeoJSON();
var features_Districts_12 = format_Districts_12.readFeatures(json_Districts_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_Districts_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Districts_12.addFeatures(features_Districts_12);
var lyr_Districts_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Districts_12, 
                style: style_Districts_12,
                interactive: true,
    title: 'Districts<br />\
    <img src="styles/legend/Districts_12_0.png" /> Bethlehem<br />\
    <img src="styles/legend/Districts_12_1.png" /> Hebron<br />\
    <img src="styles/legend/Districts_12_2.png" /> Jenin<br />\
    <img src="styles/legend/Districts_12_3.png" /> Jericho<br />\
    <img src="styles/legend/Districts_12_4.png" /> Jerusalem<br />\
    <img src="styles/legend/Districts_12_5.png" /> Nablus<br />\
    <img src="styles/legend/Districts_12_6.png" /> Qalqiliya<br />\
    <img src="styles/legend/Districts_12_7.png" /> Ramallah and Al-Bireh<br />\
    <img src="styles/legend/Districts_12_8.png" /> Salfit<br />\
    <img src="styles/legend/Districts_12_9.png" /> Tubas<br />\
    <img src="styles/legend/Districts_12_10.png" /> Tulkarm<br />'
        });
var format_WestBankGazaBorder_13 = new ol.format.GeoJSON();
var features_WestBankGazaBorder_13 = format_WestBankGazaBorder_13.readFeatures(json_WestBankGazaBorder_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_WestBankGazaBorder_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WestBankGazaBorder_13.addFeatures(features_WestBankGazaBorder_13);
var lyr_WestBankGazaBorder_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WestBankGazaBorder_13, 
                style: style_WestBankGazaBorder_13,
                interactive: true,
                title: '<img src="styles/legend/WestBankGazaBorder_13.png" /> West Bank-Gaza-Border'
            });
var format_GroumdwaterWellsTARABOT_14 = new ol.format.GeoJSON();
var features_GroumdwaterWellsTARABOT_14 = format_GroumdwaterWellsTARABOT_14.readFeatures(json_GroumdwaterWellsTARABOT_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_GroumdwaterWellsTARABOT_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroumdwaterWellsTARABOT_14.addFeatures(features_GroumdwaterWellsTARABOT_14);
var lyr_GroumdwaterWellsTARABOT_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GroumdwaterWellsTARABOT_14, 
                style: style_GroumdwaterWellsTARABOT_14,
                interactive: true,
                title: '<img src="styles/legend/GroumdwaterWellsTARABOT_14.png" /> Groumdwater Wells-TARABOT'
            });
var format_TankNewLocationTARABOT_15 = new ol.format.GeoJSON();
var features_TankNewLocationTARABOT_15 = format_TankNewLocationTARABOT_15.readFeatures(json_TankNewLocationTARABOT_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_TankNewLocationTARABOT_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TankNewLocationTARABOT_15.addFeatures(features_TankNewLocationTARABOT_15);
var lyr_TankNewLocationTARABOT_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TankNewLocationTARABOT_15, 
                style: style_TankNewLocationTARABOT_15,
                interactive: true,
                title: '<img src="styles/legend/TankNewLocationTARABOT_15.png" /> Tank-New Location-TARABOT'
            });
var format_WBuffer_16 = new ol.format.GeoJSON();
var features_WBuffer_16 = format_WBuffer_16.readFeatures(json_WBuffer_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_WBuffer_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WBuffer_16.addFeatures(features_WBuffer_16);
var lyr_WBuffer_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WBuffer_16, 
                style: style_WBuffer_16,
                interactive: true,
                title: '<img src="styles/legend/WBuffer_16.png" /> W-Buffer'
            });
var format_WallQalqilya_17 = new ol.format.GeoJSON();
var features_WallQalqilya_17 = format_WallQalqilya_17.readFeatures(json_WallQalqilya_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_WallQalqilya_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WallQalqilya_17.addFeatures(features_WallQalqilya_17);
var lyr_WallQalqilya_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WallQalqilya_17, 
                style: style_WallQalqilya_17,
                interactive: true,
                title: '<img src="styles/legend/WallQalqilya_17.png" /> Wall-Qalqilya'
            });
var format_RoadsBufferTARABOT_18 = new ol.format.GeoJSON();
var features_RoadsBufferTARABOT_18 = format_RoadsBufferTARABOT_18.readFeatures(json_RoadsBufferTARABOT_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_RoadsBufferTARABOT_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadsBufferTARABOT_18.addFeatures(features_RoadsBufferTARABOT_18);
var lyr_RoadsBufferTARABOT_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RoadsBufferTARABOT_18, 
                style: style_RoadsBufferTARABOT_18,
                interactive: true,
                title: '<img src="styles/legend/RoadsBufferTARABOT_18.png" /> Roads  Buffer-TARABOT'
            });
var format_DirtRoadsTARABOT_19 = new ol.format.GeoJSON();
var features_DirtRoadsTARABOT_19 = format_DirtRoadsTARABOT_19.readFeatures(json_DirtRoadsTARABOT_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_DirtRoadsTARABOT_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DirtRoadsTARABOT_19.addFeatures(features_DirtRoadsTARABOT_19);
var lyr_DirtRoadsTARABOT_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DirtRoadsTARABOT_19, 
                style: style_DirtRoadsTARABOT_19,
                interactive: true,
                title: '<img src="styles/legend/DirtRoadsTARABOT_19.png" /> Dirt Roads-TARABOT'
            });
var format_TragetareaTARABOT_20 = new ol.format.GeoJSON();
var features_TragetareaTARABOT_20 = format_TragetareaTARABOT_20.readFeatures(json_TragetareaTARABOT_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_TragetareaTARABOT_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TragetareaTARABOT_20.addFeatures(features_TragetareaTARABOT_20);
var lyr_TragetareaTARABOT_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TragetareaTARABOT_20, 
                style: style_TragetareaTARABOT_20,
                interactive: true,
                title: '<img src="styles/legend/TragetareaTARABOT_20.png" /> Traget area -TARABOT'
            });
var format_Workallpipesproposed_21 = new ol.format.GeoJSON();
var features_Workallpipesproposed_21 = format_Workallpipesproposed_21.readFeatures(json_Workallpipesproposed_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_Workallpipesproposed_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Workallpipesproposed_21.addFeatures(features_Workallpipesproposed_21);
var lyr_Workallpipesproposed_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Workallpipesproposed_21, 
                style: style_Workallpipesproposed_21,
                interactive: true,
                title: '<img src="styles/legend/Workallpipesproposed_21.png" /> Work all pipes-proposed'
            });
var format_WorklandParcelsTARABOT_22 = new ol.format.GeoJSON();
var features_WorklandParcelsTARABOT_22 = format_WorklandParcelsTARABOT_22.readFeatures(json_WorklandParcelsTARABOT_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_WorklandParcelsTARABOT_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WorklandParcelsTARABOT_22.addFeatures(features_WorklandParcelsTARABOT_22);
var lyr_WorklandParcelsTARABOT_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WorklandParcelsTARABOT_22, 
                style: style_WorklandParcelsTARABOT_22,
                interactive: true,
    title: 'Workland Parcels -TARABOT<br />\
    <img src="styles/legend/WorklandParcelsTARABOT_22_0.png" /> Al-Adas<br />\
    <img src="styles/legend/WorklandParcelsTARABOT_22_1.png" /> Al-Stooh<br />\
    <img src="styles/legend/WorklandParcelsTARABOT_22_2.png" /> Moroj<br />'
        });
var format_PipesPhase1TARABOT_23 = new ol.format.GeoJSON();
var features_PipesPhase1TARABOT_23 = format_PipesPhase1TARABOT_23.readFeatures(json_PipesPhase1TARABOT_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_PipesPhase1TARABOT_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PipesPhase1TARABOT_23.addFeatures(features_PipesPhase1TARABOT_23);
var lyr_PipesPhase1TARABOT_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PipesPhase1TARABOT_23, 
                style: style_PipesPhase1TARABOT_23,
                interactive: true,
                title: '<img src="styles/legend/PipesPhase1TARABOT_23.png" /> Pipes Phase 1 -TARABOT'
            });
var format_Lables_24 = new ol.format.GeoJSON();
var features_Lables_24 = format_Lables_24.readFeatures(json_Lables_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_Lables_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lables_24.addFeatures(features_Lables_24);
var lyr_Lables_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lables_24, 
                style: style_Lables_24,
                interactive: true,
                title: '<img src="styles/legend/Lables_24.png" /> Lables'
            });
var lyr_ProjectLogoPHGTARABOT_25 = new ol.layer.Image({
                            opacity: 1,
                            title: "Project Logo-PHG-TARABOT",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ProjectLogoPHGTARABOT_25.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3880932.573511, 3776098.806049, 3917541.338519, 3814303.305547]
                            })
                        });
var group_WaterActivityPHGUNDPTARABOT = new ol.layer.Group({
                                layers: [lyr_ABD_0,lyr_BingVirtualEarth_1,lyr_GoogleSatelliteHybrid_2,lyr_HilshadeQalqilyaTARABOT_3,lyr_FilledQalqilyaTARABOT_4,lyr_OSMStandard_5,lyr_clippedstrahlerqalq_6,lyr_VectorChannelsQalqilya_7,lyr_channelsQalqilyaTARABOT_8,lyr_ClippedQalqiyacatchmentvectorTARABOT_9,lyr_ContourLinesTARABOT_10,lyr_AreaABC_11,lyr_Districts_12,lyr_WestBankGazaBorder_13,lyr_GroumdwaterWellsTARABOT_14,lyr_TankNewLocationTARABOT_15,lyr_WBuffer_16,lyr_WallQalqilya_17,lyr_RoadsBufferTARABOT_18,lyr_DirtRoadsTARABOT_19,lyr_TragetareaTARABOT_20,lyr_Workallpipesproposed_21,lyr_WorklandParcelsTARABOT_22,lyr_PipesPhase1TARABOT_23,lyr_Lables_24,lyr_ProjectLogoPHGTARABOT_25,],
                                title: "Water Activity-PHG-UNDP TARABOT"});

lyr_ABD_0.setVisible(true);lyr_BingVirtualEarth_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_HilshadeQalqilyaTARABOT_3.setVisible(true);lyr_FilledQalqilyaTARABOT_4.setVisible(true);lyr_OSMStandard_5.setVisible(true);lyr_clippedstrahlerqalq_6.setVisible(true);lyr_VectorChannelsQalqilya_7.setVisible(true);lyr_channelsQalqilyaTARABOT_8.setVisible(true);lyr_ClippedQalqiyacatchmentvectorTARABOT_9.setVisible(true);lyr_ContourLinesTARABOT_10.setVisible(true);lyr_AreaABC_11.setVisible(true);lyr_Districts_12.setVisible(true);lyr_WestBankGazaBorder_13.setVisible(true);lyr_GroumdwaterWellsTARABOT_14.setVisible(true);lyr_TankNewLocationTARABOT_15.setVisible(true);lyr_WBuffer_16.setVisible(true);lyr_WallQalqilya_17.setVisible(true);lyr_RoadsBufferTARABOT_18.setVisible(true);lyr_DirtRoadsTARABOT_19.setVisible(true);lyr_TragetareaTARABOT_20.setVisible(true);lyr_Workallpipesproposed_21.setVisible(true);lyr_WorklandParcelsTARABOT_22.setVisible(true);lyr_PipesPhase1TARABOT_23.setVisible(true);lyr_Lables_24.setVisible(true);lyr_ProjectLogoPHGTARABOT_25.setVisible(true);
var layersList = [group_WaterActivityPHGUNDPTARABOT];
lyr_clippedstrahlerqalq_6.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_VectorChannelsQalqilya_7.set('fieldAliases', {'DN': 'DN', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', });
lyr_channelsQalqilyaTARABOT_8.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_ClippedQalqiyacatchmentvectorTARABOT_9.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_ContourLinesTARABOT_10.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_AreaABC_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LandClassi': 'LandClassi', 'LandClas_1': 'LandClas_1', 'LandClas_2': 'LandClas_2', 'LandClas_3': 'LandClas_3', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Districts_12.set('fieldAliases', {'ID': 'ID', 'AREA': 'AREA', 'TEST': 'TEST', 'SUMID': 'SUMID', 'SUMAREA': 'SUMAREA', 'SUMAREA1': 'SUMAREA1', 'SUMPERIMET': 'SUMPERIMET', 'SUMDIST_ID': 'SUMDIST_ID', 'SUMSUBREG_': 'SUMSUBREG_', 'SUMVILLAGE': 'SUMVILLAGE', 'SUMTRAFFIC': 'SUMTRAFFIC', 'SUMPCBS_ID': 'SUMPCBS_ID', 'SUMTEST': 'SUMTEST', 'ENAME': 'ENAME', 'N-Name': 'N-Name', });
lyr_WestBankGazaBorder_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Area': 'Area', 'Location': 'Location', });
lyr_GroumdwaterWellsTARABOT_14.set('fieldAliases', {'id': 'id', 'Well Name': 'Well Name', 'Well Id': 'Well Id', 'Depth (m)': 'Depth (m)', '(m3/hr)': '(m3/hr)', 'X-coord': 'X-coord', 'Y-Coord': 'Y-Coord', 'No.Farmers': 'No.Farmers', 'Area(dun)': 'Area(dun)', });
lyr_TankNewLocationTARABOT_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Size (m3)': 'Size (m3)', });
lyr_WBuffer_16.set('fieldAliases', {'id': 'id', 'Length': 'Length', });
lyr_WallQalqilya_17.set('fieldAliases', {'id': 'id', 'Length': 'Length', 'Name': 'Name', });
lyr_RoadsBufferTARABOT_18.set('fieldAliases', {'id': 'id', 'Road Name': 'Road Name', 'Class': 'Class', 'Status': 'Status', 'Main Work': 'Main Work', 'Length (m)': 'Length (m)', });
lyr_DirtRoadsTARABOT_19.set('fieldAliases', {'id': 'id', 'Road Name': 'Road Name', 'Class': 'Class', 'Status': 'Status', 'Main Work': 'Main Work', 'Length (m)': 'Length (m)', });
lyr_TragetareaTARABOT_20.set('fieldAliases', {'id': 'id', 'Target': 'Target', });
lyr_Workallpipesproposed_21.set('fieldAliases', {'Segment': 'Segment', 'X': 'X', 'Y': 'Y', 'Length': 'Length', 'Name': 'Name', 'layer': 'layer', 'path': 'path', });
lyr_WorklandParcelsTARABOT_22.set('fieldAliases', {'symbolId': 'symbolId', 'Name': 'Name', 'Area (dun)': 'Area (dun)', });
lyr_PipesPhase1TARABOT_23.set('fieldAliases', {'Segment': 'Segment', 'X': 'X', 'Y': 'Y', 'Length': 'Length', 'Name': 'Name', 'layer': 'layer', 'path': 'path', });
lyr_Lables_24.set('fieldAliases', {'id': 'id', 'Lables': 'Lables', 'X-coord': 'X-coord', 'Y-Coord': 'Y-Coord', 'PHOTOS': 'phg-PHOTOS', });
lyr_clippedstrahlerqalq_6.set('fieldImages', {'SEGMENT_ID': '', 'NODE_A': '', 'NODE_B': '', 'BASIN': '', 'ORDER': '', 'ORDER_CELL': '', 'LENGTH': '', });
lyr_VectorChannelsQalqilya_7.set('fieldImages', {'DN': 'Range', 'AREA': 'Range', 'PERIMETER': 'Range', });
lyr_channelsQalqilyaTARABOT_8.set('fieldImages', {'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_ClippedQalqiyacatchmentvectorTARABOT_9.set('fieldImages', {'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_ContourLinesTARABOT_10.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_AreaABC_11.set('fieldImages', {'OBJECTID': 'Range', 'LandClassi': 'TextEdit', 'LandClas_1': 'TextEdit', 'LandClas_2': 'TextEdit', 'LandClas_3': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Districts_12.set('fieldImages', {'ID': 'TextEdit', 'AREA': 'TextEdit', 'TEST': 'TextEdit', 'SUMID': 'TextEdit', 'SUMAREA': 'TextEdit', 'SUMAREA1': 'TextEdit', 'SUMPERIMET': 'TextEdit', 'SUMDIST_ID': 'TextEdit', 'SUMSUBREG_': 'TextEdit', 'SUMVILLAGE': 'TextEdit', 'SUMTRAFFIC': 'TextEdit', 'SUMPCBS_ID': 'TextEdit', 'SUMTEST': 'TextEdit', 'ENAME': 'TextEdit', 'N-Name': 'TextEdit', });
lyr_WestBankGazaBorder_13.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Area': 'TextEdit', 'Location': 'TextEdit', });
lyr_GroumdwaterWellsTARABOT_14.set('fieldImages', {'id': 'TextEdit', 'Well Name': 'TextEdit', 'Well Id': 'TextEdit', 'Depth (m)': 'TextEdit', '(m3/hr)': 'TextEdit', 'X-coord': 'TextEdit', 'Y-Coord': 'TextEdit', 'No.Farmers': 'TextEdit', 'Area(dun)': 'TextEdit', });
lyr_TankNewLocationTARABOT_15.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Size (m3)': 'TextEdit', });
lyr_WBuffer_16.set('fieldImages', {'id': 'TextEdit', 'Length': 'TextEdit', });
lyr_WallQalqilya_17.set('fieldImages', {'id': 'TextEdit', 'Length': 'TextEdit', 'Name': 'TextEdit', });
lyr_RoadsBufferTARABOT_18.set('fieldImages', {'id': 'TextEdit', 'Road Name': 'TextEdit', 'Class': 'TextEdit', 'Status': 'TextEdit', 'Main Work': 'TextEdit', 'Length (m)': 'TextEdit', });
lyr_DirtRoadsTARABOT_19.set('fieldImages', {'id': 'TextEdit', 'Road Name': 'TextEdit', 'Class': 'TextEdit', 'Status': 'TextEdit', 'Main Work': 'TextEdit', 'Length (m)': 'Range', });
lyr_TragetareaTARABOT_20.set('fieldImages', {'id': 'TextEdit', 'Target': 'TextEdit', });
lyr_Workallpipesproposed_21.set('fieldImages', {'Segment': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Length': 'TextEdit', 'Name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_WorklandParcelsTARABOT_22.set('fieldImages', {'symbolId': 'TextEdit', 'Name': 'TextEdit', 'Area (dun)': 'TextEdit', });
lyr_PipesPhase1TARABOT_23.set('fieldImages', {'Segment': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Length': 'TextEdit', 'Name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Lables_24.set('fieldImages', {'id': 'TextEdit', 'Lables': 'TextEdit', 'X-coord': 'TextEdit', 'Y-Coord': 'TextEdit', 'PHOTOS': 'ExternalResource', });
lyr_clippedstrahlerqalq_6.set('fieldLabels', {});
lyr_VectorChannelsQalqilya_7.set('fieldLabels', {});
lyr_channelsQalqilyaTARABOT_8.set('fieldLabels', {});
lyr_ClippedQalqiyacatchmentvectorTARABOT_9.set('fieldLabels', {});
lyr_ContourLinesTARABOT_10.set('fieldLabels', {});
lyr_AreaABC_11.set('fieldLabels', {});
lyr_Districts_12.set('fieldLabels', {});
lyr_WestBankGazaBorder_13.set('fieldLabels', {});
lyr_GroumdwaterWellsTARABOT_14.set('fieldLabels', {});
lyr_TankNewLocationTARABOT_15.set('fieldLabels', {});
lyr_WBuffer_16.set('fieldLabels', {});
lyr_WallQalqilya_17.set('fieldLabels', {});
lyr_RoadsBufferTARABOT_18.set('fieldLabels', {});
lyr_DirtRoadsTARABOT_19.set('fieldLabels', {});
lyr_TragetareaTARABOT_20.set('fieldLabels', {});
lyr_Workallpipesproposed_21.set('fieldLabels', {});
lyr_WorklandParcelsTARABOT_22.set('fieldLabels', {});
lyr_PipesPhase1TARABOT_23.set('fieldLabels', {});
lyr_Lables_24.set('fieldLabels', {});
lyr_Lables_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});