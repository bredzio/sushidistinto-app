import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const ThankYou = ({order})=>{

        return <MySection className="clase">          
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center align-items-center">
            <MyTitle className="display-3 text-center">¡Muchas gracias por tu compra!</MyTitle>
            <MyText>Por favor, revisa tu correo electrónico, allí te enviaremos las instrucciones para acceder al material</MyText>
            <hr/>
            <MyText>Tu orden es: {order}</MyText>

            <MyButton to="/" className='btn btn-danger'>Volver</MyButton>
        </div>  
        </MySection>
}

const MyButton = styled(Link)`
    text-align: center;
    color:white;
    background-color: white;
    border-radius: 50px;
    font-size: 20px; 
    padding: 20px 45px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 2rem;
`;

const MySection = styled.section`
        margin: 10rem 0.5rem ;
`;

const MyTitle = styled.h1`
        color: #000;
        text-align: left;
        font-weight: bold;
        font-size: 3rem;
        margin-bottom:3rem;
`;

const MyText = styled.p`
    color: grey;
    margin-bottom:0px;
    font-size: 2rem;
`;