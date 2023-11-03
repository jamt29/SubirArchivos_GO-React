import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FileUploadForm() {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
  

    try {
      const response = await fetch("http://localhost:8081/upload", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        // Procesar la respuesta exitosa, por ejemplo, mostrar un mensaje de éxito.
        toast.success("Archivo subido correctamente", {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
        console.log('Archivo subido')
      } else {
       
          console.log("Código de estado de respuesta:", response.status);
          // Manejar errores en la carga del archivo.
      }
    } catch (error) {
        toast.error('Ha habido un error al subir el archivo', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
      console.error("Error en la carga del archivo:", error);
    }

        fileInputRef.current.value="";

  };
  

  return (
    <div className="minimalist-form-container">
      <div className="simple-form">
        <h2>Cargar Archivo</h2>
        <div className="form-group">
          <label htmlFor="fileInput">Selecciona un archivo</label>
          <input type="file" id="fileInput" ref={fileInputRef} onChange={handleFileChange} />
        </div>
        <button onClick={handleFileUpload}>Subir Archivo</button>
      </div>
    </div>
  );
}

export default FileUploadForm;
