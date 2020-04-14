import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PaymentTemplate from '../components/payment/PaymentTemplate';
import PaymentContainer from '../containers/payment/PaymentContainer';

const PaymentPage = () => {
    return (
      <>
        <HeaderContainer />
        <PaymentTemplate>
            <PaymentContainer/>
        </PaymentTemplate>
      </>
    );
}

export default PaymentPage;