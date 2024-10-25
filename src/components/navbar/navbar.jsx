import { memo, useRef, useState } from "react"
import Wrapper from "../../layout/wrapper"

import "./navbar.css"
import { Link } from "react-router-dom"
import { FaTelegram } from "react-icons/fa";

const Navbar = ({ main, about, service, contact }) => {

    const [isOpen, setOpen] = useState(false)

    const header = useRef(null)
    const logoRef = useRef(null)

    window.onscroll = ((e) => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            header.current.classList.add("header")
            logoRef.current.classList.add("logo")
        } else {
            header.current.classList.remove("header")
            logoRef.current.classList.remove("logo")
        }
    })

    return (
        <div>
            <div ref={header} className="transition-all relative top-0 duration-300">
                <div>
                    <div>
                        <Wrapper>
                            <div className="mt-[10px] lg:mt-[15px] px-2 xl:px-0 transition-all flex justify-between flex-col items-center">
                                <div className="flex items-center justify-between w-full">
                                    <a data-aos="fade-right" href="/" className="flex items-center justify-start gap-[12px]">
                                        <h1 className="text-[16px] tracking-wide hidden lg:block font-[700] max-w-[520px] text-[#1b2e47]">Toshkent shahar Madaniyat Boshqarmasi tasarrufidagi 9-son Bolalar musiqa va san'at maktabi.</h1>
                                    </a>
                                    <div className="flex items-center gap-6">
                                    <Link to="https://t.me/+pog-U-z4DX84MGVi" className="hidden md:block">
                                      <FaTelegram size={30}/>
                                    </Link>
                                    <div className="flex flex-col items-end">
                                        <a href="tel:998712472675" className="hidden lg:block max-w-full text-[#5f5f5f] font-bold"><i class="fa-solid fa-phone mt-[5px] mr-1.5"></i> +998 71 247-26-75</a>
                                        <a href="tel:998974315599" className="hidden lg:block max-w-full text-[#5f5f5f] font-bold"><i class="fa-solid fa-phone mt-[5px] mr-1.5"></i> +998 97 431-55-99</a>
                                    </div>
                                    </div>

                                </div>

                                <div className="border-t mt-6 pt-3 w-full">
                                    <div data-aos="fade-left" className="lg:flex hidden justify-center items-center gap-[40px]">

                                        <p onClick={() => {
                                            window.scrollTo(0, 0)
                                        }} className={`${false ? "text-[#2c2c2c] font-[650] " : "text-[#525255] "} text-[17px] duration-500 hover:before:visible before:w-full hover:before:left-0 before:invisible before:h-[2px] before:duration-300 hover:before:bg-[#458FF6] before:transition-all before:rounded-sm before:bg-gray-400 before:content-[''] before:absolute before:-left-5 before:top-6 relative text-center cursor-pointer transition-all hover:relative font-[550]`}>Бош сахифа</p>

                                        <p onClick={() => {
                                            document.getElementById("rahbariyat").scrollIntoView()
                                        }} className={`${false ? "text-[#2c2c2c] font-[500] " : "text-[#525255] "} text-[17px] duration-500 hover:before:visible before:w-full hover:before:left-0 before:invisible before:h-[2px] before:duration-300 hover:before:bg-[#458FF6] before:transition-all before:rounded-sm before:bg-gray-400 before:content-[''] before:absolute before:-left-5 before:top-6 relative text-center cursor-pointer transition-all hover:relative font-[550]`}>Ходимлар</p>

                                        <p onClick={() => {
                                            document.getElementById('news').scrollIntoView()
                                        }} className={`${false ? "text-[#2c2c2c] font-[500] " : "text-[#525255] "} text-[17px] duration-500 hover:before:visible before:w-full hover:before:left-0 before:invisible before:h-[2px] before:duration-300 hover:before:bg-[#458FF6] before:transition-all before:rounded-sm before:bg-gray-400 before:content-[''] before:absolute before:-left-5 before:top-6 relative text-center cursor-pointer transition-all hover:relative font-[550]`}>Янгиликлар</p>

                                        <p onClick={() => {
                                            contact.current.scrollIntoView()
                                        }} className={`${false ? "text-[#2c2c2c] font-[500] " : "text-[#525255] "} text-[17px] duration-500 hover:before:visible before:w-full hover:before:left-0 before:invisible before:h-[2px] before:duration-300 hover:before:bg-[#458FF6] before:transition-all before:rounded-sm before:bg-gray-400 before:content-[''] before:absolute before:-left-5 before:top-6 relative text-center cursor-pointer transition-all hover:relative font-[550]`}>Алока</p>

                                        <Link to='/ustavi'>
                                        <p 
                                            // contact.current.scrollIntoView()
                                         className={`${false ? "text-[#2c2c2c] font-[500] " : "text-[#525255] "} 
                                            text-[17px] duration-500 hover:before:visible before:w-full hover:before:left-0 before:invisible 
                                            before:h-[2px] before:duration-300 hover:before:bg-[#458FF6] before:transition-all before:rounded-sm
                                             before:bg-gray-400 before:content-[''] before:absolute before:-left-5 before:top-6 relative text-center cursor-pointer
                                              transition-all hover:relative font-[550]`

                                        }>Уставлар</p>
                                        </Link>

                                        <Link to='/galery'>
                                        <p 
                                            // contact.current.scrollIntoView()
                                         className={`${false ? "text-[#2c2c2c] font-[500] " : "text-[#525255] "} 
                                            text-[17px] duration-500 hover:before:visible before:w-full hover:before:left-0 before:invisible 
                                            before:h-[2px] before:duration-300 hover:before:bg-[#458FF6] before:transition-all before:rounded-sm
                                             before:bg-gray-400 before:content-[''] before:absolute before:-left-5 before:top-6 relative text-center cursor-pointer
                                              transition-all hover:relative font-[550]`

                                        }>Галерея</p>
                                        </Link>
                                        <Link to='https://t.me/+pog-U-z4DX84MGVi'>
                                        <p 
                                            // contact.current.scrollIntoView()
                                         className={`${false ? "text-[#2c2c2c] font-[500] " : "text-[#525255] "} 
                                            text-[17px] duration-500 hover:before:visible before:w-full hover:before:left-0 before:invisible 
                                            before:h-[2px] before:duration-300 hover:before:bg-[#458FF6] before:transition-all before:rounded-sm
                                             before:bg-gray-400 before:content-[''] before:absolute before:-left-5 before:top-6 relative text-center cursor-pointer
                                              transition-all hover:relative font-[550]`

                                        }>Галерея</p>
                                        </Link>
                                        


                                    </div>
                                </div>


                                <div className={`drawer w-0 lg:hidden`}>
                                    <input id="menuBurger" type="checkbox" className="drawer-toggle" />
                                    <div className="drawer-content absolute -top-[35px] z-50 -right-[150px]">
                                        <label onClick={() => setOpen(prev => !prev)} htmlFor="menuBurger" className="bg-[#458FF6] cursor-pointer w-[50px] text-lg h-[50px] flex justify-center items-center lg:hidden transition-all duration-300 text-white py-[8px] px-[20px] font-[700] rounded-xl">
                                            <i className={`fa-solid ${isOpen ? " fa-xmark" : " fa-bars"}`}></i>
                                        </label>
                                    </div>
                                    <div className="drawer-side w-full z-[3]">
                                        <label htmlFor="menuBurger" aria-label="close sidebar" className="drawer-overlay"></label>
                                        <ul className="menu p-4 bg-white w-full min-h-full text-base-content">
                                            <div className="flex flex-col items-start p-[10px] lg:hidden justify-start mt-[25px] gap-[8px] lg:gap-[15px]">
                                                <p onClick={() => {
                                                    window.scrollTo(0, 0)
                                                    document.getElementById("menuBurger").checked = false
                                                    setOpen(prev => !prev)
                                                }} className={`${true ? "text-[#2C2C2C] font-[650] " : "text-[#2C2C2C] "} text-[17px] duration-500 hover:before:visible before:w-full hover:before:left-0 before:invisible before:h-[0px] my-1 before:duration-300 hover:before:bg-[#458FF6] before:transition-all before:rounded-sm before:bg-gray-400 before:content-[''] before:absolute before:-left-5 before:top-6 relative text-center cursor-pointer transition-all hover:relative font-[550]`}>Асосий</p>
                                                 <Link to='/galery'>
                                                 <p onClick={() => {
                                                    window.scrollTo(0, 0)
                                                    document.getElementById("menuBurger").checked = false
                                                    setOpen(prev => !prev)
                                                }} className={`${true ? "text-[#2C2C2C] font-[650] " : "text-[#2C2C2C] "} text-[17px] duration-500 hover:before:visible before:w-full hover:before:left-0 before:invisible before:h-[0px] my-1 before:duration-300 hover:before:bg-[#458FF6] before:transition-all before:rounded-sm before:bg-gray-400 before:content-[''] before:absolute before:-left-5 before:top-6 relative text-center cursor-pointer transition-all hover:relative font-[550]`}>
                                                    Галерея</p>
                                                   </Link>

                                                   <Link to='/ustavi'>
                                                 <p onClick={() => {
                                                    window.scrollTo(0, 0)
                                                    document.getElementById("menuBurger").checked = false
                                                    setOpen(prev => !prev)
                                                }} className={`${true ? "text-[#2C2C2C] font-[650] " : "text-[#2C2C2C] "} text-[17px] duration-500 hover:before:visible before:w-full hover:before:left-0 before:invisible before:h-[0px] my-1 before:duration-300 hover:before:bg-[#458FF6] before:transition-all before:rounded-sm before:bg-gray-400 before:content-[''] before:absolute before:-left-5 before:top-6 relative text-center cursor-pointer transition-all hover:relative font-[550]`}>
                                                    Уставлар</p>
                                                   </Link>
                                            


                                                <p onClick={() => {
                                                    contact.current.scrollIntoView()
                                                    document.getElementById("menuBurger").checked = false
                                                    setOpen(prev => !prev)
                                                }} className={`${true ? "text-[#2C2C2C] font-[500] " : "text-[#2C2C2C] "} text-[17px] duration-500 hover:before:visible before:w-full hover:before:left-0 before:invisible before:h-[0px] my-1 before:duration-300 hover:before:bg-[#458FF6] before:transition-all before:rounded-sm before:bg-gray-400 before:content-[''] before:absolute before:-left-5 before:top-6 relative text-center cursor-pointer transition-all hover:relative font-[550]`}>Богланиш</p>
                                            </div>
                                               
                                            <Link to="https://t.me/+pog-U-z4DX84MGVi" className=" ml-5 md:hidden">
                                                <FaTelegram size={30}/>
                                            </Link>
                                            <div className="p-[10px] mt-[15px]">
                                                <div>
                                                    <a href="tel:998712472675" className="text-lg max-w-full text-[#5f5f5f] font-bold"><i class="fa-solid fa-phone mt-[5px] mr-1.5"></i> +998  71 247 26 75</a>
                                                </div>
                                            </div>

                                            <div className='flex justify-start mt-[25px]'>
                                                <button className='hover:bg-[#3c6bac] px-[50px] py-[10px] transition-all bg-[#458FF6] text-[#fff] border border-[#458FF6] rounded-[15px] flex items-center gap-2 font-[700]'>Богланиш <i class="fa-solid mt-[2.5px] fa-angle-right"></i></button>
                                            </div>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </Wrapper>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default memo(Navbar)