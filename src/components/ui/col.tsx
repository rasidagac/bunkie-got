import React from 'react';

interface ColProps {
  children: React.ReactNode;
  // Individual props for screen sizes
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  // Maintain offset and breakpoint props
  offset?: number;
  className?: string;
}

const Col: React.FC<ColProps> = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  offset = 0,
  className,
}) => {
  // Prioritize individual screen size props
  const fractions = xs ?? (sm ?? md ?? lg ?? xl ?? xxl ?? 12) / 12; // Use default of 12 if no prop provided
  const baseClass = `w-full px-4`; // Base styles for all screens

  const responsiveClasses: string[] = [];
  if (sm) responsiveClasses.push(`md:w-1/${sm / 12}`);
  if (md) responsiveClasses.push(`lg:w-1/${md / 12}`);
  if (lg) responsiveClasses.push(`xl:w-1/${lg / 12}`);
  if (xl) responsiveClasses.push(`xxl:w-1/${xl / 12}`);

  const offsetClasses: string[] = [
    `md:ml-${offset * fractions}`, // Offset on medium screens (or as needed)
    `lg:ml-${offset * fractions}`, // Offset on large screens (or as needed)
    `xl:ml-${offset * fractions}`, // Offset on extra-large screens (or as needed)
  ];

  const classes = `${baseClass} ${responsiveClasses.join(' ')} ${offsetClasses.join(' ')} ${className}`;

  return <div className={classes}>{children}</div>;
};

export default Col;
