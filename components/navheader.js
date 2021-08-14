import Link from "next/link"

const Navheader = () => {

    return (
        <div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/videos"><a>Videos</a></Link>
            <Link href="/auth/signIn"><a>Sign in</a></Link>
        </div>
    );
}
 
export default Navheader;