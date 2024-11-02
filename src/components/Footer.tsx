import Image from "next/image";
import Link from "next/link";
import footer from "../../public/footer.png";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";


export default function Footer (){
    return(
<div className="flex flex-col md:flex-row justify-evenly items-center px-4 py-5 mt-5 mb-5 bg-gray-800 text-white">
    <div>
        <Image src={footer} alt="Company Logo" className="h-12 w-auto" />
    </div>
    
    <div className="mt-5 text-center md:text-left">
        <p className="font-semibold">Information</p>
        <ul className="mt-2 mb-4 space-y-1">
            <li><a href="#main" className="hover:underline">Main</a></li>
            <li><a href="#gallery" className="hover:underline">Gallery</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#certification" className="hover:underline">Certification</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
        </ul>
    </div>
    
    <div className="mt-5 text-center md:text-left">
        <p className="font-semibold">Contacts</p>
        <p className="flex items-center justify-center md:justify-start mt-2">
            <IoLocationOutline className="mr-2" />
            1234 Sample Street, Austin, Texas 78704
        </p>
        <p className="flex items-center justify-center md:justify-start mt-2">
            <MdOutlineLocalPhone className="mr-2" />
            512.333.2222
        </p>
        <p className="flex items-center justify-center md:justify-start mt-2">
            <IoMailOpenOutline className="mr-2" />
            sampleemail@gmail.com
        </p>
    </div>
    
    <div className="mt-5 text-center md:text-left">
        <p className="font-semibold">Social Media</p>
        <div className="flex justify-center md:justify-start mt-5 space-x-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-gray-300" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-gray-300" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-gray-300" />
            </Link>
            <Link href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                <FaPinterestP className="hover:text-gray-300" />
            </Link>
        </div>
    </div>
</div>

    )
}