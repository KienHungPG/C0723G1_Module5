import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(company, contact, country) {
  return { company, contact, country };
}

const rows = [
  createData('Alfreds Futterkiste', 'Maria Anders', 'Germany'),
  createData('Centro comercial Moctezuma','Francisco Chang','Mexico'),
  createData('Ernst Handel','Roland Mendel','Austria'),
  createData('Island Trading','Helen Bennett','UK'),
  createData('Laughing Bacchus Winecellars','Yoshi Tannamuri','Canada'),
  createData('Magazzini Alimentari Riuniti','Giovanni Rovelli','Italy')
]
function DemoStudent(){
    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Company</StyledTableCell>
                <StyledTableCell align="left">Contact</StyledTableCell>
                <StyledTableCell align="left">Country</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row,index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="left">{row.company}</StyledTableCell>
                  <StyledTableCell align="left">{row.contact}</StyledTableCell>
                  <StyledTableCell align="left">{row.country}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}
export default DemoStudent