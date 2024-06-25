import DataTable from "react-data-table-component";
import React, {useState} from "react";
import Router from 'next/router';


/**
 * Table to render data on dashboard
 * @param data {any[]}
 * @constructor
 */
export function DashboardTable({data = []}) {
    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);


    const handleDelete = async (id) => {
        const req = await fetch(`https://127.0.0.1:8080/data-delete/${id}`, {
            method: "DELETE"
        }).then(() => {
            Router.reload(window.location.pathname)
        });
    }

    const columns = [
        // {
        //     selector: (row) => row.timestamp,
        //     name: "Timestamp",
        // },
        {
            selector: (row) => row.umur,
            name: "Age",
        },
        {
            selector: (row) => row.alamat,
            name: "Address",
        },
        {
            selector: (row) => row.nafsu_makan,
            name: "Appetite",
        },
        {
            selector: (row) => row.kebiasaan_jajan,
            name: "Snacking habits",
            width: "130px",
        },
        {
            selector: (row) => row.pembuangan_sampah,
            name: "Waste Disposal Conditions",
            width: "130px",
        },
        {
            selector: (row) => row.air_bersih,
            name: "Availability of clean water",
            width: "140px",
        },
        {
            selector: (row) => row.sistem_ventilasi,
            name: "Ventilation System",
            width: "130px",
        },
        {
            selector: (row) => row.pemakaian_jamban,
            name: "Use of Toilets",
            width: "130px",
        },
        {
            selector: (row) => row.diagnosa,
            name: "Diagnostics",
            width: "130px",
        }
    ];

    const customStyles = {
        headRow: {
            style: {
                backgroundColor: "#45d9a6",
                padding: "0.5rem 0",
                color: '#ffff',
            },
        },
        cells: {
            style: {
                lineHeight: "1.5em",
            },
        },
        rows: {
            style: {
                padding: "0.5rem 0",
            },
        },
        pagination: {
            style: {
                color: "#ffff",
            },
        },
    };

    return (
        <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
            pagination
            highlightOnHover
        />
    );
}