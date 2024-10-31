import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

import Wrapper from "../layout/wrapper"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"

import SliderComponent from "../components/slider/slider"

import Title from "../components/title/title"

import News from "../components/news/news"

import About from '../components/about/about';


import design_elem1 from "../assets/images/design_elem1.svg"
import design_elem2 from "../assets/images/design_elem2.svg"
import design_elem3 from "../assets/images/design_elem3.svg"
import Info from '../components/info/info';
import Service from '../components/service/service';
import Form from '../components/form/form';

import { memo, useEffect, useRef, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { app } from '../firebase/firebase';
import { collection, getFirestore } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';
import { xodimlar } from '../components/service/Xdimlar';
import axios from 'axios';
import title from '../components/title/title';

const Home = () => {

    const main = useRef(null)
    const about = useRef(null)
    const service = useRef(null)
    const contact = useRef(null)

    const [sliders] = useCollection(
        collection(getFirestore(app), 'slider'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    )

    const [news] = useCollection(
        collection(getFirestore(app), 'news'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    )

    const [abouts] = useCollection(
        collection(getFirestore(app), 'about'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    )

    const [counts] = useCollection(
        collection(getFirestore(app), 'counts'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    )

    const [services] = useCollection(
        collection(getFirestore(app), 'service'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    )

    const [data, setData] = useState([]);
const { t, i18n } = useTranslation("global");

const getData = async () => {
    const { data } = await axios.get("https://katarac820.pythonanywhere.com/main/employ/");
    const translatedData = data.map((item) => ({
        ...item,
        fullname: t(`${item.fullname[i18n.language]}`),
        job: t(`${item.job[i18n.language]}`),
    }));
    setData(translatedData);
};

useEffect(() => {
    getData();
}, [i18n.language]); 


    const [swaperData,setSwaperData] = useState([]);
    const getSwagerData = async () =>{
        const {data} = await axios.get("https://katarac820.pythonanywhere.com/main/banner/");
        
        const translatedBanner = data.map((item) => ({
            ...item,
            title: t(`${item.title[i18n.language]}`),
            body: t(`${item.body[i18n.language]}`),
        }));
        setSwaperData(translatedBanner)
    }

    useEffect(() =>{
        getSwagerData()
    },[i18n.language])



    const [newsData,setNewsData] = useState([]);
    const getAllNews = async() =>{
        const {data} = await axios.get("https://katarac820.pythonanywhere.com/main/news/")
        const translatedNews = data.map((item) => ({
            ...item,
            title: t(`${item.title[i18n.language]}`),
            body: t(`${item.body[i18n.language]}`),
        }));
        setNewsData(translatedNews);
        // console.log(data)
        
    }
    useEffect(() =>{
        getAllNews()
    },[i18n.language])


    const [count,setCount] = useState([]);
    const getAllCount = async () =>{
        const {data} = await axios.get("https://katarac820.pythonanywhere.com/main/background/");
        console.log(data);
        const translateCount = data.map((item) => ({
            ...item,
            title: t(`${item.title[i18n.language]}`),
            body: t(`${item.body[i18n.language]}`),
        }));
        setCount(translateCount)
     }

    useEffect(() =>{
        getAllCount()
    },[i18n.language])

    return (
        <div ref={main}>
            <Navbar
                main={main}
                about={about}
                service={service}
                contact={contact}
            />
            <div className="lg:-mt-[15px] mt-[15px] py-[35px] lg:py-[75px]">
                <Wrapper>
                    <div>

                        <img data-aos="fade-right" className="sliderImg absolute left-0 " src={design_elem1} alt="|||" />

                        <Swiper
                            spaceBetween={80}
                            slidesPerView={1}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 6500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                        >
                            {
                               swaperData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <SliderComponent
                                            title={item?.title}
                                            desc={item?.body}
                                            img={item?.image_url}
                                            // contact={contact} 
                                            />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>

                        <div id='rahbariyat' ref={about}></div>

                        <div className="mt-[75px] lg:px-0 px-2 lg:mt-[50px]">

                            <img data-aos="fade-right" data-aos-duration="400" data-aos-delay="200" className="absolute left-0 mt-[400px]" src={design_elem1} alt="|||" />
                            <img data-aos="fade-left" data-aos-duration="800" data-aos-delay="200" className="absolute right-0 mt-[450px]" src={design_elem3} alt="|||" />

                            {/* <Title title={"Toshkent shahar madaniyat boshqarmasi tasarrufidagi 9-son bolalar musiqa va san'at maktabi."} /> */}
                            <h1 className='text-center text-3xl font-semibold  m-auto'>
                                {t("employees.title")}
                            </h1>
                            <h1 className='text-center text-3xl font-semibold max-w-[760px] m-auto'>
                                {t("employees.title2")}
                            </h1>
                            <h1 className='text-center text-3xl font-semibold max-w-[760px] m-auto'>
                                {t("employees.title3")}
                            </h1>

                            <div className="flex items-center flex-wrap mt-[50px] w-full gap-y-[45px] gap-x-[36px] justify-center">
                                {
                                    data.map((item, index) =>(
                                        <About key={index}
                                            // contact={contact}
                                            name={item.fullname}
                                            image={item.image_url}
                                            roles={item.job}
                                            id={item?.index+1}
                                            fade={index == 0 ? "right" : index == 1 ? "up" : index == 2 ? "left" : index == 3 ? "right" : index == 4 ? "down" : index == 5 ? "left" : ""}
                                        />
                                    ))
                                }
                            </div>
                        </div>

                        <div id='news' className="mt-[75px] lg:px-0 px-2 lg:mt-[50px]">

                            <img data-aos="fade-right" data-aos-duration="600" data-aos-delay="200" className="absolute left-0 mt-32" src={design_elem2} alt="|||" />

                            <img data-aos="fade-left" data-aos-duration="800" data-aos-delay="200" className="absolute right-0 mt-[500px]" src={design_elem1} alt="|||" />

                            <Title title={t("news.news")} />

                            <div className="flex items-center flex-wrap mt-[50px] w-full gap-y-[45px] gap-x-[36px] justify-center">

                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={"auto"}
                                    slidePrevClass={1}
                                    autoplay={{
                                        delay: 6500,
                                        disableOnInteraction: false,
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Navigation]}
                                    className='pb-10'
                                >
                                    <SwiperSlide className='w-fit' >
                                    {
                                        newsData.map((item,index) =>(
                                            <News key={index} 
                                                    title={item?.title}
                                                    image={item?.image_url}
                                                    desc={item?.body}
                                                    by={item?.body}
                                                    fullDesc={item?.body}
                                                    addedAt={item?.body}
                                                    id={item?.id}
                                                    fade={index == 0 ? "right" : index == 1 ? "up" : index == 2 ? "left" : index == 3 ? "right" : index == 4 ? "down" : index == 5 ? "left" : ""}
                                                />
                                        ))
                                    }
                                        </SwiperSlide>

                                </Swiper>

                            </div>

                        </div>


                        <div className="mt-[75px] lg:px-0 px-2 lg:mt-[150px]">

                            <Title title={t("schoolNumber.schoolNumber")} />

                            <div className='mt-[50px]'>

                            <Info
                                info={count.map((item) => ({
                                    title: item.title,
                                    desc: item.body,
                                }))}
                                />


                            </div>

                        </div>


                        

                        <div ref={contact}></div>


                        <div className="mt-[75px] lg:px-0 px-2 lg:mt-[200px]">

                            <img data-aos="fade-right" data-aos-duration="600" data-aos-delay="200" className="absolute left-0 mt-32" src={design_elem2} alt="|||" />
                            <img data-aos="fade-left" data-aos-duration="400" data-aos-delay="200" className="absolute right-0 mt-[350px]" src={design_elem1} alt="|||" />

                            <Title title={t("contact.contact")} desc={t("contactDesc.contactDesc")} />

                            <div className='mt-[75px] relative z-50'>
                                <Form />
                            </div>

                        </div>

                    </div>
                </Wrapper>
            </div>

            <div data-aos="fade-up" className='mt-[120px] lg:mt-[200px]'>
                <img className="absolute left-0 mt-[250px]" src={design_elem1} alt="|||" />
                <Footer
                    main={main}
                    about={about}
                    service={service}
                    contact={contact}
                />
            </div>

        </div>
    )
}

export default memo(Home)