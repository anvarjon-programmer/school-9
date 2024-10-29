import { memo } from "react"

const About = ({name, image, roles, id, fade, contact}) => {
    return (
        <div data-aos={`fade-${fade}`} className="w-full max-w-[350px]">
            <div className="lg:opacity-80 hover:opacity-100 hover:scale-[1.03] transition-all relative z-[1] bg-[#FFF] py-[30px] px-[30px] rounded-[20px] shadow-normal">

                <div className="flex justify-center">
                    <img src={image} alt="img" className="h-[200px] rounded-xl object-cover" />
                </div>

                <h1 className="text-[#2c2c2c] text-[24px] h-[100px] font-[700] mt-[25px]">{name}</h1>

                <div className="h-[75px] -mt-[15px] flex flex-col items-start gap-0.5">
                            <p className="text-[#7D7987] text-[17px] font-[300] max-w-[266px]">- {roles}</p>
                </div>


            </div>
        </div>
        
    )
}

export default memo(About)