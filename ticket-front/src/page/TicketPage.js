import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import TicketTemplate from '../components/ticket/TicketTemplate';
import TicketConatainer from '../containers/ticket/TicketContainer';

const TicketPage = () => {
    return (
        <>
          <HeaderContainer />
          <TicketTemplate>
            <TicketConatainer/>
          </TicketTemplate>
        </>
      );
}
export default TicketPage;