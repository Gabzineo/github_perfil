import styles from './Perfil.module.css'

const Perfil = ({nomeusuario}) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeusuario}.png`} alt="" />
            <h1 className={styles.name}>{nomeusuario}</h1>
        </header>
    )
}

export default Perfil;