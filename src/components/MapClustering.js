import React, { useState } from 'react';
import L from 'leaflet';
import { CircleMarker, MapContainer, Polygon, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility';
import { Button } from 'react-bootstrap'
import LoadingOverlay from 'react-loading-overlay';
import Router from "next/router";
import { inter } from './data_interpretasi'
import { InterpretasiCluster } from './InterpretasiCluster'
import Link from 'next/link';

let DefaultIcon = L.icon({
    iconUrl: 'icons/marker-icon.png',
    shadowUrl: 'icons/marker-shadow.png'
});

L.Marker.prototype.options.icon = DefaultIcon;

function getRadius(d) {
    return (
        d > 25 ? 20 :
            d > 20 ? 15 :
                d > 15 ? 11 :
                    d > 9 ? 8 :
                        6
    );
}

function PointMarker(props) {
    const { data, selectedData, selectedColor, center } = props

    const coord1 = data?.cluster1_df
    const coord2 = data?.cluster2_df
    const coord3 = data?.cluster3_df
    const coord4 = data?.cluster4_df
    const coord5 = data?.cluster5_df
    const coord6 = data?.cluster6_df

    const res1 = data?.cluster1_result
    const res2 = data?.cluster2_result
    const res3 = data?.cluster3_result
    const res4 = data?.cluster4_result
    const res5 = data?.cluster5_result
    const res6 = data?.cluster6_result

    console.log(inter, 'ini interpretasi')
    // console.log(data)
    return Object.keys(coord1)?.map((kec) => {
        console.log("selectedData", selectedData, selectedData == kec.split(' (')[0])
        if (!selectedData || (selectedData && selectedData == kec.split(' (')[0])) {
            const [showModal, setShowModal] = React.useState(false);
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);

            const resultKec1 = coord1[kec]
            const resultKec2 = coord2[kec]
            const resultKec3 = coord3[kec]
            const resultKec4 = coord4[kec]
            const resultKec5 = coord5[kec]
            const resultKec6 = coord6[kec]

            let color_cluster1 = ''
            const all_color_cluster1 = ['#FF0000', '#FFA500', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#800080', '#FFC0CB']
            switch (resultKec1['Total']) {
                case 0:
                    color_cluster1 = all_color_cluster1[0];
                    break
                case 1:
                    color_cluster1 = all_color_cluster1[1];
                    break
                case 2:
                    color_cluster1 = all_color_cluster1[2];
                    break
                case 3:
                    color_cluster1 = all_color_cluster1[3];
                    break
                case 4:
                    color_cluster1 = all_color_cluster1[4];
                    break
                case 5:
                    color_cluster1 = all_color_cluster1[5];
                    break
                case 6:
                    color_cluster1 = all_color_cluster1[6];
                    break
                case 7:
                    color_cluster1 = all_color_cluster1[7];
                    break
                default:
                    color_cluster1 = all_color_cluster1[0];
                    break
            }

            let color_cluster2 = ''
            const all_color_cluster2 = ['#FFD700', '#008000 ', '#FF00FF', '#000080', '#800000', '#C0C0C0', '#008080', '#FF6347', '#F08080']
            switch (resultKec2['Total']) {
                case 0:
                    color_cluster2 = all_color_cluster2[0];
                    break
                case 1:
                    color_cluster2 = all_color_cluster2[1];
                    break
                case 2:
                    color_cluster2 = all_color_cluster2[2];
                    break
                case 3:
                    color_cluster2 = all_color_cluster2[3];
                    break
                case 4:
                    color_cluster2 = all_color_cluster2[4];
                    break
                case 5:
                    color_cluster2 = all_color_cluster2[5];
                    break
                case 6:
                    color_cluster2 = all_color_cluster2[6];
                    break
                case 7:
                    color_cluster2 = all_color_cluster2[7];
                    break
                case 8:
                    color_cluster2 = all_color_cluster2[8];
                    break
                default:
                    color_cluster2 = all_color_cluster2[0];
                    break
            }

            let color_cluster3 = ''
            const all_color_cluster3 = ['#808080', '#DC143C', '#2E8B57', '#FFA07A', '#FFFFE0', '#DAA520', '#B8860B', '#FF4500', '#DA70D6', '#9370DB', '#6A5ACD']
            switch (resultKec3['Total']) {
                case 0:
                    color_cluster3 = all_color_cluster3[0];
                    break
                case 1:
                    color_cluster3 = all_color_cluster3[1];
                    break
                case 2:
                    color_cluster3 = all_color_cluster3[2];
                    break
                case 3:
                    color_cluster3 = all_color_cluster3[3];
                    break
                case 4:
                    color_cluster3 = all_color_cluster3[4];
                    break
                case 5:
                    color_cluster3 = all_color_cluster3[5];
                    break
                case 6:
                    color_cluster3 = all_color_cluster3[6];
                    break
                case 7:
                    color_cluster3 = all_color_cluster3[7];
                    break
                case 8:
                    color_cluster3 = all_color_cluster3[8];
                    break
                case 9:
                    color_cluster3 = all_color_cluster3[9];
                    break
                case 10:
                    color_cluster3 = all_color_cluster3[10];
                    break
                default:
                    color_cluster3 = all_color_cluster3[0];
                    break
            }

            let color_cluster4 = ''
            const all_color_cluster4 = ['#7B68EE', '#48D1CC', '#ADFF2F', '#20B2AA', '#00FA9A', '#3CB371', '#FF69B4', '#7FFF00', '#00CED1', '#4682B4']
            switch (resultKec4['Total']) {
                case 0:
                    color_cluster4 = all_color_cluster4[0];
                    break
                case 1:
                    color_cluster4 = all_color_cluster4[1];
                    break
                case 2:
                    color_cluster4 = all_color_cluster4[2];
                    break
                case 3:
                    color_cluster4 = all_color_cluster4[3];
                    break
                case 4:
                    color_cluster4 = all_color_cluster4[4];
                    break
                case 5:
                    color_cluster4 = all_color_cluster4[5];
                    break
                case 6:
                    color_cluster4 = all_color_cluster4[6];
                    break
                case 7:
                    color_cluster4 = all_color_cluster4[7];
                    break
                case 8:
                    color_cluster4 = all_color_cluster4[8];
                    break
                case 9:
                    color_cluster4 = all_color_cluster4[9];
                    break
                default:
                    color_cluster4 = all_color_cluster4[0];
                    break
            }


            let color_cluster5 = ''
            const all_color_cluster5 = ['#8B4513', '#FF8C00', '#FF1493', '#1E90FF', '#9932CC', '#8B008B', '#556B2F', '#FF00FF']
            switch (resultKec5['Total']) {
                case 0:
                    color_cluster5 = all_color_cluster5[0];
                    break
                case 1:
                    color_cluster5 = all_color_cluster5[1];
                    break
                case 2:
                    color_cluster5 = all_color_cluster5[2];
                    break
                case 3:
                    color_cluster5 = all_color_cluster5[3];
                    break
                case 4:
                    color_cluster5 = all_color_cluster5[4];
                    break
                case 5:
                    color_cluster5 = all_color_cluster5[5];
                    break
                case 6:
                    color_cluster5 = all_color_cluster5[6];
                    break
                case 7:
                    color_cluster5 = all_color_cluster5[7];
                    break
                default:
                    color_cluster5 = all_color_cluster5[0];
                    break
            }

            let color_cluster6 = ''
            const all_color_cluster6 = ['#4B0082', '#FFD700', '#ADFF2F', '#20B2AA', '#DA70D6', '#9370DB']
            switch (resultKec6['Total']) {
                case 0:
                    color_cluster6 = all_color_cluster6[0];
                    break
                case 1:
                    color_cluster6 = all_color_cluster6[1];
                    break
                case 2:
                    color_cluster6 = all_color_cluster6[2];
                    break
                case 3:
                    color_cluster6 = all_color_cluster6[3];
                    break
                case 4:
                    color_cluster6 = all_color_cluster6[4];
                    break
                case 5:
                    color_cluster6 = all_color_cluster6[5];
                    break
                default:
                    color_cluster6 = all_color_cluster1[0];
                    break
            }


            const position1 = resultKec1?.coord
            const position2 = resultKec2?.coord
            const position3 = resultKec3?.coord
            const position4 = resultKec4?.coord
            const position5 = resultKec5?.coord
            const position6 = resultKec6?.coord

            const ket_cluster1 = {
                0: 'Average Number of TB = ' + res1['First']['(\'tbc\', \'mean\')'].toFixed(0) +
                    '\nAge Range = ' + res1['First']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' years' +
                    '\nAmount of Clean Water = ' + Math.round(res1['First']['(\'Tersedia air bersih\', \'mean\')']) + 
                    '\nAmount of rubbish is rarely cleaned up = ' + Math.round(res1['First']['(\'Ada sampah dan jarang dibersihkan\', \'mean\')']) +
                    '\nAmount of ventilation in all rooms = ' + Math.round(res1['First']['(\'Ada ventilasi disemua ruangan\', \'mean\')']),

                1: 'Rata-rata Jumlah TB = ' + res1['Second']['(\'tbc\', \'mean\')'].toFixed(0) +
                '\nRentang Umur = ' + res1['Second']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res1['Second']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah sampah = ' + Math.round(res1['Second']['(\'Bersih tanpa ada sampah\', \'mean\')']) +
                '\nJumlah ventilasi hanya sedikit = ' + Math.round(res1['Second']['(\'Ada ventilasi tapi hanya sedikit\', \'mean\')']),

                2: 'Rata-rata Jumlah TB = ' + res1['Third']['(\'tbc\', \'mean\')'].toFixed(0) +
                '\nRentang Umur = ' + res1['Third']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res1['Third']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah sampah = ' + Math.round(res1['Third']['(\'Bersih tanpa ada sampah\', \'mean\')']) +
                '\nJumlah ada ventilasi di semua ruangan = ' + Math.round(res1['Third']['(\'Ada ventilasi disemua ruangan\', \'mean\')']),

                3: 'Rata-rata Jumlah TB = ' + res1['Fourth']['(\'tbc\', \'mean\')'].toFixed(0) +
                '\nRentang Umur = ' + res1['Fourth']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res1['Fourth']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah sampah jarang dibersihkan = ' + Math.round(res1['Fourth']['(\'Ada sampah dan jarang dibersihkan\', \'mean\')']) +
                '\nJumlah ada ventilasi di semua ruangan = ' + Math.round(res1['Fourth']['(\'Ada ventilasi disemua ruangan\', \'mean\')']),

                4: 'Rata-rata Jumlah TB = ' + res1['Fifth']['(\'tbc\', \'mean\')'].toFixed(0) +
                '\nRentang Umur = ' + res1['Fifth']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res1['Fifth']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah ada sampah tapi tidak banyak = ' + Math.round(res1['Fifth']['(\'Ada sampah tapi tidak banyak\', \'mean\')']) + 
                '\nJumlah ventilasi hanya sedikit = ' + Math.round(res1['Fifth']['(\'Ada ventilasi tapi hanya sedikit\', \'mean\')']),

                5: 'Rata-rata Jumlah TB = ' + res1['Sistxh']['(\'tbc\', \'mean\')'].toFixed(0) +
                '\nRentang Umur = ' + res1['Sistxh']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res1['Sistxh']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah ada sampah tapi tidak banyak = ' + Math.round(res1['Sistxh']['(\'Ada sampah tapi tidak banyak\', \'mean\')']) +
                '\nJumlah ventilasi hanya sedikit = ' + Math.round(res1['Sistxh']['(\'Ada ventilasi tapi hanya sedikit\', \'mean\')']),

                6: 'Rata-rata Jumlah TB = ' + res1['Seventh']['(\'tbc\', \'mean\')'].toFixed(0) +
                '\nRentang Umur = ' + res1['Seventh']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res1['Seventh']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah sampah tidak banyak tapi jarang dibersihkan = ' + Math.round(((res1['Seventh']['(\'Ada sampah tapi tidak banyak\', \'mean\')'] + 
                    res1['Seventh']['(\'Ada sampah dan jarang dibersihkan\', \'mean\')']))) +
                '\nJumlah ada ventilasi di semua ruangan = ' + Math.round(res1['Seventh']['(\'Ada ventilasi disemua ruangan\', \'mean\')']),

                7: 'Rata-rata Jumlah TB = ' + res1['Eighth']['(\'tbc\', \'mean\')'] +
                '\nRentang Umur = ' + res1['Eighth']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res1['Eighth']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah ada lalat/nyamuk di pembuangan sampah = ' + Math.round(res1['Eighth']['(\'Ada lalat\/nyamuk di sekitar tumpukan sampah\', \'mean\')']) +
                '\nJumlah ventilasi hanya sedikit = ' + Math.round(res1['Eighth']['(\'Ada ventilasi tapi hanya sedikit\', \'mean\')']), 
            }

            const ket_cluster2 = {
                0: 'Rata-rata Jumlah DBD = ' + Math.round(res2['First']['(\'dbd\', \'mean\')']) +
                '\nRentang Umur = ' + res2['First']['(\'Rentang_Usia_DBD\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res2['First']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah sampah = ' + Math.round(res2['First']['(\'Bersih tanpa ada sampah\', \'mean\')']) +
                '\nJumlah ventilasi jarang terbuka = ' + Math.round(res2['First']['(\'Ada ventilasi tapi jarang terbuka\', \'mean\')']),

                1: 'Rata-rata Jumlah DBD = ' + Math.round(res2['Second']['(\'dbd\', \'mean\')']) +
                '\nRentang Umur = ' + res2['Second']['(\'Rentang_Usia_DBD\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res2['Second']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah sampah = ' + Math.round(res2['Second']['(\'Bersih tanpa ada sampah\', \'mean\')']) +
                '\nJumlah ventilasi hanya sedikit = ' + Math.round(res2['Second']['(\'Ada ventilasi tapi hanya sedikit\', \'mean\')']),

                2: 'Rata-rata Jumlah DBD = ' + Math.round(res2['Third']['(\'dbd\', \'mean\')']) +
                '\nRentang Umur = ' + res2['Third']['(\'Rentang_Usia_DBD\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res2['Third']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah sampah jarang dibersihkan = ' + Math.round(res2['Third']['(\'Ada sampah dan jarang dibersihkan\', \'mean\')']) +
                '\nJumlah ada ventilasi di semua ruangan = ' + Math.round(res2['Third']['(\'Ada ventilasi disemua ruangan\', \'mean\')']),

                3: 'Rata-rata Jumlah DBD = ' + Math.round(res2['Fourth']['(\'dbd\', \'mean\')']) + 
                '\nRentang Umur = ' + res2['Fourth']['(\'Rentang_Usia_DBD\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res2['Fourth']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah ada sampah tapi tidak banyak = ' + Math.round(res2['Fourth']['(\'Ada sampah tapi tidak banyak\', \'mean\')']) + 
                '\nJumlah ada ventilasi di semua ruangan = ' + Math.round(res2['Fourth']['(\'Ada ventilasi disemua ruangan\', \'mean\')']),

                4: 'Rata-rata Jumlah DBD = ' + Math.round(res2['Fifth']['(\'dbd\', \'mean\')']) + 
                '\nRentang Umur = ' + res2['Fifth']['(\'Rentang_Usia_DBD\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res2['Fifth']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah sampah jarang dibersihkan = ' + Math.round(res2['Fifth']['(\'Ada sampah dan jarang dibersihkan\', \'mean\')']) +
                '\nJumlah ada ventilasi di semua ruangan = ' + Math.round(res2['Fifth']['(\'Ada ventilasi disemua ruangan\', \'mean\')']),

                5: 'Rata-rata Jumlah DBD = ' + Math.round(res2['Sistxh']['(\'dbd\', \'mean\')']) +
                '\nRentang Umur = ' + res2['Sistxh']['(\'Rentang_Usia_DBD\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res2['Sistxh']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah ada sampah tapi tidak banyak = ' + Math.round(res2['Sistxh']['(\'Ada sampah tapi tidak banyak\', \'mean\')']) + 
                '\nJumlah ventilasi jarang terbuka = ' + Math.round(res2['Sistxh']['(\'Ada ventilasi tapi jarang terbuka\', \'mean\')']),

                6: 'Rata-rata Jumlah DBD = ' + Math.round(res2['Seventh']['(\'dbd\', \'mean\')']) +
                '\nRentang Umur = ' + res2['Seventh']['(\'Rentang_Usia_DBD\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res2['Seventh']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah sampah jarang dibersihkan = ' + Math.round(res2['Seventh']['(\'Ada sampah dan jarang dibersihkan\', \'mean\')']) +
                '\nJumlah ada ventilasi di semua ruangan = ' + Math.round(res2['Seventh']['(\'Ada ventilasi disemua ruangan\', \'mean\')']),

                7: 'Rata-rata Jumlah DBD = ' + Math.round(res2['Eighth']['(\'dbd\', \'mean\')']) +
                '\nRentang Umur = ' + res2['Eighth']['(\'Rentang_Usia_DBD\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res2['Eighth']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah sampah jarang dibersihkan = ' + Math.round(res2['Eighth']['(\'Ada sampah dan jarang dibersihkan\', \'mean\')']) +
                '\nJumlah ada ventilasi di semua ruangan = ' + Math.round(res2['Eighth']['(\'Ada ventilasi disemua ruangan\', \'mean\')']),
            
                8: 'Rata-rata Jumlah DBD = ' + Math.round(res2['Ninth']['(\'dbd\', \'mean\')']) +
                '\nRentang Umur = ' + res2['Ninth']['(\'Rentang_Usia_DBD\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res2['Ninth']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah sampah = ' + Math.round(res2['Ninth']['(\'Bersih tanpa ada sampah\', \'mean\')']) +
                '\nJumlah ada ventilasi tapi hanya sedikit = ' + Math.round(res2['Ninth']['(\'Ada ventilasi tapi hanya sedikit\', \'mean\')']),
            
            }

            const ket_cluster3 = {
                0: 'Rata-rata Jumlah Tifoid = ' + Math.round(res3['First']['(\'tifoid\', \'mean\')']) +
                '\nRentang Umur = ' + res3['First']['(\'Rentang_Usia_Tifoid\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res3['First']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah ada sampah tapi tidak banyak = ' + Math.round(res3['First']['(\'Ada sampah tapi tidak banyak\', \'mean\')']) + 
                '\nJumlah ada ventilasi di semua ruangan = ' + Math.round(res3['First']['(\'Ada ventilasi disemua ruangan\', \'mean\')']),

                1: 'Rata-rata Jumlah Tifoid = ' + Math.round(res3['Second']['(\'tifoid\', \'mean\')']) +
                '\nRentang Umur = ' + res3['Second']['(\'Rentang_Usia_Tifoid\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res3['Second']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah sampah tidak banyak tapi jarang dibersihkan = ' + Math.round((res3['Second']['(\'Ada sampah tapi tidak banyak\', \'mean\')'] + 
                    res3['Second']['(\'Ada sampah dan jarang dibersihkan\', \'mean\')'])) +
                '\nJumlah ada ventilasi di semua ruangan = ' + Math.round(res3['Second']['(\'Ada ventilasi disemua ruangan\', \'mean\')']),

                2: 'Rata-rata Jumlah Tifoid = ' + Math.round(res3['Third']['(\'tifoid\', \'mean\')']) +
                '\nRentang Umur = ' + res3['Third']['(\'Rentang_Usia_Tifoid\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res3['Third']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah ada sampah tapi tidak banyak = ' + Math.round(res3['Third']['(\'Ada sampah tapi tidak banyak\', \'mean\')']) + 
                '\nJumlah ada ventilasi di semua ruangan = ' + Math.round(res3['Third']['(\'Ada ventilasi disemua ruangan\', \'mean\')']),

                3: 'Rata-rata Jumlah Tifoid = ' + Math.round(res3['Fourth']['(\'tifoid\', \'mean\')']) +
                '\nRentang Umur = ' + res3['Fourth']['(\'Rentang_Usia_Tifoid\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res3['Fourth']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah sampah tidak banyak tapi jarang dibersihkan = ' + Math.round((res3['Fourth']['(\'Ada sampah tapi tidak banyak\', \'mean\')']+ 
                    res3['Fourth']['(\'Ada sampah dan jarang dibersihkan\', \'mean\')'])) +
                '\nJumlah ada ventilasi di semua ruangan = ' + Math.round(res3['Fourth']['(\'Ada ventilasi disemua ruangan\', \'mean\')']),

                4: 'Rata-rata Jumlah Tifoid = ' + Math.round(res3['Fifth']['(\'tifoid\', \'mean\')']) +
                '\nRentang Umur = ' + res3['Fifth']['(\'Rentang_Usia_Tifoid\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res3['Fifth']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah sampah = ' + Math.round(res3['Fifth']['(\'Bersih tanpa ada sampah\', \'mean\')']) +
                '\nJumlah ada ventilasi di semua ruangan = ' + Math.round(res3['Fifth']['(\'Ada ventilasi disemua ruangan\', \'mean\')']),

                5: 'Rata-rata Jumlah Tifoid = ' + Math.round(res3['Sixth']['(\'tifoid\', \'mean\')']) +
                '\nRentang Umur = ' + res3['Sixth']['(\'Rentang_Usia_Tifoid\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res3['Sixth']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah sampah jarang dibersihkan = ' + Math.round(res3['Sixth']['(\'Ada sampah dan jarang dibersihkan\', \'mean\')'])  +
                '\nJumlah ada ventilasi di semua ruangan = ' + Math.round(res3['Sixth']['(\'Ada ventilasi disemua ruangan\', \'mean\')']),

                6: 'Rata-rata Jumlah Tifoid = ' + Math.round(res3['Seventh']['(\'tifoid\', \'mean\')']) +
                '\nRentang Umur = ' + res3['Seventh']['(\'Rentang_Usia_Tifoid\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res3['Seventh']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah ada lalat/nyamuk di pembuangan sampah = ' + Math.round(res3['Seventh']['(\'Ada lalat\/nyamuk di sekitar tumpukan sampah\', \'mean\')']) +
                '\nJumlah ventilasi hanya sedikit = ' + Math.round(res3['Seventh']['(\'Ada ventilasi tapi hanya sedikit\', \'mean\')']),

                7: 'Rata-rata Jumlah Tifoid = ' + Math.round(res3['Eighth']['(\'tifoid\', \'mean\')']) +
                '\nRentang Umur = ' + res3['Eighth']['(\'Rentang_Usia_Tifoid\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res3['Eighth']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah ada sampah tapi tidak banyak = ' + Math.round(res3['Eighth']['(\'Ada sampah tapi tidak banyak\', \'mean\')'])+
                '\nJumlah ada ventilasi tapi jarang terbuka = ' + Math.round(res3['Eighth']['(\'Ada ventilasi tapi jarang terbuka\', \'mean\')']),

                8: 'Rata-rata Jumlah Tifoid = ' + Math.round(res3['Ninth']['(\'tifoid\', \'mean\')']) +
                '\nRentang Umur = ' + res3['Ninth']['(\'Rentang_Usia_Tifoid\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res3['Ninth']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah sampah jarang dibersihkan = ' + Math.round(res3['Ninth']['(\'Ada sampah dan jarang dibersihkan\', \'mean\')'])+
                '\nJumlah ada ventilasi di semua ruangan = ' + Math.round(res3['Ninth']['(\'Ada ventilasi disemua ruangan\', \'mean\')']),

                9: 'Rata-rata Jumlah Tifoid = ' + Math.round(res3['Tenth']['(\'tifoid\', \'mean\')']) +
                '\nRentang Umur = ' + res3['Tenth']['(\'Rentang_Usia_Tifoid\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res3['Tenth']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah sampah = ' + Math.round(res3['Tenth']['(\'Bersih tanpa ada sampah\', \'mean\')']) +
                '\nJumlah ada ventilasi tapi jarang terbuka = ' + Math.round(res3['Tenth']['(\'Ada ventilasi tapi jarang terbuka\', \'mean\')']),

                10: 'Rata-rata Jumlah Tifoid = ' + Math.round(res3['Eleventh']['(\'tifoid\', \'mean\')']) +
                '\nRentang Umur = ' + res3['Eleventh']['(\'Rentang_Usia_Tifoid\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Air Bersih = ' + Math.round(res3['Eleventh']['(\'Tersedia air bersih\', \'mean\')']) + 
                '\nJumlah sampah = ' + Math.round(res3['Eleventh']['(\'Bersih tanpa ada sampah\', \'mean\')'])+
                '\nJumlah ada ventilasi di semua ruangan = ' + Math.round(res3['Eleventh']['(\'Ada ventilasi disemua ruangan\', \'mean\')']),

            }

            const ket_cluster4 = {
                0: 'Rata-rata Jumlah TB = ' + res4['First']['(\'tbc\', \'mean\')'].toFixed(0) +
                '\nRentang Umur = ' + res4['First']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res4['First']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res4['First']['(\'Sering Jajan Diluar\', \'mean\')']) + 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res4['First']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),

                1: 'Rata-rata Jumlah TB = ' + res4['Second']['(\'tbc\', \'mean\')'].toFixed(0)  +
                '\nRentang Umur = ' + res4['Second']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res4['Second']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res4['Second']['(\'Sering Jajan Diluar\', \'mean\')']) + 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res4['Second']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),

                2: 'Rata-rata Jumlah TB = ' + res4['Third']['(\'tbc\', \'mean\')'].toFixed(0) +
                '\nRentang Umur = ' + res4['Third']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res4['Third']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res4['Third']['(\'Sering Jajan Diluar\', \'mean\')']) + 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res4['Third']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),

                3: 'Rata-rata Jumlah TB = ' + res4['Fourth']['(\'tbc\', \'mean\')'].toFixed(0)  +
                '\nRentang Umur = ' + res4['Fourth']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res4['Fourth']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res4['Fourth']['(\'Sering Jajan Diluar\', \'mean\')'])+ 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res4['Fourth']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),

                4: 'Rata-rata Jumlah TB = ' + res4['Fifth']['(\'tbc\', \'mean\')'].toFixed(0)  +
                '\nRentang Umur = ' + res4['Fifth']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res4['Fifth']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res4['Fifth']['(\'Sering Jajan Diluar\', \'mean\')']) + 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res4['Fifth']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),

                5: 'Rata-rata Jumlah TB = ' + res4['Sixth']['(\'tbc\', \'mean\')'].toFixed(0)  +
                '\nRentang Umur = ' + res4['Sixth']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res4['Sixth']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res4['Sixth']['(\'Sering Jajan Diluar\', \'mean\')']) + 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res4['Sixth']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),

                6: 'Rata-rata Jumlah TB = ' + res4['Seventh']['(\'tbc\', \'mean\')'].toFixed(0)  +
                '\nRentang Umur = ' + res4['Seventh']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res4['Seventh']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res4['Seventh']['(\'Sering Jajan Diluar\', \'mean\')']) + 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res4['Seventh']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),

                7: 'Rata-rata Jumlah TB = ' + res4['Eighth']['(\'tbc\', \'mean\')'].toFixed(0)  +
                '\nRentang Umur = ' + res4['Eighth']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res4['Eighth']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res4['Eighth']['(\'Sering Jajan Diluar\', \'mean\')']) + 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res4['Eighth']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),

                8: 'Rata-rata Jumlah TB = ' + res4['Ninth']['(\'tbc\', \'mean\')'].toFixed(0)  +
                '\nRentang Umur = ' + res4['Ninth']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res4['Ninth']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res4['Ninth']['(\'Sering Jajan Diluar\', \'mean\')']) + 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res4['Ninth']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),

                9: 'Rata-rata Jumlah TB = ' + res4['Tenth']['(\'tbc\', \'mean\')'].toFixed(0)  +
                '\nRentang Umur = ' + res4['Tenth']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res4['Tenth']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res4['Tenth']['(\'Sering Jajan Diluar\', \'mean\')']) + 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res4['Tenth']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),
            }

            const ket_cluster5 = {
                0: 'Rata-rata Jumlah DBD = ' + res5['First']['(\'dbd\', \'mean\')'].toFixed(0)  +
                '\nRentang Umur = ' + res5['First']['(\'Rentang_Usia_DBD\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res5['First']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res5['First']['(\'Sering Jajan Diluar\', \'mean\')']) + 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res5['First']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),

                1: 'Rata-rata Jumlah DBD = ' + res5['Second']['(\'dbd\', \'mean\')'].toFixed(0)  +
                '\nRentang Umur = ' + res5['Second']['(\'Rentang_Usia_DBD\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res5['Second']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res5['Second']['(\'Sering Jajan Diluar\', \'mean\')']) + 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res5['Second']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),

                2: 'Rata-rata Jumlah DBD = ' + res5['Third']['(\'dbd\', \'mean\')'].toFixed(0)  +
                '\nRentang Umur = ' + res5['Third']['(\'Rentang_Usia_DBD\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res5['Third']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res5['Third']['(\'Sering Jajan Diluar\', \'mean\')']) + 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res5['Third']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),

                3: 'Rata-rata Jumlah DBD = ' + res5['Fourth']['(\'dbd\', \'mean\')'].toFixed(0)  +
                '\nRentang Umur = ' + res5['Fourth']['(\'Rentang_Usia_DBD\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res5['Fourth']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res5['Fourth']['(\'Sering Jajan Diluar\', \'mean\')'])+ 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res5['Fourth']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),

                4: 'Rata-rata Jumlah DBD = ' + res5['Fifth']['(\'dbd\', \'mean\')'].toFixed(0)  +
                '\nRentang Umur = ' + res5['Fifth']['(\'Rentang_Usia_DBD\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res5['Fifth']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res5['Fifth']['(\'Sering Jajan Diluar\', \'mean\')']) + 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res5['Fifth']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),

                5: 'Rata-rata Jumlah DBD = ' + res5['Sistxh']['(\'dbd\', \'mean\')'].toFixed(0)  +
                '\nRentang Umur = ' + res5['Sistxh']['(\'Rentang_Usia_DBD\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res5['Sistxh']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res5['Sistxh']['(\'Sering Jajan Diluar\', \'mean\')']) + 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res5['Sistxh']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),

                6: 'Rata-rata Jumlah DBD = ' + res5['Seventh']['(\'dbd\', \'mean\')'].toFixed(0)  +
                '\nRentang Umur = ' + res5['Seventh']['(\'Rentang_Usia_DBD\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res5['Seventh']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res5['Seventh']['(\'Sering Jajan Diluar\', \'mean\')']) + 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res5['Seventh']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),

                7: 'Rata-rata Jumlah DBD = ' + res5['Eighth']['(\'dbd\', \'mean\')'].toFixed(0)  +
                '\nRentang Umur = ' + res5['Eighth']['(\'Rentang_Usia_DBD\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res5['Eighth']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res5['Eighth']['(\'Sering Jajan Diluar\', \'mean\')']) + 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res5['Eighth']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),

            }

            const ket_cluster6 = {
                0: 'Rata-rata Jumlah Tifoid = ' + res6['First']['(\'tifoid\', \'mean\')'].toFixed(0)  +
                '\nRentang Umur = ' + res6['First']['(\'Rentang_Usia_Tifoid\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res6['First']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res6['First']['(\'Sering Jajan Diluar\', \'mean\')']) + 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res6['First']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),

                1: 'Rata-rata Jumlah Tifoid = ' + res6['Second']['(\'tifoid\', \'mean\')'].toFixed(0)  +
                '\nRentang Umur = ' + res6['Second']['(\'Rentang_Usia_Tifoid\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res6['Second']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res6['Second']['(\'Sering Jajan Diluar\', \'mean\')']) + 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res6['Second']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),

                2: 'Rata-rata Jumlah Tifoid = ' + res6['Third']['(\'tifoid\', \'mean\')'].toFixed(0)  +
                '\nRentang Umur = ' + res6['Third']['(\'Rentang_Usia_Tifoid\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res6['Third']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res6['Third']['(\'Sering Jajan Diluar\', \'mean\')']) + 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res6['Third']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),

                3: 'Rata-rata Jumlah Tifoid = ' + res6['Fourth']['(\'tifoid\', \'mean\')'].toFixed(0)  +
                '\nRentang Umur = ' + res6['Fourth']['(\'Rentang_Usia_Tifoid\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res6['Fourth']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res6['Fourth']['(\'Sering Jajan Diluar\', \'mean\')']) + 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res6['Fourth']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),

                4: 'Rata-rata Jumlah Tifoid = ' + res6['Fifth']['(\'tifoid\', \'mean\')'].toFixed(0)  +
                '\nRentang Umur = ' + res6['Fifth']['(\'Rentang_Usia_Tifoid\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res6['Fifth']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res6['Fifth']['(\'Sering Jajan Diluar\', \'mean\')']) + 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res6['Fifth']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),

                5: 'Rata-rata Jumlah Tifoid = ' + res6['Sistxh']['(\'tifoid\', \'mean\')'].toFixed(0)  +
                '\nRentang Umur = ' + res6['Sistxh']['(\'Rentang_Usia_Tifoid\', \'<lambda>\')'] + ' tahun' +
                '\nJumlah Nafsu Makan Kurang = ' + Math.round(res6['Sistxh']['(\'Nafsu Makan Kurang\', \'mean\')']) + 
                '\nJumlah Sering Jajan Diluar = ' + Math.round(res6['Sistxh']['(\'Sering Jajan Diluar\', \'mean\')']) + 
                '\nJumlah Sering Pakai Jamban/Toilet = ' + Math.round(res6['Sistxh']['(\'Sering Pakai Jamban\/Toilet\', \'mean\')']),
            }
            const result1 = ket_cluster1[resultKec1.Total].split('\n').map(e => `${e}<br/>`).join('')
            const result2 = ket_cluster2[resultKec2.Total].split('\n').map(e => `${e}<br/>`).join('')
            const result3 = ket_cluster3[resultKec3.Total].split('\n').map(e => `${e}<br/>`).join('')
            const result4 = ket_cluster4[resultKec4.Total].split('\n').map(e => `${e}<br/>`).join('')
            const result5 = ket_cluster5[resultKec5.Total].split('\n').map(e => `${e}<br/>`).join('')     
            const result6 = ket_cluster6[resultKec6.Total].split('\n').map(e => `${e}<br/>`).join('')

            return (
                <div className="text-lg">
                    <CircleMarker
                        key={kec}
                        center={position1}
                        className={`circle-marker visible ${color_cluster1} ${kec.split(' (')[0].replace(' ', '-')}`}
                        pathOptions={{ color: color_cluster1 }}
                        radius={8}
                        fillOpacity={1.0}
                    >
                        <Popup>
                            <h3 style={{ textAlign: 'center' }}>
                                <b style={{ color: 'darkslategray', fontSize: '14px' }} >{kec}</b>
                            </h3>
                            <br />

                            <div className="text-right" style={{ fontSize: '14px' }}>
                                <div dangerouslySetInnerHTML={{ __html: result1 }}></div>
                                <br />
                            </div>
                        </Popup>
                    </CircleMarker>,

                    <CircleMarker
                        key={kec}
                        center={position2}
                        pathOptions={{ color: color_cluster2 }}
                        className={`circle-marker visible ${color_cluster2} ${kec.split(' (')[0].replace(' ', '-')}`}
                        radius={8}
                        fillOpacity={1.0}
                    >
                        <Popup>
                            <h3 style={{ textAlign: 'center' }}>
                                <b style={{ color: 'darkslategray', fontSize: '14px' }}>{kec}</b>
                            </h3>
                            <br />

                            <div className="text-right" style={{ fontSize: '14px' }}>
                                <div dangerouslySetInnerHTML={{ __html: result2 }} ></div>
                                {/*{ket_cluster2[resultKec2.Total]}*/}
                                <br />
                            </div>

                        </Popup>
                    </CircleMarker>,
                    <CircleMarker
                        key={kec}
                        center={position3}
                        pathOptions={{ color: color_cluster3 }}
                        className={`circle-marker visible ${color_cluster3} ${kec.split(' (')[0].replace(' ', '-')}`}
                        radius={8}
                        fillOpacity={1.0}
                    >
                        <Popup>
                            <h3 style={{ textAlign: 'center' }}>
                                <b style={{ color: 'darkslategray', fontSize: '14px' }}>{kec}</b>
                            </h3>
                            <br />

                            <div className="text-right" style={{ fontSize: '14px' }}>
                                <div dangerouslySetInnerHTML={{ __html: result3 }}></div>
                                {/*{ket_cluster3[resultKec3.Total]}*/}
                                <br />
                            </div>

                        </Popup>
                    </CircleMarker>,
                    <CircleMarker
                        key={kec}
                        center={position4}
                        pathOptions={{ color: color_cluster4 }}
                        className={`circle-marker visible ${color_cluster4} ${kec.split(' (')[0].replace(' ', '-')}`}
                        radius={8}
                        fillOpacity={1.0}
                    >
                        <Popup>
                            <h3 style={{ textAlign: 'center' }} >
                                <b style={{ color: 'darkslategray', fontSize: '14px' }} > {kec}</b>
                            </h3>
                            <br />

                            <div className="text-right" style={{ fontSize: '14px' }}>
                                <div dangerouslySetInnerHTML={{ __html: result4 }}></div>
                                <br />
                            </div>

                        </Popup>
                    </CircleMarker>
                    <CircleMarker
                        key={kec}
                        center={position5}
                        pathOptions={{ color: color_cluster5 }}
                        className={`circle-marker visible ${color_cluster5} ${kec.split(' (')[0].replace(' ', '-')}`}
                        radius={8}
                        fillOpacity={1.0}
                    >
                        <Popup>
                            <h3 style={{ textAlign: 'center' }}>
                                <b style={{ color: 'darkslategray', fontSize: '14px' }}> {kec}</b>
                            </h3>
                            <br />

                            <div className="text-right" style={{ fontSize: '14px' }}>
                                <div dangerouslySetInnerHTML={{ __html: result5 }}></div>
                                <br />
                            </div>

                        </Popup>
                    </CircleMarker>
                    <CircleMarker
                        key={kec}
                        center={position6}
                        pathOptions={{ color: color_cluster6 }}
                        className={`circle-marker visible ${color_cluster6} ${kec.split(' (')[0].replace(' ', '-')}`}
                        radius={8}
                        fillOpacity={1.0}
                    >
                        <Popup>
                            <h3 style={{ textAlign: 'center' }}>
                                <b style={{ color: 'darkslategray', fontSize: '14px' }}> {kec}</b>
                            </h3>
                            <br />

                            <div className="text-right" style={{ fontSize: '14px' }}>
                                <div dangerouslySetInnerHTML={{ __html: result6 }}></div>
                                <br />
                            </div>

                        </Popup>
                    </CircleMarker>
                </div>
            )
        }
    });
}


