import React from 'react';
import styled from '@emotion/styled';

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const QuoteText = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  margin: 0;
`;

const QuoteContainer = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const Result = ({ quote }) => {
  if (quote === 0) return <Message>Select model, year and plan</Message>;

  return (
    <QuoteContainer>
      <QuoteText>Result: $ {quote}</QuoteText>
    </QuoteContainer>
  );
};

export default Result;
