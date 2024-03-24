import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './Home.module.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <div className={styles.apresentacao}>
          <p>
            <span>Trabalho digno </span> <br />
            base para um futuro justo e próspero
          </p>
          <Link to="/ods">
            <button className={styles.btn}>
              Saiba mais
            </button>
          </Link>
        </div>
        <figure>
          <img className={styles.img_home} src="./mar.svg" alt="Imagem de Home" />
        </figure>
      </section>
      <Footer />

    </>
  );
}

export default Home
