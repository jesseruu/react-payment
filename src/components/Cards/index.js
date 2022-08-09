import logoUno from './home1.png'
import logoDos from './home2.png'
import logoTres from './home3.png'
import './index.css';

const Cards = () => {


    return (
        <>
            <div className='card'>
                <div className='card__content'>
                    <img className='card__image'
                        src={logoUno}
                        alt='Work in progress'
                    />
                    <h3 className='card__title'>
                        Work in progress
                    </h3>
                    <p className='card__text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className='card__content'>
                    <img className='card__image'
                        src={logoDos}
                        alt='Work in progress'

                    />
                    <h3 className='card__title'>
                        Work in progress
                    </h3>
                    <p className='card__text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className='card__content'>
                    <img className='card__image'
                        src={logoTres}
                        alt='Work in progress'

                    />
                    <h3 className='card__title'>
                        Work in progress
                    </h3>
                    <p className='card__text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Cards;