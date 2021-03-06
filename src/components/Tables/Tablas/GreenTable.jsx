import React,{ useMemo } from 'react'

import { useTable, usePagination } from 'react-table'
import { Container,Button } from 'react-bootstrap'
import './Table.css'

export default function GreenTable() {
    let i = 0
    let COLUMNS = () =>{
        return  [
            {
                Header:'Nombre',
                accessor:'nombre'
            },
            {
                Header:'Edad',
                accessor:'edad'
            }
    
        ]
    }
    let DATA = () =>  {
        return [
        {
            'nombre':'Rodrigo',
            'edad':'25'
        },
        {
            'nombre':'Joaquin',
            'edad':'24'
        },
        {
            'nombre':'Claudio',
            'edad':'2123'
        },
        {
            'nombre':'Rodrigo',
            'edad':'25'
        },
        {
            'nombre':'Joaquin',
            'edad':'24'
        },
        {
            'nombre':'Claudio',
            'edad':'2123'
        },
        {
            'nombre':'Rodrigo',
            'edad':'25'
        },
        {
            'nombre':'Joaquin',
            'edad':'24'
        },
        {
            'nombre':'Claudio',
            'edad':'2123'
        },
        {
            'nombre':'Rodrigo',
            'edad':'25'
        },
        {
            'nombre':'Joaquin',
            'edad':'24'
        },
        {
            'nombre':'Claudio',
            'edad':'2123'
        },{
            'nombre':'Rodrigo',
            'edad':'25'
        },
        {
            'nombre':'Joaquin',
            'edad':'24'
        },
        {
            'nombre':'Claudio',
            'edad':'2123'
        }
        ,{
            'nombre':'Rodrigo',
            'edad':'25'
        },
        {
            'nombre':'Joaquin',
            'edad':'24'
        },
        {
            'nombre':'Claudio',
            'edad':'2123'
        }
    ]}
    const columns = useMemo( () => COLUMNS(),[])
    
    const data = useMemo( () => DATA(),[] )
    
    const tablita =  useTable({
        columns,
        data
    },usePagination)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        prepareRow 
    } = tablita


    const {pageIndex} = state  
    return (
        <Container fluid>
            <table { ...getTableProps() } >
                <thead>
                    {
                        headerGroups.map((headerGroup)  => 
                            <tr  { ... headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => 
                                    <th key={i++} {...column.getHeaderProps()}>{column.render('Header')}</th>
                                )}
                            </tr>

                        )
                    } 
                </thead>
                <tbody { ...getTableBodyProps() } >
                    { page.map(row => {
                        prepareRow(row)
                        return  (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map( cell => {
                                        return <td key={i++} {...cell.getCellProps}>{cell.render('Cell')}</td>
                                    })
                                }
                            </tr>
                        )
                    })}

                </tbody>
            </table>
            <div style={{float:'right',margin:'20px'}}>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <Button style={{background:'#009B78',marginRight:'20px'}} onClick={ () => previousPage() } disabled={!canPreviousPage}>Anterior</Button>
                <Button style={{background:'#009B78'}} onClick={ () => nextPage() } disabled={!canNextPage }>Siguiente</Button>
            </div>
        </Container>
    )
}
