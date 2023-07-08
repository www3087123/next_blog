import styles from './index.module.scss';
import Image from 'next/image';
import classNames from 'classnames';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { LOCALDOMAIN } from '@/utils';
import axios from 'axios';
interface IProps {
  class: string;
}
const MainRight = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log('data', data);
  return (
    <div className={styles['main_right']}>
      <div className={classNames(styles['blogger-wrapper'], styles['card'])}>
        <Image alt='描述' src={'/me/tx.gif'} width={245} height={184} />
        <div className={styles['blogger']}>
          <div className={styles['name']}>泽清_blog</div>
          <div className={styles['slogan']}>前端界的小学生</div>
        </div>
      </div>
      {/* <div className={classNames(styles['classes-wrapper'], styles['card'])}>
        <span className='iconfont icon-suliaojimu'>热门标签</span>
        {
          //   data.map
        }
      </div> */}
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(`/api/hello`);
  console.log('res', res.data);
  return { props: { data: res.data } };
};
export default MainRight;
