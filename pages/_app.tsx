import './globals.css';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PrimaryLayout>
        <Component {...pageProps} />
      </PrimaryLayout>
    </>
  );
}

export default MyApp;
