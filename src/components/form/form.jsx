import axios from "axios";
import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import img1 from '../../assets/contact.jpg'

const FormInput = ({ value, setValue, placeholder, type, disable }) => {
    return (
        <input
            value={value}
            disabled={disable}
            onChange={(e) => setValue(e.target.value)}
            type={type}
            placeholder={placeholder}
            className="input rounded-2xl px-8 placeholder:text-[#b3b3b3] border-[#e1edff] focus:border-l-[12px] duration-300 transition-all border outline-none focus:outline-offset-0 focus:border-[#91bfff] focus:outline-none input-bordered w-full"
            aria-label={placeholder}
        />
    );
};

const Form = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState("");
    const [number, setNumber] = useState("");
    const [isDisabled, setDisable] = useState(false);
    const [title, setTitle] = useState("Bog'lanish");
    const { t } = useTranslation("global");

    const sendMessage = async () => {
        if (name && surname && age && number) {
            try {
                setDisable(true);
                setTitle("Жўнатилмоқда...");

                await axios.post("https://katarac820.pythonanywhere.com/main/contact/", {
                    name,
                    surname,
                    age,
                    number,
                });

                setTitle("Жўнатилди!");
            } catch (error) {
                console.error("Failed to send message:", error);
                setTitle("Хато юз берди!");
            } finally {
                setDisable(false);
                setName("");
                setSurname("");
                setAge("");
                setNumber("");
                setTitle("Bog'lanish");
            }
        } else {
            alert("Iltimos, barcha maydonlarni to'ldiring.");
        }
    };

    return (
        <div className="flex items-center justify-center gap-[75px]">
            <div data-aos="fade-right" className="lg:w-4/12 w-full flex flex-col gap-4">
                <div>
                    <h1 className="text-[20px] lg:text-[30px] font-[700] text-[#2c2c2c]">{t("contactDesc.connection")}</h1>
                    <p className="text-[#7D7987] mb-2 font-[300] text-[14px] lg:text-[18px]">{t("contactDesc.connectionDesc")}</p>
                </div>

                <FormInput
                    disable={isDisabled}
                    value={name}
                    setValue={setName}
                    placeholder={t("form.name")}
                    type="text"
                />

                <FormInput
                    disable={isDisabled}
                    value={surname}
                    setValue={setSurname}
                    placeholder={t("form.surName")}
                    type="text"
                />

                <FormInput
                    disable={isDisabled}
                    value={age}
                    setValue={setAge}
                    placeholder={t("form.age")}
                    type="number"
                />

                <FormInput
                    disable={isDisabled}
                    value={number}
                    setValue={setNumber}
                    placeholder={t("form.phoneNumber")}
                    type="number"
                />

                <div data-aos="fade-up" className="flex justify-start">
                    <button
                        disabled={isDisabled}
                        onClick={sendMessage}
                        className="py-[8px] w-full px-[45px] mt-[10px] justify-center transition-all bg-[#458FF6] text-[#fff] border border-[#458FF6] rounded-[15px] flex items-center gap-1.5 hover:bg-[#fff] hover:text-[#458FF6] font-[700]"
                        aria-label={title}
                    >
                        {title}
                        <i className="fa-solid mt-0.5 fa-angle-right"></i>
                    </button>
                </div>
            </div>

            <img data-aos="fade-left" className="hidden lg:block w-full max-w-[480px] rounded-2xl" src={img1} alt="musiqa" />
        </div>
    );
};

export default memo(Form);
