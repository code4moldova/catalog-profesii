import { Column, Container, Row } from '../../components/grid';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { MainProps } from '../_app';
import clsx from 'clsx';
import { SideCategory } from '../../components/side-category/side-category.component';
import { Button } from '../../components/button/button.component';
import { ArrowLink } from '../../components/arrow-link/arrow-link.component';

type Props = MainProps & {
  items: Category[];
  domenii: Category[];
  domeniu: string | null;
  tags: string[];
};

const AllJobs: NextPage<Props> = (props) => {
  const { items, tags, domenii, domeniu: selected } = props;

  return (
    <Container>
      <Row>
        <Column className="w-1/4">
          <div>
            {domenii.map((domeniu, index) => (
              <div
                key={domeniu.title}
                className={clsx(
                  'mb-5',
                  domeniu.slug === selected ? '-mr-10' : '-mr-5'
                )}
              >
                <Link
                  href={`/toate-domeniile/${domeniu.slug}`}
                  passHref
                  scroll={false}
                >
                  <SideCategory
                    title={domeniu.title}
                    icon={`https://picsum.photos/seed/${index}/100/100`}
                    color={'border-rainbow-010'}
                  />
                </Link>
              </div>
            ))}
          </div>
        </Column>
        <Column className="w-3/4">
          <div className="bg-white p-10">
            <h2 className="mb-3">Subdomenii și Profesii</h2>
            <ul className="space-x-3 mb-10">
              {tags.map((tag) => (
                <Button key={tag} size="xsmall" variant="outline">
                  <li>{tag}</li>
                </Button>
              ))}
            </ul>

            <Row>
              {items.map((subdomeniu) => (
                <Column className="w-1/2 mb-10" key={subdomeniu.title}>
                  <h3 className="mb-3">{subdomeniu.title}</h3>
                  <ul className="text-blue-500">
                    {subdomeniu.items.map((item) => (
                      <li key={item.slug} className="mb-2">
                        <Link href={`/profesii/${item.slug}`} passHref>
                          <ArrowLink>{item.title}</ArrowLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Column>
              ))}
            </Row>
          </div>
        </Column>
      </Row>
    </Container>
  );
};

export default AllJobs;

type Params = {
  domeniu: string[];
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => ({
  props: {
    mainClass: 'bg-gray-100 shadow-inner py-12',
    items,
    tags,
    domenii,
    domeniu: context.params?.domeniu?.join('/') ?? null,
  },
});

export const getStaticPaths: GetStaticPaths<Params> = async () => ({
  paths: [
    ...domenii.map((d) => ({ params: { domeniu: [d.slug] } })),
    { params: { domeniu: [] } },
  ],
  fallback: false,
});

type Item = {
  title: string;
  slug: string;
};

type Category = {
  title: string;
  slug: string;
  items: Item[];
};

const items: Category[] = [
  {
    title: 'Dezvoltare Web',
    slug: 'dezvoltare-web',
    items: [
      { title: 'FrontEnd Developer', slug: 'frontend-developer' },
      { title: 'BackEnd Developer', slug: 'backend-developer' },
      { title: 'Full Stack Developer', slug: 'full-stack-developer' },
      { title: 'Web Administrator', slug: 'web-administrator' },
    ],
  },
  {
    title: 'Design',
    slug: 'design',
    items: [
      { title: 'Designer Grafic', slug: 'designer-grafic' },
      { title: 'UX Designer', slug: 'ux-designer' },
      { title: 'UI Designer', slug: 'ui-designer' },
      { title: 'Illustrator', slug: 'illustrator' },
    ],
  },
  {
    title: 'Dezvoltare Software',
    slug: 'dezvoltare-software',
    items: [
      { title: 'Java Developer', slug: 'java-developer' },
      { title: 'Software Engineer', slug: 'software-engineer' },
      { title: '.NET Developer', slug: 'net-developer' },
      { title: 'Programmer Analyst', slug: 'programmer-analyst' },
      { title: 'System Architect', slug: 'system-architect' },
      { title: 'System Designer', slug: 'system-designer' },
      { title: 'Quality Assurance Tester', slug: 'quality-assurance' },
    ],
  },
  {
    title: 'Dezvoltare Aplicații',
    slug: 'dezvoltare-aplicatii',
    items: [
      { title: 'iOS Developer', slug: 'ios-developer' },
      { title: 'Android Developer', slug: 'android-developer' },
      { title: 'FrontEnd Developer', slug: 'frontend-developer-1' },
      { title: 'BackEnd Developer', slug: 'backend-developer-1' },
      { title: 'Full Stack Developer', slug: 'full-stack-developer-1' },
    ],
  },
  {
    title: 'Baze de date',
    slug: 'baze-de-date',
    items: [
      { title: 'Data Center Support', slug: 'data-center-support' },
      { title: 'Data Quality Manager', slug: 'data-quality-manager' },
      { title: 'Database Administrator', slug: 'database-administrator' },
    ],
  },
  {
    title: 'Securitate Informațională',
    slug: 'securitate-informationala',
    items: [
      { title: 'Security Specialist', slug: 'security-specialist' },
      { title: 'Cyber Security Expert', slug: 'cyber-security-expert' },
    ],
  },
  {
    title: 'Rețele',
    slug: 'retele',
    items: [
      { title: 'Network Administrator', slug: 'network-administrator' },
      { title: 'Network Architect', slug: 'network-architect' },
      { title: 'Network Engineer', slug: 'network-engineer' },
      {
        title: 'Telecommunications Specialist',
        slug: 'telecommunications-specialist',
      },
      { title: 'Systems Analyst', slug: 'systems-analyst' },
    ],
  },
  {
    title: 'Cloud Computing',
    slug: 'cloud-computing',
    items: [
      { title: 'Cloud Architect', slug: 'cloud-architect' },
      { title: 'Cloud Consultant', slug: 'cloud-consultant' },
      { title: 'Cloud Services Developer', slug: 'cloud-services-developer' },
      { title: 'System Administrator', slug: 'system-administrator' },
      { title: 'System Engineer', slug: 'system-engineer' },
    ],
  },
  {
    title: 'Inteligență Artificială',
    slug: 'inteligenta-artificiala',
    items: [
      { title: 'Machine Learning Expert', slug: 'machine-learning-epxert' },
      { title: 'AI Engineer', slug: 'ai-engineer' },
      { title: 'Data Mining Analyst', slug: 'data-mining-analyst' },
      { title: 'Data Scientist', slug: 'data-scientist' },
      {
        title: 'Business Intelligence Developer',
        slug: 'business-intelligence-developer',
      },
    ],
  },
];

const tags: string[] = [
  'Lucru cu calculatorul',
  'Securitate',
  'Coding',
  'Mediu Digital',
  'Antreprenoriat',
];

const domenii: Category[] = [
  {
    title: 'IT (Tehnologii Informaționale)',
    items: [],
    slug: 'it-tehnologii-informationale',
  },
  {
    title: 'Securitate Publică',
    items: [],
    slug: 'securitate-publica',
  },
  {
    title: 'Agricultură',
    items: [],
    slug: 'agricultura',
  },
  {
    title: 'Marketing',
    items: [],
    slug: 'marketing',
  },
  {
    title: 'Economie și Finanțe',
    items: [],
    slug: 'economie-si-finante',
  },
  {
    title: 'Urbanism și Arhitectură',
    items: [],
    slug: 'urbanism-si-arhitectura',
  },
  {
    title: 'Medicină și Farmaceutică',
    items: [],
    slug: 'medicina-si-farmaceutica',
  },
  {
    title: 'Inginerie',
    items: [],
    slug: 'inginerie',
  },
  {
    title: 'Studii sociale',
    items: [],
    slug: 'studii-sociale',
  },
  {
    title: 'Lege și Drept',
    items: [],
    slug: 'lege-si-drept',
  },
  {
    title: 'Logistică',
    items: [],
    slug: 'logistica',
  },
];
