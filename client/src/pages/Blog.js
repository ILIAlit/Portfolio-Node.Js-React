import styles from '../styles/style-blog.module.css';
import { useContext } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import PhotoPreview from '../components/photoPreview/PhotoPreview';

const Blog = observer(() => {
  const {photo: photoStore} = useContext(Context);
  const {photoes} = photoStore;
  
  return (
    <main className={`${styles.main} _container`}>
        <div className={styles.main__info}>
            <div className={styles.main__title}>
                <h3>Фото блог</h3>
            </div>
            <div className={styles.main__text}><span>Раздел фото блога - это мое цифровое альбомное пространство, где вы можете насладиться разнообразием тематик и жанров</span></div>
        </div>
        <div className={styles.main__projects}>
          {photoes.map(({id, img, title}) => <PhotoPreview key={id} img={img} title={title} />)}
        </div>
    </main>
  );
});

export default Blog;