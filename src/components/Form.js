import React from 'react';
import styled from '@emotion/styled';

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

const InputRadio = styled.input`
  margin: 0 1rem;
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

const Form = () => {
  return (
    <form>
      <Field className="">
        <Label htmlFor="">Model: </Label>
        <Select name="" id="">
          <option value="">-- Option --</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </Select>
      </Field>
      <Field className="">
        <Label htmlFor="">Year: </Label>
        <Select name="" id="">
          <option>-- Option --</option>
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
        <InputRadio type="radio" name="plan" id="" value="basic" />
        Basic
        <InputRadio type="radio" name="plan" id="" value="complete" />
        Complete
      </Field>
      <Button type="button">Quote</Button>
    </form>
  );
};

export default Form;
