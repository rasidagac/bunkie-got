import React, { FC, ReactNode } from 'react';

interface RowProps {
  gutter?: [number, number];
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  className?: string;
  children: ReactNode;
}

const Row: FC<RowProps> = ({
  gutter = [0, 0],
  justify = '',
  align = '',
  className = '',
  children,
}) => {
  const [horizontalGutter, verticalGutter] = gutter;

  const rowClass = `
    flex flex-wrap 
    ${horizontalGutter ? `-mx-${horizontalGutter / 2}` : ''}
    ${verticalGutter ? `-my-${verticalGutter / 2}` : ''}
    ${justify ? `justify-${justify}` : ''}
    ${align ? `items-${align}` : ''}
    ${className}
  `;

  return <div className={rowClass}>{children}</div>;
};

export default Row;
