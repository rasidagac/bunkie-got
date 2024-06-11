import React, { FC, ReactNode } from "react";

interface RowProps {
  align?: "baseline" | "center" | "end" | "start" | "stretch";
  children: ReactNode;
  className?: string;
  gutter?: [number, number];
  justify?: "around" | "between" | "center" | "end" | "evenly" | "start";
}

const Row: FC<RowProps> = ({
  align = "",
  children,
  className = "",
  gutter = [0, 0],
  justify = "",
}) => {
  const [horizontalGutter, verticalGutter] = gutter;

  const rowClass = `
    flex flex-wrap 
    ${horizontalGutter ? `-mx-${horizontalGutter / 2}` : ""}
    ${verticalGutter ? `-my-${verticalGutter / 2}` : ""}
    ${justify ? `justify-${justify}` : ""}
    ${align ? `items-${align}` : ""}
    ${className}
  `;

  return <div className={rowClass}>{children}</div>;
};

export default Row;
