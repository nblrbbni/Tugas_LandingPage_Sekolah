import React, { useState } from 'react';

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.target.value)
  };

  const handleSubmit = event => {
    event.preventDefault()
    alert(`Input submitted: ${inputValue}`)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Masukkan sesuatu:
          <input type='text' value={inputValue} onChange={handleChange} />
        </label>
        <button type='submit'>Submit</button>
      </form>
      <p>Input anda: {inputValue}</p>
    </div>
  )
}

export default SimpleForm;
