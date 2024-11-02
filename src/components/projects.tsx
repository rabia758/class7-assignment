import Image from "next/image";
import one from "../../public/one.png"
import p2 from "../../public/p2.png"
import p3 from "../../public/p3.png"
import p4 from "../../public/p4.png"
import p5 from "../../public/p5.png"

export default function Projects(){
    return(
        <>
<div className="px-4 py-5 mx-5 mt-5">
    <h1 className="text-4xl text-gray-400">Our Projects</h1>
    
    <div className="flex flex-wrap gap-4 justify-center mt-5">
        <Image src={one} alt="Project 1" className="max-w-xs" />
        <Image src={p2} alt="Project 2" className="max-w-xs" />
    </div>
    
    <div className="flex flex-wrap gap-4 justify-center mt-4">   
        <Image src={p3} alt="Project 3" className="max-w-xs" />
        <Image src={p4} alt="Project 4" className="max-w-xs" />
        <Image src={p5} alt="Project 5" className="max-w-xs" />
    </div>
    
    <button className="bg-gray-800 text-white flex justify-center items-center px-4 py-2 mt-5 mx-auto">
        All Projects
    </button>
</div>
        
        </>
    )
}

