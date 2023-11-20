import React, { useState } from 'react';
import { Button } from '@mui/material';

const SelDeselButton = ({ stuId, jobId, shortlisted }) => {

    const [selected, setSelected] = useState(shortlisted);
    const [loading, setLoading] = useState(false);
    // console.log(shortlisted);

    const handleSelect = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://back-end-production-3140.up.railway.app/api/jobprofile/shortlist/${jobId}/${stuId}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    'authorization': `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setLoading(false);
            if (response.ok) {
                const data = await response.json();
                // console.log(data);
                setSelected(true);
            } else {
                console.error(`Failed to select student with _id: ${stuId}`);
            }
        } catch (error) {
            console.error(`Error while selecting student with _id: ${stuId}`, error);
        }
    };

    const handleDeselect = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://back-end-production-3140.up.railway.app/api/jobprofile/shortlist/${jobId}/${stuId}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    'authorization': `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setLoading(false);
            if (response.ok) {
                const data = await response.json();
                // console.log(data);
                setSelected(false);
            } else {
                console.error(`Failed to deselect student with _id: ${stuId}`);
            }
        } catch (error) {
            console.error(`Error while deselecting student with _id: ${stuId}`, error);
        }
    };

    if (loading) return (<>
        <Button
            sx={{
                width: '150px',
                backgroundColor: selected ? "#493D72" : "#2B2442",
                color: "white",
                "&:hover": {
                    backgroundColor: selected ? "#493D72" : "#2B2442",
                    color: "white",
                },
            }}
            variant='contained'
        >
            Loading
        </Button>
    </>);
    else {
        return (
            <>
                <Button
                    sx={{
                        width: '150px',
                        backgroundColor: selected ? "#493D72" : "#2B2442",
                        color: "white",
                        "&:hover": {
                            backgroundColor: selected ? "#493D72" : "#2B2442",
                            color: "white",
                        },
                    }}
                    variant='contained'
                    onClick={() => selected ? handleDeselect() : handleSelect()}
                >
                    {selected ? 'DESELECT' : 'SELECT'}
                </Button>
            </>
        )
    }
}

export default SelDeselButton