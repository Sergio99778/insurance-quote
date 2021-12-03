import React from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
`;

const HeaderText = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: 'Slabo 27px', sans-serif;
  text-align: center;
  letter-spacing: 2px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>Insurance quote</HeaderText>
    </HeaderContainer>
  );
};

export default Header;
