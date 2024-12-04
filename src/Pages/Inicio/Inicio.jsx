import s from './inicio.module.scss';
import Comunidade from '../../assets/Comunidade.png';
import Lendo from '../../assets/Lendo.png';
import Balanca from '../../assets/Balanca.png';
import wallpaper from '../../assets/wallpaper.png'



export default function Inicio() {
  return (
    <main>
      <section className={s.primeiraSessaoInicio}>
      <img src={wallpaper} alt= "Mãos segurando alguns livros" />
      <h2>Venha fazer parte da maior rede de doação</h2>

      </section>

      <section>
        <section className={s.porqueDoar}>
          <h2>Porque devo doar?</h2>
          <section className={s.containerCards}>
            <section>
              <img src={Comunidade} alt="Imagem ilustrando circulo social de 4 pessoas" />
              
              <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
            </section>

            <section>
              <img src={Lendo} alt="Imagem ilustrando pessoa lendo" />
              <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
            </section>

            <section>
              <img src={Lendo} alt="Imagem ilustrando pessoa lendo" />
              <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
            </section>

            <section>
              <img
                src={Balanca}
                alt="Imagem ilustrando balanca que representa igualdade" />
              <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
