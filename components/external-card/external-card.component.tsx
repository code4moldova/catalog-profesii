import Image from 'next/image';
import Link from 'next/link';
import { ArrowLink } from '../arrow-link/arrow-link.component';

export type ExternalCardProps = {
  href: string;
  header: string;
  description: string;
  icon?: string;
  links?: [{ title: string; slug: string }];
};

export function ExternalCard(props: ExternalCardProps) {
  const { href, header, description, icon, links } = props;
  return (
    <a
      className="flex rounded-lg border p-5"
      href={href}
      target="_blank"
      rel="noopener nofollow noreferrer"
    >
      {icon && (
        <div className="rounded-md overflow-hidden w-24 h-24 flex-shrink-0 relative">
          <Image src={icon} alt={header} layout="fill" />
        </div>
      )}

      {!icon && (
        <div className="rounded-md bg-gray-100 w-24 h-24 flex-shrink-0" />
      )}

      <div className="ml-8">
        <p className="text-lg mb-2">{header}</p>
        <p className="text-sm text-gray-400">{description}</p>
        {links && (
          <ul className="text-blue-500">
            {links.map((item, index) => {
              return (
                <li key={item.slug} className="mb-2">
                  <Link href={`/xd/${item.slug}`} passHref>
                    <ArrowLink>{item.title}</ArrowLink>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </a>
  );
}
