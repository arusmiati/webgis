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
import { useRouter } from 'next/router';

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

    const coord5 = data?.cluster5_df

    // const res1 = data?.cluster1_result
    // const res2 = data?.cluster2_result
    // const res3 = data?.cluster3_result
    // const res4 = data?.cluster4_result
    const res5 = data?.cluster5_result
    // const res6 = data?.cluster6_result

    console.log(inter, 'ini interpretasi')
    // console.log(data)
    return Object.keys(coord5)?.map((kec) => {
        console.log("selectedData", selectedData, selectedData == kec.split(' (')[0])
        if (!selectedData || (selectedData && selectedData == kec.split(' (')[0])) {
            const [showModal, setShowModal] = React.useState(false);
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);

            // const resultKec1 = coord1[kec]
            // const resultKec2 = coord2[kec]
            // const resultKec3 = coord3[kec]
            // const resultKec4 = coord4[kec]
            const resultKec5 = coord5[kec]
            // const resultKec6 = coord6[kec]

            // let color_cluster1 = ''
            // const all_color_cluster1 = ['#FF0000', '#FFA500', '#FFFF00', '#00FFFF', '#0000FF', '#800080', '#FFC0CB']
            // switch (resultKec1['Total']) {
            //     case 0:
            //         color_cluster1 = all_color_cluster1[0];
            //         break
            //     case 1:
            //         color_cluster1 = all_color_cluster1[1];
            //         break
            //     case 2:
            //         color_cluster1 = all_color_cluster1[2];
            //         break
            //     case 3:
            //         color_cluster1 = all_color_cluster1[3];
            //         break
            //     case 4:
            //         color_cluster1 = all_color_cluster1[4];
            //         break
            //     case 5:
            //         color_cluster1 = all_color_cluster1[5];
            //         break
            //     case 6:
            //         color_cluster1 = all_color_cluster1[6];
            //         break
            //     case 7:
            //         color_cluster1 = all_color_cluster1[7];
            //         break
            //     default:
            //         color_cluster1 = all_color_cluster1[0];
            //         break
            // }

            // let color_cluster2 = ''
            // const all_color_cluster2 = ['#0f5e9c', '#9D5C0D', '#800026']
            // switch (resultKec2['Total']) {
            //     case 0:
            //         color_cluster2 = all_color_cluster2[0];
            //         break
            //     case 1:
            //         color_cluster2 = all_color_cluster2[1];
            //         break
            //     case 2:
            //         color_cluster2 = all_color_cluster2[2];
            //         break
            //     default:
            //         color_cluster2 = all_color_cluster2[0];
            //         break
            // }

            // let color_cluster3 = ''
            // const all_color_cluster3 = ['#063b00', '#854442', '#089000']
            // switch (resultKec3['Total']) {
            //     case 0:
            //         color_cluster3 = all_color_cluster3[0];
            //         break
            //     case 1:
            //         color_cluster3 = all_color_cluster3[1];
            //         break
            //     case 2:
            //         color_cluster3 = all_color_cluster3[2];
            //         break
            //     default:
            //         color_cluster3 = all_color_cluster3[0];
            //         break
            // }

            // let color_cluster4 = ''
            // const all_color_cluster4 = ['#a98600', '#535353', '#e9d700', '#f8ed62']
            // switch (resultKec4['Total']) {
            //     case 0:
            //         color_cluster4 = all_color_cluster4[0];
            //         break
            //     case 1:
            //         color_cluster4 = all_color_cluster4[1];
            //         break
            //     case 2:
            //         color_cluster4 = all_color_cluster4[2];
            //         break
            //     case 3:
            //         color_cluster4 = all_color_cluster4[3];
            //         break
            //     default:
            //         color_cluster4 = all_color_cluster4[0];
            //         break
            // }


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

            // let color_cluster6 = ''
            // const all_color_cluster6 = ['#FF0000', '#FF4500', '#FF6347', '#FF7F50', '#FF8C00', '#FFA500']
            // switch (resultKec6['Total']) {
            //     case 0:
            //         color_cluster6 = all_color_cluster6[0];
            //         break
            //     case 1:
            //         color_cluster6 = all_color_cluster6[1];
            //         break
            //     case 2:
            //         color_cluster6 = all_color_cluster6[2];
            //         break
            //     case 3:
            //         color_cluster6 = all_color_cluster6[3];
            //         break
            //     case 4:
            //         color_cluster6 = all_color_cluster6[4];
            //         break
            //     case 5:
            //         color_cluster6 = all_color_cluster6[5];
            //         break
            //     default:
            //         color_cluster6 = all_color_cluster1[0];
            //         break
            // }


            // const position1 = resultKec1?.coord
            // // const position2 = resultKec2?.coord
            // // const position3 = resultKec3?.coord
            // // const position4 = resultKec4?.coord
             const position5 = resultKec5?.coord
            // // const position6 = resultKec6?.coord

            // const ket_cluster1 = {
            //     0: 'Rata-rata Jumlah TB = ' + res1['First']['(\'tbc\', \'mean\')'] +
            //         '\nRentang Umur = ' + res1['First']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
            //         '\nAir Bersih = ' + res1['First']['(\'Tersedia air bersih\', \'mean\')'] + 
            //         '\nSampah = ' + res1['First']['(\'Sering Jajan Diluar\', \'mean\')'] +
            //         '\nVentilasi = ' + res1['First']['(\'Ada ventilasi disemua ruangan\', \'mean\')'],

            //     1: 'Rata-rata Jumlah TB = ' + res1['Second']['(\'tbc\', \'mean\')'] +
            //     '\nRentang Umur = ' + res1['Second']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
            //     '\nAir Bersih = ' + res1['Second']['(\'Tersedia air bersih\', \'mean\')'] + 
            //     '\nSampah = ' + res1['Second']['(\'Ada lalat\/nyamuk di sekitar tumpukan sampah\', \'mean\')'] +
            //     '\nVentilasi = ' + res1['Second']['(\'Ada ventilasi disemua ruangan\', \'mean\')'],

            //     2: 'Rata-rata Jumlah TB = ' + res1['Third']['(\'tbc\', \'mean\')'] +
            //     '\nRentang Umur = ' + res1['Third']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
            //     '\nAir Bersih = ' + res1['Third']['(\'Tersedia air bersih\', \'mean\')'] + 
            //     '\nSampah = ' + res1['Third']['(\'Bersih tanpa ada sampah\', \'mean\')'] +
            //     '\nVentilasi = ' + res1['Third']['(\'Ada ventilasi disemua ruangan\', \'mean\')'],

            //     3: 'Rata-rata Jumlah TB = ' + res1['Fourth']['(\'tbc\', \'mean\')'] +
            //     '\nRentang Umur = ' + res1['Fourth']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
            //     '\nAir Bersih = ' + res1['Fourth']['(\'Tersedia air bersih\', \'mean\')'] + 
            //     '\nSampah = ' + res1['Fourth']['(\'Bersih tanpa ada sampah\', \'mean\')'] +
            //     '\nVentilasi = ' + res1['Fourth']['(\'Ada ventilasi disemua ruangan\', \'mean\')'],

            //     4: 'Rata-rata Jumlah TB = ' + res1['Fifth']['(\'tbc\', \'mean\')'] +
            //     '\nRentang Umur = ' + res1['Fifth']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
            //     '\nAir Bersih = ' + res1['Fifth']['(\'Tersedia air bersih\', \'mean\')'] + 
            //     '\nSampah = ' + res1['Fifth']['(\'Bersih tanpa ada sampah\', \'mean\')'] +
            //     '\nVentilasi = ' + res1['Fifth']['(\'Ada ventilasi disemua ruangan\', \'mean\')'],

            //     5: 'Rata-rata Jumlah TB = ' + res1['Sistxh']['(\'tbc\', \'mean\')'] +
            //     '\nRentang Umur = ' + res1['Sistxh']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
            //     '\nAir Bersih = ' + res1['Sistxh']['(\'Tersedia air bersih\', \'mean\')'] + 
            //     '\nSampah = ' + res1['Sistxh']['(\'Bersih tanpa ada sampah\', \'mean\')'] +
            //     '\nVentilasi = ' + res1['Sistxh']['(\'Ada ventilasi disemua ruangan\', \'mean\')'],

            //     6: 'Rata-rata Jumlah TB = ' + res1['Seventh']['(\'tbc\', \'mean\')'] +
            //     '\nRentang Umur = ' + res1['Seventh']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
            //     '\nAir Bersih = ' + res1['Seventh']['(\'Tersedia air bersih\', \'mean\')'] + 
            //     '\nSampah = ' + res1['Seventh']['(\'Bersih tanpa ada sampah\', \'mean\')'] +
            //     '\nVentilasi = ' + res1['Seventh']['(\'Ada ventilasi disemua ruangan\', \'mean\')'],

            //     7: 'Rata-rata Jumlah TB = ' + res1['Eighth']['(\'tbc\', \'mean\')'] +
            //     '\nRentang Umur = ' + res1['Eighth']['(\'Rentang_Usia_TB\', \'<lambda>\')'] + ' tahun' +
            //     '\nAir Bersih = ' + res1['Eighth']['(\'Tersedia air bersih\', \'mean\')'] + 
            //     '\nSampah = ' + res1['Eighth']['(\'Bersih tanpa ada sampah\', \'mean\')'] +
            //     '\nVentilasi = ' + res1['Eighth']['(\'Ada ventilasi disemua ruangan\', \'mean\')'],
            // }

            // const ket_cluster2 = {
            //     0: 'Rata-rata Jumlah DBD = ' + Math.round(res2['First']['(\'dbd\', \'mean\')']),
            //     1: 'Rata-rata Jumlah DBD = ' + Math.round(res2['Second']['(\'dbd\', \'mean\')']),
            //     2: 'Rata-rata Jumlah DBD = ' + Math.round(res2['Third']['(\'dbd\', \'mean\')']),
            //     3: 'Rata-rata Jumlah DBD = ' + Math.round(res2['Fourth']['(\'dbd\', \'mean\')']),
            //     4: 'Rata-rata Jumlah DBD = ' + Math.round(res2['Fifth']['(\'dbd\', \'mean\')']),
            //     5: 'Rata-rata Jumlah DBD = ' + Math.round(res2['Sistxh']['(\'dbd\', \'mean\')']),
            //     6: 'Rata-rata Jumlah DBD = ' + Math.round(res2['Seventh']['(\'dbd\', \'mean\')']),
            //     7: 'Rata-rata Jumlah DBD = ' + Math.round(res2['Eighth']['(\'dbd\', \'mean\')']),
            //     8: 'Rata-rata Jumlah DBD = ' + Math.round(res2['Ninth']['(\'dbd\', \'mean\')'])
            // }

            // const ket_cluster3 = {
            //     0: 'Rata-rata Jumlah Tifoid = ' + Math.round(res3['First']['(\'tifoid\', \'mean\')']),
            //     1: 'Rata-rata Jumlah Tifoid = ' + Math.round(res3['Second']['(\'tifoid\', \'mean\')']),
            //     2: 'Rata-rata Jumlah Tifoid = ' + Math.round(res3['Third']['(\'tifoid\', \'mean\')']),
            //     3: 'Rata-rata Jumlah Tifoid = ' + Math.round(res3['Fourth']['(\'tifoid\', \'mean\')']),
            //     4: 'Rata-rata Jumlah Tifoid = ' + Math.round(res3['Fifth']['(\'tifoid\', \'mean\')']),
            //     5: 'Rata-rata Jumlah Tifoid = ' + Math.round(res3['Sixth']['(\'tifoid\', \'mean\')']),
            //     6: 'Rata-rata Jumlah Tifoid = ' + Math.round(res3['Seventh']['(\'tifoid\', \'mean\')']),
            //     7: 'Rata-rata Jumlah Tifoid = ' + Math.round(res3['Eighth']['(\'tifoid\', \'mean\')']),
            //     8: 'Rata-rata Jumlah Tifoid = ' + Math.round(res3['Ninth']['(\'tifoid\', \'mean\')']),
            //     9: 'Rata-rata Jumlah Tifoid = ' + Math.round(res3['Tenth']['(\'tifoid\', \'mean\')']),
            //     10: 'Rata-rata Jumlah Tifoid = ' + Math.round(res3['Eleventh']['(\'tifoid\', \'mean\')'])
            // }

            // const ket_cluster4 = {
            //     0: 'Rata-rata Jumlah TB = ' + Math.round(res4['First']['(\'tbc\', \'mean\')']),
            //     1: 'Rata-rata Jumlah TB = ' + Math.round(res4['Second']['(\'tbc\', \'mean\')']),
            //     2: 'Rata-rata Jumlah TB = ' + Math.round(res4['Third']['(\'tbc\', \'mean\')']),
            //     3: 'Rata-rata Jumlah TB = ' + Math.round(res4['Fourth']['(\'tbc\', \'mean\')']),
            //     4: 'Rata-rata Jumlah TB = ' + Math.round(res4['Fifth']['(\'tbc\', \'mean\')']),
            //     5: 'Rata-rata Jumlah TB = ' + Math.round(res4['Sixth']['(\'tbc\', \'mean\')']),
            //     6: 'Rata-rata Jumlah TB = ' + Math.round(res4['Seventh']['(\'tbc\', \'mean\')']),
            //     7: 'Rata-rata Jumlah TB = ' + Math.round(res4['Eighth']['(\'tbc\', \'mean\')']),    
            //     8: 'Rata-rata Jumlah TB = ' + Math.round(res4['Seventh']['(\'tbc\', \'mean\')']),
            //     9: 'Rata-rata Jumlah TB = ' + Math.round(res4['Eighth']['(\'tbc\', \'mean\')'])
            // }

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

            // const ket_cluster6 = {
            //     0: 'Rata-rata Jumlah Tifoid = ' + Math.round(res6['First']['(\'tifoid\', \'mean\')']),
            //     1: 'Rata-rata Jumlah Tifoid = ' + Math.round(res6['Second']['(\'tifoid\', \'mean\')']),
            //     2: 'Rata-rata Jumlah Tifoid = ' + Math.round(res6['Third']['(\'tifoid\', \'mean\')']),
            //     3: 'Rata-rata Jumlah Tifoid = ' + Math.round(res6['Fourth']['(\'tifoid\', \'mean\')']),
            //     4: 'Rata-rata Jumlah Tifoid = ' + Math.round(res6['Fifth']['(\'tifoid\', \'mean\')']),
            //     5: 'Rata-rata Jumlah Tifoid = ' + Math.round(res6['Sistxh']['(\'tifoid\', \'mean\')'])
            // }
            //  const result1 = ket_cluster1[resultKec1.Total].split('\n').map(e => `${e}<br/>`).join('')
            // const result2 = ket_cluster2[resultKec2.Total].split('\n').map(e => `${e}<br/>`).join('')
            // const result3 = ket_cluster3[resultKec3.Total].split('\n').map(e => `${e}<br/>`).join('')
            // const result4 = ket_cluster4[resultKec4.Total].split('\n').map(e => `${e}<br/>`).join('')
            const result5 = ket_cluster5[resultKec5.Total].split('\n').map(e => `${e}<br/>`).join('')     
            // const result6 = ket_cluster6[resultKec6.Total].split('\n').map(e => `${e}<br/>`).join('')

            return (
                <div className="text-lg">
                    <CircleMarker
                        key={kec}
                        center={position5}
                        className={`circle-marker visible ${color_cluster5} ${kec.split(' (')[0].replace(' ', '-')}`}
                        pathOptions={{ color: color_cluster5 }}
                        radius={8}
                        fillOpacity={1.0}
                    >
                        <Popup>
                            <h3 style={{ textAlign: 'center' }}>
                                <b style={{ color: 'darkslategray', fontSize: '14px' }} >{kec}</b>
                            </h3>
                            <br />

                            <div className="text-right" style={{ fontSize: '14px' }}>
                                <div dangerouslySetInnerHTML={{ __html: result5 }}></div>
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
    const kec = data?.cluster5_df

    const warna = {
        0: '#8B4513',
        1: '#FF8C00',
        2: '#FF1493',
        3: '#1E90FF',
        4: '#9932CC',
        5: '#8B008B',
        6: '#556B2F',
        7: '#FF00FF'
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

    const router = useRouter();

    const handleClick = () => {
        router.push('/cluster');
    };

    return (
        <>
            <div className="bg-[#343A40] h-full pb-2">
                <div className="tampil flex items-center justify-center">
                
                    <Button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-5 mb-5"
                        onClick={handleClick}>
                        Tampilkan semua cluster
                    </Button>
                    <Button className="ml-8 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-5 mb-5"
                        onClick={() => onClickColor('')}>
                        Tampilkan cluster 5
                    </Button>
                    <Button
                        className="ml-8 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-5 mb-5"
                        onClick={() => setShowModal(true)}>
                        Interpretasi hasil cluster
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
                    <div className="grid grid-cols-10 gap-1" onClick={() => onClickColor(warna[0])}>
                        <div className="col-span-1" style={{
                            color: 'white',
                            backgroundColor: warna[0],
                            padding: 5,
                            borderRadius: 50,
                            width: '25px',
                            height: '25px'
                            
                        }}>
                        </div>
                         <div className="col-span-9" style={{ color: 'white'}}>Jumlah DBD peringkat keempat dengan rentang umur 16 – 22 tahun dimana nafsu makan kurang, jarang jajan diluar, dan jarang memakai jamban/toilet
                         </div>
                    </div>
                    <div className="grid grid-cols-10 gap-1" onClick={() => onClickColor(warna[1])}>
                        <div className="col-span-1" style={{
                            color: 'white',
                            backgroundColor: warna[1],
                            padding: 5,
                            borderRadius: 50,
                            width: '25px',
                            height: '25px'
                            
                        }}>
                        </div>
                        <div className="col-span-9" style={{ color: 'white'}}>Jumlah DBD peringkat pertama (jumlah kasus DBD tertinggi) dengan rentang umur 15 – 19 tahun dimana nafsu makan sangat kurang, sering jajan diluar, dan sering memakai jamban/toilet
                        </div>
                    </div>
                    <div className="grid grid-cols-10 gap-1" onClick={() => onClickColor(warna[2])}>
                        <div className="col-span-1" style={{
                            color: 'white',
                            backgroundColor: warna[2],
                            padding: 5,
                            borderRadius: 50,
                            width: '25px',
                            height: '25px'
                            
                        }}>
                         </div>
                         <div className="col-span-9" style={{ color: 'white'}}>Jumlah DBD peringkat keenam (jumlah kasus DBD terendah) karena tidak terjadi kasus DBD dimana nafsu makan normal, tidak jajan diluar, dan jarang memakai jamban/toilet
                         </div></div>
                    <div className="grid grid-cols-10 gap-1" onClick={() => onClickColor(warna[3])}>
                        <div className="col-span-1" style={{
                            color: 'white',
                            backgroundColor: warna[3],
                            padding: 5,
                            borderRadius: 50,
                            width: '25px',
                            height: '25px'
                            
                        }}>
                        </div>
                        <div className="col-span-9" style={{ color: 'white'}}>Jumlah DBD peringkat ketiga dengan rentang umur 11 – 19 tahun dimana nafsu makan sangat kurang, sering jajan diluar, dan sering memakai jamban/toilet
                        </div>
                    </div>
                    <div className="grid grid-cols-10 gap-1" onClick={() => onClickColor(warna[4])}>
                        <div className="col-span-1" style={{
                            color: '#ff7400',
                            backgroundColor: warna[4],
                            padding: 5,
                            borderRadius: 50,
                            width: '25px',
                            height: '25px'
                        }}>

                        </div>

                        <div className="col-span-9" style={{ color: 'white' }}>Jumlah DBD peringkat keenam (jumlah kasus DBD terendah) karena tidak terjadi kasus DBD dimana nafsu makan normal, jarang jajan diluar, dan jarang memakai jamban/toilet
                        </div>
                    </div>
                    <div className="grid grid-cols-10 gap-1" onClick={() => onClickColor(warna[5])}>
                        <div className="col-span-1" style={{
                           
                            color: '#ff7b7b',
                            backgroundColor: warna[5],
                            padding: 5,
                            borderRadius: 50,
                            width: '25px',
                            height: '25px'
                        }}>

                        </div>
                        <div className="col-span-9" style={{ color: 'white' }}>Jumlah DBD peringkat kedua dengan rentang umur 14 – 15 tahun dimana nafsu makan sangat kurang, sering jajan diluar, dan sering memakai jamban/toilet
                        </div>
                    </div>
                    <div className="grid grid-cols-10 gap-1" onClick={() => onClickColor(warna[6])}>
                        <div className="col-span-1" style={{
                            color: '#0f5e9c',
                            backgroundColor: warna[6],
                            padding: 5,
                            borderRadius: 50,
                            width: '25px',
                            height: '25px'
                        }}>

                        </div>
                        <div className="col-span-9" style={{ color: 'white' }}>Jumlah DBD peringkat kelima dengan rentang umur 8 tahun dimana nafsu makan kurang, sering jajan diluar, dan sering memakai jamban/toilet
                        </div>
                    </div>
                    <div className="grid grid-cols-10 gap-1" onClick={() => onClickColor(warna[7])}>
                        <div className="col-span-1" style={{
                            color: '#9D5C0D',
                            backgroundColor: warna[7],
                            padding: 5,
                            borderRadius: 50,
                            width: '25px',
                            height: '25px'
                        }}>

                        </div>
                        <div className="col-span-9" style={{ color: 'white' }}>Jumlah DBD peringkat kelima dengan rentang umur 17 – 31 tahun dimana nafsu makan normal, jarang jajan diluar, dan jarang memakai jamban/toilet
                         </div>
                    </div>
                    {/* <div className="grid grid-cols-10 gap-1" onClick={() => onClickColor(warna[8])}>
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

