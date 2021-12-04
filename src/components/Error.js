import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ErrorMessage = styled.h2`
  color: white;
  padding: 10px;
  background-color: red;
`;

const Error = ({ message }) => {
  return <ErrorMessage>{message}</ErrorMessage>;
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
