
import styles from './Sobre.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Avatar({
  nome,
  curso,
  descricao
}) {
  return (
    <>

      <div className={styles.perfil}>
        <figure>
          <img className={styles.img_perfil} src="./profile.svg" alt="Imagem de Home" />
        </figure>
        <div className={styles.info_perfil}>
          <div>
            <h1>{nome}</h1>
            <p>{curso}</p>
            <p>{descricao}</p>
          </div>
          <div className={styles.redes}>
            <figure>
              <a href='https://github.com/luhenrao' target='_blank'>
                <img className={styles.img_redes} src="./github.png" alt="Logo Github" />
              </a>
              <a href='https://www.linkedin.com/in/luizhenriqueneto/' target='_blank'>
                <img className={styles.img_redes} src="./linkedin.png" alt="Logo LinkedIn" />
              </a>
            </figure>
          </div>
        </div>
      </div>
    </>

  );
}


function Sobre() {
  return (
    <>
      <Header />
      <Avatar
        nome="Luiz Henrique"
        curso="Sistemas para Internet"
        descricao=""
      />
      <Footer />
    </>
  )
}

export default Sobre
