import React from 'react';

const Form = () => {
  return (
    <form>
      <div className="">
        <label htmlFor="">Model: </label>
        <select name="" id="">
          <option value="">-- Option --</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </select>
      </div>
      <div className="">
        <label htmlFor="">Year: </label>
        <select name="" id="">
          <option>-- Option --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
        </select>
      </div>
      <div className="">
        <label htmlFor="">Plan: </label>
        <input type="radio" name="plan" id="" value="basic" />
        Basic
        <input type="radio" name="plan" id="" value="complete" />
      </div>
      <button type="button">Quote</button>
    </form>
  );
};

export default Form;
