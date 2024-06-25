import json
import numpy as np
import os
import pandas as pd
import shutil
import uvicorn
from clustering import cluster
from data import Data, User
from database import get_db
from datetime import datetime
from fastapi import FastAPI, UploadFile, File, Depends, BackgroundTasks, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from os import path
from pydantic import BaseModel
from sqlalchemy.orm import Session
from datetime import datetime

app = FastAPI()
dataset = "./csv/data-test.csv"
start = datetime.today()
format = "%d%m%Y_%H%M%S_"

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root(start_date: datetime = start):
    return {"start_date": start_date}

def authenticate_user(db: Session, email: str, password: str):
    user = db.query(User).filter(User.email == email).first()
    if user is None:
        return None
    if user.password != password:  # Anda seharusnya menggunakan hashing password di sini
        return None
    return user

# Model User yang sesuai dengan tabel
class UserLogin(BaseModel):
    email: str
    password: str

# Endpoint untuk login
@app.post("/login")
async def login(user_info: UserLogin, db: Session = Depends(get_db)):
    user = authenticate_user(db, user_info.email, user_info.password)
    if user is None:
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    return {"message": "Login successful", "user_id": user.id}

@app.get("/get_data_login")
def read_root(db: Session = Depends(get_db)):
    return db.query(User).all()

@app.post("/data-create")
async def create(data: Request, db: Session = Depends(get_db)):
    req = await data.json()

    db_data = Data(
        code='0',
        umur = req['umur'],
        alamat = '',
        nafsu_makan = req['nafsu_makan'],
        kebiasaan_jajan = req['kebiasaan_jajan'],
        pembuangan_sampah = req['pembuangan_sampah'], 
        air_bersih = req['air_bersih'],
        sistem_ventilasi = req['sistem_ventilasi'],
        pemakaian_jamban = req['pemakaian_jamban'],
        diagnosa = req['diagnosa']
    )
    db.add(db_data)
    db.commit()
    return {
        'status': 'Success',
        'data': req
    }


@app.get("/data-edit/{id}")
def read_root(id: int, db: Session = Depends(get_db)):
    return db.query(Data).get(id)

@app.get("/data-login")
def read_root(id: int, db: Session = Depends(get_db)):
    return db.query(User).get(id)

@app.put("/data-update/{id}")
async def read_root(id: int, data: Request, db: Session = Depends(get_db)):
    req = await data.json()
    get_data = db.query(Data).get(id)
    if get_data:
        get_data.code = '0',
        get_data.umur = req['umur'],
        get_data.alamat = '',
        get_data.nafsu_makan = req['nafsu_makan'],
        get_data.kebiasaan_jajan = req['kebiasaan_jajan'],
        get_data.pembuangan_sampah = req['pembuangan_sampah'], 
        get_data.air_bersih = req['air_bersih'],
        get_data.sistem_ventilasi = req['sistem_ventilasi']
        get_data.pemakaian_jamban = req['pemakaian_jamban'],
        get_data.diagnosa = req['diagnosa']

    db.commit()
    db.refresh(get_data)
    return {
        'status': 'Success update data',
        'data': req
    }


@app.delete("/data-delete/{id}")
async def read_root(id: int, db: Session = Depends(get_db)):
    get_data = db.query(Data).get(id)
    if get_data:
        db.delete(get_data)
        db.commit()

    return {
        'status': 'Success delete data',
        'data': get_data
    }


@app.delete("/data-delete-all")
async def read_root(db: Session = Depends(get_db)):
    all_data = db.query(Data).all()
    for i in all_data:
        get_data = db.query(Data).get(i.id)
        db.delete(get_data)
        db.commit()

    return {
        'status': 'Success delete all data',
        'data': all_data
    }


