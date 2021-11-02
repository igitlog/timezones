import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div style={{ margin: 'auto' }}>
      <div className="lds-ripple"><div></div><div></div></div>
    </div>
  );
};

export default Loader;