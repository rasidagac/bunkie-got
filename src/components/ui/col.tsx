import React, { ReactNode } from 'react';

interface ColProps {
  span?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  className?: string;
  children?: ReactNode;
}

const Col: React.FC<ColProps> = ({
  span,
  xs,
  sm,
  md,
  lg,
  xl,
  className = '',
  children,
}) => {
  const getWidthClass = (size?: number) =>
    size ? `w-${(size / 12) * 100}%` : '';

  const colClass = `
    px-${span ? span / 2 : 2}
    ${getWidthClass(span)}
    ${getWidthClass(xs)}
    ${getWidthClass(sm)}
    ${getWidthClass(md)}
    ${getWidthClass(lg)}
    ${getWidthClass(xl)}
    ${className}
  `;

  return <div className={colClass}>{children}</div>;
};

export default Col;
