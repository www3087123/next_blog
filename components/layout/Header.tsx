import Link from 'next/link';
import classes from './header.module.scss';
import Image from 'next/image';
import classNames from 'classnames';
import { useRouter } from 'next/router';

const items = [
  { key: '/', title: '🏠 首页' },
  { key: '/articles', title: '💻 前端文章' },
  // { key: '/articlesSever', title: '📦 后端文章' },
  // { key: '/friends', title: '友联' },
  { key: '/me', title: '关于' },
];

function MainNavigation() {
  const router = useRouter();
  return (
    <header className={classes.header}>
      <Link href={'/'} className={classes.flexA}>
        <Image src={'/max.jpg'} width={300} height={300} alt='描述' />
        <span>泽清_blog</span>
      </Link>
      <nav>
        <ul>
          {items.map((item) => (
            <li key={item.key}>
              <Link
                href={item.key}
                className={classNames({ active: router.pathname == item.key })}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
