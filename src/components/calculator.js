// calculator.js File
import React from 'react';
import CalculatorTitle from './calculatorTitle';
import OutputScreen from './outputScreen';
import Button from './button';


class Calculator extends React.Component {
  render () {
    return (
      <div className="frame">
        <CalculatorTitle value ="Calculator Application" />
        <div class="mainCalc">
          <OutputScreen />
          <div className="button-row">
            <Button label={"Clear"} />
            <Button label={"Delete"} />
            <Button label={"."} />
            <button label={"/"} />
          </div>
          <div className="button-row">
            <Button label={"7"} />
            <Button label={"8"} />
            <Button label={"9"} />
            <button label={"*"} />
          </div>
          <div className="button-row">
            <Button label={"4"} />
            <Button label={"5"} />
            <Button label={"6"} />
            <button label={"-"} />
          </div>
          <div className="button-row">
            <Button label={"1"} />
            <Button label={"2"} />
            <Button label={"3"} />
            <button label={"+"} />
          </div>
          <div className="button-row">
            <Button label={"0"} />
            <Button label={"="} />
          </div>
        </div>
      </div>
    );
  };
};


export default Calculator;
