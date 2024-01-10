import { observer } from 'mobx-react-lite';
import styles from '../styles/style-contact.module.css';
import { useContext } from 'react';
import { Context } from '../index';


const Contact = observer(() => {
  const{developer: developerStore} = useContext(Context);
  const{developer} = developerStore;
  const {cover, email, telegramLink, githubLink} = developer;

  return (
    <main className={`${styles.main} _container`}>
            <div className={styles.main__body}>
                <div className={styles.main__cover}>
                    <img src={cover} alt="avatar"/>
                </div>
                <div className={styles.main__info}>
                    <div className={styles.main__title}>Контакты</div>
                    <div className={styles.main_line}></div>
                    <div className={styles.main__items}>
                        <ul className={styles.main__items}>
                          <li className={`${styles.main__item} ${styles.main__item1}`}><a href={`mailto: + ${email}`}>{email}</a></li>
                          <li className={`${styles.main__item} ${styles.main__item2}`}><a href={telegramLink}>{telegramLink}</a></li>
                          <li className={`${styles.main__item} ${styles.main__item3}`}><a href={githubLink}>{githubLink}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
  );
});

export default Contact;