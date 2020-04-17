import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import MyHomeTemplate from '../components/myHome/MyHomeTemplate';
import MyHomeContainer from '../containers/myHome/MyHomeContainer';

const MyHomePage = () => {
    return (
        <>
          <HeaderContainer />
          <MyHomeTemplate>
            <MyHomeContainer/>
          </MyHomeTemplate>
        </>
      );
}
export default MyHomePage;