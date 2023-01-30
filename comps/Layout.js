
import Footer from "@/comps/Footer";
import Navbar from "@/comps/Navbar";
const Layout = ({children}) => {
    return(
    
        <div className="content">
            <Navbar/>
            { children }
            <Footer/>
        </div>
        )
}
export default Layout;