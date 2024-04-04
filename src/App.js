import "./styles.css";

import React, { useState } from 'react';

export default function App() {

    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
  
    const handleButtonClick = (value) => {
      if (value === '=') {
        if (input.trim() === '') {
          setResult('Error');
        } else {
          try {
            setResult(eval(input));
          } catch (error) {
            setResult('Error');
          }
        }
      } else if (value === 'C') {
        setInput('');
        setResult('');
      } else {
        setInput((prevInput) => prevInput + value);
      }
    };
  
    return (
      <div>
        <h1>React Calculator</h1>
        <input type="text" value={input} readOnly />
        <div>
          <p>{result}</p>
        </div>
        <div>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
          <button onClick={() => handleButtonClick('=')}>=</button>
          <button onClick={() => handleButtonClick('C')}>C</button>
        </div>

      </div>
    );
  }


