import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-20',
    xl: 'h-28',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img 
        src="public/assets/img/haya logo.png"
        alt="هيا القديري - مصممة أزياء"
        className={`${sizeClasses[size]} w-auto object-contain drop-shadow-sm`}
      />
    </div>
  );
};