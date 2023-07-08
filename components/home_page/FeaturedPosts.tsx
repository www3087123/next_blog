import styles from './featuredPosts.module.scss';
import PostWrap from '@/components/post';
import { IArticleProps } from '@/pages/articles';
import MainRight from '../main-right';
const FeaturedPosts = ({ data }: IArticleProps) => {
  // console.log('data', data);
  return (
    <section className={styles.latest}>
      {/* <h2 className={styles.title}>最新文章</h2> */}
      <PostWrap data={data} />
      <MainRight />
    </section>
  );
};

export default FeaturedPosts;
