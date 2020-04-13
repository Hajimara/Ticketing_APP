import React from 'react';
import AdminContainer from '../containers/admin/AdminContainer';
import HeaderContainer from '../containers/common/HeaderContainer';

const AdminPage = () => {
    return (
      <>
        <HeaderContainer />
        <AdminContainer></AdminContainer>
      </>
    );
}
export default AdminPage;