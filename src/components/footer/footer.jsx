import { memo, useState } from "react"
import Wrapper from "../../layout/wrapper"

import "./footer.css"
import axios from "axios"
import { Link } from "react-router-dom"

const Footer = ({main, about, service, contact}) => {

    const [name, setName] = useState()
    const [tel, setTel] = useState()

    const [isDisabled, setDisable] = useState(false)
    const [title, setTitle] = useState("Саволлар учун")

    const sendMessage = async () => {
        if(name && tel) {
            const TOKEN = ''
            const CHAT_ID = ''
            const URL_API = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage'

            let msg = `<b>---------------------------</b>\n`
            msg += `<b>Ism: ${name}</b>\n`
            msg += `<b>Bog'lanish: ${tel}</b>\n`
            msg += `<b>---------------------------</b>`

            setDisable(true)
            setTitle("Юборилди!")

            setName("")
            setTel("")

            await axios.post(URL_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: msg
            }).then(res => {
                setName("")
                setTel("")
            })
        }
    }

    return (
        <div>
            <div className="bg-footer py-[65px] px-[5px] lg:px-0">
                <Wrapper>

                    <div>

                        <div className="flex lg:flex-row px-5 xl:px-0 flex-col justify-between items-start lg:gap-0 gap-[35px]">

                            <div className="xl:block hidden">
                                <h1 className="text-xl text-gray-100 font-[700]">Хаволалар</h1>
                                <div className="flex flex-col items-start mt-[20px] justify-start gap-[5px]">
                                    <p onClick={() => {
                                        window.scrollTo(0, 0)
                                    }} className={`text-[#ffffff] duration-400 hover:before:visible before:w-full hover:before:left-0 before:invisible before:h-[0px] before:duration-300 hover:before:bg-[#458FF6] before:transition-all before:rounded-sm before:bg-gray-400 before:content-[''] before:absolute before:-left-5 before:top-6 relative text-center cursor-pointer transition-all hover:relative font-[550]`}>Асосий</p>
                                    <p onClick={() => {
                                        about.current.scrollIntoView()
                                    }} className={`text-[#ffffff] duration-400 hover:before:visible before:w-full hover:before:left-0 before:invisible before:h-[0px] before:duration-300 hover:before:bg-[#458FF6] before:transition-all before:rounded-sm before:bg-gray-400 before:content-[''] before:absolute before:-left-5 before:top-6 relative text-center cursor-pointer transition-all hover:relative font-[550]`}>Биз хакимизда</p>
                                    <p onClick={() => {
                                        contact.current.scrollIntoView()
                                    }} className={`text-[#ffffff] duration-400 hover:before:visible before:w-full hover:before:left-0 before:invisible before:h-[0px] before:duration-300 hover:before:bg-[#458FF6] before:transition-all before:rounded-sm before:bg-gray-400 before:content-[''] before:absolute before:-left-5 before:top-6 relative text-center cursor-pointer transition-all hover:relative font-[550]`}>Богланиш</p>
                                </div>

                                <div className="text-white mt-5">
                                    <Link to={"/musiqa-nimda"}>
                                        Кириш
                                    </Link>
                                </div>
                            </div>

                            <div className="w-full lg:w-fit"><iframe src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=69.157781%2C41.303612&mode=search&sll=69.157833%2C41.303813&source=mapframe&text=41.303813%2C69.157833&um=constructor%3A1dae78b3982514ef3a61557cca89a277a95f4dfb1df0181c2726a792dde9e16a&utm_source=mapframe&z=17.15" className="w-full h-[200px] rounded-lg lg:w-[350px]"></iframe></div>



                        </div>

                        <div className="mt-[25px] flex justify-end">
                            <p className="max-w-[350px] text-end text-[#fff]">© {new Date().getFullYear()} Manzil: Toshkent shahar Uchtepa tumani Taqachi mahallasi Ko'kcha darvoza ko'chasi 627  uy.</p>
                        </div>

                    </div>

                </Wrapper>
            </div>
        </div>
    )
}

export default memo(Footer)