import React from 'react';
import spinner from '../../img/spinner.gif';

const Spinner = () => {
  return (
    <div className="center">
      <img style={spinnerStyle} src={spinner} alt="Loading..." />
    </div>
  );
};

export default Spinner;

const spinnerStyle = {
  width: '200px',
  display: 'block',
};
