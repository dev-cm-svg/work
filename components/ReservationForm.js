import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, MenuItem, Typography, Grid, Paper } from '@mui/material';

const timeSlots = [
    "09:00-09:30",
    "10:00-10:30",
    "11:00-11:30",
    "12:00-12:30",
    "13:00-13:30",
    "14:00-14:30",
    "15:00-15:30",
    "16:00-16:30",
    "17:00-17:30",
];

const ReservationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [timeSlot, setTimeSlot] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [reservations, setReservations] = useState({}); // State to hold all reservations

    // Fetch all reservations when the component mounts
    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await fetch('/api/reservations');
                if (!response.ok) {
                    throw new Error('Failed to fetch reservations');
                }
                const data = await response.json();
                setReservations(data); // Set the reservations state
            } catch (error) {
                console.error('Error fetching reservations:', error);
                setError('Failed to load reservations');
            }
        };

        fetchReservations();
    }, []); // Empty dependency array means this runs once on mount

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        // Prepare the reservation data
        const reservationData = {
            name,
            email,
            date,
            timeSlot,
            message,
        };

        // Send the reservation data to the API
        const response = await fetch('/api/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reservationData),
        });

        if (response.ok) {
            setSuccess('Reservation saved successfully!');
            // Reset form fields
            setName('');
            setEmail('');
            setDate('');
            setTimeSlot('');
            setMessage('');
            // Optionally, refetch reservations after a successful submission
            await fetchReservations();
        } else {
            const errorData = await response.json();
            setError(errorData.error);
        }
    };

    return (
       
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            fullWidth
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Time Slot"
                            select
                            value={timeSlot}
                            onChange={(e) => setTimeSlot(e.target.value)}
                            required
                            fullWidth
                            variant="outlined"
                        >
                            {timeSlots.map((slot) => (
                                <MenuItem key={slot} value={slot} disabled={reservations[date]?.includes(slot.split('-')[0])}>
                                    {slot}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            fullWidth
                            variant="outlined"
                            multiline
                            rows={4}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Reserve
                        </Button>
                    </Grid>
                </Grid>
                {error && <Typography color="error" align="center">{error}</Typography>}
                {success && <Typography color="success" align="center">{success}</Typography>}
            </Box>
    );
};

export default ReservationForm; 