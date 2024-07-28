import React from 'react';

import { Table as MuiTable } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '../Paper';

import { TableColumn, TableRowData } from './types';

type TableProps = {
    columns: TableColumn[];
    data: TableRowData[];
    className?: string;
}


const Table = ({ columns, data, className }: TableProps) => {
    if (!columns || !data) return null;

    return (
        <TableContainer component={Paper} className={className}>
            <MuiTable aria-label="generic table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell key={column.key || column.name}>{column.name}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={index}>
                            {columns.map((column) => {
                                const value = row[column.key || column.name];
                                return <TableCell key={column.key || column.name}>{value}</TableCell>;
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </MuiTable>
        </TableContainer>
    );
};

export default Table;