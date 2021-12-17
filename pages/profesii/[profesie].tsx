import { Column, Container, Row } from '../../components/grid';
import { NextPage } from 'next';
import Image from 'next/image';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.component';
import { Button } from '../../components/button/button.component';
import { Panel } from '../../components/panel/panel.component';
import { ExternalCard } from '../../components/external-card/external-card.component';
import { Circle } from '../../components/circle/circle.component';
import { SalaryGrowth } from '../../components/salary-growth/salary-growth.component';
import { CareerGrowth } from '../../components/career-growth/career-growth.component';
import Link from 'next/link';

const Profesie: NextPage = () => (
  <>
    <section className="pt-20">
      <Container>
        <Row className="justify-center">
          <Column className="lg:w-1/2">
            <div className="border-b-4 border-rainbow-010 flex gap-5 p-3 items-center">
              <Image
                src={jobInfo.categoryIcon}
                width={32}
                height={32}
                className="rounded"
                alt=""
              />
              <Breadcrumbs links={jobInfo.categories} />
            </div>
          </Column>
        </Row>
      </Container>
    </section>
    <section className="bg-white">
      <Container>
        <Row className="justify-center">
          <Column className="lg:w-1/2">
            <h1 className="mt-5 mb-3">{jobInfo.title}</h1>

            <ul className="flex gap-3 mb-14">
              {jobInfo.tags.map((tag) => (
                <Button
                  key={tag}
                  size="xsmall"
                  color="darkblue"
                  variant="outline"
                >
                  <li>{tag}</li>
                </Button>
              ))}
            </ul>

            <h3 className="mb-3">Descrierea rolului</h3>

            <p className="mb-14">{jobInfo.description}</p>

            <h3 className="mb-3">Responsabilități</h3>

            <ul className="mb-14">
              {jobInfo.responsibilities.map((item) => (
                <li key={item} className="flex items-center gap-3 mb-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.66669 8H13.3334"
                      stroke="#9B9B9B"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.66669 3.33325L13.3334 7.99992L8.66669 12.6666"
                      stroke="#9B9B9B"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Row className="mb-14">
              <Column className="w-1/2">
                <h3 className="mb-3">Abilități profesionale</h3>
                <ul>
                  {jobInfo.abilitiesProfessional.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </Column>
              <Column className="w-1/2">
                <h3 className="mb-3">Abilități personale</h3>
                <ul>
                  {jobInfo.abilitiesPersonal.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </Column>
            </Row>

            <h3 className="mb-3">Salariu Lunar Brut</h3>

            <div className="mb-14">
              <SalaryGrowth
                low={jobInfo.salaryGrowth.low}
                medium={jobInfo.salaryGrowth.medium}
                high={jobInfo.salaryGrowth.high}
              />
            </div>

            <h3 className="mb-3">Progresul în carieră</h3>

            <div className="mb-14">
              <CareerGrowth jobs={jobInfo.careerGrowth} />
            </div>
          </Column>
        </Row>
      </Container>
    </section>
    <section className="py-14">
      <Container>
        <Row className="justify-center">
          <Column className="lg:w-1/2">
            <h2 className="mb-10">
              Urmează următorii pași ca să devii specialist în acest domeniu
            </h2>

            <div className="grid gap-5">
              <Panel
                title={
                  <>
                    <Circle size="small">1</Circle>
                    <span className="ml-3">Studiază</span>
                  </>
                }
              >
                <div className="grid gap-5">
                  {jobInfo.linksStudy.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener nofollow noreferrer"
                    >
                      <ExternalCard
                        icon={info.icon}
                        header={info.header}
                        description={info.description}
                      />
                    </a>
                  ))}
                </div>
              </Panel>

              <Panel
                title={
                  <>
                    <Circle size="small">2</Circle>
                    <span className="ml-3">Dezvoltă-ți abilitățile</span>
                  </>
                }
              >
                <div className="grid gap-5">
                  {jobInfo.linksDevelop.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener nofollow noreferrer"
                    >
                      <ExternalCard
                        icon={info.icon}
                        header={info.header}
                        description={info.description}
                      />
                    </a>
                  ))}
                </div>
              </Panel>

              <Panel
                title={
                  <>
                    <Circle size="small">3</Circle>
                    <span className="ml-3">Obține experiență practică</span>
                  </>
                }
              >
                <div className="grid gap-5">
                  {jobInfo.linksPractice.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener nofollow noreferrer"
                    >
                      <ExternalCard
                        icon={info.icon}
                        header={info.header}
                        description={info.description}
                      />
                    </a>
                  ))}
                </div>
              </Panel>

              <Panel
                title={
                  <>
                    <Circle size="small">4</Circle>
                    <span className="ml-3">Găsește un job</span>
                  </>
                }
              >
                <div className="grid gap-5">
                  {jobInfo.linksWork.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener nofollow noreferrer"
                    >
                      <ExternalCard
                        key={index}
                        icon={info.icon}
                        header={info.header}
                        description={info.description}
                      />
                    </a>
                  ))}
                </div>
              </Panel>
            </div>
          </Column>
        </Row>
      </Container>
    </section>
  </>
);

