import React from 'react';

type Props = React.PropsWithChildren<{
  className?: string;
  tag: 'h1' | 'h2' | 'h3' | 'h4';
  style?: React.CSSProperties;
  body?: 'light' | 'regular' | 'button';
}>;
export const Typography = ({
  tag: Tag,
  className,
  children,
  body,
  style = {},
}: Props) => {
  return (
    <Tag
      className={className}
      style={{
        fontFamily: 'Montserrat',
        fontWeight:
          body === 'light'
            ? 300
            : body === 'regular'
            ? 500
            : body === 'button'
            ? 600
            : Tag === 'h4'
            ? 500
            : Tag === 'h3'
            ? 400
            : 600,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
};
