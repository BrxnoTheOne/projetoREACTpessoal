import styles from "./Banner.module.css";

function Banner({ image }) {

    return (

        <div 
            className={styles.banner}
            style={{ backgroundImage: `url('./banner-home.png-${image}.png')`}}
        ></div>
    );
}

export default Banner;