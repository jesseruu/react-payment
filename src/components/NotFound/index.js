import './index.css';
import Navbar from '../Navbar';

const NotFound = () => {
    return (
        <>
            <div className='not-found'>
                <Navbar />
                <img className="not-found__image"
                    src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                    alt="Not found"
                />
                <h1 className='not-found__title'> Not found</h1>
                <p className='not-found__text'>
                    We cannot seem to find the page
                </p>
            </div>
        </>
    );
}

export default NotFound;