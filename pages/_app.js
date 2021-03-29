import 'normalize.css';
import '../styles/globals.scss'
import {useEffect, useState} from 'react';
import {API_URL} from '../constants';

function MyApp({ Component, pageProps }) {
  const [homes, setHomes] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setHomes(data))
      .catch(() => setError(true));
  }, []);

  return <Component {...pageProps} homes={homes} error={error} />
}

export default MyApp
