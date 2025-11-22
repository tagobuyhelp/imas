import React from 'react';
import { applyNow } from '../../lib/utils';

interface EnquiryButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const EnquiryButton: React.FC<EnquiryButtonProps> = ({ 
  className = '', 
  children = 'Enquire Now!' 
}) => {
  const onClick = () => {
    applyNow();
  };

  return (
    <button 
      type="button" 
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};