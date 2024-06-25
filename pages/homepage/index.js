import React, {useEffect, useState} from "react";
import {withMainLayout} from "../../src/components/MainLayout";
import Uploader from "../../src/components/Uploader";
import {DashboardTable} from "../../src/components/DashboardTable";
import Router from 'next/router';
import Image from 'next/image';
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Cluster() {
    const [files, setFiles] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [showModal, setShowModal] = useState(false);


    // Callback~
    const getFiles = (file) => {
        setFiles(file);
        setMessage(null);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!files) setMessage("Pilih dataset terlebih dahulu");
        else {
            setLoading(true);
            const data = new FormData();
            data.append("uploaded_file", files);
            const req = await fetch(`http://127.0.0.1:8080/uploadfile`, {
                method: "POST",
                body: data,
            }).then((req) => {
                setLoading(false);
            }).then(() => {
                fetchData()
                Router.push({
                    pathname: "/data",
                });
            });
        }
    };

    const handleCluster = async () => {
        const req = await fetch(`http://127.0.0.1:8080/run_cluster`, {
            method: "POST",
        }).then(() => {
            Router.push({
                pathname: "/cluster",
            });
        } )
    };

    const handleDeleteAllData = async () => {
        const req = await fetch(`http://127.0.0.1:8080/data-delete-all`, {
            method: "DELETE"
        }).then(() => {
            setShowModal(false)
            Router.reload(window.location.pathname)
        })
    };

    const fetchData = () => {
        const req = fetch(`http://127.0.0.1:8080/get_data`, {
            method: "GET",
        }).then((res) => res.json())
        .then((data) => {
            console.log(data, 'ini data dashobard table')
            setData(data)
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        // <div>
            <div className="grid">
                <div className="items-center home">
                <div className="text-center justify-items-center items w-full font-semibold mt-3 mb-2" style={{ fontSize: "20px" }}>
                    DATA ANALYSIS
                </div>
                    <div className="item ustify-items-center max-w-full">
                        <div className="inputdata max-w-7xl p-2 shadow-xl rounded-lg bg-white">
                            <form
                                onSubmit={handleSubmit}
                                className="input-item grid place-content-center"
                                encType="multipart/form-data"
                            >
                                <div className="input-item">
                                    <div className="box-btn m-2 bg-slate-100 box-content p-4 border-2 rounded-lg border-dashed">
                                    <div className="box-item">
                                        <FontAwesomeIcon icon={faUpload} size="10x" />   
                                    </div>
                                    <div className="flex place-items-center">
                                        <Uploader onUploaded={(file) => getFiles(file)} />
                                        
                                        <div className=" place-content-center">
                                            {message && <p>{message}</p>}
                                            
                                        </div>
                                        
                                    </div>
                                    
                                    </div>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 margin:0px auto text-white font-bold py-2 px-4 my-1 rounded"
                                    onClick={handleSubmit}
                                >
                                    Upload Data
                                </button>
                                {loading && <p>Please Wait...</p>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-col items-center">
                    <div className="grid justify-items-center p-3 lg:p-5 flex flex-col md:flex-row w-full">
                        <div
                            className="bg-white rounded-md shadow-lg max-w-full dasboardTable overflow-x-auto overflow-y-hidden">
                            <div className="text-center justify-items-center items w-full font-semibold mt-3 mb-2" style={{fontSize: "20px"}}>
                                DATASET PASIEN PENYAKIT MENULAR
                            </div>
                            <DashboardTable data={data}/>
                        </div>
                    </div>
                </div> 
            </div> */}
        </div>
    );
}

export default withMainLayout(Cluster);