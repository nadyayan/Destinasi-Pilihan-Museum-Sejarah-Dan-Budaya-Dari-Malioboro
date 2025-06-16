var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_MalioboroMDiponegoro_1 = new ol.format.GeoJSON();
var features_MalioboroMDiponegoro_1 = format_MalioboroMDiponegoro_1.readFeatures(json_MalioboroMDiponegoro_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MalioboroMDiponegoro_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MalioboroMDiponegoro_1.addFeatures(features_MalioboroMDiponegoro_1);
var lyr_MalioboroMDiponegoro_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MalioboroMDiponegoro_1, 
                style: style_MalioboroMDiponegoro_1,
                popuplayertitle: 'Malioboro - M. Diponegoro',
                interactive: true,
                title: '<img src="styles/legend/MalioboroMDiponegoro_1.png" /> Malioboro - M. Diponegoro'
            });
var format_MalioboroMSandi_2 = new ol.format.GeoJSON();
var features_MalioboroMSandi_2 = format_MalioboroMSandi_2.readFeatures(json_MalioboroMSandi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MalioboroMSandi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MalioboroMSandi_2.addFeatures(features_MalioboroMSandi_2);
var lyr_MalioboroMSandi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MalioboroMSandi_2, 
                style: style_MalioboroMSandi_2,
                popuplayertitle: 'Malioboro - M. Sandi',
                interactive: true,
                title: '<img src="styles/legend/MalioboroMSandi_2.png" /> Malioboro - M. Sandi'
            });
var format_MalioboroMYogyaKembali_3 = new ol.format.GeoJSON();
var features_MalioboroMYogyaKembali_3 = format_MalioboroMYogyaKembali_3.readFeatures(json_MalioboroMYogyaKembali_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MalioboroMYogyaKembali_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MalioboroMYogyaKembali_3.addFeatures(features_MalioboroMYogyaKembali_3);
var lyr_MalioboroMYogyaKembali_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MalioboroMYogyaKembali_3, 
                style: style_MalioboroMYogyaKembali_3,
                popuplayertitle: 'Malioboro - M. Yogya Kembali',
                interactive: true,
                title: '<img src="styles/legend/MalioboroMYogyaKembali_3.png" /> Malioboro - M. Yogya Kembali'
            });
var format_MalioboroMPendidikan_4 = new ol.format.GeoJSON();
var features_MalioboroMPendidikan_4 = format_MalioboroMPendidikan_4.readFeatures(json_MalioboroMPendidikan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MalioboroMPendidikan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MalioboroMPendidikan_4.addFeatures(features_MalioboroMPendidikan_4);
var lyr_MalioboroMPendidikan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MalioboroMPendidikan_4, 
                style: style_MalioboroMPendidikan_4,
                popuplayertitle: 'Malioboro - M. Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/MalioboroMPendidikan_4.png" /> Malioboro - M. Pendidikan'
            });
var format_MalioboroMAffandi_5 = new ol.format.GeoJSON();
var features_MalioboroMAffandi_5 = format_MalioboroMAffandi_5.readFeatures(json_MalioboroMAffandi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MalioboroMAffandi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MalioboroMAffandi_5.addFeatures(features_MalioboroMAffandi_5);
var lyr_MalioboroMAffandi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MalioboroMAffandi_5, 
                style: style_MalioboroMAffandi_5,
                popuplayertitle: 'Malioboro - M. Affandi',
                interactive: true,
                title: '<img src="styles/legend/MalioboroMAffandi_5.png" /> Malioboro - M. Affandi'
            });
var format_MalioboroDioramaArsipYogya_6 = new ol.format.GeoJSON();
var features_MalioboroDioramaArsipYogya_6 = format_MalioboroDioramaArsipYogya_6.readFeatures(json_MalioboroDioramaArsipYogya_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MalioboroDioramaArsipYogya_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MalioboroDioramaArsipYogya_6.addFeatures(features_MalioboroDioramaArsipYogya_6);
var lyr_MalioboroDioramaArsipYogya_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MalioboroDioramaArsipYogya_6, 
                style: style_MalioboroDioramaArsipYogya_6,
                popuplayertitle: 'Malioboro - Diorama Arsip Yogya',
                interactive: true,
                title: '<img src="styles/legend/MalioboroDioramaArsipYogya_6.png" /> Malioboro - Diorama Arsip Yogya'
            });
