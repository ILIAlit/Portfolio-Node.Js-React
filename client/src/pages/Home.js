import styles from '../styles/style-index.module.css';
import ProjectPreview from '../components/projectPreview/ProjectPreview';

const Home = () => {
  return (  
    <main className={`${styles.main} _container`}>
        <div className={styles.main__info}>
            <div className={styles.main__title}>
                <h3>Привет!</h3>
            </div>
            <div className={styles.main__text}><span>
                    Здесь вы найдете обзор моих работ и достижений
                    в качестве веб-дизайнера и front-end разработчика.</span>
            </div>
        </div>
        <div className={styles.main__projects}>
          <ProjectPreview cover = 'https://www.w3schools.com/html/workplace.jpg ' />
          <ProjectPreview cover = 'https://www.w3schools.com/html/workplace.jpg ' />
          <ProjectPreview cover = 'https://www.w3schools.com/html/workplace.jpg ' />
          <ProjectPreview cover = 'https://www.w3schools.com/html/workplace.jpg ' />
        </div>
    </main>
  );
}

export default Home;