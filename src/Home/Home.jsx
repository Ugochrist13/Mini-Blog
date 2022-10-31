
import NavBar from "../NavBar/NavBar";
import Banner from "./Banner";
import HomeBody from "../Home/HomeBody"
import './Home.css'
import Footer from "./Footer";


const Home = () => {

    return (
        <div className="home-overall">
            <NavBar />
            <Banner/>
            <HomeBody />
            <Footer />
        </div>
    );
}

export default Home;