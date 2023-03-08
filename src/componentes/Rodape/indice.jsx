import React from 'react'
import facebookico from './facebook.svg'
import instagramico from './instagram.svg'
import twitterico from './twitter.svg'
import styles from './Rodape.module.scss'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape__icones}>
                <a
                    href="https://www.facebook.com/AluraCursosOnline/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={facebookico} alt="facebook" />
                </a>
                <a
                    href="https://twitter.com/aluraonline?lang=en"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={instagramico} alt="instagram" />
                </a>
                <a
                    href="https://www.instagram.com/aluraonline/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={twitterico} alt="facebook" />
                </a>
            </div>
            <div>
                <p>Desenvolvido por Italo Gadelha</p>
            </div>
        </footer>

    )
}
