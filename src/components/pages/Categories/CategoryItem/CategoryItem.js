
import { Link } from "react-router-dom";
import styles from "./CategoryItem.module.scss";


const CategoryItem = (props) => {
    
    console.log(props);
    
    return ( 
        <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
                <img  className={styles.img} src={props.image } alt={props.name} />
                <Link className={styles.link} key={props.key} to={"/categories/" + props.name} >
                    <h3>{props.name}</h3> 
                </Link>
            </div>
             
        </div>
     );
}
 
export default CategoryItem;