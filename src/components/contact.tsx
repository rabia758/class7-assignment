import Image from "next/image";
import contact from "../../public/contact.png"

export default function Contact(){
    return(
<div className="px-5">
    <h1 className="py-5 text-gray-400 text-4xl">Contact Us</h1>

    <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="flex-col mt-5 w-full md:w-1/2">
            <input 
                type="text" 
                placeholder="Name" 
                className="text-gray-600 border-2 bg-gray-200 w-full p-2 mb-2" 
            />
            <input 
                type="tel" 
                placeholder="Phone Number" 
                className="text-gray-600 border-2 bg-gray-200 w-full p-2 mb-2" 
            />
            <input 
                type="email" 
                placeholder="Email" 
                className="text-gray-600 border-2 bg-gray-200 w-full p-2 mb-2" 
            />
            <input 
                type="text" 
                placeholder="Interest In" 
                className="text-gray-600 border-2 bg-gray-200 w-full p-2 mb-2" 
            />
            <textarea 
                name="Message" 
                id="message" 
                placeholder="Message" 
                rows={3} 
                className="text-gray-600 border-2 bg-gray-200 w-full p-2 mb-2"
            ></textarea>
        </div>

        <div className="mt-5 md:mt-0 md:ml-5 w-full md:w-1/2">
            <Image src={contact} alt="Contact illustration" className="w-full h-auto" />
        </div>
    </div>

    <button cl

    )
}