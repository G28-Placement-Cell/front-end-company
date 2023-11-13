import { useState, useEffect } from 'react';
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
import { Link, useParams } from 'react-router-dom';
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
  const jobId = useParams()?.id;

  const [regStudents, setRegStudents] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/api/jobprofile/${jobId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        'authorization': `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRegStudents(data.applicants);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [jobId]);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      const studentDetails = await Promise.all(
        regStudents.map(async (student) => {
          try {
            const response = await fetch(`http://localhost:8000/api/student/${student}`, {
              method: "GET",
              headers: {
                "content-type": "application/json",
                'authorization': `Bearer ${localStorage.getItem("token")}`,
              },
            });

            if (response.ok) {
              const data = await response.json();
              console.log(data.studentExist);
              return data.studentExist; // Assuming that the student details are available in data.student
            } else {
              console.error(`Failed to fetch details for student with _id: ${student._id}`);
              return null;
            }
          } catch (error) {
            console.error(`Error while fetching details for student with _id: ${student._id}`, error);
            return null;
          }
        })
      );

      setStudents(studentDetails.filter((detail) => detail !== null));
    };

    if (regStudents.length > 0) {
      fetchStudentDetails();
    }
  }, [regStudents]);

  const openPDF = (filename) => {
    window.open(filename, '_blank');
  };

  const handleClickResume = async (resumeUrl) => {
    if (!resumeUrl) {
      return;
    }
    window.open(`http://localhost:8000/api/student/files/resume/${resumeUrl}`);
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
              <StyledTableCell align="left">STUDENT ID</StyledTableCell>
              <StyledTableCell align="left">NAME</StyledTableCell>
              <StyledTableCell align="left">CPI</StyledTableCell>
              <StyledTableCell align="right">RESUME</StyledTableCell>
              <StyledTableCell align="right">ACTION</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students && students.length > 0 && students.map((row, index) => (
              <StyledTableRow className="mt-10 py-10" key={index}>
                <StyledTableCell align="left">{row?.student_id}</StyledTableCell>
                <StyledTableCell align="left">{row?.name} {row?.surname}</StyledTableCell>
                <StyledTableCell align="left">{row?.cpi}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    sx={{
                      width: '150px',
                      backgroundColor: "#2B2442",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#493D72",
                        color: "white",
                      },
                    }}
                    onClick={() => handleClickResume(row?.resume)}
                  >
                    SEE RESUME
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    sx={{
                      width: '150px',
                      backgroundColor: "#2B2442",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#493D72",
                        color: "white",
                      },
                    }}
                    onClick={handleButtonClick(row?.Resume)}
                  >
                    SELECT
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