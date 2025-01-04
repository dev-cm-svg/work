import '../styles/globals.css';
import { CssBaseline } from '@mui/material';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <CssBaseline />
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp; 