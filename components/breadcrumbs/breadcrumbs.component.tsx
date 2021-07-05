import Link from 'next/link';
import { Fragment } from 'react';

export interface BreadCrumbLink {
  title: string;
  url: string;
}
export type BreadcrumbsProps = {
  links: BreadCrumbLink[];
};

export function Breadcrumbs({ links }: BreadcrumbsProps) {
  return (
    <ul className="flex flex-nowrap space-x-2">
      {links.map((breadcrumb, index, array) => (
        <li key={breadcrumb.title} className="text-blue-600">
          {index !== array.length - 1 ? (
            <Fragment>
              <Link href={breadcrumb.url}>{breadcrumb.title}</Link>
              <span className="ml-2">{'>'}</span>
            </Fragment>
          ) : (
            <span>{breadcrumb.title}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
