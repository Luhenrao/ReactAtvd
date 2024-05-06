import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={styles.header}>
        <span>Cidade Segura</span>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/desafio">Desafio</Link>
          <Link to="/solucao">Solução</Link>
          <Link to="/sobrenos">Sobre Nós</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
