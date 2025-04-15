import logo from '../assets/logo.svg'
import styles from "./Header.module.less"



function Header() {
return(
    <>
    <header>
        <div className={styles.mainDiv}>
            <img className= {styles.logoTag}src={logo} alt="this is logo"/>
            <div className={styles.headName}>Beyond Beauty Studio</div>
            <div className={styles.search}>
                <div><input  className={styles.in} type="search" placeholder="Search..." /></div>
                <span>🔍</span>
            </div>
            {/* <div className= {styles.info}>
                <div className={styles.infoFirst}>
                    <div>Contact No: +919109811994 </div>
                    <div>location: https://googleMaps.com</div>
                </div>
                <div className={styles.infoSecond}>
                    Address: Gurgoan, Delhi
                </div>
            </div> */}
        </div>
    </header>
    </>
)

}

export default Header