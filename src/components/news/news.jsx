import { memo } from "react"

const News = ({title, image, desc, by, fullDesc, fade, id, addedAt}) => {
    return (
        <div data-aos={`fade-${fade}`} onClick={() => {
            document.getElementById(id).showModal()
        }} className="w-full cursor-pointer h-[220px] max-w-[350px]">
            <div className="lg:opacity-100 border-0 outline-none hover:opacity-100 hover:scale-[1.03] transition-all relative z-[1] bg-[#ffffff] pt-[48px] rounded-[20px] shadow-normal">
                <img className="w-[100%] absolute top-0 left-0 object-cover h-[100%] rounded-2xl" src={image} alt={title} />
                <div className="relative px-[20px]">
                    <div className="absolute top-0 left-0 bg-[#00000086] w-full pb-2 h-full rounded-[20px]">
                    </div>
                    <h1 className="text-[#fff] relative z-10 text-[20px] mt-20 font-[700] truncate">{title}</h1>
                    <p className="text-[#ffffffbb] z-10 relative text-[14px] truncate font-[300] h-[25px] max-w-[266px]">{desc.slice(0, 75)}{desc.length > 75 && "..."}</p>
                    <div className="flex justify-between mt-[5px] z-10 relative items-center pb-4">
                        <button className="px-[20px] bg-white py-[5px] text-[14px] transition-all hover:bg-[#458FF6] hover:text-[#fff] rounded-[55px] flex items-center gap-1.5 text-[#458FF6] font-[700]">O'qish<i class="fa-solid mt-0.5 fa-angle-right"></i></button>
                    </div>
                </div>
            </div>

            <dialog id={id} className="modal">
                <div className="modal-box">
                    <div className="flex items-start gap-3 flex-col lg:flex-row justify-between">
                        <img className="max-w-[180px] object-cover h-[180px] rounded-3xl" src={image} alt={title} />
                        <div className="flex flex-1 flex-col justify-between">
                            <div className="flex flex-col items-end gap-0.5">
                            </div>
                            <div className="flex flex-col justify-start w-full">
                                <h1 className="text-[#3f3f3f] text-[24px] font-[700] mt-[50px]">{title}</h1>
                            </div>
                        </div>
                    </div>

                    <p className="text-[#7D7987] font-[300] mt-3">{desc}</p>

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
    )
}

export default memo(News)