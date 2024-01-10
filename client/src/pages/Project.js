import styles from '../styles/style-progect.module.css';
import { useContext } from 'react';
import { Context } from '../index';
import BtnGit from '../components/btnGit/BtnGit';

const Project = () => {
  //достать id из строки запроса
  const {project: projectStore} = useContext(Context);
  const {postContents: projects, posts} = projectStore;
  const project = projects[0];
  const {cover, title} = posts;
  const {contentImg, contentVideo, description, githubLink} = project;

  return (
    <main className={`${styles.main} _container`}>
        <div className={styles.main__info}>
          <div className={styles.main__text}><span>{description}</span></div>
          {githubLink && (
            <BtnGit src={githubLink}/>
          )}
        </div>
        <div className={styles.main__project}>
          <img src={contentImg} alt={title} />
          {contentVideo && (
            <div className={styles.main__video}>
              <video controls loop poster={cover}>
                <source src={contentVideo} />
              </video>
            </div>
          )}
        </div>
    </main>
  );
}

export default Project;