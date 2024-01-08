import styles from '../styles/style-blog.module.css';
import PhotoPreview from '../components/photoPreview/PhotoPreview';

const Blog = () => {
  return (
    <main className={`${styles.main} _container`}>
        <div className={styles.main__info}>
            <div className={styles.main__title}>
                <h3>Фото блог</h3>
            </div>
            <div className={styles.main__text}><span>Раздел фото блога - это мое цифровое альбомное пространство, где вы можете насладиться разнообразием тематик и жанров</span></div>
        </div>


        <div className={styles.main__projects}>
            <PhotoPreview img = 'https://www.w3schools.com/html/workplace.jpg' />
            <PhotoPreview img = 'https://www.w3schools.com/html/workplace.jpg' />
            <PhotoPreview img = 'https://www.w3schools.com/html/workplace.jpg' />
            <PhotoPreview img = 'https://www.w3schools.com/html/workplace.jpg' />
            <PhotoPreview img = 'https://www.w3schools.com/html/workplace.jpg' />
            <PhotoPreview img = 'https://www.w3schools.com/html/workplace.jpg' />
            <PhotoPreview img = 'https://www.w3schools.com/html/workplace.jpg' />
            <PhotoPreview img = 'https://www.w3schools.com/html/workplace.jpg' />
            <PhotoPreview img = 'https://www.w3schools.com/html/workplace.jpg' />
            <PhotoPreview img = 'https://www.w3schools.com/html/workplace.jpg' />
        </div>
    </main>
  );
}

export default Blog;