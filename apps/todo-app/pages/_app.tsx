import { AppProps } from 'next/app';
import './styles.css';
import { Provider } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { changeLanguage, getInitialLanguage, initializeI18n } from '../i18n/language';
import { store } from '../state/store';


initializeI18n();

const AppProvider = () => {
    const { i18n } = useTranslation();
    useEffect(() => {
      changeLanguage(getInitialLanguage());
    }, [i18n]);
    return null;
};
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppProvider />
      <Component {...pageProps} />
    </Provider>
  );
}

export default CustomApp;
