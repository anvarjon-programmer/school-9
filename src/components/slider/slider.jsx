import { memo } from "react"

const SliderComponent = ({ title, desc, img, contact }) => {
    return (
        <div className="lg:px-2 flex mx-5 justify-center pb-12 relative gap-5 flex-col lg:flex-row items-start">
            <img src={img} className="absolute mx-2 rounded-3xl" alt="" />
            <img className="lg:block opacity-0 hidden w-full object-cover rounded-xl lg:w-[520px]" src={img} />

            <div data-aos="fade-right" className="flex flex-col items-start mt-[65px] gap-[25px]">
                <div className="flex flex-col p-4 bg-[#0000008c] rounded-xl items-start gap-[10px]">
                    <h1 className="text-[30px] lg:text-[48px] font-bold max-w-lg text-[#fff] leading-10 lg:leading-[56px]"> {title}</h1>
                    <p className="text-[#fff] text-[17px] lg:text-[21px] font-light mt-[5px] max-w-md leading-7 lg:leading-[32px]"> {desc}</p>
                </div>
            </div>
        </div>
    )
}

export default memo(SliderComponent)