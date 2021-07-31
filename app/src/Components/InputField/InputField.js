import React from 'react';

const InputField = ({ type = 'text', placeholder = '' }, ref) => (
    <input type={type} placeholder={placeholder} ref={ref} required />
);

export default React.forwardRef(InputField);
