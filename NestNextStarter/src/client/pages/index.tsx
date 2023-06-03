import { NextPage } from 'next';
import { Layout } from '@/components/layouts';

const Home: NextPage = () => {

  return (
    <Layout title='Mi titulo'>
      <h1>Hola Mundo</h1>
    </Layout>
  )
}

export default Home;