import Image from 'next/image';
import classes from './hero.module.scss';
const Hero = () => {
  return (
    <section className={classes.hero}>
      <h1>Hi, 我是泽清</h1>
      <p>Web前端开发,记录工作学习中的一些问题以及获得的新技能。</p>
    </section>
  );
};

export default Hero;
