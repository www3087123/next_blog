import Head from 'next/head';
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Hero, FeaturedPosts } from '@/components/home_page';
import { LOCALDOMAIN } from '@/utils';
import { IArticleProps } from './articles';

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>泽清 blog</title>
        <meta name='description' content='好记性不如烂笔头' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/max.jpg' />
      </Head>
      {/* <style global jsx>{`
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
      `}</style> */}
      <Hero />
      <FeaturedPosts data={data} />
    </>
  );
};
export const getStaticProps: GetStaticProps<IArticleProps> = async () => {
  const res = await axios.get(`${LOCALDOMAIN}/api/v1/articles`);
  const newData = res.data.data;
  return { props: { data: newData } };
};

export default Home;
