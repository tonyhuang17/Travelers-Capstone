import React, { useState } from 'react';

function DropdownList ({selectedValue, onChange}){
  const options = ['Blush', 'Bronzer', 'Eyebrow', 'Eyeliner', 'Eyeshadow', 'Foundation', 'Lip Liner', 'Lipstick', 'Mascara', 'Nail Polish'];

  return (
    <div>
      <h3>What Kind Of Makeup Are You Looking For Today?</h3>
      <select value={selectedValue} onChange={onChange}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownList;