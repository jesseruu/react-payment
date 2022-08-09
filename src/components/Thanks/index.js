import Navbar from "../Navbar";
import { useSearchParams } from "react-router-dom";
import './index.css';


const Thanks = () => {

    const [searchParams] = useSearchParams();
    const transactionState = searchParams.get('transactionState');
    const description = searchParams.get('description');
    const referenceCode = searchParams.get('referenceCode');
    const TX_VALUE = searchParams.get('TX_VALUE');
    return (
        <>
            <Navbar />
            <div className='thanks'>
                <div className='thanks__content'>
                    <h3 className='thanks__title'>
                        Donation result
                    </h3>
                    <p className='thanks__text'>
                        Resultado de la transaccion
                    </p>

                    <p className='thanks__result'>Descripcion: {transactionState === '4' ? 'Transaction approved' : 'Transaction rejected'}</p>
                    <p className='thanks__result'>Estado de transaccion: {description}</p>
                    <p className='thanks__result'>Codigo de referencia: {referenceCode}</p>
                    <p className='thanks__result'>Valor: {TX_VALUE}</p>
                </div>
            </div>

        </>
    );
}

export default Thanks