from sqlalchemy import create_engine, Table, MetaData, Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "mysql://root:@localhost/pkm_bontomarannu"
#SQLALCHEMY_DATABASE_URL = "mysql://bb3600aabdf663:8b79a477@us-cdbr-east-06.cleardb.net/heroku_61b6ab945069486"

metadata = MetaData()

data = Table(
    "data",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("code", String(255)),
    Column("umur", String(255)),
    Column("alamat", String(225)),
    Column("nafsu_makan", String(225)),
    Column("kebiasaan_jajan", String(225)),
    Column("pembuangan_sampah", String(225)),
    Column("air_bersih", String(225)),
    Column("sistem_ventilasi", String(225)),
    Column("pemakaian_jamban", String(255)),
    Column("diagnosa", String(225))
)

user = Table(
    "user",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("email", String(250)),
    Column("password", String(250))
)

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={'connect_timeout': 120},
    pool_pre_ping=True
)

metadata.create_all(engine)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db

    finally:
        db.close()