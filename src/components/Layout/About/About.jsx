import classes from './About.module.css';

const About = () => {
  return (
    <p className={classes.about}>
      &copy; 2021 ~{' '}
      <a
        href="https://github.com/BrahyanPro"
        target="blank"
        className={classes.link}
      >
        {' '}
        BrahyanPro
      </a>{' '}
      ~ Hecho con mucho <span>♥</span>
    </p>
  );
};

export default About;
