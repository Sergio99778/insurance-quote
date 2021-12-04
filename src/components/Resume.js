import React from 'react';
import styled from '@emotion/styled';
import { firstCapital } from '../helper';

const ResumeContainer = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Resume = ({ data }) => {
  const { model, year, plan } = data;
  if (model === '' || year === '' || plan === '') return null;

  return (
    <ResumeContainer>
      <h2>Quote's resume</h2>
      <ul>
        <li>Model: {firstCapital(model)} </li>
        <li>Car's year:{year} </li>
        <li>Plan: {firstCapital(plan)}</li>
      </ul>
    </ResumeContainer>
  );
};

export default Resume;
