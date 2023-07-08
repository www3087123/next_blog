import styles from './postWarp.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { IArticleProps } from '@/pages/articles';
import React, { Fragment } from 'react';
import { NextPage } from 'next';
import dayjs from 'dayjs';

const PostWrap: NextPage<IArticleProps> = ({ data }) => {
  return (
    <div className={styles['grid']}>
      {data.map((item) => (
        <div key={item.id} className={styles['content']}>
          <Link href={`/articles/${item.id}`}>
            <div>
              <h2>{item.title}</h2>
              <div className={styles['content_flex']}>
                <span
                  className='iconfont icon-user'
                  style={{ marginRight: 10 }}
                >
                  泽清
                </span>

                <span className='iconfont icon-wendang'>
                  {dayjs(item.date).format('YYYY-MM-DD HH:mm:ss')}
                </span>
                <span className='iconfont icon-dingdan'>{item.classes}</span>
                <span className='iconfont icon-suliaojimu'>
                  {item.tags.map((item, index) => (
                    <Fragment key={index}>{item}</Fragment>
                  ))}
                </span>
              </div>
              <div className={styles['excerpt']}>{item.titleEng}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostWrap;
