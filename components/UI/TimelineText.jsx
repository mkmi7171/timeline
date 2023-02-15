
export default function TimelineText({title, desc, style}) {
    return (
            <section className={`border border-warning100 w-5/6 sm:w-4/6 md:w-64 md:py-4 lg:w-80 rounded-xl h-fit py-4 md:p-2 lg:px-3 md:absolute bg-whiteBg z-10 ${style}`} >
            <h3 className="text-lg xl:text-xl font-semibold">{title}</h3>
            <p className="text-sm sm:text-md xl:text-base">{desc}</p>
        </section>
    )
}