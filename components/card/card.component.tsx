import { Button } from '../button/button.component';
import Image from 'next/image';

export type CardProps = {
  image: string;
  imageAlt?: string;
  title: string;
  description: string;
  captionTitle: string;
  captionList: string[];
  linkUrl: string;
  linkText: string;
};

export function Card(props: CardProps) {
  const {
    image,
    imageAlt,
    title,
    description,
    captionTitle,
    captionList,
    linkUrl,
    linkText,
  } = props;
  return (
    <div className="rounded-lg border-2 overflow-hidden">
      <Image
        src={image}
        width={380}
        height={120}
        alt={imageAlt}
        layout="responsive"
      />
      <div className="px-4 py-2.5">
        <h3 className="text-sm mb-2.5">{title}</h3>
        <p className="font-light text-xs">{description}</p>
      </div>
      <div className="px-4 py-2.5 bg-gray-100">
        <h4 className="font-medium text-sm text-blue-500 mb-2.5">
          {captionTitle}
        </h4>
        <ul className="mb-2.5">
          {captionList?.map((caption, index) => (
            <li key={index}>
              ○ <span className="ml-1">{caption}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center py-4">
        <Button size="medium" color="blue">
          <a
            href={linkUrl}
            className="inline-flex items-center justify-center"
            target="_blank" rel="noreferrer"
          >
            <span className="mr-2">{linkText}</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M9.375 11.375H1.125V2.9375H5.625V2.1875H0.375V12.125H10.125V6.875H9.375V11.375Z"
                  fill="white"
                />
                <path
                  d="M7.12501 0.875V1.625H10.3447L4.42236 7.54735L4.95266 8.07765L10.875 2.15532V5.375H11.625V0.875H7.12501Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="12"
                    height="12"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </Button>
        <a className="text-center mt-2 text-blue-500 text-xs" href={linkUrl}>
          <i>{new URL(linkUrl).host}</i>
        </a>
      </div>
    </div>
  );
}
