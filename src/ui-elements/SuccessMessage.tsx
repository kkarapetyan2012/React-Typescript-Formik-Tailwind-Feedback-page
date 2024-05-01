import React, { FC } from 'react';

// Define the props interface
interface SuccessMessageProps {
  show: boolean | null;
  children: React.ReactNode
}

const SuccessMessage: FC<SuccessMessageProps> = ({ show, children }) => {
  return (
    <div className={`fixed top-20 left-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-700 ease-out ${show ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
};

export default SuccessMessage;
