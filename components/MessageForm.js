import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const MessageForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Send the message to the server
        const response = await fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            console.log('Message sent successfully');
            // Optionally reset the form
            setName('');
            setEmail('');
            setMessage('');
        } else {
            console.error('Error sending message');
        }
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
                label="Your Message"
                variant="outlined"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Submit Message
            </Button>
        </Box>
    );
};

export default MessageForm; 