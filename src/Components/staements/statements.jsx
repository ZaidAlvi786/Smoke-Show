import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {BsCheckLg} from 'react-icons/bs';
import '../../App.css'
// import Listmenu from './list-menu';

function createData(date, amount, fee, net,description,status) {
  return { date, amount, fee, net, description, status };
}

const rows = [
  createData('Nov 2, 2021 2:08 am', "$4.99", '$1.00', '$3.99', 'Recurring subscription from'),
  createData('Nov 2, 2021 2:08 am', "$4.99", '$1.00', '$3.99', 'Recurring subscription from'),
  createData('Nov 2, 2021 2:08 am5', "$4.99", '$1.00', '$3.99', 'Recurring subscription from'),
  createData('Nov 2, 2021 2:08 am', "$4.99", '$1.00', '$3.99', 'Recurring subscription from'),
  createData('Nov 2, 2021 2:08 am', "$4.99", '$1.00', '$3.99', 'Recurring subscription from'),
];

export default function Statements() {
  return (
    <div className='p-5 d-flex col-12 col-lg-12 col-sm-12 col-xs-12 col-md-12'>
    {/* <div className=' col-9 col-lg-9 col-sm-9 col-xs-9 col-md-9'> */}
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className=''>Date & Time</TableCell>
            <TableCell align="left">Amount</TableCell>
            <TableCell align="left">Fee</TableCell>
            <TableCell align="left">Net</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="left">{row.amount}</TableCell>
              <TableCell align="left">{row.fee}</TableCell>
              <TableCell align="left">{row.net}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left" className='icon_check'> < BsCheckLg /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    {/* </div>
    <div className='col-3'>
        <Listmenu />
    </div> */}
    </div>
  )
}
