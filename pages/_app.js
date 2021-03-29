import 'normalize.css';
import '../styles/globals.scss'
import {useEffect, useState} from 'react';
import {API_URL} from '../constants';

function MyApp({ Component, pageProps }) {
  const [homes, setHomes] = useState();

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setHomes(data));
  }, []);

  return <Component {...pageProps} homes={homes} />
}

export default MyApp
