import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const ReservationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Reservation made by ${name} (${email}) for ${date}. Message: ${message}`);
        // Here you would typically send this data to your server
        setName('');
        setEmail('');
        setDate('');
        setMessage('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <TextField
                label="Date"
                type="date"
                variant="outlined"
                fullWidth
                margin="normal"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                label="Message"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Reserve
            </Button>
        </Box>
    );
};

export default ReservationForm; 