import { useState } from 'react';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
// import 'react-data-grid/lib/styles.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#493D72',
    color: 'white',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

function createData(name, Student_Id, CPI, Resume) {
  return { name, Student_Id, CPI, Resume };
}

export const Tablet = () => {
  const [stats, setStatus] = useState(true);

  const rows = [
    // Your data here
  ];

  const openPDF = (filename) => {
    window.open(filename, '_blank');
  };

  const handleButtonClick = (filename) => (event) => {
    event.preventDefault();
    openPDF(filename);
  };

  return (
    <>
      <TableContainer component={Paper} style={{ height: '85vh' }} sx={{ borderRadius: 0 }}>
        <Table stickyHeader sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">NAME</StyledTableCell>
              <StyledTableCell align="left">STUDENT ID</StyledTableCell>
              <StyledTableCell align="left">CPI</StyledTableCell>
              <StyledTableCell align="left">RESUME</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow className="mt-10 py-10" key={row.name}>
                <StyledTableCell align="left">{row.name}</StyledTableCell>
                <StyledTableCell align="left">{row.Student_Id}</StyledTableCell>
                <StyledTableCell align="left">{row.CPI}</StyledTableCell>
                <StyledTableCell align="left">
                <Button component={Link} to={row.Resume} sx={{backgroundColor:"#493D72", color:"white",'&:hover': {
          backgroundColor: '#493D72', color:"white"
        },}} onClick={handleButtonClick(row.Resume)}>
                    SEE RESUME
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
