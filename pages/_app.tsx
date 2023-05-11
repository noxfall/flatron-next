import '../styles/global.css';

interface Props {
  Component: JSX.Element | any;
  pageProps: Props;
};

const App: React.FC<Props> = ({ Component, pageProps }): JSX.Element => {
  return <Component {...pageProps} />
};

export default App;