var format_MalioboroMWayangKekayon_7 = new ol.format.GeoJSON();
var features_MalioboroMWayangKekayon_7 = format_MalioboroMWayangKekayon_7.readFeatures(json_MalioboroMWayangKekayon_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MalioboroMWayangKekayon_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MalioboroMWayangKekayon_7.addFeatures(features_MalioboroMWayangKekayon_7);
var lyr_MalioboroMWayangKekayon_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MalioboroMWayangKekayon_7, 
                style: style_MalioboroMWayangKekayon_7,
                popuplayertitle: 'Malioboro - M. Wayang Kekayon',
                interactive: true,
                title: '<img src="styles/legend/MalioboroMWayangKekayon_7.png" /> Malioboro - M. Wayang Kekayon'
            });
var format_Malioboro_8 = new ol.format.GeoJSON();
var features_Malioboro_8 = format_Malioboro_8.readFeatures(json_Malioboro_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Malioboro_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Malioboro_8.addFeatures(features_Malioboro_8);
var lyr_Malioboro_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Malioboro_8, 
                style: style_Malioboro_8,
                popuplayertitle: 'Malioboro',
                interactive: true,
                title: '<img src="styles/legend/Malioboro_8.png" /> Malioboro'
            });
var format_MalioboroMHistoryofJava_9 = new ol.format.GeoJSON();
var features_MalioboroMHistoryofJava_9 = format_MalioboroMHistoryofJava_9.readFeatures(json_MalioboroMHistoryofJava_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MalioboroMHistoryofJava_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MalioboroMHistoryofJava_9.addFeatures(features_MalioboroMHistoryofJava_9);
var lyr_MalioboroMHistoryofJava_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MalioboroMHistoryofJava_9, 
                style: style_MalioboroMHistoryofJava_9,
                popuplayertitle: 'Malioboro - M. History of Java',
                interactive: true,
                title: '<img src="styles/legend/MalioboroMHistoryofJava_9.png" /> Malioboro - M. History of Java'
            });
var format_MalioboroCagarBudayaBulurejo_10 = new ol.format.GeoJSON();
var features_MalioboroCagarBudayaBulurejo_10 = format_MalioboroCagarBudayaBulurejo_10.readFeatures(json_MalioboroCagarBudayaBulurejo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MalioboroCagarBudayaBulurejo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MalioboroCagarBudayaBulurejo_10.addFeatures(features_MalioboroCagarBudayaBulurejo_10);
var lyr_MalioboroCagarBudayaBulurejo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MalioboroCagarBudayaBulurejo_10, 
                style: style_MalioboroCagarBudayaBulurejo_10,
                popuplayertitle: 'Malioboro - Cagar Budaya Bulurejo',
                interactive: true,
                title: '<img src="styles/legend/MalioboroCagarBudayaBulurejo_10.png" /> Malioboro - Cagar Budaya Bulurejo'
            });
var format_MalioboroMSoeharto_11 = new ol.format.GeoJSON();
var features_MalioboroMSoeharto_11 = format_MalioboroMSoeharto_11.readFeatures(json_MalioboroMSoeharto_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MalioboroMSoeharto_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MalioboroMSoeharto_11.addFeatures(features_MalioboroMSoeharto_11);
var lyr_MalioboroMSoeharto_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MalioboroMSoeharto_11, 
                style: style_MalioboroMSoeharto_11,
                popuplayertitle: 'Malioboro - M. Soeharto',
                interactive: true,
                title: '<img src="styles/legend/MalioboroMSoeharto_11.png" /> Malioboro - M. Soeharto'
            });