const Map = (props) => {
    const { data, selectedData, center, loading, setReg } = props

    const [selectedColor, setSelectedColor] = useState('')
    const [map, setMap] = useState(null);
    const [selectedKec, setSelectedKec] = useState(null);
    const [showLegend, setShowLegend] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const onClickColor = (color) => {
        let pink = document.querySelectorAll('.circle-marker')
        for (let i = 0; i < pink.length; i++) {
            if (color !== '' && !pink[i].classList.contains(color)) {
                pink[i].classList.remove('visible')
                pink[i].classList.add('hidden')
            } else if (color === '' && pink[i].classList.contains('hidden')) {
                pink[i].classList.remove('hidden')
                pink[i].classList.add('visible')
            } else {
                pink[i].classList.remove('hidden')
                pink[i].classList.add('visible')
            }
        }
        setSelectedColor(color)
    }
    const kec = data?.cluster1_df

    const warna = {
        0: '#FF0000',
        1: '#FFA500',
        2: '#FFFF00',
        3: '#00FF00',
        4: '#00FFFF',
        5: '#0000FF',
        6: '#800080',
        7: '#FFC0CB',
        8: '#FFD700',
        9: '#008000',
        10: '#FF00FF',
        11: '#000080',
        12: '#535353',
        13: '#e9d700',
        14: '#f8ed62',
        15: '#fff9ae',
        16: '#660066',
        17: '#00ffff',
        18: '#8E3200',
        19: '#ff0074'
    }

    const handleCluster = () => {
        const req = fetch(`http://127.0.0.1:8080/run_cluster`, {
            method: "POST",
        })
        Router.push({
            pathname: "/cluster",
            query: { generate: 1 }
        })
        Router.reload()
    };

    return (
        <>
            <div className="bg-[#343A40] h-full pb-2">
                <div className="tampil flex items-center justify-center">
                    <Button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-5 mb-5"
                        onClick={() => onClickColor('')}>
                        Display All Cluster
                    </Button>
                    <Button
                        className="ml-8 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-5 mb-5"
                        onClick={() => setShowModal(true)}>
                        Interpretation of cluster results
                    </Button>
                </div>
                <LoadingOverlay
                    active={loading}
                    spinner
                    text='Building cluster, please wait...'>
                    <MapContainer center={center || [-5.20010555, 119.48125025]} zoom={13} scrollWheelZoom={false}
                        className={'cluster-mapid'} whenCreated={setMap}>
                        <TileLayer
                            attribution='&copy; <a href="https://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        
                        {
                            data && <PointMarker data={data} selectedData={selectedData} selectedColor={selectedColor} />
                        }

                    </MapContainer>
                </LoadingOverlay>
                <br />

                <div className="ml-2 grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
                    <div className="grid grid-cols-10 gap-1">
                        <Link href="/map1">
                        <div className="col-span-1" style={{
                            color: 'white',
                            backgroundColor: '#FF0000',
                            padding: 5,
                            borderRadius: 5,
                            width: '200px'
                            
                        }}>
                               <div className="col-span-9" style={{ color: 'white', textAlign: 'center'}}>TB Cases and Environmental Conditions</div>
                        </div>
                        </Link>
                    </div>
                    <div className="grid grid-cols-10 gap-1">
                        <Link href="/map2">
                        <div className="col-span-1" style={{
                            color: 'white',
                            backgroundColor: '#FFA500',
                            padding: 5,
                            borderRadius: 5,
                            width: '200px'
                            
                        }}>
                               <div className="col-span-9" style={{ color: 'white', textAlign: 'center'}}>DBD Cases and Environmental Conditions</div>
                        </div>
                        </Link>
                    </div>
                    <div className="grid grid-cols-10 gap-1">
                        <Link href="/map3">
                        <div className="col-span-1" style={{
                            color: 'white',
                            backgroundColor: '#FFD700',
                            padding: 5,
                            borderRadius: 5,
                            width: '200px'
                            
                        }}>
                               <div className="col-span-9" style={{ color: 'white', textAlign: 'center'}}>Typhoid Cases and Environmental Conditions</div>
                        </div>
                        </Link>
                    </div>
                    <div className="grid grid-cols-10 gap-1">
                        <Link href="/map4">
                        <div className="col-span-1" style={{
                            color: 'white',
                            backgroundColor: '#00FF00',
                            padding: 5,
                            borderRadius: 5,
                            width: '200px'
                            
                        }}>
                               <div className="col-span-9" style={{ color: 'white', textAlign: 'center'}}>TB Cases and Lifestyle</div>
                        </div>
                        </Link>
                    </div>
                    <div className="grid grid-cols-10 gap-1">
                        <Link href="/map5">
                        <div className="col-span-1" style={{
                            color: 'white',
                            backgroundColor: '#556B2F',
                            padding: 5,
                            borderRadius: 5,
                            width: '200px'
                            
                        }}>
                               <div className="col-span-9" style={{ color: 'white', textAlign: 'center' }}>DBD Cases and Lifestyle</div>
                        </div>
                        </Link>
                    </div>
                    <div className="grid grid-cols-10 gap-1">
                        <Link href="/map6">
                        <div className="col-span-1" style={{
                            color: 'white',
                            backgroundColor: '#006400',
                            padding: 5,
                            borderRadius: 5,
                            width: '200px'
                            
                        }}>
                               <div className="col-span-9" style={{ color: 'white', textAlign: 'center'}}>Typhoid Cases and Lifestyle</div>
                        </div>
                        </Link>
                    </div>
                    {/* <div className="grid grid-cols-10 gap-1" onClick={() => onClickColor(warna[6])}>
                        <div className="col-span-1" style={{
                            color: '#0f5e9c',
                            backgroundColor: '#0f5e9c',
                            padding: 5,
                            borderRadius: 50,
                            width: '25px',
                            height: '25px'
                        }}>

                        </div>
                        <div className="col-span-9" style={{ color: 'white' }}>Jumlah DBD Kedua Terendah
                        </div>
                    </div>
                    <div className="grid grid-cols-10 gap-1" onClick={() => onClickColor(warna[7])}>
                        <div className="col-span-1" style={{
                            color: '#9D5C0D',
                            backgroundColor: '#9D5C0D',
                            padding: 5,
                            borderRadius: 50,
                            width: '25px',
                            height: '25px'
                        }}>

                        </div>
                        <div className="col-span-9" style={{ color: 'white' }}>Jumlah DBD Tertinggi, Usia Tertua</div>
                    </div>
                    <div className="grid grid-cols-10 gap-1" onClick={() => onClickColor(warna[8])}>
                        <div className="col-span-1" style={{
                            color: warna[5],
                            backgroundColor: warna[5],
                            padding: 5,
                            borderRadius: 50,
                            width: '25px',
                            height: '25px'
                        }}>

                        </div>
                        <div className="col-span-9" style={{ color: 'white' }}>Jumlah DBD Terendah, Usia Termuda</div>
                    </div>
                    <div className="grid grid-cols-10 gap-1" onClick={() => onClickColor(warna[6])}>
                        <div className="col-span-1" style={{
                            color: '#063b00',
                            backgroundColor: '#063b00',
                            padding: 5,
                            borderRadius: 50,
                            width: '25px',
                            height: '25px'
                        }}>

                        </div>
                        <div className="col-span-9" style={{ color: 'white' }}> Jumlah Tifoid Tertinggi, Usia Tertua</div>
                    </div>
                    <div className="grid grid-cols-10 gap-1" onClick={() => onClickColor(warna[7])}>
                        <div className="col-span-1" style={{
                            color: '#854442',
                            backgroundColor: '#854442',
                            padding: 5,
                            borderRadius: 50,
                            width: '25px',
                            height: '25px'
                        }}>

                        </div>
                        <div className="col-span-9" style={{ color: 'white' }}>Jumlah Tifoid Kedua Terendah
                        </div>
                    </div>
                    <div className="grid grid-cols-10 gap-1" onClick={() => onClickColor(warna[8])}>
                        <div className="col-span-1" style={{
                            color: '#089000',
                            backgroundColor: '#089000',
                            padding: 5,
                            borderRadius: 50,
                            width: '25px',
                            height: '25px'
                        }}>

                        </div>
                        <div className="col-span-9" style={{ color: 'white' }}>  Jumlah Tifoid Terendah, Usia Termuda</div>
                    </div>
                    
                    <div className="grid grid-cols-10 gap-1" onClick={() => onClickColor(warna[11])}>
                        <div className="col-span-1" style={{
                            color: '#a98600',
                            backgroundColor: '#a98600',
                            padding: 5,
                            borderRadius: 50,
                            width: '25px',
                            height: '25px'
                        }}>

                        </div>
                        <div className="col-span-9" style={{ color: 'white' }}> Ketersediaan Air Bersih, Kondisi Pembuangan Sampah, dan Sistem Ventilasi Kedua Terendah</div>
                    </div>
                    <div className="grid grid-cols-10 gap-1" onClick={() => onClickColor(warna[12])}>
                        <div className="col-span-1" style={{
                            color: '#535353',
                            backgroundColor: '#535353',
                            padding: 5,
                            borderRadius: 50,
                            width: '25px',
                            height: '25px'
                        }}>

                        </div>
                        <div className="col-span-9" style={{ color: 'white' }}> Ketersediaan Air Bersih, Kondisi Pembuangan Sampah, dan Sistem Ventilasi Terendah
                        </div>
                    </div>
                    <div className="grid grid-cols-10 gap-1" onClick={() => onClickColor(warna[13])}>
                        <div className="col-span-1" style={{
                            color: '#e9d700',
                            backgroundColor: '#e9d700',
                            padding: 5,
                            borderRadius: 50,
                            width: '25px',
                            height: '25px'
                        }}>

                        </div>
                        <div className="col-span-9" style={{ color: 'white' }}>Ketersediaan Air Bersih Terbaik, Ada Lalat/Nyamuk di Sekitar Pembuangan Sampah Tertinggi, dan Sistem Ventilasi di Semua Ruangan
                        </div>
                    </div>
                    <div className="grid grid-cols-10 gap-1" onClick={() => onClickColor(warna[14])}>
                        <div className="col-span-1" style={{
                            color: '#f8ed62',
                            backgroundColor: '#f8ed62',
                            padding: 5,
                            borderRadius: 50,
                            width: '25px',
                            height: '25px'
                        }}>

                        </div>
                        <div className="col-span-9" style={{ color: 'white' }}> Ketersediaan Air Bersih Kedua Terbaik, Ada Lalat/Nyamuk di Sekitar Pembuangan Sampah Kedua Tertinggi, dan Sistem Ventilasi di Semua Ruangan</div>
                    </div>
                   
                    <div className="grid grid-cols-10 gap-1" onClick={() => onClickColor(warna[16])}>
                        <div className="col-span-1" style={{
                            color: '#660066',
                            backgroundColor: '#660066',
                            padding: 5,
                            borderRadius: 50,
                            width: '25px',
                            height: '25px'
                        }}>
                        </div>
                        <div className="col-span-9" style={{ color: 'white' }}> Nafsu Makan Kurang, Kebiasaan Jajan Diluar, dan Sering Pakai Jamban/Toilet Tertinggi
                        </div>
                    </div>
                    <div className="grid grid-cols-10 gap-1" onClick={() => onClickColor(warna[17])}>
                        <div className="col-span-1" style={{
                            color: '#00ffff',
                            backgroundColor: '#00ffff',
                            padding: 5,
                            borderRadius: 50,
                            width: '25px',
                            height: '25px'
                        }}>

                        </div>
                        <div className="col-span-9" style={{ color: 'white' }}> Nafsu Makan Kurang, Kebiasaan Jajan Diluar, dan Sering Pakai Jamban/Toilet Kedua Terendah</div>
                    </div>
                    <div className="grid grid-cols-10 gap-1" onClick={() => onClickColor(warna[18])}>
                        <div className="col-span-1" style={{
                            color: '#8E3200',
                            backgroundColor: '#8E3200',
                            padding: 5,
                            borderRadius: 50,
                            width: '25px',
                            height: '25px'
                        }}>

                        </div>
                        <div className="col-span-9" style={{ color: 'white' }}> Nafsu Makan Kurang, Kebiasaan Jajan Diluar, dan Sering Pakai Jamban/Toilet Terendah
                        </div>
                    </div> */}
                </div>

                
            </div>

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto h-5/6 my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <InterpretasiCluster modalData={inter} />
                                </div>
                                {/*footer*/}
                                <div
                                    className="tampil flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}

        </>
    )
}

export default Map

