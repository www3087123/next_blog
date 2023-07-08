// import { Timeline } from 'antd';
import styles from './index.module.scss';
const Me = () => {
  return (
    <div className='marginTop'>
      <div className={styles['main']}>
        <h2>关于我</h2>
        <div>
          你好啊，我叫泽清 |
          <hr />
          <ul>
            <li>热爱前端开发</li>
            <li>这是我自己写的个人博客</li>
            <li>前端是nextjs + ts + antd </li>
            <li>后端是node + mongoDB</li>
            <li>还有很多不足的地方在改进，请多多指教</li>
          </ul>
          联系方式
          <hr />
          <ul>
            <li>QQ: 1010098225</li>
            <li>VX: hxl0630721</li>
          </ul>
        </div>
        <br />
        {/* <Timeline
          items={[
            {
              children: '期待已久自己的前端博客，终于上线了！',
            },
          ]}
        /> */}
      </div>
    </div>
  );
};

export default Me;
