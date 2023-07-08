import { useState } from 'react';
import { MdPreview, MdCatalog } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { IArticleProps } from '@/pages/articles/[id]';
import { NextPage } from 'next';
import styles from './index.module.scss';
const PostDetail: NextPage<IArticleProps> = ({ data }) => {
  const [language] = useState('javascript typescript jsx nodejs python');
  const [state] = useState({
    text: '# heading',
    scrollElement: document.documentElement,
  });
  const content = ``;
  return (
    <>
      <MdPreview
        editorId='preview-only'
        // modelValue={data.content}
        modelValue={data.content}
        language={language}
        //   theme={}
        codeTheme='xxxxx'
      />
      <MdCatalog
        editorId={'preview-only'}
        scrollElement={state.scrollElement}
        className={styles.flex}
      />
    </>
  );
};

export default PostDetail;
