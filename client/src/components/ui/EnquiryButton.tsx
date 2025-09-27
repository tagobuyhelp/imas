import React from 'react';

interface EnquiryButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const EnquiryButton: React.FC<EnquiryButtonProps> = ({ 
  className = '', 
  children = 'Enquire Now!' 
}) => {
  return (
    <button 
      type="button" 
      className={`npfWidgetButton npfWidget-aeb7b9fbaa1dcebf1762c1f9bc270c4b ${className}`}
    >
      {children}
    </button>
  );
};