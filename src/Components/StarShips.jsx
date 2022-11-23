import { Typography, Button, Card, CardActions, CardContent, CardMedia, Grid, Container, Autocomplete, TextField } from "@mui/material";
import { DefaultContext, ThemeContext } from "../Context";
import { useContext, useState } from "react";

import useStyles from "../styles";

const Starships = ( {data} ) => {

  const [searchValue, setSearchValue] = useState("");

  const { handleCreateFan } = useContext(DefaultContext);
  const { theme } = useContext(ThemeContext);

  const bgColor = theme ? '#151515' : '#ffffff'
  const textColor = theme ? '#ffffff' : '#151515'
  const borderColor = theme ? '1px lightGray solid' : '1px black solid'
  
  const classes = useStyles(theme);
    const imgURL = 'https://starwars-visualguide.com/assets/img/starships/'

    // console.log(data);

    function getId(url) {
        return url.split('/')[url.split('/').length - 2]
    }

    const sortedItems = data.filter(item =>
      {
        if(searchValue){
          return item.name.toLowerCase().includes(searchValue.toLowerCase())
        }else return item;
      });



    return (
        <>
        <Typography mt="30px" variant="h2" align="center" color="inherit" gutterBottom>
            StarShips
        </Typography>

        <Container className={classes.cardGrid} maxWidth="md" style={{ backgroundColor: bgColor, color:textColor }}>

        <Autocomplete
            sx={{width: '400px'}}
            align="center"
            id="free-solo-demo"
            freeSolo
            options={data.map((option) => option.name)}
            renderInput={(params) => <TextField align="center" style={{ marginBottom: '30px', marginLeft: '230px', backgroundColor: 'white'}} onChange={(event) => setSearchValue(event.target.value)} {...params} label="Search..." />}
          />

          <Grid container spacing={4}>
            {sortedItems.map((starships) => (
            <Grid item key={starships.name} xs={12} sm={6} md={4}>
              <Card className={classes.card} style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: bgColor, color: textColor, border: borderColor}}>
                <CardMedia className={classes.cardMedia} title="ImageTitle" component='div'
                              style={
                                { backgroundImage: `url(${imgURL + getId(starships.url)}.jpg)` }
                                }
                                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="body1">
                    <b>Name:</b> {starships.name}
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    <b>Length:</b> {starships.length}
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    <b>Max Speed:</b> {starships.max_atmosphering_speed}
                  </Typography>
                </CardContent> 
                <CardActions className={classes.cardActions} style={{borderTop: borderColor}}>
                  <Button onClick={() => handleCreateFan(starships)} size="small" color="inherit">
                    I am your fan
                  </Button>
                  {/* <Button size="small" color="primary">
                    Edit
                  </Button> */}
                </CardActions>
              </Card>
            </Grid>
            ))}
          </Grid>
        </Container>
        </>
        );
    }
    
    export default Starships;