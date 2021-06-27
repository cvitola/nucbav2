import React from 'react';

function ListitaPelado(){
    return(
        <div className="container-fluid mt-5">
            <h1 className="text-center">BUTSTRAPITO</h1>
            <div className="row">
                <div className="col-8">
                    <h4 className="text-center">Listita</h4>

                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className="lead">Tarea UNO</span>
                            <div>
                                <button className="btn btn-sm btn-danger float-right mx-2">Borrar</button>
                                <button className="btn btn-sm btn-warning float-rigth mx-2">Editar</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListitaPelado