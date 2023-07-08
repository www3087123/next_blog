import { IArticleProps } from '@/pages/articles';
import PostWrap from '../post';
import styles from './articles.module.scss';
const AllArticles = (props: IArticleProps) => {
  const { data } = props;
  return (
    <>
      <section className={styles.latest}>
        {/* <h2>全部文章</h2> */}
        <PostWrap data={data} />
      </section>
    </>
  );
};

export default AllArticles;
