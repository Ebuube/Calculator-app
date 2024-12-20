// calculatorTitle.js File
import React from 'react'; // Import React (Mandatory Step)


// Create Functional Component.
// Takes title as props.value.
function CalculatorTitle(props) {
  return (
    <div className="calculator-title">{props.value}</div>
  );
};

export default CalculatorTitle; // Export Calculator Title
