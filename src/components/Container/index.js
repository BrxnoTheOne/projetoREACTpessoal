import styles from "./container.module.css";

function Container({children}){ // componente com parametro
    return (

        <section className={styles.container}>
            {children}
        </section>
    )


}

export default Container;