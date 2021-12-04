import React from 'react';
import styled from '@emotion/styled';

const ErrorMessage = styled.h2`
  color: white;
  padding: 10px;
  background-color: red;
`;

const Error = ({ message }) => {
  return <ErrorMessage>{message}</ErrorMessage>;
};

export default Error;
