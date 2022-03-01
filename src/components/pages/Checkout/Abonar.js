import styled from 'styled-components';

import Paypal from './Paypal';


export const Abonar = ()=>{
    return <MySection className="clase">
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center align-items-center">
          <MyTitle className="display-3 text-center">Por favor, seleccione su medio de pago:</MyTitle>
          <hr/>
          <Paypal/>
      </div>  
    </MySection>
}

const MySection = styled.section`
        margin: 5rem 0.5rem ;
`;

const MyTitle = styled.h1`
        color: #000;
        margin: 5rem 0.5rem ;
        text-align: left;
        font-weight: bold;
        font-size: 2.5rem;
        margin-bottom:3rem;
`;
