import Image from 'next/image';

export type ExternalCardProps = {
  href: string;
  header: string;
  description: string;
  icon?: string;
};

export function ExternalCard(props: ExternalCardProps) {
  const { href, header, description, icon } = props;
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
      </div>
    </a>
  );
}
