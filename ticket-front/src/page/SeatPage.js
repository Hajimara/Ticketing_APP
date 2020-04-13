import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import SeatTemplate from '../components/seat/SeatTemplate';
import SeatContainer from '../containers/seat/SeatContainer';

const Seatpage = () => {
    return (
      <>
        <HeaderContainer />
        <SeatTemplate>
          <SeatContainer></SeatContainer>
        </SeatTemplate>
      </>
    );
}

export default Seatpage;