import starwarsMain from "../../assets/starwars-main.jpg";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <h1>😊 Welcome to my Star Wars fansite 😊</h1>
      <img
        className="starwars-main-img"
        src={starwarsMain}
        alt="Starwars wallpaper image"
      />
      <p>
        Use the sidebar to explore different parts of the Star Wars universe!
      </p>
    </>
  );
};
export default HomePage;
