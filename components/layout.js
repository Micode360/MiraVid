import Footer from "./footer"
import Navheader from "./navheader"

const Layouts = ({ children }) => {
    return ( 
        <div>
            <Navheader/>
                { children }
            <Footer/>
        </div>
     );
}
 
export default Layouts;