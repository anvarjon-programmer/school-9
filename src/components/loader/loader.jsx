import "./loader.css"

const Loader = () => {
    return (
        <div className='preloader fixed left-0 top-0 bg-[#ffffffe7] justify-center flex items-center w-screen h-screen z-[1000]'>
            <div className="flex flex-col items-center gap-1">
                <h1 className="text-2xl text-center text-[#458FF6] font-[800]">Toshkent shahar Madaniyat Boshqarmasi tasarrufidagi 9-son Bolalar musiqa va san'at maktabi.<br /></h1>
                <h1 className="text-lg text-[#666666] mt-1 font-[300]">Sahifa yuklanmoqda...</h1>
            </div>
        </div>
    )
}

export default Loader