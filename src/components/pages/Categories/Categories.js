
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoryRedux';
import styles from './Categories.module.scss'
import CategoryItem from './CategoryItem/CategoryItem';

const Categories = () => {
  

  
  const categories = useSelector(getAllCategories)
  console.log(categories);

    return (
        <div className={styles.wrapper}>
          <h1><b>Categories</b></h1>
          <ul className={styles.ul}>
          
          {categories.map(category =>  
              <CategoryItem 
                key={category.name}
                name={category.name}
                image={category.image}
              />  
          )}
          </ul>
        </div>
      );
}
 
export default Categories;