import Link from 'next/link'
import Image from 'next/image'




const Navbar = () => {


    return(
        <nav>
            <div className="logo">
                <Image src='/2.png' width={60} height={60} />
            </div>
            <Link href='/' ><span>Home</span></Link>
            <Link href='/about' ><span>About</span></Link>
            <Link href='/ninjas' ><span>Ninja Listing</span></Link>
        </nav>



    )
}
export default Navbar;