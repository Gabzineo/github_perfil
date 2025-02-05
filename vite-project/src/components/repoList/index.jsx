import { useEffect, useState } from "react";
import styles from "./Reposlist.module.css";

const Reposlist = ({ nomeusuario }) => {
    const [repos, setRepos] = useState([]);
    const [montarform, setMontarform] = useState(true);

    useEffect(() => {
        setMontarform(true);
        fetch(`https://api.github.com/users/${nomeusuario}/repos`)
            .then((res) => res.json())
            .then((resJson) => {
                setTimeout(() => {
                    setMontarform(false);
                    setRepos(resJson);
                }, 3000);
            });
    }, [nomeusuario]);

    return (
        <body>
            <div className="container">
            {montarform ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.ItemName}>
                                <b>Name :</b> {name} {styles.name}
                            </div>
                            <div className={styles.ItemLanguage}>
                                <b>Linguagem :</b> {language}
                            </div>
                            <a
                                className={styles.ItemLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={html_url}
                            >
                                Visite No Github
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        </body>
    );
};

export default Reposlist;
