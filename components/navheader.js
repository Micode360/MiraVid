import Link from "next/link"
import Image from "next/image"
import style from '../styles/Home.module.scss'

const Navheader = () => {

    return (
        <nav className={style.nav}>
            <Image src="/logo.png" width={30} height={30} alt="logo"/>
            <div>
                <Link href="/video"><a>All video</a></Link>
            </div>
        </nav>
    );
}

export default Navheader;