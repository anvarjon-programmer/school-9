import React, { useState } from 'react'
import headImg1 from '../../assets/galery-header/1.jpg'
import headImg2 from '../../assets/galery-header/2.jpg'
import headImg3 from '../../assets/galery-header/3.jpg'
import headImg4 from '../../assets/galery-header/4.jpg'
import headImg5 from '../../assets/galery-header/5.jpg'
import { cartImg } from '../../components/service/swagger-img'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import { useTranslation } from 'react-i18next'
/////////////////////////////////////////////

const Galery = () => {
    const { t } = useTranslation("global");
    const headerGall = [
        {
            img:headImg1,
            title:t("galery.name1")
        },
        {
            img:headImg2,
            title:t("galery.name2")
        },
        {
            img:headImg3,
            title:t("galery.name3")
        },
        {
            img:headImg4,
            title:t("galery.name4")
        },
        {
            img:headImg5,
            title:t("galery.name5")
        },
    ]

    const [currentFortopianoPage, setCurrentFortopianoPage] = useState(0);
   const fortopianoItemsPerPage = 6;

   const handleFortopianoPageClick = (pageIndex) => {
    setCurrentFortopianoPage(pageIndex);
  };

  const fortopianoOffset = currentFortopianoPage * fortopianoItemsPerPage;
const currentFortopianoData = cartImg.slice(fortopianoOffset, fortopianoOffset + fortopianoItemsPerPage);
const fortopianoPageCount = Math.ceil(cartImg.length / fortopianoItemsPerPage);
const fortopianoPageNumbers = [...Array(fortopianoPageCount).keys()];
  return (
     <>
     <div className="mb-28">
        <Navbar />
      </div>
    <section className='px-4 max-w-[1400px] m-auto'>
         <div className=" p-4 mt-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {headerGall.map((item,index) =>(
                <div className="border p-2" key={index}>
                <img src={item.img} alt="Maktab binosining ko‘rinishi" className="w-full h-[140px] object-cover"/>
                <div className="text-center text-white mt-2 bg-teal-700 h-[55px] flex items-center justify-center">
                    <p>{item.title}</p>
                </div>
            </div>
            ))}

            

        </div>
         </div>


         <section className='px-4 mb-6 mt-10'>
        <h1 className='text-center font-semibold mb-10 text-2xl md:text-4xl '>{t("galery.name0")}</h1>
  <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-[30px] xl:grid-cols-3
      max-w-sm mx-auto md:max-w-none md:mx-0'>
    {
      currentFortopianoData.map((item, index) => (
        <div key={index}>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className='h-[380px]'>
                  <img className='rounded-t-lg h-full w-full object-cover' src={item.img} alt="" />
              </div>
          
          </div>
        </div>
      ))
    }
  </div>
  <div className='pagination-container mt-6 md:mt-[20px] flex justify-center mb-7'>
    {fortopianoPageNumbers.map((number) => (
      <button
        key={number}
        onClick={() => handleFortopianoPageClick(number)}
        className={`pagination-button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${currentFortopianoPage === number ? 'active' : ''}`}
      >
        {number + 1}
      </button>
    ))}
  </div>
</section>
    </section>
    <Footer />
    </>
  )
}

export default Galery