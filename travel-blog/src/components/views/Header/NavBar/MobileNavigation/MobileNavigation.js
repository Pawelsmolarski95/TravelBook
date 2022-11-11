import NavLinks from "../NavLinks/NavLinks";
import styles from './MobileNavigation.module.scss';



const MobileNavigation = (props) => {
    
    
    
    return (
        <div className={styles.wrapper}>
             
             {props.open && <NavLinks />}
        </div>
         
    )
}

export default MobileNavigation;