import type { AppProps } from 'next/app';
import '@/styles/globlas.scss';
import '@/public/aliIcon/iconfont.css';
import Layout from '@/components/layout/layout';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