@app.post("/uploadfile")
async def create_upload_file(background_task: BackgroundTasks, db: Session = Depends(get_db),
                             uploaded_file: UploadFile = File(...)):
    print(uploaded_file, "uploaded_file")
    allowedFiles = {"application/vnd.ms-excel", "text/csv"}
    if uploaded_file.content_type in allowedFiles:
        date_time = start.strftime(format)
        file_location = path.join("./dataset", date_time + uploaded_file.filename)
        with open(file_location, "wb") as file_object:
            shutil.copyfileobj(uploaded_file.file, file_object)

        global dataset
        dataset = file_location
        print(dataset, "dataset")

        df = pd.read_csv(dataset)

        for index, df_data in df.iterrows():
            # existing_data = db.query(Data).filter(Data.code == df_data['code']).first()
            # if not existing_data:
            if not False:
                db_data = Data(
                    code=df_data['code'],
                    umur=df_data['Umur'],
                    alamat=df_data['Alamat'],
                    nafsu_makan=df_data['Apakah nafsu makan berkurang?'],
                    kebiasaan_jajan=df_data['Apakah sering jajan diluar rumah?'],
                    pembuangan_sampah=df_data['Bagaimana kondisi pembuangan sampah disekitar rumah?'],
                    air_bersih=df_data['Apakah tersedia air bersih di rumah?'],
                    sistem_ventilasi=df_data['Bagaimana sistem ventilasi di rumah pasien?'],
                    pemakaian_jamban=df_data['Apakah sering menggunakan jamban/toilet?'],
                    diagnosa=df_data['Apa diagnosa/hasil tes darah pasien?']
                )

                db.add(db_data)
        db.commit()

        return {"info": f"file '{uploaded_file.filename}' saved at '{file_location}'"}

    else:
        return {"info": 'Hanya menerima file CSV'}


@app.get("/get_data")
def read_root(db: Session = Depends(get_db)):
    return db.query(Data).all()

@app.get("/cluster")
async def do_cluster():
    if os.path.exists("./result/cluster1_result.json") and os.path.exists("./result/cluster1_df.json"):
        with open("./result/cluster1_result.json", "r") as j:
            cluster1_result = json.load(j)
        with open("./result/cluster1_df.json", "r") as k:
            cluster1_df = json.load(k)
        with open("./result/cluster2_result.json", "r") as j:
            cluster2_result = json.load(j)
        with open("./result/cluster2_df.json", "r") as k:
            cluster2_df = json.load(k)
        with open("./result/cluster3_result.json", "r") as j:
            cluster3_result = json.load(j)
        with open("./result/cluster3_df.json", "r") as k:
            cluster3_df = json.load(k)
        with open("./result/cluster4_result.json", "r") as j:
            cluster4_result = json.load(j)
        with open("./result/cluster4_df.json", "r") as k:
            cluster4_df = json.load(k)
        with open("./result/cluster5_result.json", "r") as j:
            cluster5_result = json.load(j)
        with open("./result/cluster5_df.json", "r") as k:
            cluster5_df = json.load(k)
        with open("./result/cluster6_result.json", "r") as j:
            cluster6_result = json.load(j)
        with open("./result/cluster6_df.json", "r") as k:
            cluster6_df = json.load(k)
        return {
            'cluster1_result': cluster1_result,
            'cluster1_df': cluster1_df,
            'cluster2_result': cluster2_result,
            'cluster2_df': cluster2_df,
            'cluster3_result': cluster3_result,
            'cluster3_df': cluster3_df,
            'cluster4_result': cluster4_result,
            'cluster4_df': cluster4_df,
            'cluster5_result': cluster5_result,
            'cluster5_df': cluster5_df,
            'cluster6_result': cluster6_result,
            'cluster6_df': cluster6_df,
        }
    else:
        return False


@app.post("/run_cluster")
async def do_cluster(background_task: BackgroundTasks, db: Session = Depends(get_db)):
    data = db.query(Data).all()
    background_task.add_task(cluster, data)
    return {
        'message': 'Running cluster...',
        'data': data
    }


if __name__ == '__main__':
    uvicorn.run("main:app", host='127.0.0.1', port=8080, reload=True)