import Image from "next/image"
import one from "../../public/1.png"
import two from "../../public/2.png"

export default function Main(){
    return (
<div className="w-full h-[268px] bg-white px-4 py-5">
    <h1 className="text-gray-400 text-5xl flex items-center justify-between ml-8">Main Focus/Mission Statement</h1>
    
    <div className="flex flex-col md:flex-row justify-evenly py-5 mt-7">
        <div className="flex h-[144px] w-full md:w-[413px] items-center">
            <Image src={one} alt="Description of pic 1" className="bg-gray-200" />
            <p className="text-gray-800 text-xl h-full w-[279px] ml-8 mt-5">
                Lorem ipsum dolor sit amet,<br />
                consectetur adipiscing elit. Sed efficitur,<br />
                lectus et facilisis placerat.
            </p>
        </div>

        <div className="flex h-[144px] w-full md:w-[570px] items-center mt-5 md:mt-0">
            <Image src={two} alt="Description of pic 2" className="bg-gray-200" />
            <p className="text-gray-800 text-xl w-[420px] h-full ml-8 mt-5">
                Lorem ipsum dolor sit amet,<br />
                consectetur adipiscing elit. Sed efficitur,<br />
                lectus et facilisis placerat, magna mauris porttitor tortor,<br />
                a auctor est felis ut nisl.
            </p>
        </div>
    </div>
</div>

    )
}