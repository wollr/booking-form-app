import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>
          Создано{' '}
          <a
            className={styles.link}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/wollr"
          >
            @wollr
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
