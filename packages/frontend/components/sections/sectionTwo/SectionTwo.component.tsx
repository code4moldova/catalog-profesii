import React from 'react';
import Link from 'next/link';

type Props = React.PropsWithChildren<{
  title: string;
  subtitle: string;
  linkText?: string;
  link?: string;
  alt?: string;
  image: string;
}>;

const SectionTwoComponent = ({
  title,
  subtitle,
  link,
  linkText,
  alt,
  image,
}: Props) => {
  return (
    <div className="pl-4 pt-11 pb-9 my-0 mx-0">
      <img src={image} alt={alt} className="block my-0 mx-auto" />
      <h2
        style={{ fontFamily: 'Montserrat' }}
        className="text-base my-4 font-semibold"
      >
        {title}
      </h2>
      <p className="text-base font-light leading-6 w-72 sm:w-64 mb-6">
        {subtitle}
      </p>
      {linkText ? (
        <Link href={link}>
          <a className="text-sm text-blue-400 ">{linkText}</a>
        </Link>
      ) : null}
    </div>
  );
};

export default SectionTwoComponent;
