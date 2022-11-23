import { Typography } from "@mui/material";

function HomePage ( {fan} )  {
    return (
        <>
        {fan.length !== 0 ? <Typography mt="30px" variant="h2" align="center" color="inherit" gutterBottom>I am Fan Of <b style={{ color: 'lightGreen' }}>{fan}</b></Typography> : null }
        </>
        );
    }
    
    export default HomePage;