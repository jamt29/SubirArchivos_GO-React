import React from 'react'
import ReactDOM from 'react-dom/client'
import FileUploadForm from "./components/FileUploadForm";
import './index.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <h1>Carga de Archivos GO + React</h1>
      <FileUploadForm />
      <ToastContainer/>
    </div>
  </React.StrictMode>,
)
