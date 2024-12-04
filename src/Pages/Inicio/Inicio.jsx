import s from './inicio.module.scss';
import Comunidade from '../../Assets/Comunidade.png';
import Lendo from '../../Assets/Lendo.png';
import Balanca from '../../Assets/Balanca.png';



export default function Inicio() {
  return (
    <main>
      <section className={s.primeiraSessaoInicio}>
        <h2>Venha fazer parte da maior rede de doação</h2>
      </section>
      <section>
        <section className={s.porqueDoar}>
          <h2>Porque devo doar?</h2>
          <section className={s.containerCards}>
            <section>
              <img
                src={Comunidade}
                alt="Imagem ilustrando circulo social de 4 pessoas"
              />
              <p>Imagem ilustrando circulo social de 4 pessoas</p>
            </section>
            <section>
              <img src={Lendo} alt="Imagem ilustrando pessoa lendo" />
              <p>Imagem ilustrando circulo social de 4 pessoas</p>
            </section>
            <section>
              <img src={Lendo} alt="Imagem ilustrando pessoa lendo" />
              <p>Imagem ilustrando pessoa lendo</p>
            </section>
            <section>
              <img
                src={Balanca}
                alt="Imagem ilustrando balanca que representa igualdade"
              />
              <p>Imagem ilustrando balanca que representa igualdade</p>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
