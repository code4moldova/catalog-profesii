import { HomeHero } from '../sections/home-hero/home-hero.section';
import { HomeSectionOne } from '../sections/home-section-one/home-section-one.section';
import { HomeSectionTwo } from '../sections/home-section-two/home-section-two.section';

export function Index() {
  return (
    <>
      <HomeHero />
      <HomeSectionOne />
      <HomeSectionTwo />
    </>
  );
}

export default Index;
