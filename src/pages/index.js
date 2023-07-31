
import Head from 'next/head';
import RootLayout from '../components/Layouts/RootLayout';

const HomePage = () => {
  return (
   <div>
    <Head>
      <title>
          Next Home Page
          <meta name="home page" description="this page is created by meta" />
      </title>
    </Head>
    <h1>This is home page</h1>
   </div>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>{page}</RootLayout>
  )
}