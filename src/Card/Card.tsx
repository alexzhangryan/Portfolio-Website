import styles from './Card.module.css'

type CardProps = {
    title: string;
    text: string;
    src: string;
}

export const Card = (props: CardProps) => {
    return(
        <div className={styles.card}>
            <div className={styles.containerFlex}>
                <img className={styles.cardImage} src={`/images/${props.src}`} alt="java png"></img>
                <h2 className={styles.cardTitle}>{props.title}</h2>
            </div>
            <p className={styles.cardText}>{props.text}</p>
        </div>
    );
};
export default Card;