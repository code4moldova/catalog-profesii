import { Column, Container, Row } from '../components/grid';
import { GetStaticProps } from 'next';
import { MainProps } from './_app';
import { useState } from 'react';
import clsx from 'clsx';
import { SideCategory } from '../components/side-category/side-category.component';

export default function AllJobs() {
  const [selected, setSelected] = useState(2);
  return (
    <Container>
      <Row className="justify-center">
        <Column className="w-1/4">
          <div>
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className={clsx(
                  'mb-5',
                  index === selected ? '-mr-10' : '-mr-5'
                )}
              >
                <SideCategory
                  title={'Category name'}
                  icon="/100/100"
                  color={'border-rainbow-010'}
                  href={'#'}
                />
              </div>
            ))}
          </div>
        </Column>
        <Column className="w-3/4">
          <div className="bg-white p-10">
            {Array.from({ length: 10 }).map((_, index) => (
              <p key={index} className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi, eligendi, nisi? Aut dolorem inventore laborum magnam
                temporibus! Exercitationem expedita explicabo reprehenderit
                rerum totam. Cum, est, recusandae. Accusantium laborum officiis
                placeat quia reprehenderit! A aliquid culpa eaque est ex
                expedita ipsum, iusto libero modi, nihil nobis perferendis porro
                quia quibusdam quidem sed, soluta veniam voluptatum. Amet
                distinctio maxime neque nostrum repudiandae! Magnam praesentium
                quaerat quam, quisquam quo quos rerum saepe sed. Deserunt
                expedita fugiat harum in praesentium. Accusamus aliquid aperiam
                consectetur consequatur debitis dolorum eligendi eveniet,
                facilis fuga id iste labore maxime minus, nesciunt, nisi quas
                rem repellat repudiandae sed velit?
              </p>
            ))}
          </div>
        </Column>
      </Row>
    </Container>
  );
}

export const getStaticProps: GetStaticProps<MainProps> = async () => ({
  props: {
    mainClass: 'bg-gray-100 shadow-inner py-12',
  },
});
