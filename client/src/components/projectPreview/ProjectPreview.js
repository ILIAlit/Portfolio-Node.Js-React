import styles from '../../styles/style-index.module.css';
import { useNavigate } from 'react-router-dom';
import { PROJECT_ROUTE } from '../../utils/consts';

const ProjectPreview = ({cover, title, id}) => {
  const navigate = useNavigate();
  console.log()
  
  return (
    <div onClick={() => navigate(`${PROJECT_ROUTE}/${id}`)} className={styles.main__project}>
      <div className={styles.main__hovering}>
        <span>{title}</span>
      </div>
      <img src={cover} alt={title} />
    </div>
  );
}

export default ProjectPreview;

