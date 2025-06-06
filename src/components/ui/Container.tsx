import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`container mx-auto px-4 md:px-6 ${className}`}>
      {children}
    </div>
  );
};

export default Container;