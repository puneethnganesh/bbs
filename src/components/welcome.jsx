import styles from "./welcome.module.less"
import logo from '../assets/logo.svg'

function Welcome(){

    return(
        <>
        <div className={styles.outer}>
         <div className={styles.mainWelcome}>
               <div className={styles.services}>
               <div className={styles.borderTriangle}>
                  Online Booking
               </div>
               <div className={styles.borderTriangle}>
                  Products Shopping
               </div>
               <div className={styles.borderTriangle}>
                  MemberShip Plans
               </div>
               <div className={styles.borderTriangle}>
                  Loyalty Rewards
               </div>
               <div className={styles.borderTriangle}>
                  More Exciting Offers
               </div>
               </div>
               <div className={styles.Coming}>
               <div className={styles.p1}>
                  Services Coming Online Soon...
               </div>
               <div className={styles.p2}>
                  Available Shortly on PlayStore, AppStore and Web
               </div>
               </div>
         </div>
         <div className={styles.coverImage}>
            <img src={logo} alt="coverimage"/>
         </div>
        </div>
        </>
    )
}


export default Welcome;