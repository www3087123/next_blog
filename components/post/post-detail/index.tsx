import { useState } from 'react';
import dayjs from 'dayjs';
import { MdPreview, MdCatalog } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { IArticleProps } from '@/pages/articles/[id]';
import { NextPage } from 'next';
import styles from './index.module.scss';
import Link from 'next/link';
interface Iprops extends IArticleProps {
  crumbs: string;
}
const PostDetail: NextPage<Iprops> = ({ data, crumbs }) => {
  const [language] = useState('javascript typescript jsx nodejs python');
  // const [state] = useState({
  //   text: '# heading',
  //   scrollElement: document.documentElement,
  // });
  const content = ``;
  return (
    <div className={styles['main']}>
      <div className={styles['main_top_wrap']}>
        <div>
          <Link href={'/'}>home</Link>/<Link href={`/${crumbs}`}>{crumbs}</Link>
        </div>
        <div className={styles['postionA_right_wrap']}>
          <div>泽清</div>
          <div>{dayjs(data.date).format('YYYY-MM-DD HH:mm:ss')}</div>
        </div>
      </div>
      <MdPreview
        editorId='preview-only'
        // modelValue={data.content}
        modelValue={data.content}
        language={language}
        //   theme={}
        codeTheme='xxxxx'
      />
      {/* <MdCatalog
        editorId={'preview-only'}
        scrollElement={state.scrollElement}
        className={styles.flex}
      /> */}
    </div>
  );
};

export default PostDetail;