var format_MalioboroMUllenSentalu_12 = new ol.format.GeoJSON();
var features_MalioboroMUllenSentalu_12 = format_MalioboroMUllenSentalu_12.readFeatures(json_MalioboroMUllenSentalu_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MalioboroMUllenSentalu_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MalioboroMUllenSentalu_12.addFeatures(features_MalioboroMUllenSentalu_12);
var lyr_MalioboroMUllenSentalu_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MalioboroMUllenSentalu_12, 
                style: style_MalioboroMUllenSentalu_12,
                popuplayertitle: 'Malioboro - M. Ullen Sentalu',
                interactive: true,
                title: '<img src="styles/legend/MalioboroMUllenSentalu_12.png" /> Malioboro - M. Ullen Sentalu'
            });
var format_MalioboroMBaleAgung_13 = new ol.format.GeoJSON();
var features_MalioboroMBaleAgung_13 = format_MalioboroMBaleAgung_13.readFeatures(json_MalioboroMBaleAgung_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MalioboroMBaleAgung_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MalioboroMBaleAgung_13.addFeatures(features_MalioboroMBaleAgung_13);
var lyr_MalioboroMBaleAgung_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MalioboroMBaleAgung_13, 
                style: style_MalioboroMBaleAgung_13,
                popuplayertitle: 'Malioboro - M. Bale Agung',
                interactive: true,
                title: '<img src="styles/legend/MalioboroMBaleAgung_13.png" /> Malioboro - M. Bale Agung'
            });
var format_MalioboroMBatikYogya_14 = new ol.format.GeoJSON();
var features_MalioboroMBatikYogya_14 = format_MalioboroMBatikYogya_14.readFeatures(json_MalioboroMBatikYogya_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MalioboroMBatikYogya_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MalioboroMBatikYogya_14.addFeatures(features_MalioboroMBatikYogya_14);
var lyr_MalioboroMBatikYogya_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MalioboroMBatikYogya_14, 
                style: style_MalioboroMBatikYogya_14,
                popuplayertitle: 'Malioboro - M. Batik Yogya',
                interactive: true,
                title: '<img src="styles/legend/MalioboroMBatikYogya_14.png" /> Malioboro - M. Batik Yogya'
            });
var format_MalioboroMPurbakalaPleret_15 = new ol.format.GeoJSON();
var features_MalioboroMPurbakalaPleret_15 = format_MalioboroMPurbakalaPleret_15.readFeatures(json_MalioboroMPurbakalaPleret_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MalioboroMPurbakalaPleret_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MalioboroMPurbakalaPleret_15.addFeatures(features_MalioboroMPurbakalaPleret_15);
var lyr_MalioboroMPurbakalaPleret_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MalioboroMPurbakalaPleret_15, 
                style: style_MalioboroMPurbakalaPleret_15,
                popuplayertitle: 'Malioboro - M. Purbakala Pleret',
                interactive: true,
                title: '<img src="styles/legend/MalioboroMPurbakalaPleret_15.png" /> Malioboro - M. Purbakala Pleret'
            });
var format_MalioboroMPerjuangan_16 = new ol.format.GeoJSON();
var features_MalioboroMPerjuangan_16 = format_MalioboroMPerjuangan_16.readFeatures(json_MalioboroMPerjuangan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MalioboroMPerjuangan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MalioboroMPerjuangan_16.addFeatures(features_MalioboroMPerjuangan_16);
var lyr_MalioboroMPerjuangan_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MalioboroMPerjuangan_16, 
                style: style_MalioboroMPerjuangan_16,
                popuplayertitle: 'Malioboro - M. Perjuangan',
                interactive: true,
                title: '<img src="styles/legend/MalioboroMPerjuangan_16.png" /> Malioboro - M. Perjuangan'
            });
