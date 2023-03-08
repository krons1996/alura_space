import styles from './PaginaInicial.module.scss';
import Banner from './Banner';

import Menu from "componentes/Menu";
import Cabecalho from "componentes/Cabecalho";
import Rodape from "componentes/Rodape/indice";
import Galeria from "componentes/Galeria";
import Populares from "componentes/Populares";


export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <div className={styles.principal}>
                    <Menu />
                    <Banner />
                </div>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />
        </>

    )
}