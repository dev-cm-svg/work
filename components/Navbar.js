import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

const Navbar = () => {
    return (
        <AppBar position="fixed" id="navbar">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Site Solution
                </Typography>
                <Link href="/" passHref>
                    <Button color="inherit">Home</Button>
                </Link>
                <Link href="/about" passHref>
                    <Button color="inherit">About</Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar; 