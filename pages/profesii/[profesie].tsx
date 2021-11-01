import { Container } from '../../components/grid';
import { GetServerSideProps, NextPage } from 'next';

type Props = {
  slug?: string;
};

type Params = {
  profesie: string;
};

const Profesie: NextPage<Props> = ({ slug }) => (
  <Container>
    <h1>{slug}</h1>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolores eos
    eveniet explicabo facilis incidunt inventore ipsa, ipsam, laboriosam modi
    molestias mollitia numquam provident recusandae saepe vel velit vero
    voluptatibus.
  </Container>
);

export default Profesie;
export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => ({
  props: { slug: context.params?.profesie },
});
