from sqlalchemy import Column, Integer, String, Float
from database import Base


class Data(Base):
    __tablename__ = "data"

    id = Column(Integer, primary_key=True, index=True)
    code = Column(String(255))
    umur = Column(String(255))
    alamat = Column(String(225))
    nafsu_makan = Column(String(225))
    kebiasaan_jajan = Column(String(225))
    pembuangan_sampah = Column(String(225))
    air_bersih = Column(String(225))
    sistem_ventilasi = Column(String(225))
    pemakaian_jamban = Column(String(225))
    diagnosa = Column(String(225))

class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(250))
    password = Column(String(250))