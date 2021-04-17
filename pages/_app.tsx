import 'src/styles/main.scss';
import 'src/styles/fonts.scss';
import 'src/styles/chrome-bug.css';
import 'nprogress/nprogress.css';

import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import { Router } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

NProgress.configure({
  showSpinner: false,
});
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done(true);
});
Router.events.on('routeChangeError', () => {
  NProgress.done(true);
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Empty: React.FC = ({ children }) => <>{children}</>;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as any).Layout || Empty;

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default MyApp;
