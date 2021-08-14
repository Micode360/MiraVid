import Layouts from '../components/layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}

export default MyApp