var format_MalioboroMWahanarata_17 = new ol.format.GeoJSON();
var features_MalioboroMWahanarata_17 = format_MalioboroMWahanarata_17.readFeatures(json_MalioboroMWahanarata_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MalioboroMWahanarata_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MalioboroMWahanarata_17.addFeatures(features_MalioboroMWahanarata_17);
var lyr_MalioboroMWahanarata_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MalioboroMWahanarata_17, 
                style: style_MalioboroMWahanarata_17,
                popuplayertitle: 'Malioboro - M. Wahanarata',
                interactive: true,
                title: '<img src="styles/legend/MalioboroMWahanarata_17.png" /> Malioboro - M. Wahanarata'
            });
var format_MalioboroMSonobudoyo_18 = new ol.format.GeoJSON();
var features_MalioboroMSonobudoyo_18 = format_MalioboroMSonobudoyo_18.readFeatures(json_MalioboroMSonobudoyo_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MalioboroMSonobudoyo_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MalioboroMSonobudoyo_18.addFeatures(features_MalioboroMSonobudoyo_18);
var lyr_MalioboroMSonobudoyo_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MalioboroMSonobudoyo_18, 
                style: style_MalioboroMSonobudoyo_18,
                popuplayertitle: 'Malioboro - M. Sonobudoyo',
                interactive: true,
                title: '<img src="styles/legend/MalioboroMSonobudoyo_18.png" /> Malioboro - M. Sonobudoyo'
            });
var format_MalioboroMVredeburg_19 = new ol.format.GeoJSON();
var features_MalioboroMVredeburg_19 = format_MalioboroMVredeburg_19.readFeatures(json_MalioboroMVredeburg_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MalioboroMVredeburg_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MalioboroMVredeburg_19.addFeatures(features_MalioboroMVredeburg_19);
var lyr_MalioboroMVredeburg_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MalioboroMVredeburg_19, 
                style: style_MalioboroMVredeburg_19,
                popuplayertitle: 'Malioboro - M. Vredeburg',
                interactive: true,
                title: '<img src="styles/legend/MalioboroMVredeburg_19.png" /> Malioboro - M. Vredeburg'
            });
var format_MUSEUM_20 = new ol.format.GeoJSON();
var features_MUSEUM_20 = format_MUSEUM_20.readFeatures(json_MUSEUM_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUSEUM_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUSEUM_20.addFeatures(features_MUSEUM_20);
var lyr_MUSEUM_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUSEUM_20, 
                style: style_MUSEUM_20,
                popuplayertitle: 'MUSEUM',
                interactive: true,
                title: '<img src="styles/legend/MUSEUM_20.png" /> MUSEUM'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_MalioboroMDiponegoro_1.setVisible(true);lyr_MalioboroMSandi_2.setVisible(true);lyr_MalioboroMYogyaKembali_3.setVisible(true);lyr_MalioboroMPendidikan_4.setVisible(true);lyr_MalioboroMAffandi_5.setVisible(true);lyr_MalioboroDioramaArsipYogya_6.setVisible(true);lyr_MalioboroMWayangKekayon_7.setVisible(true);lyr_Malioboro_8.setVisible(true);lyr_MalioboroMHistoryofJava_9.setVisible(true);lyr_MalioboroCagarBudayaBulurejo_10.setVisible(true);lyr_MalioboroMSoeharto_11.setVisible(true);lyr_MalioboroMUllenSentalu_12.setVisible(true);lyr_MalioboroMBaleAgung_13.setVisible(true);lyr_MalioboroMBatikYogya_14.setVisible(true);lyr_MalioboroMPurbakalaPleret_15.setVisible(true);lyr_MalioboroMPerjuangan_16.setVisible(true);lyr_MalioboroMWahanarata_17.setVisible(true);lyr_MalioboroMSonobudoyo_18.setVisible(true);lyr_MalioboroMVredeburg_19.setVisible(true);lyr_MUSEUM_20.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_MalioboroMDiponegoro_1,lyr_MalioboroMSandi_2,lyr_MalioboroMYogyaKembali_3,lyr_MalioboroMPendidikan_4,lyr_MalioboroMAffandi_5,lyr_MalioboroDioramaArsipYogya_6,lyr_MalioboroMWayangKekayon_7,lyr_Malioboro_8,lyr_MalioboroMHistoryofJava_9,lyr_MalioboroCagarBudayaBulurejo_10,lyr_MalioboroMSoeharto_11,lyr_MalioboroMUllenSentalu_12,lyr_MalioboroMBaleAgung_13,lyr_MalioboroMBatikYogya_14,lyr_MalioboroMPurbakalaPleret_15,lyr_MalioboroMPerjuangan_16,lyr_MalioboroMWahanarata_17,lyr_MalioboroMSonobudoyo_18,lyr_MalioboroMVredeburg_19,lyr_MUSEUM_20];