export default Profesie;

const jobInfo = {
  title: 'Designer Grafic',
  categoryIcon: 'https://picsum.photos/seed/1/32/32',
  categories: [
    {
      title: 'Toate Domeniile',
      url: '/toate-domeniile',
    },
    {
      title: 'Domeniu',
      url: '/toate-domeniile',
    },
    {
      title: 'Sub Domeniu',
      url: '/toate-domeniile',
    },
  ],
  tags: ['Lucrul cu calculatorul', 'Mediu Digital', 'Creativitate'],
  description:
    'Un Designer Grafic este persoana care implementează diverse web designuri folosind diverse metode și unelte digitale (vezi mai jos). La orice site te-ai uita, aproape tot ce vezi ține de partea vizuală: de la așezarea în pagină, la meniurile prin care navighezi, toate acestea au fost dezvoltate și desenate de către un designer.',
  responsibilities: [
    'Studierea brief-urilor de proiectare și determinarea cerințelor.',
    'Programarea proiectelor și definirea constrângerilor bugetare.',
    'Conceptualizarea imaginilor în funcție de cerințe.',
    'Pregătirea proiectelor brute și prezentarea ideilor.',
    'Elaborarea ilustrațiilor, siglelor și altor modele folosind software.',
    'Utilizarea culorilor și aspectelor corespunzătoare pentru fiecare grafic.',
    'Colaborarea cu redactori și directorul creativ pentru a produce designul final.',
    'Modificarea proiectelor după feedback.',
    'Asigurarea calității și respectarea normelor grafice din punct de vedere vizual și de marcă.',
  ],
  abilitiesProfessional: [
    'Teoria culorii',
    'Sisteme de grilă',
    'Aranjament',
    'Ilustrații',
    'Structură Web',
    'Interfață de Utilizator',
    'Photoshop',
  ],
  abilitiesPersonal: [
    'Comunicare',
    'Gestionarea timpului',
    'Lucru în echipă',
    'Creativitate',
    'Rezolvarea problemelor',
    'Independență',
  ],
  salaryGrowth: { low: 6000, medium: 10000, high: 12000 },
  careerGrowth: [
    { name: 'Junior Graphic Desinger', future: false },
    { name: 'Middle Graphic Designer', future: false },
    { name: 'Senior Designer', future: true },
    { name: 'Art Director', future: true },
    { name: 'Creative Director', future: true },
  ],
  linksStudy: [
    {
      href: '/',
      icon: 'https://picsum.photos/seed/1/100/100',
      header: 'Universitatea Tehnică a Moldovei',
      description: 'Chișinău',
    },
    {
      href: '/',
      icon: 'https://picsum.photos/seed/2/100/100',
      header: 'Universitate de Stat',
      description: 'Chișinău',
    },
  ],
  linksDevelop: [
    {
      href: '',
      icon: 'https://picsum.photos/seed/3/100/100',
      header: 'cursor.md',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis dignissim egestas morbi ac eget nulla tortor. ',
    },
    {
      href: '',
      icon: 'https://picsum.photos/seed/4/100/100',
      header: 'Udemy',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis dignissim egestas morbi ac eget nulla tortor. ',
    },
    {
      href: '',
      icon: 'https://picsum.photos/seed/5/100/100',
      header: 'Skillshare',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis dignissim egestas morbi ac eget nulla tortor. ',
    },
  ],
  linksPractice: [
    {
      href: '',
      icon: 'https://picsum.photos/seed/6/100/100',
      header: 'rabota.md',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis dignissim egestas morbi ac eget nulla tortor. ',
    },
    {
      href: '',
      icon: 'https://picsum.photos/seed/7/100/100',
      header: 'Endava',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis dignissim egestas morbi ac eget nulla tortor. ',
    },
  ],
  linksWork: [
    {
      href: '',
      icon: 'https://picsum.photos/seed/8/100/100',
      header: 'jobs.diez.md',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis dignissim egestas morbi ac eget nulla tortor. ',
    },
    {
      href: '',
      icon: 'https://picsum.photos/seed/9/100/100',
      header: 'rabota.md',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis dignissim egestas morbi ac eget nulla tortor. ',
    },
  ],
};
