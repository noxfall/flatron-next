import Head from 'next/head';

interface Props {
  title: string
};

const Home: React.FC<Props> = ({ title = "Flatron" }): JSX.Element => {
  return (
    <main className="app">
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>
      <section>
        <h1>Home</h1>
      </section>
    </main>
  );
};

export default Home;
