import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import "../styles/globals.css";
import { Provider } from 'react-redux';
import store from '../components/Store';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
};

export default MyApp;
