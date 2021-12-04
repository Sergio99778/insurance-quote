import React, { Fragment } from 'react';

const Resume = ({ data }) => {
  const { model, year, plan } = data;
  if (model === '' || year === '' || plan === '') return null;

  return (
    <Fragment>
      <h2>Quote's resume</h2>
      <ul>
        <li>Model: </li>
        <li>Car's year: </li>
        <li>Plan: </li>
      </ul>
    </Fragment>
  );
};

export default Resume;
