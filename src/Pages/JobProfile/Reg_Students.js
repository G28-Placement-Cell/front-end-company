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
import { Link, useParams, useNavigate } from 'react-router-dom';
import SelDeselButton from '../../Components/SelDeselButton';
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

export const Tablet = () => {
  const jobId = useParams()?.id;
  // console.log(jobId);

  const [regStudents, setRegStudents] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState([]);
  const [regStudentData, setRegStudentData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://back-end-production-3140.up.railway.app/api/student/getregstudent", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRegStudentData(data.regstudent);
        setLoading(false); // Set loading to false when data is loaded
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  useEffect(() => {
    fetch(`https://back-end-production-3140.up.railway.app/api/jobprofile/${jobId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        'authorization': `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data,'lol');
        setRegStudents(data.applicants);
        setSelected(data.selected);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
      });
  }, [jobId]);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      const studentDetails = await Promise.all(
        regStudents.map(async (student) => {
          try {
            const response = await fetch(`https://back-end-production-3140.up.railway.app/api/student/${student}`, {
              method: "GET",
              headers: {
                "content-type": "application/json",
                'authorization': `Bearer ${localStorage.getItem("token")}`,
              },
            });

            if (response.ok) {
              const data = await response.json();
              // console.log(data.studentExist);
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

  const handleClickResume = async (resumeUrl) => {
    if (!resumeUrl) {
      return;
    }
    window.open(`https://back-end-production-3140.up.railway.app/api/student/files/resume/${resumeUrl}`);
  };

  const studentsExist = Array.isArray(students) && students.length > 0;

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
            {studentsExist && students.map((row, index) => (
              <StyledTableRow className="mt-10 py-10" key={index}>
                <StyledTableCell align="left">{row?.student_id}</StyledTableCell>
                <StyledTableCell align="left" onClick={() => navigate(`/profile/${row._id}`)} style={{ cursor: 'pointer' }}>{row?.name} {row?.surname}</StyledTableCell>
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
                    variant='contained'
                    disabled={!row?.resume}
                    onClick={() => handleClickResume(row?.resume)}
                  >
                    SEE RESUME
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <SelDeselButton
                    stuId={row._id}
                    jobId={jobId}
                    shortlisted={selected.some(student => student === row?._id)}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};