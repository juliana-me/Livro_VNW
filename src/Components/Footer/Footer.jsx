import s from './Footer.module.scss';
import facebook from '../../assets/facebook.png';  
import Instagram from '../../assets/Instagram.png';
import Twitter from '../../assets/Twitter.png';
import Youtube from '../../assets/Youtube.png';
import Linkedin from '../../assets/Linkedin.png';

export default function Footer() {
  return (
    <footer>
      <section className={s.contatosFooter}>
        <p>4002-8922</p>
        <nav>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Logo do Facebook" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="Logo do Twitter" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Youtube} alt="Logo do YouTube" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="Logo do LinkedIn" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Logo do Instagram" />
          </a>
        </nav>
      </section>
      <section className={s.copyright}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
      </section>
    </footer>
  );
}
