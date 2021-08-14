import Link from "next/link"

const Navheader = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                             <Link className="nav-link" href="/"><a>Home</a></Link>
                        </li>

                        <li className="nav-item">
                             <Link className="nav-link" href="/videos"><a>Videos</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navheader;