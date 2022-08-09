import logoUno from './Blog post-bro.png'
import Navbar from '../Navbar';
import './index.css'

const Donate = () => {

    return (
        <>
            <Navbar />
            <div className='product'>
                <img className='product__image'
                    src={logoUno}
                    alt='Working progress logo'
                />
                <div className='product__content'>
                    <h1 className='product__title'>
                        Buy us a coffee
                    </h1>

                    <p className='product__text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </p>

                    <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
                        <input name="merchantId" type="hidden" value="508029" />
                        <input name="accountId" type="hidden" value="512321" />
                        <input name="description" type="hidden" value="Donacion" />
                        <input name="referenceCode" type="hidden" value="PAYU004" />
                        <input name="amount" type="hidden" value="20000" />
                        <input name="tax" type="hidden" value="3193" />
                        <input name="taxReturnBase" type="hidden" value="16806" />
                        <input name="currency" type="hidden" value="COP" />
                        <input name="signature" type="hidden" value="ab2b60b4a36064eec8f63bd859dc06fb" />
                        <input name="test" type="hidden" value="1" />
                        <input name="buyerEmail" type="hidden" value="donation@test.com" />
                        <input name="responseUrl" type="hidden" value="http://localhost:3000/thanks" />
                        <input name="confirmationUrl" type="hidden" value="http://localhost:3000/thanks" />
                        <button type="submit" formtarget="_blank" className='product__button'>
                            Donate with PayU
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Donate;