
import styles from  './NavBar.module.scss'
import MobileNavigation from './MobileNavigation/MobileNavigation';
import DeskopNavigation from './DeskopNavigation/DeskopNavigation';
import {GiHamburgerMenu} from 'react-icons/gi';
import {GiPalmTree} from 'react-icons/gi';
import { useState } from "react";


const NavBar = () => {
  
  const [open,setOpen] = useState(false)
  
    return (
        <>
          <div className={styles.navbar}>
            <h3 className={styles.title}>
              <a href="/">
                TravelBook 
                <GiPalmTree className={styles.logo} size="36px" color="white" />
              </a>
            </h3>
            <div className={styles.MobileNavigation}>
                <MobileNavigation open={open}/>
              </div>
              <div className={styles.DeskopNavigation}>
                <DeskopNavigation />
              </div>
              <GiHamburgerMenu className={styles.hamburger} size="40px" color="white" onClick={()=> setOpen(!open)}/> 
          </div>
  
        </>
    )
}

export default NavBar;