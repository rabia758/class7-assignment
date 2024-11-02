import Image from "next/image"
import logo from "../../public/logo.png"
import vector from "../../public/Vector.png"


export default function Header(){
    return(
        <header className="bg-white bg-opacity-90 py-3">
    <div className="flex flex-col sm:flex-row items-center justify-between py-5 h-auto px-4">
        <div className="flex items-center mb-4 sm:mb-0">
            <Image src={logo} alt="Company Logo" className="mr-2" />
            <Image src={vector} alt="Vector Graphic" />
        </div>
        <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-lg text-gray-800 cursor-pointer">
            <li><a href="#main">Main</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certification">Certification</a></li>
            <li><a href="#contact">Contact Us</a></li>
        </ul>
    </div>
</header>

    )
}