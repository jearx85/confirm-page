import React,{ useEffect } from 'react';
import img from "../img/check.png";
import './Modal.css'


export default function Modal() {

  useEffect(() => {
    // Muestra el modal cuando el componente se monta
    const myModal = new window.bootstrap.Modal(document.getElementById('exampleModal'), {
      backdrop: 'static'
    });
    myModal.show();
  }, []);

  const handleClose = () => {
    const myModal = new window.bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.hide();
    // Cierra la ventana del navegador
    window.close();
  };

  return (
    <div>
        <div className="modal fade d-flex" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">El formulario se ha enviado satisfactoriamente</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"onClick={handleClose}></button>
                </div>
                <div className="modal-body">
                  <img src={img} alt="Check.png" width="50%" height="50%"/>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClose}>Salir</button>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
