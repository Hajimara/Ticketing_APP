import React from 'react';
import styled from 'styled-components';
import notFoundImage from '../../lib/styles/img/NotFound1.jpg'

const NotFoundFormStyled = styled.div`
  width: 1100px;
  height:700px;
  margin: 0 auto;
`;

const Image = styled.div`
    width:100%;
    height:700px;
    background-image: url(${props=>props.bgImage});
    z-index:12;
`;

const NotFoundForm = () => {
    return <NotFoundFormStyled>
        <Image bgImage={notFoundImage}></Image>
    </NotFoundFormStyled>
}

export default NotFoundForm;
