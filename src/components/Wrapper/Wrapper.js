import React from 'react';
import './Wrapper.css';

const Wrapper = ({children}) => {
  return (
    <div className='wrapper-container'>
        {children}
    </div>
  )
}

export default Wrapper