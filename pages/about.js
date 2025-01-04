import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                About Us
            </Typography>
            <Typography variant="body1" gutterBottom>
                We are dedicated to providing the best reservation services for your web and mobile application needs.
                Our team is committed to ensuring a smooth and efficient process for all our clients.
            </Typography>
        </Container>
    );
};

export default About; 