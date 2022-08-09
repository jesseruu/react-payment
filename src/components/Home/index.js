import Navbar from "../Navbar";
import Cards from "../Cards";
import './index.css';


const Home = () => {
    return (
        <>
            <div className="home">
                <Navbar />
                <h1 className='home__title'>Home</h1>
                <Cards />
            </div>
        </>
    )
}

export default Home;