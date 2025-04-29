import styles from './Card.module.css';

function Card(){

    return (

        <section className={styles.card}>
        <a 
            href="https://youtu.be/M81TYDRCW2c?si=6dhVRQNHl1Ne0hIw"
            rel="noopener noreferrer" // evitar que o site malicioso tenha acesso ao site de origem
            target="_blank"> // abrir em uma nova aba
            <img src = "https://img.youtube.com/vi/6dhVRQNHl1Ne0hIw/maxresdefault.jpg" alt="Capa do video" />
"
        </a>
        </section>
    );
}

export default Card;