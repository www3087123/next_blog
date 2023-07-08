import axios from 'axios';
import dynamic from 'next/dynamic';

import { LOCALDOMAIN } from '@/utils';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import styles from './index.module.scss';

const PostDetail = dynamic(() => import('@/components/post/post-detail'), {
  ssr: false,
});
// const PostDetail = dynamic(() => import('@/components/post/post-detail'), {
//   ssr: false,
// });
const ArticleProjectId = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={styles['marginTop']}>
      我是id-----
      <PostDetail data={data} />
    </div>
  );
};
export interface IArticleProps {
  data: {
    classes: string;
    content: string;
    date: Date;
    title: string;
    titleEng: string;
    tags: [string];
    id: string;
  };
}
export const getStaticProps: GetStaticProps<IArticleProps> = async (
  content
) => {
  const res = await axios.get(
    `${LOCALDOMAIN}/api/v1/articles/${content.params?.id}`
  );
  const newData = res.data.data;
  return {
    props: { data: newData },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get(`${LOCALDOMAIN}/api/v1/articles`);
  const newData = res.data.data;
  const paths = newData.map((post: { id: string }) => ({
    params: { id: post.id },
  }));
  return { paths: paths, fallback: 'blocking' };
};
export default ArticleProjectId;
