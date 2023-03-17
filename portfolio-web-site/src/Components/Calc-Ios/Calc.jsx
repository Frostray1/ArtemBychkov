import React, { useState } from "react";

const Calc = () => {
  const [value, setValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [prevValue, setPrevValue] = useState(null);
  const [hasDecimal, setHasDecimal] = useState(false);

  const handleNumberClick = (num) => {
    setValue(value === "0" ? String(num) : value + num);
  };

  const handleOperatorClick = (nextOperator) => {
    if (operator !== null) {
      if (operator === "+") {
        setPrevValue(prevValue + Number(value));
      } else if (operator === "-") {
        setPrevValue(prevValue - Number(value));
      } else if (operator === "x") {
        setPrevValue(prevValue * Number(value));
      } else if (operator === "/") {
        setPrevValue(prevValue / Number(value));
      }
      setValue(String(prevValue));
    } else {
      setPrevValue(Number(value));
    }
    setValue("0");
    setOperator(nextOperator);
    setHasDecimal(false);
  };

  const handleEqualClick = () => {
    if (operator === "+") {
      setValue(prevValue + Number(value));
    } else if (operator === "-") {
      setValue(prevValue - Number(value));
    } else if (operator === "x") {
      setValue(prevValue * Number(value));
    } else if (operator === "/") {
      setValue(prevValue / Number(value));
    }
    setOperator(null);
    setPrevValue(null);
    setHasDecimal(false);
  };

  const handleClearClick = () => {
    setValue("0");
    setOperator(null);
    setPrevValue(null);
    setHasDecimal(false);
  };

  const handleDecimalClick = () => {
    if (!hasDecimal) {
      setValue(value + ".");
      setHasDecimal(true);
    }
  };

  const handleSignChange = () => {
    setValue(String(Number(value) * -1));
  };

  const handlePercentClick = () => {
    setValue(String(Number(value) / 100));
  };


  return (
    <div>
      <div className="calc">
        <div className="screen">
          <p>{value}</p>
        </div>
        <div className="buttons">
          <button
            onClick={handleClearClick}
            className="buttons__btn ac bg--grey"
          >
            ac
          </button>
          <button onClick={() => handleSignChange()} className="buttons__btn plus-minus bg--grey">+/-</button>
          <button  className="buttons__btn percent bg--grey">%</button>
          <button
            onClick={() => handleOperatorClick("/")}
            className="buttons__btn division bg--orange"
          >
            /
          </button>
  
          <button
            onClick={() => handleNumberClick(7)}
            className="buttons__btn seven"
          >
            7
          </button>
          <button
            onClick={() => handleNumberClick(8)}
            className="buttons__btn eigth"
          >
            8
          </button>
          <button
            onClick={() => handleNumberClick(9)}
            className="buttons__btn nine"
          >
            9
          </button>
          <button
            onClick={() => handleOperatorClick("x")}
            className="buttons__btn myltiply bg--orange"
          >
            x
          </button>
  
          <button
            onClick={() => handleNumberClick(4)}
            className="buttons__btn four"
          >
            4
          </button>
          <button
            onClick={() => handleNumberClick(5)}
            className="buttons__btn five"
          >
            5
          </button>
          <button
            onClick={() => handleNumberClick(6)}
            className="buttons__btn six"
          >
            6
          </button>
          <button
            onClick={() => handleOperatorClick("-")}
            className="buttons__btn minus bg--orange"
          >
            -
          </button>
  
          <button
            onClick={() => handleNumberClick(1)}
            className="buttons__btn one"
          >
            1
          </button>
          <button
            onClick={() => handleNumberClick(2)}
            className="buttons__btn two"
          >
            2
          </button>
          <button
            onClick={() => handleNumberClick(3)}
            className="buttons__btn three"
          >
            3
          </button>
          <button
            onClick={() => handleOperatorClick("+")}
            className="buttons__btn plus bg--orange"
          >
            +
          </button>
  
          <button
            onClick={() => handleNumberClick(0)}
            className="buttons__btn zero"
          >
            0
          </button>
          <button
            onClick={handleDecimalClick}
            className="buttons__btn dot"
          >
            .
          </button>
          <button
            onClick={handleEqualClick}
            className="buttons__btn equal bg--orange"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default Calc;
