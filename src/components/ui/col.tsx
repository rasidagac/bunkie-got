import React, { ReactNode } from "react";

interface ColProps {
  children?: ReactNode;
  className?: string;
  lg?: number;
  md?: number;
  sm?: number;
  span?: number;
  xl?: number;
  xs?: number;
}

const Col: React.FC<ColProps> = ({
  children,
  className = "",
  lg,
  md,
  sm,
  span,
  xl,
  xs,
}) => {
  const getWidthClass = (size?: number) =>
    size ? `w-${(size / 12) * 100}%` : "";

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
