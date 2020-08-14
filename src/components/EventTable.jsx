import React from 'react';
import Table from 'react-bootstrap/Table';
import data_eventos from './data_eventos';
export default (props)=>{

    function add_line(lista){
        return(
            lista.map((elem)=>{
                return (
                <tr key = {elem.id}>
                    <td>{elem.data}</td>
                    <td>{elem.nome}</td>               
                </tr>)
            })
        );
    }

    return (
    <div className="eventTable">
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Data</th>
                <th> <a href="/eventos">Evento</a></th>
                </tr>
            </thead>
            <tbody>
                {add_line(data_eventos)}
            </tbody>
        </Table>
    </div>
    );
}