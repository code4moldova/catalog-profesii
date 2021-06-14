import React from 'react';

type Props = React.PropsWithChildren<{
  className?: string;
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  style?: React.CSSProperties;
}>;
export const Typography = ({
  tag: Tag,
  className,
  children,
  style = {},
}: Props) => {
  return (
    <Tag className={className} style={{ fontFamily: 'Montserrat', ...style }}>
      {children}
    </Tag>
  );
};
