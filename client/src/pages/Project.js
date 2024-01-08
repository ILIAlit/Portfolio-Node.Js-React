import styles from '../styles/style-progect.module.css';
import BtnGit from '../components/btnGit/BtnGit';

const Project = () => {
  return (
    <main className={`${styles.main} _container`}>
        <div className={styles.main__info}>
            <div className={styles.main__text}><span> Project description </span></div>
            {/* {project.gitLink && (
              <BtnGit src={project.gitLink}/>
            )} */}
        </div>
        <div className={styles.main__project}>
            {/* <img src={project.content} alt={project.title} /> */}

            {/* {project.videoSrc && (
              <div className={styles.main__video}>
                <video controls loop poster={project.cover}>
                    <source src={project.videoSrc} />
                </video>
              </div>
            )} */}
        </div>
    </main>
  );
}

export default Project;