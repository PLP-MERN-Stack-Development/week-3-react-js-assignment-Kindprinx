import React from 'react';

const variants = {
  primary: 'bg-blue-500 hover:bg-blue-600 text-white',
  secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
  danger: 'bg-red-500 hover:bg-red-600 text-white',
};

function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseClasses = 'px-4 py-2 rounded transition-colors duration-200';
  const variantClasses = variants[variant] || variants.primary;
  
  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;