import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Components/Header.jsx";
import { Container } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import  Characters from "./Components/Characters.jsx";
import Planets from "./Components/Planets.jsx";
import NotFoundPage from "./Components/NotFoundPage.jsx";
import HomePage from "./Components/HomePage.jsx";
import Starships from "./Components/StarShips.jsx";
import { DefaultContext } from "./Context";
import { ThemeContext } from "./Context";
import useStyles from "./styles.js";
import Footer from "./Components/Footer.jsx";

const charactersURL = "https://swapi.dev/api/people";
const planetsURL = "https://swapi.dev/api/planets";
const starshipsURL = "https://swapi.dev/api/starships";

function App() {

  const [fan, setFan] = useState("");
  const [theme, setTheme] = useState(true);

  const bgColor = theme ? '#151515' : '#ffffff'
  const textColor = theme ? '#ffffff' : '#151515'


  const classes = useStyles(theme);

  const handleCreateFan = ({ name }) => {
    setFan(name);
  };

  const handleChangeTheme = ( theme ) => {
    setTheme(!theme);
  };

  const arrayOfValue = useState(''); 
  const value = arrayOfValue[0]; 
  const setValue = arrayOfValue[1];
  

  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    setValue('dsa')
    console.log(value)
    console.log(setValue)
    setLoading(true);
    const fetchCharacters = () => {
      axios
      .get(charactersURL)
      .then(data => {
        setCharacters(data.data.results);
        setLoading(false);
      }).catch(()=>{
        setLoading(false)
      })
    };

    const fetchPlanets = () => {
      axios
      .get(planetsURL)
      .then(data => {
        setPlanets(data.data.results);
        setLoading(false);
      })
    };


    const fetchStarships = () => {
      axios
      .get(starshipsURL)
      .then(data => {
        setStarships(data.data.results);
        setLoading(false);
      })
    };

    fetchCharacters();
    fetchPlanets();
    fetchStarships();
  }, []);

  if(loading) return <>Loading...</>
  

  return (
    <div className={classes.body} style={{color:textColor, backgroundColor:bgColor}}>
        <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
          <Header fan={fan} theme={theme}/>
      

          <DefaultContext.Provider value={{ handleCreateFan }}>
            <Routes>
                <Route path="/" element={<HomePage fan={fan} />} />
                <Route path="/characters" element={<Characters data={characters}/>} />
                <Route path="/planets" element={<Planets data={planets}/>} />
                <Route path="/starships" element={<Starships data={starships}/>} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>

        <Container style={{ backgroundColor: '' }}>
        </Container>
        <Footer className={classes.footer} />
        </DefaultContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
