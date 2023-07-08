import axios from 'axios';
import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { LOCALDOMAIN } from '@/utils';
import AllArticles from '@/components/article';
import styles from './index.module.scss';

export interface IArticleProps {
  data: {
    classes: string;
    content: string;
    date: Date;
    title: string;
    titleEng: string;
    tags: [string];
    id: string;
  }[];
}
const ArticlesPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>文章</title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts!'
        />
      </Head>
      <div className={styles['marginTop']}></div>
      <div className={styles['main']}>
        <AllArticles data={data} />;
      </div>
    </>
  );
};
export const getStaticProps: GetStaticProps<IArticleProps> = async () => {
  const res = await axios.get(`${LOCALDOMAIN}/api/v1/articles`);
  const newData = res.data.data;
  return { props: { data: newData } };
};
export default ArticlesPage;
