import Image from "next/image"
import about1 from "../../public/about1.png"
import about3 from "../../public/about3.png"
import frame from "../../public/Frame 11.png";

export default function About(){
    return(
<section className="bg-white h-auto flex flex-col md:flex-row items-center justify-center py-5">
    <div className="flex justify-evenly items-center px-4">
        <Image src={about1} alt="About Illustration 1" height={100} width={250} />
        <Image src={about3} alt="About Illustration 2" height={250} width={250} className="mt-4 ml-5" />
    </div>   

    <div className="flex flex-col items-start justify-between px-4 mt-5 md:mt-0">    
        <h1 className="text-3xl text-gray-400">About</h1>
        <p className="text-gray-800 mt-5">
            Lorem Ipsum is simply dummy text of the printing and 
            <br /> typesetting industry. Lorem Ipsum has been the 
            <br /> industry's standard dummy text ever since the 1500s, 
            <br /> when an unknown printer took a galley of type and 
            <br /> scrambled it to make a type specimen book. It has 
            <br /> survived not only five centuries, but also the leap into 
            <br /> electronic typesetting, remaining essentially unchanged.
        </p>
        <button className="mt-5 bg-white p-3 border-2 border-black text-gray-800 hover:bg-gray-100 transition duration-200">
            Read More
        </button>
    </div>
</section>

    )
}