lyr_MalioboroMDiponegoro_1.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_MalioboroMSandi_2.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_MalioboroMYogyaKembali_3.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_MalioboroMPendidikan_4.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_MalioboroMAffandi_5.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_MalioboroDioramaArsipYogya_6.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_MalioboroMWayangKekayon_7.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Malioboro_8.set('fieldAliases', {'x': 'x', 'y': 'y', 'field_3': 'field_3', });
lyr_MalioboroMHistoryofJava_9.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_MalioboroCagarBudayaBulurejo_10.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_MalioboroMSoeharto_11.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_MalioboroMUllenSentalu_12.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_MalioboroMBaleAgung_13.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_MalioboroMBatikYogya_14.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_MalioboroMPurbakalaPleret_15.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_MalioboroMPerjuangan_16.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_MalioboroMWahanarata_17.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_MalioboroMSonobudoyo_18.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_MalioboroMVredeburg_19.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_MUSEUM_20.set('fieldAliases', {'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Lokasi': 'Lokasi', 'HTM': 'HTM', 'Jam Buka': 'Jam Buka', });
lyr_MalioboroMDiponegoro_1.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_MalioboroMSandi_2.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_MalioboroMYogyaKembali_3.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_MalioboroMPendidikan_4.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_MalioboroMAffandi_5.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_MalioboroDioramaArsipYogya_6.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_MalioboroMWayangKekayon_7.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Malioboro_8.set('fieldImages', {'x': 'TextEdit', 'y': 'TextEdit', 'field_3': 'TextEdit', });
lyr_MalioboroMHistoryofJava_9.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_MalioboroCagarBudayaBulurejo_10.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_MalioboroMSoeharto_11.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_MalioboroMUllenSentalu_12.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_MalioboroMBaleAgung_13.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_MalioboroMBatikYogya_14.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_MalioboroMPurbakalaPleret_15.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_MalioboroMPerjuangan_16.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_MalioboroMWahanarata_17.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_MalioboroMSonobudoyo_18.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_MalioboroMVredeburg_19.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_MUSEUM_20.set('fieldImages', {'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Lokasi': 'TextEdit', 'HTM': 'TextEdit', 'Jam Buka': 'TextEdit', });
lyr_MalioboroMDiponegoro_1.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_MalioboroMSandi_2.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_MalioboroMYogyaKembali_3.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_MalioboroMPendidikan_4.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_MalioboroMAffandi_5.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_MalioboroDioramaArsipYogya_6.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_MalioboroMWayangKekayon_7.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_Malioboro_8.set('fieldLabels', {'x': 'inline label - always visible', 'y': 'inline label - always visible', 'field_3': 'inline label - always visible', });
lyr_MalioboroMHistoryofJava_9.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_MalioboroCagarBudayaBulurejo_10.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_MalioboroMSoeharto_11.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_MalioboroMUllenSentalu_12.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_MalioboroMBaleAgung_13.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_MalioboroMBatikYogya_14.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_MalioboroMPurbakalaPleret_15.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_MalioboroMPerjuangan_16.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_MalioboroMWahanarata_17.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_MalioboroMSonobudoyo_18.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - visible with data', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_MalioboroMVredeburg_19.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_MUSEUM_20.set('fieldLabels', {'Longitude': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'HTM': 'inline label - always visible', 'Jam Buka': 'inline label - always visible', });
lyr_MUSEUM_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});