import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import re
from data import Data
import pandas as pd
import numpy as np
import random as rd
import matplotlib.pyplot as plt 
import seaborn as sns

from sklearn.preprocessing import MinMaxScaler, StandardScaler
from sklearn.cluster import KMeans as Kmeans1
from sklearn.metrics import davies_bouldin_score

import geopy
from geopy.geocoders import Nominatim
from geopy.exc import GeocoderTimedOut
from datetime import datetime
from tqdm import tqdm_notebook
from sklearn.preprocessing import MultiLabelBinarizer
from sklearn.linear_model import LinearRegression, Ridge, Lasso

def cluster(dataset):
    # print(dataset)
    db = {}
    db_umur = []
    db_alamat = []
    db_nafsu_makan = []
    db_kebiasaan_jajan = []
    db_pembuangan_sampah = []
    db_sistem_ventilasi = []
    db_air_bersih = []
    db_diagnosa = []

    for i in dataset:
        db_umur.append(i.umur)
        db_alamat.append(i.alamat)
        db_nafsu_makan.append(i.nafsu_makan)
        db_kebiasaan_jajan.append(i.kebiasaan_jajan)
        db_pembuangan_sampah.append(i.pembuangan_sampah)
        db_sistem_ventilasi.append(i.sistem_ventilasi)
        db_air_bersih.append(i.air_bersih)
        db_diagnosa.append(i.diagnosa)

    db['umur'] = db_umur
    db['alamat'] = db_alamat
    db['nafsu makan'] = db_nafsu_makan
    db['kebiasaan jajan'] = db_kebiasaan_jajan
    db['pembuangan sampah'] = db_pembuangan_sampah
    db['sistem ventilasi'] = db_sistem_ventilasi
    db['air bersih'] = db_air_bersih
    db['diagnosa'] = db_diagnosa
    # print(db)

    df = pd.DataFrame(db)
    # print(df)
    data = df.copy()
    data = data.rename(columns={'Apakah nafsu makan berkurang?': 'Nafsu Makan',
                            'Apakah sering jajan diluar rumah?': 'Kebiasaan Jajan',
                            'Bagaimana kondisi pembuangan sampah disekitar rumah?': 'Kondisi Pembuangan Sampah',
                            'Apakah tersedia air bersih di rumah?': 'Ketersediaan Air Bersih',
                            'Bagaimana sistem ventilasi di rumah pasien?': 'Sistem Ventilasi Rumah',
                            'Apakah sering menggunakan jamban/toilet?': 'Riwayat Pemakaian Jamban/Toilet',
                            'Apa diagnosa/hasil tes darah pasien?': 'Diagnosa/Tes Darah'})

    features_data = data[["Umur", 
                      "Alamat", 
                      "Nafsu Makan", 
                      "Kebiasaan Jajan", 
                      "Kondisi Pembuangan Sampah", 
                      "Ketersediaan Air Bersih",
                     "Sistem Ventilasi Rumah",
                     "Riwayat Pemakaian Jamban/Toilet",
                     "Diagnosa/Tes Darah"]].copy()

    
    mlb = MultiLabelBinarizer()

    features_data['Nafsu Makan']=features_data['Nafsu Makan'].str.split(',\s*')
    features_data['Kebiasaan Jajan']=features_data['Kebiasaan Jajan'].str.split(',\s*')
    features_data['Kondisi Pembuangan Sampah']=features_data['Kondisi Pembuangan Sampah'].str.split(',\s*')
    features_data['Ketersediaan Air Bersih']=features_data['Ketersediaan Air Bersih'].str.split(',\s*')
    features_data['Sistem Ventilasi Rumah']=features_data['Sistem Ventilasi Rumah'].str.split(',\s*')
    features_data['Riwayat Pemakaian Jamban/Toilet']=features_data['Riwayat Pemakaian Jamban/Toilet'].str.split(',\s*')
    features_data['Diagnosa/Tes Darah']=features_data['Diagnosa/Tes Darah'].str.split(',\s*')

    mlb.fit(features_data['Nafsu Makan'])
    mlb.fit(features_data['Kebiasaan Jajan'])
    mlb.fit(features_data['Kondisi Pembuangan Sampah'])
    mlb.fit(features_data['Ketersediaan Air Bersih'])
    mlb.fit(features_data['Sistem Ventilasi Rumah'])
    mlb.fit(features_data['Riwayat Pemakaian Jamban/Toilet'])
    mlb.fit(features_data['Diagnosa/Tes Darah'])

    mlb.classes_

    features_data['Nafsu Makan'].explode().unique()
    features_data['Kebiasaan Jajan'].explode().unique()
    features_data['Ketersediaan Air Bersih'].explode().unique()
    features_data['Kondisi Pembuangan Sampah'].explode().unique()
    features_data['Sistem Ventilasi Rumah'].explode().unique()
    features_data['Riwayat Pemakaian Jamban/Toilet'].explode().unique()
    features_data['Diagnosa/Tes Darah'].explode().unique()

    mlb.transform(features_data['Nafsu Makan'])
    mlb.transform(features_data['Kebiasaan Jajan'])
    mlb.transform(features_data['Ketersediaan Air Bersih'])
    mlb.transform(features_data['Kondisi Pembuangan Sampah'])
    mlb.transform(features_data['Sistem Ventilasi Rumah'])
    mlb.transform(features_data['Riwayat Pemakaian Jamban/Toilet'])
    mlb.transform(features_data['Diagnosa/Tes Darah'])

    a1 = pd.DataFrame(mlb.fit_transform(features_data['Nafsu Makan']), columns=mlb.classes_)
    a2 = pd.DataFrame(mlb.fit_transform(features_data['Kebiasaan Jajan']), columns=mlb.classes_)
    a3 = pd.DataFrame(mlb.fit_transform(features_data['Ketersediaan Air Bersih']), columns=mlb.classes_)
    a4 = pd.DataFrame(mlb.fit_transform(features_data['Kondisi Pembuangan Sampah']), columns=mlb.classes_)
    a5 = pd.DataFrame(mlb.fit_transform(features_data['Sistem Ventilasi Rumah']), columns=mlb.classes_)
    a6 = pd.DataFrame(mlb.fit_transform(features_data['Riwayat Pemakaian Jamban/Toilet']), columns=mlb.classes_)
    a7 = pd.DataFrame(mlb.fit_transform(features_data['Diagnosa/Tes Darah']), columns=mlb.classes_)

    # concat data column after transformation
    data_features=pd.concat([features_data,a1, a2, a3, a4, a5, a6, a7], axis='columns')
    df = data_features.drop(['Nafsu Makan', 'Kondisi Pembuangan Sampah', 'Kebiasaan Jajan', 'Ketersediaan Air Bersih', 'Sistem Ventilasi Rumah', 'Riwayat Pemakaian Jamban/Toilet', 'Diagnosa/Tes Darah'], axis=1)

    """##Grouping Data by Address"""

    ##Data TB
    data1 = df.copy()
    jumlah_tb = data1.loc[(data1['tbc'] == 1)].copy()
    dict_cat = {}
    dict_num = {}

    for cat in jumlah_tb.select_dtypes(['object']) :
        if (cat == 'Alamat'):
            continue
        dict_cat[cat] = lambda x: x.value_counts().index[0]
    for num in jumlah_tb.select_dtypes(['int64', 'float64']):
        if((num == 'tbc') or (num == 'dbd') or (num == 'tifoid')):
            continue
        dict_num[num] = ['mean']
    
    data_perdesa = jumlah_tb.groupby('Alamat').agg({
        'tbc': 'count',
        **dict_num,
        **dict_cat
    })

    data_perdesa= data_perdesa[['tbc', 'Umur']]
    data_perdesa = data_perdesa.drop(['Umur'], axis=1)

    ##Data DBD
    data1 = df.copy()
    jumlah_dbd = data1.loc[(data1['dbd'] == 1)].copy()
    dict_cat = {}
    dict_num = {}

    for cat in jumlah_dbd.select_dtypes(['object']) :
        if (cat == 'Alamat'):
            continue
        dict_cat[cat] = lambda x: x.value_counts().index[0]
    for num in jumlah_dbd.select_dtypes(['int64', 'float64']):
        if((num == 'tbc') or (num == 'dbd') or (num == 'tifoid')):
            continue
        dict_num[num] = ['mean']
    
    data_perdesa1 = jumlah_dbd.groupby('Alamat').agg({
        'dbd': 'count',
        **dict_num,
        **dict_cat
    })

    data_perdesa1 = data_perdesa1[['dbd', 'Umur']]
    data_perdesa1 = data_perdesa1.drop(['Umur'], axis=1)

    ##Data Tifoid
    data1 = df.copy()
    jumlah_tifoid = data1.loc[(data1['tifoid'] == 1)].copy()
    dict_cat = {}
    dict_num = {}

    for cat in jumlah_tifoid.select_dtypes(['object']) :
        if (cat == 'Alamat'):
            continue
        dict_cat[cat] = lambda x: x.value_counts().index[0]
    for num in jumlah_tifoid.select_dtypes(['int64', 'float64']):
        if((num == 'tbc') or (num == 'dbd') or (num == 'tifoid')):
            continue
        dict_num[num] = ['count']
    
    data_perdesa2 = jumlah_tifoid.groupby('Alamat').agg({
        'tifoid': 'count',
        **dict_num,
        **dict_cat
    })

    data_perdesa2 = data_perdesa2[['tifoid', 'Umur']]
    data_perdesa2 = data_perdesa2.drop(['Umur'], axis=1)

    #Data Etc
    data1 = df.copy()
    jumlah = data1.loc[(data1['tbc'] == 1) | (data1['dbd'] == 1) | (data1['tifoid'] == 1)].copy()
    dict_cat = {}
    dict_num = {}

    for cat in jumlah.select_dtypes(['object']) :
        if (cat == 'Alamat'):
            continue
        dict_cat[cat] = lambda x: x.value_counts().index[0]
    for num in jumlah.select_dtypes(['int64', 'float64']):
        if((num == 'tbc') or (num == 'dbd') or (num == 'tifoid') or (num == 'Umur')):
            continue
        dict_num[num] = ['sum']
    
    data_perdesa3 = jumlah.groupby('Alamat').agg({
        'Umur': 'mean',
        **dict_num,
        **dict_cat
    })

    ##merge 4 column data
    merge_data = pd.concat([data_perdesa, 
                          data_perdesa1, 
                          data_perdesa2,
                          data_perdesa3], axis='columns')

    #remove nan data
    merge_data  = merge_data .replace(np.NaN, 0)

    merge_data.columns = merge_data.columns.map(''.join).str.strip('|')
    merge_data.columns = [
        c.replace('mean', '').replace('count', '').replace('sum', '') for c in merge_data.columns
    ]

    class KMeans:
        def __init__(
                self,
                n_cluster: int,
                init_pp: bool = True,
                max_iter: int = 100,
                tolerance: float = 1e-4,
                seed: int = None):
            self.n_cluster = n_cluster
            self.max_iter = max_iter
            self.tolerance = tolerance
            self.init_pp = init_pp
            self.seed = seed
            self.centroid = None
            self.SSE = None

        def fit(self, data: np.ndarray):
            self.centroid = self._init_centroid(data)
            for _ in range(self.max_iter):
                distance = self._calc_distance(data)
                cluster = self._assign_cluster(distance)
                new_centroid = self._update_centroid(data, cluster)
                diff = np.abs(self.centroid - new_centroid).mean()
                self.centroid = new_centroid

                if diff <= self.tolerance:
                    break

            self.SSE = self._calc_sse(data, cluster)

        def predict(self, data: np.ndarray):
            distance = self._calc_distance(data)
            cluster = self._assign_cluster(distance)
            return cluster

        def _init_centroid(self, data: np.ndarray):
            if self.init_pp:
                np.random.seed(self.seed)
                centroid = [int(np.random.uniform()*len(data))]
                for _ in range(1, self.n_cluster):
                    dist = []
                    for i in range(len(data)):
                        d = np.inf
                        for j in range(len(centroid)):
                            d = min(d, np.inner(data[i]-centroid[j], data[i]-centroid[j]))
                        dist.append(d)
                    dist = np.array(dist)
                    dist = dist / dist.sum()
                    cumdist = np.cumsum(dist)

                    prob = np.random.rand()
                    for i, c in enumerate(cumdist):
                        if prob > c and i not in centroid:
                            centroid.append(i)
                        break
                centroid = np.array([data[c] for c in centroid])
            else:
                np.random.seed(self.seed)
                idx = np.random.choice(range(len(data)), size=(self.n_cluster))
                centroid = data[idx]
            return centroid

        def _calc_distance(self, data: np.ndarray):
            distances = []
            for c in self.centroid:
                distance = np.sum((data - c) * (data - c), axis=1)
                distances.append(distance)

            distances = np.array(distances)
            distances = distances.T
            return distances

        def _assign_cluster(self, distance: np.ndarray):
            cluster = np.argmin(distance, axis=1)
            return cluster

        def _update_centroid(self, data: np.ndarray, cluster: np.ndarray):
            centroids = []
            for i in range(self.n_cluster):
                idx = np.where(cluster == i)
                centroid = np.mean(data[idx], axis=0)
                centroids.append(centroid)
            centroids = np.array(centroids)
            return centroids

    def _calc_sse(self, data: np.ndarray, cluster: np.ndarray):
      sse = 0
      for i in range(self.n_cluster):
          idx = np.where(cluster == i)
          sse += np.sum((data[idx] - self.centroid[i])**2)
      return sse



    def calc_sse(centroids: np.ndarray, labels: np.ndarray, data: np.ndarray):
        distances = 0
    for i, c in enumerate(centroids):
        idx = np.where(labels == i)
        dist = np.sum((data[idx] - c)**2)
        distances += dist
    return distances

    def quantization_error(centroids: np.ndarray, labels: np.ndarray, data: np.ndarray) -> float:
        error = 0.0
        for i, c in enumerate(centroids):
            idx = np.where(labels == i)
            dist = np.linalg.norm(data[idx] - c)
            dist /= len(idx)
            error += dist
        error /= len(centroids)
        return error

    class Particle:
        def __init__(self,
                    n_cluster: int,
                    data: np.ndarray,
                    use_kmeans: bool = False,
                    w: float = 0.9,
                    c1: float = 0.5,
                    c2: float = 0.3):
            index = np.random.choice(list(range(len(data))), n_cluster)
            self.centroids = data[index].copy()
            if use_kmeans:
                kmeans = KMeans(n_cluster=n_cluster, init_pp=False)
                kmeans.fit(data)
                self.centroids = kmeans.centroid.copy()
            self.best_position = self.centroids.copy()
            self.best_score = quantization_error(self.centroids, self._predict(data), data)
            self.best_sse = calc_sse(self.centroids, self._predict(data), data)
            self.velocity = np.zeros_like(self.centroids)
            self._w = w
            self._c1 = c1
            self._c2 = c2

        def update(self, gbest_position: np.ndarray, data: np.ndarray):
            self._update_velocity(gbest_position)
            self._update_centroids(data)

        def _update_velocity(self, gbest_position: np.ndarray):
            v_old = self._w * self.velocity
            cognitive_component = self._c1 * np.random.random() * (self.best_position - self.centroids)
            social_component = self._c2 * np.random.random() * (gbest_position - self.centroids)
            self.velocity = v_old + cognitive_component + social_component

        def _update_centroids(self, data: np.ndarray):
            self.centroids = self.centroids + self.velocity
            new_score = quantization_error(self.centroids, self._predict(data), data)
            sse = calc_sse(self.centroids, self._predict(data), data)
            self.best_sse = min(sse, self.best_sse)
            if new_score < self.best_score:
                self.best_score = new_score
                self.best_position = self.centroids.copy()

        def _predict(self, data: np.ndarray) -> np.ndarray:
            distance = self._calc_distance(data)
            cluster = self._assign_cluster(distance)
            return cluster

        def _calc_distance(self, data: np.ndarray) -> np.ndarray:
            distances = []
            for c in self.centroids:
                distance = np.sum((data - c) * (data - c), axis=1)
                distances.append(distance)

            distances = np.array(distances)
            distances = np.transpose(distances)
            return distances

        def _assign_cluster(self, distance: np.ndarray) -> np.ndarray:
            cluster = np.argmin(distance, axis=1)
            return cluster

    class ParticleSwarmOptimizedClustering:
        def __init__(self,
                    n_cluster: int,
                    n_particles: int,
                    data: np.ndarray,
                    hybrid: bool = True,
                    max_iter: int = 100,
                    print_debug: int = 10):
            self.n_cluster = n_cluster
            self.n_particles = n_particles
            self.data = data
            self.max_iter = max_iter
            self.particles = []
            self.hybrid = hybrid

            self.print_debug = print_debug
            self.gbest_score = np.inf
            self.gbest_centroids = None
            self.gbest_sse = np.inf
            self._init_particles()

        def _init_particles(self):
            for i in range(self.n_particles):
                particle = None
                if i == 0 and self.hybrid:
                    particle = Particle(self.n_cluster, self.data, use_kmeans=True)
                else:
                    particle = Particle(self.n_cluster, self.data, use_kmeans=False)
                if particle.best_score < self.gbest_score:
                    self.gbest_centroids = particle.centroids.copy()
                    self.gbest_score = particle.best_score
                self.particles.append(particle)
                self.gbest_sse = min(particle.best_sse, self.gbest_sse)

        def run(self):
            print('Initial global best score', self.gbest_score)
            history = []
            for i in range(self.max_iter):
                for particle in self.particles:
                    particle.update(self.gbest_centroids, self.data)
                    # print(i, particle.best_score, self.gbest_score)
                for particle in self.particles:
                    if particle.best_score < self.gbest_score:
                        self.gbest_centroids = particle.centroids.copy()
                        self.gbest_score = particle.best_score
                history.append(self.gbest_score)
                if i % self.print_debug == 0:
                    print('Iteration {:04d}/{:04d} current gbest score {:.18f}'.format(
                        i + 1, self.max_iter, self.gbest_score))
            print('Finish with gbest score {:.18f}'.format(self.gbest_score))
            return history

    """#**CLUSTER1**"""

    data_cluster1 = merge_data[['tbc', 'Umur']] 

    # Standardize data
    scaler = MinMaxScaler()
    Num_features = data_cluster1.select_dtypes(include=['int64', 'float64']).columns
    scaler.fit(data_cluster1[Num_features])
    cluster1 = scaler.transform(data_cluster1[Num_features])
        
    kmeans1 = KMeans(n_cluster=3, init_pp=False, seed=2018)
    kmeans1.fit(cluster1 )

    pso1 = ParticleSwarmOptimizedClustering(n_cluster=3, 
                                    n_particles=20, 
                                    data=cluster1, 
                                    hybrid=True,
                                    max_iter=2000, 
                                    print_debug=100)
    pso_kmeans1 = KMeans(n_cluster=3, init_pp=False, seed=2018)
    pso_kmeans1.centroid = pso1.gbest_centroids.copy()

    predicted_pso1 = pso_kmeans1.predict(cluster1)
        
    frame1 = pd.DataFrame(cluster1)
    frame1['cluster'] = predicted_pso1

    data_cluster1['labels'] = predicted_pso1
    data_cluster1['Segment'] = data_cluster1['labels'].map({0: 'First', 1: 'Second', 2: 'Third'})

    #Order the cluster
    data_cluster1['Segment'] = data_cluster1['Segment'].astype('category')
    data_cluster1['Segment'] = data_cluster1['Segment'].cat.reorder_categories(['First', 'Second', 'Third'])

    dict_cat = {}
    dict_num = {}

    for cat in data_cluster1.select_dtypes('object'):
        dict_cat[cat] = lambda x: x.value_counts().index[0]

    for num in data_cluster1.select_dtypes(['int64', 'float64']):
        if (num == 'Total'):
            continue
        dict_num[num] = ['mean']

        
    data_cluster1.rename(columns={'labels': 'Total'}, inplace=True)
    data_percluster1 = data_cluster1.groupby('Segment').agg({
        'Total': 'count',
        **dict_num,
        **dict_cat
    }).T

    # ======  COUNT LOGITUDE AND LATITUDE FOR ALL KECAMATAN =======#
    alamat = []
    for i in data_cluster1.index:
        splitted = i.split(' (')
        alamat.append(splitted[0])

    geolocator = Nominatim(user_agent="tes")
    coord = []

    for i in range(0, len(alamat)):
        loc = alamat[i]
        location = geolocator.geocode(loc, timeout=None)
        if location is not None:
            m = 0.0025
            coord.append([[location.latitude, location.longitude], [location.latitude + m, location.longitude + m],
                          [location.latitude + m, location.longitude - m],
                          [location.latitude - m, location.longitude + m],
                          [location.latitude - m, location.longitude - m],
                          [location.latitude, location.longitude + m]])
            print(loc)

    coord1 = [i[0] for i in coord]
    coord2 = [i[1] for i in coord]
    coord3 = [i[2] for i in coord]
    coord4 = [i[3] for i in coord]
    coord5 = [i[4] for i in coord]
    coord6 = [i[5] for i in coord]

    data_cluster1['coord'] = coord1
    data_cluster1 = data_cluster1.T

    data_cluster1 = data_cluster1.T
    data_percluster1.to_json(r'./result/cluster1_result.json')
    data_cluster1.to_json(r'./result/cluster1_df.json')

    data_cluster2 = merge_data[['dbd', 'Umur']]

    # Standardize data
    scaler = MinMaxScaler()
    Num_features = data_cluster2.select_dtypes(include=['int64', 'float64']).columns
    scaler.fit(data_cluster2[Num_features])
    cluster2 = scaler.transform(data_cluster2[Num_features])

    pso2 = ParticleSwarmOptimizedClustering(n_cluster=3, 
                                       n_particles=20, 
                                       data=cluster2, 
                                       hybrid=True,
                                       max_iter=2000, 
                                       print_debug=50)

    pso_kmeans2 = KMeans(n_cluster=3, init_pp=False, seed=2018)
    pso_kmeans2.centroid = pso2.gbest_centroids.copy()  

    predicted_pso2 = pso_kmeans2.predict(cluster2) 
    frame2 = pd.DataFrame(cluster2)
    frame2['cluster'] = predicted_pso2   

    #create new column for cluster labels associated with each subject
    data_cluster2['labels'] = predicted_pso2
    data_cluster2['Segment'] = data_cluster2['labels'].map({0: 'First', 1: 'Second', 2: 'Third'})            

    #Order the cluster
    data_cluster2['Segment'] = data_cluster2['Segment'].astype('category')
    data_cluster2['Segment'] = data_cluster2['Segment'].cat.reorder_categories(['First', 'Second', 'Third'])

    dict_cat = {}
    dict_num = {}

    for cat in data_cluster2.select_dtypes('object'):
        dict_cat[cat] = lambda x: x.value_counts().index[0]

    for num in data_cluster2.select_dtypes(['int64', 'float64']):
        if (num == 'Total'):
            continue
        dict_num[num] = ['mean']

        
    data_cluster2.rename(columns={'labels': 'Total'}, inplace=True)
    data_percluster2 = data_cluster2.groupby('Segment').agg({
        'Total': 'count',
        **dict_num,
        **dict_cat
    }).T

    data_cluster2['coord'] = coord2

    data_cluster2 = data_cluster2.T
    data_percluster2.to_json(r'./result/cluster2_result.json')
    data_cluster2.to_json(r'./result/cluster2_df.json')

    data_cluster3 = merge_data[['tifoid', 'Umur']] 

    # Standardize data
    scaler = MinMaxScaler()
    Num_features = data_cluster3.select_dtypes(include=['int64', 'float64']).columns
    scaler.fit(data_cluster3[Num_features])
    cluster3 = scaler.transform(data_cluster3[Num_features])

    pso3 = ParticleSwarmOptimizedClustering(n_cluster=3, 
                                       n_particles=20, 
                                       data=cluster3, 
                                       hybrid=True,
                                       max_iter=2000, 
                                       print_debug=100)
    pso_kmeans3 = KMeans(n_cluster=3)
    pso_kmeans3.centroid = pso3.gbest_centroids.copy()    

    predicted_pso3 = pso_kmeans3.predict(cluster3) 

    frame3 = pd.DataFrame(cluster1)
    frame3['cluster'] = predicted_pso3      

    #create new column for cluster labels associated with each subject
    data_cluster3['labels'] = predicted_pso3
    data_cluster3['Segment'] = data_cluster3['labels'].map({0: 'First', 1: 'Second', 2: 'Third'})     

    data_cluster3['Segment'] = data_cluster3['Segment'].astype('category')
    data_cluster3['Segment'] = data_cluster3['Segment'].cat.reorder_categories(['First', 'Second', 'Third'])

    dict_cat = {}
    dict_num = {}

    for cat in data_cluster3.select_dtypes('object'):
        dict_cat[cat] = lambda x: x.value_counts().index[0]

    for num in data_cluster3.select_dtypes(['int64', 'float64']):
        if (num == 'Total'):
            continue
        dict_num[num] = ['mean']

        
    data_cluster3.rename(columns={'labels': 'Total'}, inplace=True)
    data_percluster3 = data_cluster3.groupby('Segment').agg({
        'Total': 'count',
        **dict_num,
        **dict_cat
    }).T               

    data_cluster3['coord'] = coord3

    data_cluster3 = data_cluster3.T
    data_percluster3.to_json(r'./result/cluster3_result.json')
    data_cluster3.to_json(r'./result/cluster3_df.json')


    data_cluster4 = merge_data[['Tersedia air bersih', 
                       'Ada lalat/nyamuk di sekitar tumpukan sampah',
                       'Ada ventilasi disemua ruangan']]

    # Standardize data
    scaler = MinMaxScaler()
    Num_features = data_cluster4.select_dtypes(include=['int64', 'float64']).columns
    scaler.fit(data_cluster4[Num_features])
    cluster4 = scaler.transform(data_cluster4[Num_features])

    pso4 = ParticleSwarmOptimizedClustering(n_cluster=4, 
                                       n_particles=20, 
                                       data=cluster4, 
                                       hybrid=True,
                                       max_iter=2000, 
                                       print_debug=50)

    pso_kmeans4 = KMeans(n_cluster=4, init_pp=False, seed=2018)
    pso_kmeans4.centroid = pso4.gbest_centroids.copy()  

    predicted_pso4 = pso_kmeans4.predict(cluster4) 
    frame4 = pd.DataFrame(cluster4)
    frame4['cluster'] = predicted_pso4 

    #create new column for cluster labels associated with each subject
    data_cluster4['labels'] = predicted_pso4
    data_cluster4['Segment'] = data_cluster4['labels'].map({0: 'First', 1: 'Second', 2: 'Third', 3: 'Fourth'})            

    #Order the cluster
    data_cluster4['Segment'] = data_cluster4['Segment'].astype('category')
    data_cluster4['Segment'] = data_cluster4['Segment'].cat.reorder_categories(['First', 'Second', 'Third', 'Fourth'])

    dict_cat = {}
    dict_num = {}

    for cat in data_cluster4.select_dtypes('object'):
        dict_cat[cat] = lambda x: x.value_counts().index[0]

    for num in data_cluster4.select_dtypes(['int64', 'float64']):
        if (num == 'Total'):
            continue
        dict_num[num] = ['mean']

        
    data_cluster4.rename(columns={'labels': 'Total'}, inplace=True)
    data_percluster4 = data_cluster4.groupby('Segment').agg({
        'Total': 'count',
        **dict_num,
        **dict_cat
    }).T

    data_cluster4['coord'] = coord4

    data_cluster4 = data_cluster4.T
    data_percluster4.to_json(r'./result/cluster4_result.json')
    data_cluster4.to_json(r'./result/cluster4_df.json')

    data_cluster5 = merge_data[['Nafsu Makan Kurang',
                            'Sering Jajan Diluar',
                            'Sering Pakai Jamban/Toilet']] 

    # Standardize data
    scaler = MinMaxScaler()
    Num_features = data_cluster5.select_dtypes(include=['int64', 'float64']).columns
    scaler.fit(data_cluster5[Num_features])
    cluster5 = scaler.transform(data_cluster5[Num_features])

    pso5 = ParticleSwarmOptimizedClustering(n_cluster=3, 
                                       n_particles=20, 
                                       data=cluster5, 
                                       hybrid=True,
                                       max_iter=2000, 
                                       print_debug=100)
    pso_kmeans5 = KMeans(n_cluster=3)
    pso_kmeans5.centroid = pso5.gbest_centroids.copy()    

    predicted_pso5 = pso_kmeans5.predict(cluster5) 

    frame5 = pd.DataFrame(cluster5)
    frame5['cluster'] = predicted_pso5      

    #create new column for cluster labels associated with each subject
    data_cluster5['labels'] = predicted_pso5
    data_cluster5['Segment'] = data_cluster5['labels'].map({0: 'First', 1: 'Second', 2: 'Third'})     

    data_cluster5['Segment'] = data_cluster5['Segment'].astype('category')
    data_cluster5['Segment'] = data_cluster5['Segment'].cat.reorder_categories(['First', 'Second', 'Third'])

    dict_cat = {}
    dict_num = {}

    for cat in data_cluster5.select_dtypes('object'):
        dict_cat[cat] = lambda x: x.value_counts().index[0]

    for num in data_cluster5.select_dtypes(['int64', 'float64']):
        if (num == 'Total'):
            continue
        dict_num[num] = ['mean']

        
    data_cluster5.rename(columns={'labels': 'Total'}, inplace=True)
    data_percluster5 = data_cluster5.groupby('Segment').agg({
        'Total': 'count',
        **dict_num,
        **dict_cat
    }).T               

    data_cluster5['coord'] = coord5

    data_cluster5 = data_cluster5.T
    data_percluster5.to_json(r'./result/cluster5_result.json')
    data_cluster5.to_json(r'./result/cluster5_df.json')

    return {}