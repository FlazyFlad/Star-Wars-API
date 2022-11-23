import { ReactComponent as FacebookLogoSVG } from ".././assets/facebook.svg" 
import { ReactComponent as InstagramLogoSVG } from "./../assets/instagram.svg"
import { ReactComponent as TwitterLogoSVG } from ".././assets/twitter.svg" 
import { ReactComponent as YoutubeLogoSVG } from "./../assets/youtube.svg"
import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import { useContext } from "react"
import { ThemeContext } from "../Context"

const swLinks = [
    {
      url: "https://www.facebook.com/StarWars",
      name: "facebook_logo",
      component: <FacebookLogoSVG />,
    },
    {
      url: "https://www.instagram.com/starwars/",
      name: "instagram_logo",
      component: <InstagramLogoSVG />,
    },
    {
      url: "https://twitter.com/starwars",
      name: "twitter_logo",
      component: <TwitterLogoSVG />,
    },
    {
      url: "https://www.youtube.com/user/starwars",
      name: "youtube_logo",
      component: <YoutubeLogoSVG />,
    },
  ];

  

const Footer = () => {
    const { theme } = useContext(ThemeContext);
    const bgColor = theme ? '#151515' : '#ffffff'
    const textColor = theme ? '#ffffff' : '#151515'
    return (
        <>
    <footer>
            <BottomNavigation style={{ backgroundColor: bgColor, color: textColor }}>
                {swLinks.map((link) => (
                <BottomNavigationAction key={link.name} label={link.name} href={link.url} icon={link.component}/>
                ))}
            </BottomNavigation>
    </footer>
  </>
    );
}
export default Footer;