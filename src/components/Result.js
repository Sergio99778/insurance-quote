import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

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
      <TransitionGroup component="span" className="resultado">
        <CSSTransition classNames="resultado" key={quote} timeout={{ enter: 500, exit: 500 }}>
          <QuoteText>
            Result: $ <span>{quote}</span>
          </QuoteText>
        </CSSTransition>
      </TransitionGroup>
    </QuoteContainer>
  );
};

Result.propTypes = {
  quote: PropTypes.number.isRequired,
};

export default Result;
