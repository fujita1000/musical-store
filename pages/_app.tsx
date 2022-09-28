import './globals.css';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  return (
    <>
      <PrimaryLayout>
        <Component {...pageProps} />
      </PrimaryLayout>
    </>
  );
}

export default MyApp;
