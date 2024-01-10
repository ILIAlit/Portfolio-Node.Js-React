import styles from "../../styles/style-blog.module.css";

const PhotoPreview = ({img, title}) => {
  return (
    <div className={styles.main__project}>
      <div className={styles.main__hovering}></div>
      <img src={img} alt={title}/>
    </div>
  );
}

export default PhotoPreview;