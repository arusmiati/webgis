import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { useMemo, useState, useEffect } from "react";

export default function Uploader(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [showModal, setShowModal] = useState(false);


    const {onUploaded} = props
    const [files, setFiles] = useState([])
    const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
      // accept: 'csv/*',
      onDrop: acceptedFiles => {
        setFiles(acceptedFiles.map(file => {
          onUploaded(file);
          return Object.assign(file, {
          preview: URL.createObjectURL(file)
        })}));
      },
      // Disable click and keydown behavior
      noClick: true,
      noKeyboard: true
    });
  
    const fileName = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));

  const getFiles = (file) => {
    setFiles(file);
    setMessage(null);
  };

    return (
      <div className="container">
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <p>Drag and drop some files here</p>
          <button type="button" onClick={open} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 rounded">
            Browse
          </button>
        </div>
        <aside>
          {/* <h4>Files</h4> */}
          <ul>{fileName}</ul>
        </aside>
      </div>
    );
  }
  