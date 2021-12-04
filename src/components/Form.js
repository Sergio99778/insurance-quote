import React, { useState } from 'react';
import styled from '@emotion/styled';
import { getDifferenceYears, checkModel, checkPlan } from '../helper';
import PropTypes from 'prop-types';

//Components
import Error from './Error';

//Styles
const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
  flex: 0 0 100px;
`;
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const ContainerRadio = styled.div`
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Form = ({ setResume, setLoading }) => {
  //State
  const [data, setData] = useState({
    model: '',
    year: '',
    plan: '',
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (model.trim() === '' || year === '' || plan.trim() === '') {
      setError(true);
    } else {
      setError(false);
      //Price base
      let result = 2000;
      const difference = getDifferenceYears(year);
      //Every year = -3% of price base
      result -= (difference * 3 * result) / 100;
      result *= checkModel(model);

      const increasePlan = checkPlan(plan);
      result = parseFloat(increasePlan * result).toFixed(2);

      setLoading(true);

      setTimeout(() => {
        setLoading(false);

        setResume({
          quote: Number(result),
          data,
        });
      }, 1000);
    }
  };

  const { model, year, plan } = data;
  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error message="Complete all the fields" /> : null}
      <Field className="">
        <Label htmlFor="">Model: </Label>
        <Select name="model" value={model} onChange={handleChange}>
          <option value="">-- Option --</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </Select>
      </Field>
      <Field className="">
        <Label htmlFor="">Year: </Label>
        <Select name="year" value={year} onChange={handleChange}>
          <option value="">-- Option --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
        </Select>
      </Field>
      <Field className="">
        <Label htmlFor="">Plan: </Label>
        <ContainerRadio>
          <input type="radio" name="plan" id="basic" value="basic" checked={plan === 'basic'} onChange={handleChange} />
          <label htmlFor="basic">Basic</label>
        </ContainerRadio>
        <ContainerRadio>
          <input type="radio" name="plan" id="complete" value="complete" checked={plan === 'complete'} onChange={handleChange} />
          <label htmlFor="complete">Complete</label>
        </ContainerRadio>
      </Field>
      <Button type="submit">Quote</Button>
    </form>
  );
};

Form.propTypes = {
  setResume: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default Form;
