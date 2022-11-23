import { AppBar, Toolbar, Typography, MenuItem } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useStyles from "../styles";
import { ReactComponent as StarWarsLogoSVG } from "./../assets/star-wars.svg";
import { ReactComponent as StarWarsDarkLogoSVG } from "./../assets/star-wars-dark.svg"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';
import { ThemeContext } from "../Context";

function Header( {fan} ) {

    const { theme, handleChangeTheme } = useContext(ThemeContext);

    const classes = useStyles(theme);

    const bgColor = theme ? '#151515' : '#ffffff'
    const textColor = theme ? '#ffffff' : '#151515'

    return (
        // <AppBar position="static">
        //     <Toolbar>
        //         <Typography
        //             variant="h6"
        //             component="span"
        //             sx={{ flexGrow: 1 }}
        //         >
        //             MUI Shop
        //         </Typography>

        //             <IconButton
        //                 color="inherit"
        //             >
        //                 <ShoppingBasket />
        //             </IconButton>
        //     </Toolbar>
        // </AppBar>
    <AppBar position="relative">
        <Toolbar  className={classes.appbar} style={{ backgroundColor: bgColor, color:textColor }}>
            
          <MenuItem value="characters" component={Link} to='/characters' type="characters">Characters</MenuItem>
          <MenuItem value="planets" component={Link} to='/planets'>Planets</MenuItem>
          <MenuItem value="starships" component={Link} to='/starships'>Starships</MenuItem>
          
          <MenuItem style={{ marginLeft: '32rem' }} value="home" component={Link} to='/'>
            {theme ? <StarWarsLogoSVG className={classes.icon}/> : <StarWarsDarkLogoSVG className={classes.icon}/>}
          </MenuItem>
            <Typography style={{ marginLeft: '32rem' }}>
                <IconButton onClick={() => handleChangeTheme(theme)}>
                    {theme ? <DarkModeIcon style={{ color:'white' }} /> : <LightModeIcon />}
                </IconButton>
            </Typography>
          {fan.length !== 0 ? <Typography>I am Fan Of <b style={{ color: 'lightGreen' }}>{fan}</b></Typography> : null }
        </Toolbar>
    </AppBar>
    );
}

export default Header;
