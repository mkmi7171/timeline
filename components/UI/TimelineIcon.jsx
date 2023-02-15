import Image from "next/image";

export default function TimelineIcon({img, style}) {
    return (
        <section className={`relative z-20 shadow-mainShadow border border-warning100 bg-whiteBg rounded-xl w-24 h-24 md:w-48 md:h-48 lg:w-56 lg:h-56 flex justify-center items-center z-10 ${style}`}>
            <Image src={img} alt="icon" />
        </section>
    )
}