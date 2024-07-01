import { Link } from "react-router-dom"
import styles from '../styles/Menu.module.css'
import homeSvg from '../assets/home.svg'
import listsSvg from '../assets/lists.svg'
import dueSvg from '../assets/due.svg'
import userSvg from '../assets/user.svg'
import mobilePng from '../assets/mobile.png'
import { useRef } from "react"

const Menu = () => {

    const myLinksRef = useRef('')

    const myLinks = () => {
        var x = myLinksRef.current
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

    return (
        <>
            <div className={styles.menu}>
                <Link to={'/home'}><img src={homeSvg} alt="" /> HOME</Link>
                <Link to={'/list'}><img src={listsSvg} alt="" /> LIST</Link>
                <Link onClick={() => alert('Coming Soon')}><img src={dueSvg} alt="" /> DUE</Link>
                <Link onClick={() => alert('Coming Soon')}><img src={userSvg} alt="" /> USER</Link>
            </div>
            <div className={styles.mobileMenu}>
                <div className={styles.topnav}>
                    <a href="/home" className={styles.active}>
                        <svg width="60px" height="60px" viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 48 48" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#3F51B5"> <polygon points="17.8,18.1 10.4,25.4 6.2,21.3 4,23.5 10.4,29.9 20,20.3"></polygon> <polygon points="17.8,5.1 10.4,12.4 6.2,8.3 4,10.5 10.4,16.9 20,7.3"></polygon> <polygon points="17.8,31.1 10.4,38.4 6.2,34.3 4,36.5 10.4,42.9 20,33.3"></polygon> </g> <g fill="#90CAF9"> <rect x="24" y="22" width="20" height="4"></rect> <rect x="24" y="9" width="20" height="4"></rect> <rect x="24" y="35" width="20" height="4"></rect> </g> </g></svg>
                    </a>
                    <div ref={myLinksRef} className={styles.myLinks}>
                        <a href="#news">HOME</a>
                        <a href="#contact">LIST</a>
                        <a href="#about">DUE</a>
                        <a href="#about">USER</a>
                    </div>
                    <a className={styles.icon} onClick={myLinks}>
                        <div className={styles.container}>
                            <div className={styles.bar1}></div>
                            <div className={styles.bar2}></div>
                            <div className={styles.bar3}></div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Menu