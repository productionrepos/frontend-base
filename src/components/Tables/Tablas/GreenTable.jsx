import React from 'react'

import { Table } from 'react-bootstrap'

export default function GreenTable() {
    return (
        <div className='container-fluid'>
            <Table responsive bordered hover style={{fontFamily:'Nunito'}} >
                <thead style={{background:'#009B78',color:'white'}}>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>The Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
