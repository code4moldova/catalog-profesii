import { Button } from '../button/button.component';
import image2 from './assets/cil_external-link.svg';
import Image from 'next/image';

type Props = {
  image: string;
  image_alt?: string;
  title: string;
  description: string;
  caption_title: string;
  caption_list: string[];
  host_platform_link: string;
  button_text: string;
  button_redirect_link: string;
};

export function Card({
  image,
  image_alt,
  title,
  description,
  caption_title,
  caption_list,
  host_platform_link,
  button_text,
  button_redirect_link,
}: Props) {
  return (
    <div className="rounded-lg border-2 w-80">
      <Image src={image} width={380} height={120} alt={image_alt} />
      <div className="px-4 py-2.5">
        <h3 className="text-sm mb-2.5">{title}</h3>
        <p className="font-light text-xs">{description}</p>
      </div>
      <div className="px-4 py-2.5 bg-gray-100">
        <h4 className="font-medium text-sm text-blue-500 mb-2.5">
          {caption_title}
        </h4>
        <ul className="mb-2.5">
          {caption_list?.map((caption, index) => (
            <li key={index}>
              ○ <span className="ml-1">{caption}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center py-4">
        <Button size="medium" color="blue">
          <div className="inline-flex items-center justify-center">
            <a className="mr-2" href={button_redirect_link}>
              {button_text}
            </a>
            <Image src={image2} width={15} height={15} alt="" />
          </div>
        </Button>
        <a className="text-center mt-2" href={`https://${host_platform_link}`}>
          <span>{host_platform_link}</span>
        </a>
      </div>
    </div>
  );
}
