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

export const CardAndFriends = ({
  image,
  image_alt,
  title,
  description,
  caption_title,
  caption_list,
  host_platform_link,
  button_text,
  button_redirect_link,
}: Props) => {
  return (
    <div className="rounded-lg border-2 w-80">
      <Image src={image} width={380} height={120} alt={image_alt} />
      <div className="px-4 py-2.5">
        <h3 className="text-sm mb-2.5">{title}</h3>
        <p className="font-light text-xs">{description}</p>
      </div>
      <div className="px-4 py-2.5">
        <h4>{caption_title}</h4>
        <ul>
          {caption_list?.map((caption, index) => (
            <li key={index}>{caption}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col">
        <Button size="medium" color="blue" className="w-32">
          <div className="inline-flex items-center justify-center">
            <a href={button_redirect_link}>{button_text}</a>
            <Image src={image2} width={15} height={15} alt="" />
          </div>
        </Button>
        <a className="text-center" href={`https://${host_platform_link}`}>
          <span>{host_platform_link}</span>
        </a>
      </div>
    </div>
  );
};
