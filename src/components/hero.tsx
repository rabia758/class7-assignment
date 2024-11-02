import Image from "next/image"
import hero from "../../public/hero.png"

export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-evenly py-8 px-4">
            <div className="flex flex-col items-start mx-5">
                <p className="text-gray-400 font-light text-3xl">PROJECT</p>
                <p className="text-gray-900 font-bold text-2xl">Lorum</p>
            </div>
            <div className="flex justify-center mx-5">
                <Image src={hero} alt="hero" height={450} width={450} />
            </div>
        </section>

    )
}