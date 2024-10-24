import React from "react";
import Navbar from "../../components/navbar/navbar";
import ustavi_ui from "../../assets/ustavi_ui.jpg";
import Footer from "../../components/footer/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Ustavi = () => {
  const tableData = [
    { id: 1, direction: "Fortepiano", age: "6 - 9", duration: "7 yil" },
    { id: 2, direction: "Torli cholg‘ular", age: "6 - 9", duration: "7 yil" },
    {
      id: 3,
      direction:
        "Estrada cholg‘u ijrochiligi: Fortepiano, Torli cholg‘ular, Damli va zarbli cholg‘ular",
      age: "6 - 9; 6 - 11",
      duration: "7 yil; 5 yil",
    },
    { id: 4, direction: "Xalq cholg‘ulari", age: "6 - 11", duration: "5 yil" },
    {
      id: 5,
      direction: "Damli va zarbli cholg‘ular",
      age: "6 - 11",
      duration: "5 yil",
    },
    {
      id: 6,
      direction: "An’anaviy cholg‘u ijrochiligi",
      age: "6 - 11",
      duration: "5 yil",
    },
    {
      id: 7,
      direction: "An’anaviy xonandalik",
      age: "6 - 11",
      duration: "5 yil",
    },
    {
      id: 8,
      direction: "Akademik xonandalik",
      age: "6 - 11",
      duration: "5 yil",
    },
    {
      id: 9,
      direction: "Estrada xonandaligi",
      age: "6 - 11",
      duration: "5 yil",
    },
    { id: 10, direction: "Xoreografiya", age: "6 - 11", duration: "5 yil" },
    { id: 11, direction: "Tasviriy san’at", age: "6 - 11", duration: "5 yil" },
    { id: 12, direction: "Amaliy san’at", age: "6 - 11", duration: "5 yil" },
    { id: 13, direction: "Teatr san’ati", age: "6 - 11", duration: "5 yil" },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="mb-28">
        <Navbar />
      </div>

      <div className="container max-w-[1400px] m-auto px-5">
        <img className="m-auto w-full" src={ustavi_ui} alt="ustavi" />
        <div>
            <h1 className="text-4xl mt-5 text-center">Ustavi</h1>
            <p className="mt-10 text-center mb-5">
            Mazkur namunaviy uctav O‘zbekiston Respublikasi Prezidentining 2017 yil 15 fevral “O‘zbekiston Respublikasi Madaniyat vazirligi faoliyatini tashkil etish to‘g‘risida”gi PQ-2778-son va 2017 yil 31 maydagi “Madaniyat va san’at sohasini yanada rivojlantirish va takomillashtirishga doir chora-tadbirlari to‘g‘risida”gi PQ-3022-son qarorlari, Vazirlar Mahkamacining 1995 yil 18 fevraldagi 59-son qarori bilan tasdiqlangan “Maktabdan tashqari ta’lim muassasa to‘g‘risidagi nizom”, 1998 yil 5 yanvardagi 5-son qarori bilan tasdiqlangan “Ta’lim muassasalapi ustavini ishlab chiqish tartibi” hamda 2017 yil 15 martdagi “O‘zbekiston Respublikasi Madaniyat vazirligi to‘g‘risidagi hamda O‘zbekiston Respublikasi Madaniyat vazirligi huzuridagi byudjetdan tashqari Madaniyat va san’atni rivojlantirish jamg‘armasi mablag‘larini shakllantirish va ulardan foydalanish tartibi to‘g‘risidagi nizomlarni tasdiqlash haqida”gi 141-son va 2016 yil 5 maydagi “Bolalar musiqa va san’at maktablari to‘g‘risidagi nizomni tasdiqlash haqida”gi 144-son qarorlari, O‘zbekiston Respublikasi Prezidentining 2022 yil 21 dekabrdagi “Yangi O‘zbekiston ma’muriy islohotlarini amalga oshirish chora-tadbirlari to‘g‘risida” PF-269-son Farmoni, Madaniyat vazirligining 2017 yil 22 iyundagi “O‘zbekiston Respublikasi Madaniyat vazirligi tizimidagi bolalar musiqa va san’at maktablarining namunaviy ustavini tasdiqlash haqida”gi 361-sonli buyrug‘i, O’zbekiston Respublikasi Madaniyat vazirining 2023 yil 28 iyuldagi 1-sonli buyrug’i hamda Toshkent shahar Madaniyat boshqarmasi boshlig‘ining 2023 yil 26 sentyabrdagi 1-sonli buyrug‘iga muvofiq Uchtepa tumani 9-son bolalar musiqa va san’at maktabi faoliyatining asosiy qoidalarini belgilaydi.
            </p>
        </div>

        <div>
            <h1 className="text-4xl mt-5 text-center">1-bob. Umumiy qoidalar</h1>
            <p className="mt-10 text-center mb-5">
            1. Toshkent shahar, Uchtepa tumani 9-son bolalar musiqa va san’at maktabi (bundan buyon matnda 9-son BMSM deb yuritiladi) maktabdan tashqari ta’lim muassasasi hisoblanib, uning asosiy faoliyati unib-o‘sib kelayotgan yosh avlodning iste’dodini har tomonlama kamol toptirish va madaniy saviyasini yuksaltirish, o‘quvchilarning milliy va jahon musiqalari, tasviriy san’atining yuksak namunalaridan keng bahramand bo‘lishi uchun zarur sharoitlar yaratishga qaratilgan.
2. 9-son BMSM o‘z faoliyatida O‘zbekiston Respublikasi Konstitutsiyasi va qonunlariga, O‘zbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, O‘zbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga, O‘zbekiston Respublikasi Vazirlar Mahkamasining qarorlariga va boshqa qonun hujjatlariga, shuningdek o‘z ustaviga amal qiladi.
3. 9-son BMSM davlat muassasasi shaklidagi yuridik shaxs hisoblanadi va o‘z ustaviga, mustaqil balansiga, shaxsiy g‘azna hisobvaraqlariga, O‘zbekiston Respublikasining Davlat gerbi tasviri tushirilgan va o‘z nomi yozilgan muhrga, shtampga va blankalarga ega bo‘ladi.
4. 9-son BMSMning Nizomi Namunaviy nizom asosida ishlab chiqilgan.
Ta’lim muassasasining to‘liq nomi:
O‘zbek tilida: TOSHKENT SHAHAR MADANIYAT BOSHQARMASI TASARRUFIDAGI UCHTEPA TUMANI 9-SON BOLALAR MUSIQA VA SAN’AT MAKTABI (qisqaptirilgan nomi: UCHTEPA TUMANI 9-SON BOLALAR MUSIQA VA SAN’AT MAKTABI);
ta’lim turiga tegishliligi - maktabdan tashqari ta’lim muassasasi;
ta’lim faoliyati yo‘nalishi – musiqa va san’at;
o‘qish shakli – kunduzgi (8:00-20:00);
mulkchilik shakli – davlat ta’lim muassasasi;
Toshkent shahar hokimligi 9-son bolalar musiqa va san’at maktabining muassisi hisoblanadi.
ta’lim muassasasining identifikatsiya raqami (STIR): 300153008;
ta’lim muassasasi 2006 yil 09 sentyabrda 001209-1-son raqam bilan Toshkent shahar Yuridik shaxs (Tadbirkorlik sub’ektini) davlat ro‘yxatdan o‘tkazilgan;
yuridik manzili: 100106, Toshkent sh., Uchtepa tumani, Ko’kcha Darvoza ko‘chasi – 627 uy.
Bolalar musiqa va san’at maktabiga bevosita rahbarlikni Toshkent shahar Madaniyat boshqarmasi boshlig‘i tomonidan O‘zbekiston Respublikasi Madaniyat vazirligi bilan kelishgan holda lavozimga tayinlanadigan va lavozimdan ozod etiladigan direktor amalga oshiradi. 
9-son BMSM Toshkent shahar xalq ta’limi bo’limining 12.07.1967 yildagi 289-son Buyruqi asosida 1967 yilda tashkil topgan.
5. 9-son BMSMning umumiy faoliyati vazirlik tomonidan muvofiqlashtiriladi. Bolalar musiqa va san’at maktabi boshqapuvining yuqori organi Toshkent shahar Madaniyat boshqarmasi hisoblanadi.
            </p>
        </div>

        <div>
            <h1 className="text-4xl mt-5 text-center">2-bob. Muassasaning maqsad va vazifalari</h1>
            <p className="mt-10 text-center mb-5">
            6. 9-son BMSMning maqsadi yosh avlodning musiqa va san’at turlariga qiziqishi va qobiliyatini rivojlantirish, ijtimoiy faolligini oshirish, ularni xalqimiz an’analariga va milliy qadriyatlarimizga nisbatan hurmat ruhida tarbiyalash, ma’naviy va ma’rifiy saviyasini har tomonlama oshirishdan iborat.
7. 9-son BMSMning vazifalari quyidagilardan iborat:
o‘quvchilarning ma’naviy va estetik rivojlanishi uchun keng imkoniyatlar yaratish;
o‘quvchilarning iste’dodini har tomonlama kamol toptirish, madaniy saviyasini yuksaltirish;
o‘quvchilarni milliy va jahon musiqasi, tasviriy san’atning yuksak namunalaridan va o‘zbek xalqining mumtoz musiqa merosi durdonalaridan bahramand bo‘lishi uchun zarur sharoitlar yaratish;
milliy hamda umuminsoniy qadriyatlarni uzviy birlashtirish asosida o‘quvchilarda yuksak axloqiy fazilatlarni shakllantirish;
o‘quvchilarga umumiy musiqa, xoreografiya, teatr san’ati, tasviriy 
va amaliy san’at yo‘nalishlari bo‘yicha bilimlarning boshlang‘ich asoslarini o‘rgatish orqali ularni musiqa va san’at olamiga jalb etish;
iqtidorli o‘quvchilarni musiqa va san’at yo‘nalishlari bo‘yicha o‘rta maxsus, kasb-hunar ta’limi muassasalarida o‘qishini davom ettirish uchun tayyorlash.
8. 9-son BMSM o‘quvchilarning qiziqishlari va ehtiyojlariga ko‘ra, ularning ijodiy imkoniyatlarini yanada rivojlantirishga yo‘naltirilgan musiqa (fortepiano, torli cholg‘ular, estrada cholg‘u ijrochiligi, xalq cholg‘ulari, damli va zarbli cholg‘ular, an’anaviy cholg‘u ijrochiligi, an’anaviy xonandalik, akademik xonandalik, estrada xonandaligi) va san’at (xoreografiya, teatr san’ati, tasviriy va amaliy san’at) yo‘nalishlarida (keyingi o‘rinlarda ta’lim yo‘nalishlari deb ataladi) faoliyatini amalga oshiradi. 
            </p>
        </div>

        <div>
            <h1 className="text-4xl mt-5 text-center">3-bob. Muassasaning huquqlari va majburiyatlari</h1>
            <p className="mt-10 text-center mb-5">
            9. 9-son BMSMda o‘quvchilarga ta’lim berish yakka tartibda yoki bir xil yoshdagi va turli yoshdagi bolalar guruhlarida ularning qiziqishlariga ko‘ra bir yoxud bir necha ta’lim yo‘nalishlari bo‘yicha amalga oshiriladi.
10. 9-son BMSMda o‘quv-tarbiyaviy ishlar O‘zbekiston Respublikasi Madaniyat vazirligi (bundan buyon matnda vazirlik deb yuritiladi) tomonidan tasdiqlanadigan o‘quv rejalari va o‘quv dasturlari asosida amalga oshiriladi.
11. 9-son BMSMda o‘quv-tarbiya jarayonini tashkil qilish uchun bolalar musiqa va san’at maktabi direktorining buyrug‘i asosida ta’lim yo‘nalishlari bo‘yicha bo‘linmalar tashkil etilishi mumkin. 
12. 9-son BMSMning huquqlari quyidagilardan iborat:
bolalar musiqa va san’at maktabi xodimlari va o‘quvchilardan uning Nizomi va ichki mehnat tartibi qoidalariga rioya etilishini talab qilish;
yangi pedagogik texnologiyalar asosida ta’lim va tarbiyaning qonun hujjatlariga zid bo‘lmagan shakli, vositalari va usullarini qo‘llash;
bolalar musiqa va san’at maktabining moddiy-texnik bazasini mustahkamlash, ta’lim mazmuni va samaradorligini takomillashtirish bo‘yicha Madaniyat boshqaruv organlari va mahalliy davlat hokimiyati organlariga taklif kiritish;
o‘z faoliyati samaradorligini oshirish maqsadida qonunchilikka muvofiq tarzda ko‘char va ko‘chmas mulklarni ijaraga olish;
moliyalashtirishning qonun hujjatlarida taqiqlanmagan turli manbalari hisobiga byudjetdan tashqari mablag‘larni jalb qilish.
13. Quyidagilar 9-son BMSMning majburiyatlari hisoblanadi:
Madaniyat boshqaruv organlarining hamda mahalliy davlat hokimiyati organlarining qarorlari, buyruqlari va boshqa me’yoriy hujjatlari ijrosini ta’minlash, topshiriq va ko‘rsatmalarini bajarish;
ma’naviy yetuk, fidoyi, iqtidorli, tashabbuskor, sog‘lom va barkamol avlodni shakllantirish;
o‘z ustavida belgilangan vazifalarni bajarish;
yo‘nalishlar bo‘yicha tasdiqlangan o‘quv dasturlari asosida maktabning yillik o‘quv rejasini, dars va mashg‘ulotlar jadvalini ishlab chiqish;
maktabdan tashqari ta’limga qo‘yilgan davlat talablari, belgilangan tartibda tasdiqlangan o‘quv rejasi va o‘quv dasturlari asosida ta’lim-tarbiya jarayonini tashkil etish;
ta’lim-tarbiya jarayonini sanitariya qoidalari, normalari va gigiena normativlari, texnika va yong‘in xavfsizligi qoidalariga muvofiq tashkil etish;
o‘quvchilarni maktabdan tashqari ta’limga jalb etish maqsadida 
targ‘ibot-tashviqot ishlarini olib borish;
xodimlar va o‘quvchilar tomonidan o‘z vazifalarini bajarish uchun zarur shart-sharoitlar yaratilishini ta’minlash;
bolalar musiqa va san’at maktabi xodimlarini qayta tayyorlashni 
va ularning malakasini oshirishni tashkil etish;
bolalar musiqa va san’at maktabining moddiy-texnik bazasi saqlanishi 
va ulardan oqilona foydalanilishini ta’minlash;
bolalar musiqa va san’at maktabining moddiy-texnika ta’minotini 
va kadrlar salohiyatini rivojlantirish;
o‘quvchilarning ota-onalari yoki ularning o‘rnini bosuvchi shaxslar (bundan buyon ota-onalar deb yuritiladi) bilan shartnomalar tuzish;
amaldagi qonun hujjatlariga muvofiq ichki mehnat tartibi qoidalarini o‘rnatish;
yo‘nalishlar bo‘yicha o‘quvchilar, o‘qituvchilar va boshqa mutaxassislarning tuman (shahar), viloyat, recpublika va xalqaro ko‘rik-tanlovlari, festivallari, ustoz saboqlari hamda boshqa musiqa va san’at tadbirlarida ishtirok etishlarini ta’minlash.
14. Muassasa ishini tashkil etish va ish taptibi uning ichki mehnat tartibi qoidasida belgilanadi. 
15. Muassasa zimmasiga qonun hujjatlarida nazarda tutilgan boshqa majburiyatlar ham yuklatilishi mumkin.
            </p>
        </div>


        <div>
            <h1 className="text-4xl mt-5 text-center">4-bob. Muassasada qabul jarayonini tashkil etish </h1>
            <p className="mt-10 text-center mb-5">
            16. 9-son BMSM rahbariyati har yili iyun - avgust oylarida o‘qishga qabul qilish ishlarini tashkil etadi. 
O‘quvchilar bolalar musiqa va san’at maktabiga vazirlik tomonidan belgilanadigan qabul kvotalari doirasida o‘qishga qabul qilinadi.
Qabul kvotalari bolalar musiqa va san’at maktabining quvvati, 
moddiy-texnika bazasi, kadrlar bilan ta’minlanganlik darajasi, ta’lim yo‘nalishlari bo‘yicha talab va ehtiyojlarni inobatga olgan holda shakllantiriladi.
17. 9-son BMSMda qabul sinovlari o‘tkazish uchun direktorning buyrug‘i bilan besh kishidan iborat tarkibda qabul komissiyasi tuziladi.
18. Qabul komissiyasi tarkibiga muassasa direktori, mas’ul kotib, direktorning o‘quv-ma’rifiy ishlar bo‘yicha o‘rinbosari va tajribali pedagoglar kiritiladi.  
19. Muassasaga o‘qishga kirish uchun o‘quvchining ota-onasi tomonidan  
1 avgustdan 29 avgustgacha qabul komissiyasiga quyidagi hujjatlar taqdim etiladi:
a) o‘quvchilarni o‘qishga qabul qilish bo‘yicha ariza (ta’lim yo‘nalishi ko‘rsatilgan bo‘lishi kerak);
b) o‘quvchining tug‘ilganlik haqidagi guvohnomasi nusxasi;
v) tibbiy ma’lumotnoma; 
g) 3 x 4 o‘lchamli 2 ta fotosurat.
20. Qabul sinovlari har yili 31 avgustgacha o‘quvchining ijodiy qobiliyatini aniqlash maqsadida o‘tkaziladi.
Qabul sinovlari qabul komissiyasi huzurida o‘tkaziladi. Qabul sinovlari bir marta topshiriladi, qayta topshirishga yo‘l qo‘yilmaydi.
21. Qabul komissiyasi o‘quvchining ota-onasini arizasida ko‘rsatilgan ta’lim yo‘nalishi bo‘yicha uning quyidagi ijodiy qobiliyatini qabul sinovlarida aniqlaydi:
musiqa (fortepiano, torli cholg‘ular, estrada cholg‘u ijrochiligi, xalq cholg‘ulari, damli va zarbli cholg‘ular, an’anaviy cholg‘u ijrochiligi, an’anaviy xonandalik, akademik xonandalik, estrada xonandaligi) yo‘nalishi bo‘yicha musiqa ritmiga moslashishi, qo‘shiq aytishi, musiqani eshitishi va eslab qolishi;
san’at yo‘nalishlari:
xoreografiya bo‘yicha jismonan ma’qulligi (tana va oyoqlarning egiluvchanligi), ritmga moslashishi, musiqani eshitishi;
tasviriy va amaliy san’at mutaxassisliklari bo‘yicha tasavvuridagi 
narsa-buyum yoki manzarani chiza olishi;
teatr san’ati mutaxassisliklari bo‘yicha she’r yoki monologni yoddan ifodali o‘qishi va ovoz yoki harakatga nisbatan taqlid qila olishi. 
22. O‘quvchining sinovdan o‘tgan yoki o‘tmaganligi qabul komissiyasi a’zolarining ochiq ovoz berishi yo‘li bilan aniqlanadi. Qabul komissiyasi a’zolarining ko‘pchiligi ijobiy ovoz bergan taqdirda o‘quvchi qabul sinovidan o‘tgan hisoblanadi. 
Qabul komissiyasining raisi barcha a’zolardan so‘ng ovoz beradi. Ovozlar soni teng bo‘lib qolganda qabul komissiyasi raisining ovozi hal qiluvchi hisoblanadi.
23. Qabul komissiyasi o‘quvchini o‘qishga qabul qilish yoki qabul qilmaslik to‘g‘risida qaror qabul qiladi. Qabul komissiyasining ijobiy qaroriga asosan muassasa direktori o‘quvchini o‘qishga qabul qilish to‘g‘risida buyruq chiqaradi. 
24. O‘quvchilarni o‘quv yili davomida o‘qishga qabul qilishga yo‘l qo‘yilmaydi, boshqa bolalar musiqa va san’at maktabidan o‘qishi ko‘chirilgan o‘quvchilar bundan mustasno.
25. Muassasada o‘quvchilar kontingenti bir yilda bir marotaba - sentyabr oyida tasdiqlanadi. 
26. 9-son BMSMning ikkinchi va undan yuqori sinflariga qabul qilish uchun o‘quvchilar mazkur Ustavning 20-bandida nazarda tutilgan qabul sinovlaridan tashqari vazirlik tomonidan tasdiqlangan o‘quv dasturlari bo‘yicha tegishli sinfdagi bilim darajasiga qo‘yiladigan talablar asosida quyidagi maxsus fanlar bo‘yicha ham qabul sinovlarini topshiradilar:
a) musiqa (fortepiano, torli cholg‘ular, estrada cholg‘u ijrochiligi, xalq cholg‘ulari, damli va zarbli cholg‘ular, an’anaviy cholg‘u ijrochiligi, an’anaviy xonandalik, akademik xonandalik, estrada xonandaligi) yo‘nalishi bo‘yicha - mutaxassislik va solfedjio fani;
b) san’at yo‘nalishlari bo‘yicha:
xoreografiya - mumtoz raqs, parter fani;
tasviriy va amaliy san’at - chizma tasvir, rang tasvir, kompozitsiya fani;
teatr san’ati - aktyorlik mahorati, sahna nutqi, sahna harakati fani.
27. O‘quvchining sinovdan o‘tgan yoki o‘tmaganligi qabul komissiyasi a’zolarining ochiq ovoz berishi yo‘li bilan aniqlanadi. Qabul komissiyasi a’zolarining ko‘pchiligi ijobiy ovoz bergan taqdirda o‘quvchi qabul sinovidan o‘tgan hisoblanadi. 
Qabul komissiyasining raisi barcha a’zolardan so‘ng ovoz beradi. Ovozlar soni teng bo‘lib qolganda qabul komissiyasi raisining ovozi hal qiluvchi hisoblanadi.
28. Qabul komissiyasi o‘quvchini o‘qishga qabul qilish yoki qabul qilmaslik to‘g‘risida qaror qabul qiladi. Qabul komissiyasining ijobiy qaroriga asosan bayonnoma rasmiylashtirilib, bolalar musiqa va san’at maktabi direktori o‘quvchini o‘qishga qabul qilish to‘g‘risida buyruq chiqaradi. 
O‘quvchilarni o‘quv yili davomida o‘qishga qabul qilishga yo‘l qo‘yilmaydi, boshqa bolalar musiqa va san’at maktabidan o‘qishi ko‘chirilgan o‘quvchilar bundan mustasno.
29. O‘quvchining ota-onasi o‘z xohishiga ko‘ra o‘quv yili davomida 
yoki u tugagandan so‘ng farzandini o‘qiyotgan bolalar musiqa va san’at maktabidan boshqasiga o‘tkazish huquqiga ega.
O‘quvchilar ota-onalarining arizasi asosida o‘qiyotgan bolalar musiqa 
va san’at maktabidan boshqasiga ta’lim olayotgan ta’lim yo‘nalishi bo‘yicha o‘tkaziladi.
30. O‘qiyotgan bolalar musiqa va san’at maktabidan boshqasiga o‘tkazilgan o‘quvchilar tomonidan o‘qishni davom ettirish uchun tanlangan bolalar musiqa va san’at maktabiga mazkur Ustavning 17-bandida nazarda tutilgan arizadan tashqari quyidagi hujjatlar taqdim etiladi:
o‘qigan joyidan ma’lumotnoma;
o‘quvchining baholar (o‘zlashtirish) tabeli;
yakka tartibdagi ish rejasi (musiqa yo‘nalishlari uchun).
31. O‘quvchini bir ta’lim yo‘nalishidan boshqa ta’lim yo‘nalishiga o‘tkazish bolalar musiqa va san’at maktabidagi ta’limning birinchi va ikkinchi yilida amalga oshiriladi. 
Yuqori sinflarda bir ta’lim yo‘nalishidan boshqa ta’lim yo‘nalishiga o‘tkazishga yo‘l qo‘yilmaydi.
32. Bir ta’lim yo‘nalishidan boshqasiga o‘tkazish bolalar musiqa va san’at maktabi direktorining buyrug‘iga asosan besh kishidan iborat tarkibda tuziladigan o‘quvchilarning o‘qishini bir ta’lim yo‘nalishidan boshqasiga ko‘chirish komissiyasining (bundan buyon matnda ko‘chirish komissiyasi deb yuritiladi) qaroriga asosan amalga oshiriladi.
Ko‘chirish komissiyasi tarkibiga bolalar musiqa va san’at maktabi direktori, direktorning o‘quv-ma’rifiy ishlar bo‘yicha o‘rinbosari va pedagog xodimlar kiritiladi. Direktor ko‘chirish komissiyasi raisi hisoblanadi.
Ko‘chirish komissiyasi o‘quv yili davomida faoliyat yuritadi. 
33. Ko‘chirish komissiyasi tomonidan bir ta’lim yo‘nalishidan boshqasiga o‘tkazishda o‘quvchining maktabdan tashqari ta’limga qo‘yiladigan mazkur yo‘nalish bo‘yicha davlat talablarining minimal darajasini bilishi hisobga olinadi. 
34. Ko‘chirish komissiyasining qarori o‘quvchiga darhol e’lon qilinadi. Ko‘chirish komissiyasining qarori ijobiy bo‘lgan taqdirda, unga asosan direktor o‘quvchini tanlagan ta’lim yo‘nalishiga o‘tkazish to‘g‘risida buyruq chiqaradi.
35. 9-son BMSMda o‘quvchilar kontingenti bir yilda bir marta - sentyabr oyida tasdiqlanadi. 
36. 9-son BMSM direktori bilan o‘qishga qabul qilingan o‘quvchilarning ota-onalari ortasida o‘qish muddatiga shartnoma tuziladi.
37. 9-son BMSM o‘quvchilarining huquqlari quyidagilardan iborat:
maktabdan tashqari ta’limga qo‘yilgan davlat talablari asosida ixtiyoriy ravishda ta’lim olish;
qiziqishiga ko‘ra ta’lim yo‘nalishini tanlash;
bir necha ta’lim yo‘nalishi bo‘yicha bilim olish;
insoniy qadr-qimmatining hurmat qilinishini talab qilish, vijdon erkinligi, axborot erkinligi, o‘z qarashlari va e’tiqodini ifodalash;
bolalar musiqa va san’at maktabining o‘quv va ish faoliyatini takomillashtirishga oid takliflar berish.
Bolalar musiqa va san’at maktabi o‘quvchilari qonun hujjatlarida belgilangan boshqa huquqlarga ham ega bo‘lishi mumkin.
38. 9-son BMSM o‘quvchilarning majburiyatlari quyidagilardan iborat:
bolalar musiqa va san’at maktabining ichki tartibi qoidalariga rioya qilish;
bolalar musiqa va san’at maktabining moddiy-texnik bazasidan samarali foydalanish va uni asrab-avaylash; 
jamoatchilik ishlarida faol ishtirok etish;
o‘z ijodiy qobiliyatini rivojlantirish, bilimlarni mustaqil egallash ko‘nikmasini hosil qilish va uni amalda qo‘llash.
Bolalar musiqa va san’at maktabi o‘quvchilariga qonun hujjatlariga asosan boshqa majburiyatlar ham yuklatilishi mumkin.
            </p>
        </div>

        <div>
            <h1 className="text-4xl mt-5 text-center">4-bob. O‘quv-tarbiyaviy va ilmiy uslubiy ish</h1>
            <p className="mt-10 text-center mb-5">
            39. Ta’lim jarayonining maqsadi bolalarning ijodiy salohiyatini yanada keng ochib berish, musiqa va san’atning boshqa turlarini chuqurroq tushunishi hamda ularga nisbatan mehr-muhabbat uyg‘otish, musiqa va tasviriy san’at sohalarida jahon buyuk merosini o‘rganib bilishlari uchun shart-sharoitlar yaratishdan iborat.
40. Ta’lim jarayonining asosiy vazifalari quyidagilar hisoblanadi:
o‘quvchilarga ta’lim va tarbiya berish uchun har tomonlama yondashuvni ta’minlash;
o‘quvchilarga o‘zlarining maktabdan tashqari ta’lim bo‘yicha nazariy 
va amaliy bilimlarini shakllantirishda yordam berish;
har bir o‘quvchining bilim darajasi va ijodiy imkoniyatlarini aniqlash 
va rivojlantirish;
o‘quvchilarni o‘qitish va tarbiyalash sifatini yaxshilash maqsadida 
o‘quv-tarbiya va uslubiy ishlarni takomillashtirish;
o‘quvchilar o‘z qiziqishlari bo‘yicha kasb-hunarning boshlang‘ich sirlarini egallashlarida ota-onalarga ko‘maklashish;
o‘quvchilarning mustaqil bilim olishlari va ijodiy mehnat qilishlariga shart-sharoitlar yaratish;
maktabdan tashqari ta’lim sifatini yanada oshirish;
maktabdan tashqari ta’lim to‘g‘risidagi qonun hujjatlarida nazarda tutilgan boshqa vazifalarning amalga oshirilishini ta’minlash.
41. 9-son BMSM O‘zbekiston Respublikasi Madaniyat vazirining 2015 yil 31 martdagi 7-mh-son buyrug‘i (ro‘yxat raqami 2663, 2015 yil 9 aprel) bilan tasdiqlangan “Maktabdan tashqari ta’limga qo‘yiladigan davlat talablari”ni amalga oshirilishini ta’minlaydi.
42. 9-son BMSMda o‘quv-tarbiya jarayonini tashkil etish quyidagi shakllarda amalga oshiriladi: 
o‘quvchilar bilan guruh bo‘yicha va yakka tartibda mashg‘ulotlar olib borish;
o‘quvchilarning mustaqil ishi;
nazorat darslari;
akademik konsertlar, texnik sinovlar; 
mustaqil ravishda ishlangan ijodiy mahsulotlar ko‘rgazmasi;
ko‘rik-tanlov, festival, ustoz saboqlari;
sinfdan sinfga o‘tkazish va bitiruv imtihonlari.
43. O‘quvchilarning bilimi va ijodiy mahorati quyidagi tartibda baholanadi: 5 (a’lo), 4 (yaxshi), 3 (qoniqarli), 2 (qoniqarsiz).
44. Yakka tartibda o‘quv mashg‘ulotlarini olib boradigan o‘qituvchilar har bir o‘quvchiga o‘quv yili uchun shaxsiy ish rejasi, guruhli tartibda o‘quv mashg‘ulotlarini olib boradigan o‘qituvchilar taqvimiy ish rejasi tuzadilar.
45. 9-son BMSM ishini tashkil etish va ish taptibi uning ichki mehnat tartibi qoidasida belgilanadi.
46. 9-son BMSM qonun hujjatlarida belgilangan tartibda sanitariya qoidalari va me’yorlariga rioya qiladi.
47. 9-son BMSMda musiqa (fortepiano, torli cholg‘ular, estrada cholg‘u ijrochiligi, xalq cholg‘ulari, damli va zarbli cholg‘ular, an’anaviy cholg‘u ijrochiligi, an’anaviy xonandalik, akademik xonandalik, estrada xonandaligi) va san’at (xoreografiya, tasviriy san’at, amaliy san’at, teatr san’ati) ta’lim yo‘nalishlari mavjud bo‘lib, bolalarni 1-sinfga qabul qilish yoshi va o‘qish muddatlari quyidagicha belgilanadi:
            </p>

            <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-black text-center">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-black px-4 py-2">T/r</th>
            <th className="border border-black px-4 py-2">Ta’lim yo‘nalishlari</th>
            <th className="border border-black px-4 py-2">Qabul yoshi</th>
            <th className="border border-black px-4 py-2">O‘qish muddati</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={row.id}>
              <td className="border border-black px-4 py-2">{index + 1}</td>
              <td className="border border-black px-4 py-2">{row.direction}</td>
              <td className="border border-black px-4 py-2">{row.age}</td>
              <td className="border border-black px-4 py-2">{row.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="mt-10 text-center mb-5">
    48. O‘quv yili bolalar musiqa va san’at maktabida 2 sentyabrdan kelgusi yilning 31 may kuniga qadar davom etadi va to‘rtta chorakka bo‘linadi. 
49. O‘quv-tarbiya jarayonini tashkil etishda quyidagi muddatlarga amal qilinadi: 
o‘quv yilining davomiyligi - 34 hafta;
o‘quv haftasining davomiyligi - 6 kun;
dars mashg‘ulotining davomiyligi - 45 daqiqa;
dars mashg‘ulotlari oralig‘idagi tanaffusning davomiyligi - 5 daqiqa.
Mehnat to‘g‘risidagi qonun hujjatlarida bayram (ishlanmaydigan) kuni 
deb belgilangan kunlarda dars mashg‘ulotlari o‘tkazilmaydi. 
Bayram (ishlanmaydigan) kunlariga to‘g‘ri kelib qolgan dars mashg‘ulotlarining mavzulari o‘quv dasturlarini ixchamlashtirgan holda keyingi dars mashg‘ulotlarida o‘tkaziladi.
50. O‘quv yili davomidagi ta’tillarning muddatlari quyidagicha belgilanadi:
kuzgi ta’til - 4 noyabrdan boshlab 6 kalendar kun;
qishki ta’til - 28 dekabrdan boshlab 14 kalendar kun; 
bahorgi ta’til - 21 martdan boshlab 7 kalendar kun;
yozgi ta’til - 1 iyundan boshlab 2 sentyabrgacha.
Ta’tilning oxirgi kuni bayram (ishlanmaydigan) kunga to‘g‘ri kelib qolgan taqdirda dars mashg‘ulotlari keyingi ish kunidan boshlab davom ettiriladi.
Choraklar oralig‘idagi ta’tillar davrida bolalar musiqa va san’at maktabining pedagog xodimlari tomonidan mashg‘ulotlarning o‘ziga xos ijodiy dasturlarini ishlab chiqish, o‘zlashtirishi past bo‘lgan o‘quvchilarning bilim saviyasini tahlil qilish va ular bilan qo‘shimcha ishlash, ularga maslahatlar berish, ota-onalar va o‘quvchilar o‘rtasida musiqa va san’atning inson ma’naviy va madaniy saviyasini oshirishdagi o‘rnini targ‘ib-tashviq qilish maqsadida tadbirlar tashkil etish, o‘quvchilar uchun shaxsiy va taqvimiy ish rejalari tuzish kabi ishlar amalga oshiriladi.
51. Yakka tartibda o‘quv mashg‘ulotlarini olib boradigan o‘qituvchilar 
har bir o‘quvchiga o‘quv yili uchun shaxsiy ish rejasi, guruhli tartibda o‘quv mashg‘ulotlarini olib boradigan o‘qituvchilar taqvimiy ish rejasi tuzadilar.
52. 9-son BMSMda sinfdan sinfga o‘tkazish va bitiruv imtihonlari har yili 10 may - 31 may mobaynida o‘tkaziladi.
53. 9-son BMSM bitiruvchilariga o‘qishni tugatayogan yilining iyun oyida o‘qishni tugatganligi to‘g‘risida qonun hujjatlariga muvofiq shakldagi guvohnoma beriladi.
54. 9-son BMSMni tugatishiga bir yil qolgan o‘quvchilarga ota-onalari arizasiga va mutaxassislik o‘qituvchisining tavsiya xatiga asosan pedagogik kengash qarori bilan iqtidorli bolalarning yoshini, umumiy o‘rta ta’lim maktabida tahsil olayotgan sinfini, o‘quv rejasining bajarilishini inobatga olgan holda o‘qish muddati bir yilga qisqartirilishi mumkin.
55. O‘quvchilar bolalar musiqa va san’at maktabidan quyidagi holatlarda chetlashtirilishi mumkin:
o‘z xohishiga binoan;
o‘qishning boshqa bolalar musiqa va san’at maktabiga ko‘chirilishi munosabati bilan;
salomatligi tufayli (tibbiy komissiya ma’lumotnomasi asosida);
akademik o‘zlashtira olmaganligi (qarzdorligi) uchun;
o‘quv intizomini va ichki tartibi qoidalarini buzganligi uchun;
o‘qish uchun belgilangan to‘lovning o‘z vaqtida amalga oshirilmaganligi sababli (to‘lovdan ozod etilgan o‘quvchilar bundan mustasno);
o‘quvchining sud tomonidan ozodlikdan mahrum etilganligi munosabati bilan;
vafot etganligi sababli.
Direktorning o‘quvchini bolalar musiqa va san’at maktabidan chetlashtirish to‘g‘risidagi buyrug‘iga quyidagilardan biri asos bo‘ladi: 
ota-onaning arizasi, pedagogik kengash qarori, o‘qituvchining bildirishnomasi.
56. Ota-onalarning arizasi asosida o‘quvchiga bolalar musiqa va san’at maktabi direktorining buyrug‘iga muvofiq bir yil muddatga akademik ta’til berilishi mumkin. 
57. Bitiruv imtihonlarini topshira olmagan o‘quvchilarga bolalar musiqa va san’at maktabida o‘qiganligi to‘g‘risida ma’lumotnoma beriladi.
58. 9-son BMSM o‘quvchilarning qiziqishlari va ehtiyojlariga ko‘ra, ularning ijodiy imkoniyatlarini yanada rivojlantirishga yo‘naltirilgan musiqa (fortepiano, torli cholg‘ular, estrada cholg‘u ijrochiligi, xalq cholg‘ulari, damli va zarbli cholg‘ular, an’anaviy cholg‘u ijrochiligi, an’anaviy xonandalik, akademik xonandalik, estrada xonandaligi) va san’at (xoreografiya, teatr san’ati, tasviriy va amaliy san’at) yo‘nalishlarida faoliyatini amalga oshiradi. 
59. 9-son BMSMda  o‘quvchilarga ta’lim berish yakka tartibda yoki bir xil yoshdagi va turli yoshdagi bolalar guruhlarida ularning qiziqishlariga ko‘ra bir yoki bir necha ta’lim yo‘nalishlari bo‘yicha amalga oshiriladi.
60. 9-son BMSMda ta’lim jarayoni davlat tilida va boshqa tillarda olib boriladi.
    </p>

            
        </div>

        <div>
            <h1 className="text-4xl mt-5 text-center">
            5-bob. Ta’lim muassasasining tuzilishi</h1>
            <p className="mt-10 text-center mb-5">
            61. 9-son BMSM Toshkent shahar hokimligining qarori bilan tashkil etiladi. 
60. 9-son BMSMning tarkibiy bo‘linmalarini direktor, direktorning o‘quv-ma’rifiy ishlar bo‘yicha o‘rinbosari, direktorning xo‘jalik ishlari bo‘yicha o‘rinbosari, buxgalter, bo‘linma mudirlari, o‘qituvchilar va xodimlar tashkil etadi.
62. 9-son BMSMda o‘quv-tarbiya jarayoni samaradorligini oshirish maqsadida direktorning buyrug‘i asosida ta’lim yo‘nalishlari bo‘yicha kamida 3 mutaxassisdan iborat bo‘linmalar tashkil etiladi.
63. 9-son BMSM direktorning o‘quv-ma’rifiy ishlar bo‘yicha o‘rinbosari musiqa va san’at sohasi bo‘yicha kamida bakalavr darajasidagi oliy ma’lumotli, xorijiy tillardan birining boshlang‘ich bosqichini va axborot-kommunikatsiya texnologiyalaridan foydalanishni biladigan, uch yildan kam bo‘lmagan pedagogik ish stajiga ega bo‘lgan tajribali mutaxassislardan tayinlanadi.
Bolalar musiqa va san’at maktabi direktorning o‘quv-ma’rifiy ishlar bo‘yicha o‘rinbosari Madaniyat boshqaruv organlari tomonidan lavozimiga tayinlanadi va lavozimidan ozod etiladi.
64. 9-son BMSM direktorning o‘quv-ma’rifiy ishlar bo‘yicha o‘rinbosarining vazifalari quyidagilardan iborat:
o‘quv-tarbiyaviy ishlar va ish hujjatlarining mazmunini nazorat qilish;
o‘quv-uslubiy va ma’naviy-ma’rifiy ishlarni tashkil qilish;
o‘qitish uslubini tahlil qilish maqsadida o‘quv mashg‘ulotlariga kirish;
pedagog xodimlarning bolalar musiqa va san’at maktabi ichki mehnat tartibi qoidalariga rioya etishini nazorat qilish;
o‘quv-tarbiyaviy, uslubiy ish rejalari, dars jadvali, ochiq darslar rejasi, sinov imtihonlari, pedagoglar haqida ma’lumotlar, o‘quv mashg‘ulotlari tarifikatsiyasini tuzish va tasdiqlash uchun bolalar musiqa va san’at maktabi direktoriga taqdim etish;
direktor bo‘lmagan vaqtda uning vazifasini bajarib turish;
pedagog xodimlar tomonidan dars jadvali, o‘quv-uslubiy, tarbiyaviy hamda sinfdan tashqari ishlarning bajarilishini nazorat qilish;
ma’naviy-axloqiy tarbiyaviy ishlarni va o‘quv jarayonini tashkil qilish;
o‘quv-tarbiyaviy ishlarning yillik va oylik rejalarini ishlab chiqish;
kadrlarni tanlash hamda ularni joy-joyiga qo‘yishda ishtirok etish;
pedagog xodimlarga metodik yordam ko‘rsatash, pedagog xodimlarning pedagogik faoliyatini tahlil qilish;
pedagog xodimlarning musiqa va san’at yo‘nalishlari bo‘yicha taqvimiy 
ish rejalarini tasdiqlash, shuningdek yakka tartibdagi va guruh mashg‘ulotlari jadvalini tuzish hamda ularning bajarilishini nazorat qilish;
pedagog xodimlarning ish vaqti hisobini olib borish, darslar, imtihonlar jadvali va boshqa o‘quv-tarbiyaviy tadbirlar rejasini ishlab chiqish;
o‘quvchilarning o‘zlashtirishi va xulqining monitoringini amalga oshirish;
yakka tartibdagi va guruh jurnallarining belgilangan tartibda yuritilishini ta’minlash, o‘quv-tarbiyaviy ishlar ahvoli va natijalari bo‘yicha hisobotlar tuzish;
o‘quv yili davomida pedagog xodimlarning o‘quv yuklamalaridagi o‘zgarishlarni muvofiqlashtirib borish;
sanitariya-gigiena talablari, mehnatni muhofaza qilish, texnika va yong‘in xavfsizligi qoidalari talablariga rioya qilish.
65. 9-son BMSM direktorning xo‘jalik ishlari bo‘yicha o‘rinbosari ma’muriy-xo‘jalik faoliyati bo‘yicha tajribaga ega bo‘lgan, kamida o‘rta mahsus yoki bakalavr darajasidagi oliy  ma’lumotli, xorijiy tillardan birining boshlang‘ich bosqichini va axborot-kommunikatsiya texnologiyalaridan foydalanishni biladigan, mutaxassislik bo‘yicha ikki yildan kam bo‘lmagan ish staji ega bo‘lgan mutaxassislardan tayinlanadi.
Bolalar musiqa va san’at maktabi direktorning xo‘jalik ishlar bo‘yicha o‘rinbosari BMSM direktori tomonidan lavozimga tayinlanadi va lavozimdan ozod etiladi.
66. Direktorning xo‘jalik ishlari bo‘yicha o‘rinbosarining vazifalari quyidagilardan iborat:
xo‘jalik faoliyatini boshqarish, bolalar musiqa va san’at maktabining o‘quv mashg‘ulotlari o‘tkazish uchun tayyor holda saqlanishini ta’minlash;
bolalar musiqa va san’at maktabi mablag‘laridan maqsadli foydalanish tadbirlarini o‘z vakolati doirasida ishlab chiqish hamda ulardan to‘g‘ri foydalanilishini ta’minlash;
bolalar musiqa va san’at maktabining moliyaviy faoliyat natijalarini tahlil qilish, shartnoma majburiyatlarining belgilangan muddatida to‘liq bajarilishini ta’minlash, moliyalashtirishning qonun hujjatlarida taqiqlanmagan turli manbalari hisobiga byudjetdan tashqari mablag‘larni shakllantirish va ulardan samarali foydalanilishini nazorat qilish;
tovar-moddiy boyliklar va asosiy vositalar tushumini to‘liq hisobga olish;
bolalar musiqa va san’at maktabiga qo‘shimcha moliyaviy manbalar va moddiy mablag‘larni jalb etish hamda xodimlar va o‘quvchilar uchun zarur 
ijtimoiy-maishiy shart-sharoitlarni ta’minlash chora-tadbirlarini amalga oshirish;
bolalar musiqa va san’at maktabining o‘quv jihozlari, asbob-uskunalari 
va boshqa ta’lim vositalarining saqlanishini va ulardan samarali foydalanilishini ta’minlash;
moddiy-texnika bazasini rivojlantirish ishlarini tashkillashtirish, bino va qo‘shimcha ob’ektlarning texnik holati va jihozlanganligini muntazam ravishda o‘rganib borish;
bolalar musiqa va san’at maktabiga yetkazib berilayotgan jihozlarni belgilangan tartibda qabul qilish, jihozlarning sinf xonalari va boshqa xonalar bo‘yicha to‘g‘ri taqsimlanishini amalga oshirish;
kuz-qish mavsumiga tayyorgarlik jarayonida tegishli ravishda ko‘mir, suyuq yoqilg‘i, tabiiy gaz va elektr energiyasiga bo‘lgan ehtiyojlarni aniqlash 
va ma’lumotlarni bolalar musiqa va san’at maktabi direktoriga taqdim etish hamda qabul qilingan yoqilg‘ilarning sifati va saqlanishini ta’minlash;
bolalar musiqa va san’at maktabiga biriktirilgan hududlarni obodonlashtirish, ko‘kalamzorlashtirish va tozalash ishlariga rahbarlik qilish, o‘ziga bo‘ysunuvchi tegishli bo‘linma hamda texnik xizmat ko‘rsatuvchi xodimlar ishlarini muvofiqlashtirish;
sanitariya qoidalari, normalari va gigiena normativlari, mehnatni muhofaza qilish, texnika va yong‘in xavfsizligi qoidalari talablariga rioya etish.
67. 9-son BMSM bo‘linma mudiri musiqa va san’at sohasi bo‘yicha kamida bakalavr darajasidagi oliy ma’lumotli, xorijiy tillardan birining boshlang‘ich bosqichini va axborot-kommunikatsiya texnologiyalaridan foydalanishni biladigan, uch yildan kam bo‘lmagan pedagogik ish stajiga ega bo‘lgan tajribali mutaxassislardan tayinlanadi.
Bolalar musiqa va san’at maktabi bo‘linma mudiri vazifasiga direktorning buyrug‘i bilan yetakchi va tajribali o‘qituvchilardan biri  tayinlanadi va ozod etiladi.
68. 9-son BMSM bo‘linma mudirining vazifalari quyidagilardan iborat:
bo‘linma faoliyatini muvofiqlashtirish;
o‘quv-uslubiy va sinfdan tashqari ishlar bo‘yicha bo‘linmaning yillik ish rejasini tuzish;
bo‘linma pedagog xodimlarining dars yuklamalarii taqsimlashda ishtirok etish;
umumiy maktab dars jadvalini tuzishda bevosita ishtirok etish;
bo‘linmada o‘qitish darajasini nazorat va tahlil qilish;
imtihon, texnik sinovlar va akademik konsertlarni boshqarish;
bo‘linmadagi barcha hujjatlarni yuritish va pedagogik kengashda hisobot berish.
69. 9-son BMSM kutubxonachisi o‘z yo‘nalishi bo‘yicha kamida bakalavr darajasidagi oliy yoki o‘rta maxsus ma’lumotli, amaliy ish staji talab etilmaydigan, xorijiy tillardan birining boshlang‘ich bosqichini va axborot-kommunikatsiya texnologiyalaridan foydalanishni biladigan mutaxassislardan tayinlanadi.
Bolalar musiqa va san’at maktabi kutubxonachisi direktor tomonidan lavozimga tayinlanadi va lavozimdan ozod etiladi.
70. Kutubxonachining vazifalari quyidagilardan iborat:
axborot-kutubxona fondiga ishlov berish, kataloglar va ma’lumot-bibliografiya apparatining boshqa unsurlarini tashkil etish va undan foydalanish;
elektron ma’lumotlar bazasini barpo etish hamda undan foydalanish, kutubxonadagi kitob fondini hisobga olish va elektron katalog, yig‘ma elektron katalogdan foydalangan holda axborot-kutubxona xizmati ko‘rsatishni amalga oshirish;
foydalanuvchilarga kitob berish va qabul qilishni amalga oshirish;
foydalanuvchilarga bibliografik ma’lumot va axborotlar yetkazib berish;
tavsiya etiladigan adabiyotlar ro‘yxatini tuzish, adabiyotlarga og‘zaki sharh tayyorlash va o‘quvchilarga yetkazish;
kutubxona faoliyatida ilmiy metodlar va ilg‘or ish tajribalarini qo‘llash;
kitobxonlarni yangi asarlardan individual va jamoaviy tarzda xabardor etish;
sanitariya-gigiena talablariga, mehnatni muhofaza qilish, texnika va yong‘in xavfsizligi qoidalariga rioya qilishni ta’minlash.
71. Ta’lim muassasasi shtatlar jadvalidagi lavozimlar Madaniyat vazirligi tomonidan hamda Moliya va Mehnat vazirliklari bilan kelishilgan holda joriy etiladi.. 
Shtatlar jadvalida ko‘rsatilgan ishchi xodimlar o‘z yo‘nalishi bo‘yicha tegishli ma’lumotga ega bo‘lgan mutaxassislardan tayinlanadi. Bolalar musiqa va san’at maktabi ishchi xodimlari direktor tomonidan lavozimga tayinlanadi va lavozimdan ozod etiladi.
Ishchi xodimlarning malaka tavsiflari va lavozim majburiyatlari maktab jamoa shartnomasining ilovalarida belgilanadi.
72. Maktab buxgalteri byudjet va byudjetdan tashqari mablag‘lar bo‘yicha buxgalteriya hisobini O‘zbekiston Respublikasining “Buxgalteriya hisobi to‘g‘risida”gi Qonuniga va boshqa normativ-huquqiy hujjatlarga muvofiq tashkil qiladi, buxgalteriya hisobini yuritishni belgilangan tartibda olib borishga, bolalar musiqa va san’at maktabining buxgalteriya hisobini tashkil qilinishini hamda to‘liq va aniq yuritilishini, moliya-xo‘jalik operatsiyalarining nazorat qilinishi tartibini, hisob-kitoblar o‘z vaqtida amalga oshirilishini, shuningdek buxgalteriya hujjatlarining saqlanishini ta’minlash ishlarini amalga oshiradi.
9-son BMSMning bosh (oliy ma’lumotli bo‘lsa) buxgalteri boshqaruv organlari bilan kelishilgan holda muassasa direktori tomonidan lavozimga tayinlanadi va lavozimidan ozod etiladi.
            </p>
        </div>


        <div>
            <h1 className="text-4xl mt-5 text-center">6-bob. Pedagog xodimlar, o‘quv-tarbiyaviy xodimlar</h1>
            <p className="mt-10 text-center mb-5">
            73. Tegishli ma’lumotga hamda kasbiy tayyorgarlikka, yuksak fazilatlarga ega shaxslar bolalar musiqa va san’at maktabida pedagogik faoliyat bilan shug‘ullanishga haqli.
Pedagogik faoliyat bilan shug‘ullanishi sud hukmiga asosan man etilgan shaxslarning bolalar musiqa va san’at maktabida ushbu faoliyat bilan shug‘ullanishiga yo‘l qo‘yilmaydi.
74. 9-son BMSM o‘qituvchisi lavozimiga o‘z yo‘nalishi bo‘yicha kamida bakalavr darajasidagi oliy ma’lumotga ega bo‘lgan mutaxassislar bolalar musiqa va san’at maktabi direktorining buyrug‘i bilan lavozimiga tayinlanadi va lavozimidan ozod etiladi.
75. 9-son BMSM o‘qituvchisining huquqlari quyidagilardan iborat:
bolalar musiqa va san’at maktabi faoliyatining muhim masalalari muhokamasida va qarorlar qabul qilinishida qatnashish;
bolalar musiqa va san’at maktabining mehnatni muhofaza qilish 
va xavfsizlik texnikasi qoidalari, lavozim yo‘riqnomalari, jamoa shartnomasi va boshqa normativ hujjatlari bilan tanishish;
o‘zining kasbiy sha’ni va qadr-qimmatini himoya qilish va mehnat ta’tilidan o‘z vaqtida foydalanish;
ish beruvchidan mehnat intizomini ta’minlash va ish haqini o‘z vaqtida to‘lanishini talab qilish;
o‘quv jarayonini takomillashtirish va ta’lim jarayonini metodik ta’minlash bo‘yicha takliflar kiritish;
mashg‘ulotlarning o‘ziga xos ijodiy dasturlarini ishlab chiqish;
kasb faoliyati uchun sharoitlar bilan ta’minlanish;
o‘quv mashg‘ulotining shakli, uslubi va vositalarini mustaqil tanlash.
Bolalar musiqa va san’at maktabi o‘qituvchisi qonun hujjatlariga muvofiq boshqa huquqlarga ham ega bo‘lishi mumkin.
76. 9-son BMSM o‘qituvchisining majburiyatlari quyidagilardan iborat:
maktabdan tashqari ta’limga qo‘yilgan davlat talablari hamda belgilangan tartibda tasdiqlangan o‘quv rejalari va dasturlari asosida ta’lim-tarbiya jarayonini tashkil etish;
pedagog axloq-odobiga qat’iy rioya qilish, o‘quv-tarbiyaviy ishlarni yuqori saviyada olib borish, ta’lim mazmunini takomillashtirish, o‘qitish vositalarini yaratishda faol qatnashish;
o‘zining malakasini oshirish, qayta tayyorgarlikdan o‘tish;
o‘quvchilarning qadr-qimmatiga hurmat bilan munosabatda bo‘lish, ularda mehnatsevarlik, ezgulik, mehr-shafqat kabi fazilatlarni shakllantirish, o‘quvchilarni ona Vatanga sadoqat, davlat tiliga, milliy va umuminsoniy, tarixiy va madaniy qadriyatlarga, ota-onaga va o‘zidan katta yoshdagilarga hurmat, atrof muhitga ehtiyotkorlik bilan munosabatda bo‘lish ruhida tarbiyalash;
o‘zining nazariy bilim darajasini, pedagogik mahorati va kasb malakasini uzluksiz ravishda oshirib borish, o‘z ustida muntazam ishlash, o‘quv-tarbiyaviy 
va uslubiy ishlarni takomillashtirish yuzasidan takliflar ishlab chiqish;
bolalar musiqa va san’at ta’limi sohasidagi va bolalar huquqlarini tartibga soluvchi normativ-huquqiy hujjatlarni, o‘quv rejalari va dars berayotgan yo‘nalishi bo‘yicha o‘quv dasturini, o‘qitishning ilg‘or shakl 
va uslublarini, darslarni tashkil etish va uni o‘tkazish uslublarini, o‘quv 
va tarbiya sifatini, o‘quvchilarning bilimini baholash mezonlarini bilish;
o‘quvchilarni ko‘rik-tanlovlar, olimpiadalar va festivallarda ishtirok etishga tayyorlash, yakka darslarni olib boruvchi pedagog xodimlar har bir o‘quvchiga yarim yillik shaxsiy va o‘quv yili boshida nazariy fanlar bo‘yicha taqvimiy 
ish rejalarini tuzish;
o‘quvchilarning ota-onalari bilan muntazam hamkorlik qilish, 
sanitariya-gigiena talablari, mehnatni muhofaza qilish, texnika va yong‘in xavfsizligi qoidalari talablariga rioya qilish.
Bolalar musiqa va san’at maktabi o‘qituvchisi zimmasiga qonun hujjatlarida belgilangan boshqa majburiyatlar ham yuklatilishi mumkin.
77. 9-son BMSM konsertmeysteri lavozimiga o‘z yo‘nalishi bo‘yicha kamida bakalavr darajasidagi oliy ma’lumotga ega bo‘lgan mutaxassislar bolalar musiqa va san’at maktabi direktorining buyrug‘i bilan lavozimiga tayinlanadi va lavozimidan ozod etiladi.
78. 9-son BMSM konsertmeysterining huquqlari quyidagilardan iborat:
bolalar musiqa va san’at maktabi faoliyatining muhim masalalari muhokamasida va qarorlar qabul qilinishida qatnashish;
o‘quv jarayonini takomillashtirish va ta’lim jarayonini metodik ta’minlash bo‘yicha takliflar kiritish;
bolalar musiqa va san’at maktabining mehnatni muhofaza qilish 
va xavfsizlik texnikasi qoidalari, lavozim yo‘riqnomalari, jamoa shartnomasi va boshqa normativ hujjatlari bilan tanishish;
o‘zining kasbiy sha’ni va qadr-qimmatini himoya qilish;
mehnat ta’tilidan o‘z vaqtida foydalanish;
ish beruvchidan mehnat intizomini ta’minlash va ish haqini o‘z vaqtida to‘lanishini talab qilish;
kasbiy faoliyati uchun tegishli shart-sharoitlarni yaratilishini 
ish beruvchidan talab qilish.
Bolalar musiqa va san’at maktabi konsertmeysteri qonun hujjatlariga muvofiq boshqa huquqlarga ham ega bo‘lishi mumkin.
79. 9-son BMSM konsertmeysterining majburiyatlari quyidagilardan iborat:
bolalar musiqa va san’at ta’limi sohasidagi va bolalar huquqlarini tartibga soluvchi normativ-huquqiy hujjatlarni bilish;
musiqa va san’ati namunalari asosida o‘quvchilarning musiqiy va badiiy saviyasini o‘stirishni ta’minlash;
pedagog xodimlarga o‘quv dasturlari asosida darslarni tayyorlash 
va o‘tkazishda amaliy yordam berish;
o‘zining malakasini oshirish, qayta tayyorgarlikdan o‘tish;
bolalar musiqa va san’at ta’limi sohasidagi va bolalar huquqlarini tartibga soluvchi normativ-huquqiy hujjatlarni, dars berayotgan yo‘nalishi bo‘yicha dasturiy talablarni, o‘quv va tarbiya sifatini, o‘quvchilarning bilimini baholash mezonlarini bilish;
o‘qitishning ilg‘or shakl va uslublari asosida darslarni tashkil etish 
va uni o‘tkazish;
sanitariya-gigiena talablari, mehnatni muhofaza qilish, texnika va yong‘in xavfsizligi qoidalari talablariga rioya qilish.
Bolalar musiqa va san’at maktabi konsertmeysteri zimmasiga qonun hujjatlarida belgilangan boshqa majburiyatlar ham yuklatilishi mumkin.
            </p>
        </div>

        <div>
            <h1 className="text-4xl mt-5 text-center">7-bob. Ta’lim muassasasiga rahbarlik qilish.</h1>
            <p className="mt-10 text-center mb-5">
            80. 9-son BMSMning rahbariyatiga bolalar musiqa va san’at maktabining direktori, direktorning o‘quv-ma’rifiy ishlar bo‘yicha o‘rinbosari, direktorning xo‘jalik ishlari bo‘yicha o‘rinbosari kiradi.
81. 9-son BMSMga bevosita rahbarlikni tegishli ravishda Toshkent shahar Madaniyat boshqarmasi tomonidan vazirlik bilan kelishgan holda lavozimga tayinlanadigan va lavozimdan ozod etiladigan direktor amalga oshiradi.
Bolalar musiqa va san’at maktabi direktori musiqa va san’at sohasi bo‘yicha kamida bakalavr darajasidagi oliy ma’lumotga ega, xorijiy tillardan birining boshlang‘ich bosqichini va axborot-kommunikatsiya texnologiyalaridan foydalanishni biladigan, besh yildan kam bo‘lmagan pedagogik ish stajiga ega tajribali mutaxassislardan tayinlanadi.
82. 9-son BMSM direktori uning tashkiliy-huquqiy, o‘quv-tarbiyaviy, ma’naviy-ma’rifiy va moliyaviy-xo‘jalik faoliyatining tashkil etilishi uchun bevosita mas’ul hisoblanadi.
83. 9-son BMSM direktorining huquqlari quyidagilardan iborat:
bolalar musiqa va san’at maktabi faoliyatiga umumiy rahbarlik qilish, o‘quv-tarbiya jarayonlari va ta’lim tizimini rivojlantirish hamda uni takomillashtirish;
bolalar musiqa va san’at maktabida ta’lim sifatini yaxshilashning asosiy yo‘nalishlarini belgilash, davlat va jamoat tashkilotlarida uning manfaatlarini himoya qilish;
bolalar musiqa va san’at maktabi muassisiga uning moddiy-texnika bazasini mustahkamlash, o‘quv jarayonini yaxshilash bo‘yicha takliflar kiritish;
bolalar musiqa va san’at maktabining yillik o‘quv-tarbiya rejasini tasdiqlash va pedagogik jamoa tomonidan ushbu rejaning amalga oshirilishini nazorat qilish;
musiqa va san’at sohasidagi yangi pedagogik yutuqlarni o‘quv jarayoniga tatbiq etishga, uning moliya-xo‘jalik faoliyatiga rahbarlik qilish;
bolalar musiqa va san’at maktabining pedagog xodimlarga bo‘lgan ehtiyojini aniqlash, kadrlarni tanlash va joy-joyiga qo‘yishni amalga oshirish, pedagog xodimlar attestatsiyasini tashkil qilish;
bolalar musiqa va san’at maktabida ta’lim olayotgan o‘quvchilarning bilimlarini nazorat qilish;
o‘quvchilarni bolalar musiqa va san’at maktabiga qabul qilish, keyingi sinfga o‘tkazish va ta’lim olganlik to‘g‘risidagi hujjatlar berishni tashkil qilish;
ota-onalar bilan o‘quv-tarbiyaviy ishlarni takomillashtirish bo‘yicha hamkorlikni tashkil qilish;
xodimlarga mehnat qilish va malakasini oshirish uchun sharoitlar yaratish, bolalar musiqa va san’at maktabi xodimlarining vazifalari va lavozim majburiyatlarini belgilash, ularni moddiy va ma’naviy jihatdan rag‘batlantirish hamda o‘z vakolati doirasida intizomiy jazo choralarini qo‘llash;
korxona, muassasa va tashkilotlar bilan xo‘jalik sharnomalari tuzishda bolalar musiqa va san’at maktabi nomidan faoliyat yuritish, uning manfaatlarini himoya qilish, ishonchnomalar berish, turli yo‘nalishlardagi davlat va nodavlat jamg‘armalar bilan o‘zaro hamkorlikda ish yuritish;
Bolalar musiqa va san’at maktabi direktori qonun hujjatlariga muvofiq boshqa huquqlarga ham ega bo‘lishi mumkin.
84. 9-son BMSM direktorining majburiyatlari quyidagilardan iborat:
ta’lim sohasidagi va bolalar huquqlarini tartibga soluvchi 
normativ-huquqiy hujjatlarni, bolalar musiqa va san’at maktabi faoliyati hamda uni rivojlantirishning iqtisodiy asoslarini, jamoani boshqarish hamda o‘quv va tarbiya sifatini yaxshilash usullarini bilish;
bolalar musiqa va san’at maktabi faoliyatini tahlil qilish, muammolarini aniqlash va ularni hal qilishning samarali yo‘llarini topish;
kadrlarni tanlash, joy-joyiga qo‘yish va ularning zaxirasini shakllantirish;
pedagoglar va boshqa xodimlarga o‘z faoliyatini amalga oshirishi uchun zarur shart-sharoitlar hamda ular o‘rtasida qulay psixologik va ijodiy muhit yaratish;
o‘quvchilarning intizomi, bilim saviyasi hamda maktab va sinfdan tashqari olib boriladigan ishlarning tashkil etilishi va mazmuni yuzasidan nazoratni amalga oshirish;
o‘quvchilarni kasb-hunarga yo‘naltirish uchun zarur ishlarni tashkil qilish;
bolalar musiqa va san’at maktabining xarajatlar smetasiga rioya etilishini nazorat qilish;
mehnat intizomi, sanitariya qoidalari, normalari va gigiena normativlari, mehnatni muhofaza qilish, yong‘in va texnika xavfsizligi qoidalariga rioya etilishini ta’minlash;
bolalarga yil mobaynida maslahat darslari o‘tilishini va ularni maktabga kirish imtihonlariga tayyorlashni nazorat qilish;
umumiy o‘rta, maktabdan tashqari ta’lim muassasalari, klublar o‘rtasida o‘zaro aloqalar o‘rnatish, ota-onalar va jamoatchilik bilan ish olib borishni tashkil qilish;
pedagog hamda ma’muriy-xo‘jalik xodimlari bilan mehnat shartnomasini tuzish va bekor qilish;
sanitariya-gigiena talablari, mehnatni muhofaza qilish, texnika 
va yong‘in xavfsizligi qoidalariga rioya qilish.
Bolalar musiqa va san’at maktabi direktori zimmasiga qonun hujjatlarida belgilangan boshqa majburiyatlar ham yuklatilishi mumkin.
9-son BMSM direktoriga, direktorning o‘quv-ma’rifiy ishlar bo‘yicha o‘rinbosariga, pedagog xodimlariga 48 ish kunidan iborat mehnat ta’tili beriladi.
Pedagog xodimlar tomonidan mehnat ta’tilidan so‘ng o‘quv yili boshlangunga qadar muassasani yangi o‘quv yiliga tayyorlash, dars taqsimotini shakllantirish va ish rejalarini tuzish, qabul sinovlarini o‘tkazishda qabul komissiyasi faoliyatida ishtirok etish vazifalari amalga oshiriladi.
85. Davlatning musiqa va san’at yo‘nalishi bo‘yicha ta’lim siyosatini amalga oshirish, bolalar musiqa va san’at maktabining maqsadi va vazifalaridan kelib chiqqan holda ta’lim-tarbiya jarayonini rivojlantirish, uni takomillashtirishda pedagogik jamoaning faoliyat yo‘nalishini belgilash, ta’limdagi yutuqlarni 
va ilg‘or pedagogik tajribalarni amaliyotga joriy etishda pedagogik jamoani birlashtirish, demokratiya, oshkoralik, o‘zini o‘zi boshqarish tamoyillari asosida bolalar musiqa va san’at maktabi boshqaruvini amalga oshirish maqsadida pedagogik kengash tashkil qilinadi.
Pedagogik kengash bolalar musiqa va san’at maktabining yuqori boshqaruv organi hisoblanadi.
Pedagogik kengash tarkibiga bolalar musiqa va san’at maktabining direktori va pedagog xodimlari kiritiladi.
86. 9-son BMSMning direktori pedagogik kengash raisi hisoblanadi. Pedagogik kengash kotibi pedagog xodimlar orasidan tayinlanadi. 
Pedagogik kengash raisi o‘z vazifasini bajara olmaydigan (kasal bo‘lgan, xizmat safariga ketgan va hokazo) holatlarda uning vazifalari direktorning o‘quv-ma’rifiy ishlar bo‘yicha o‘rinbosari tomonidan amalga oshiriladi. 
87. Pedagogik kengash tarkibi bolalar musiqa va san’at maktabi direktori, direktorning o‘quv-ma’rifiy ishlar bo‘yicha o‘rinbosari va pedagog xodimlardan iborat bo‘ladi. Bolalar musiqa va san’at maktabining har bir pedagog xodimi ishga qabul qilingan paytdan boshlab pedagogik kengashning a’zosi hisoblanadi.
88. Pedagogik kengashda muhokama qilinadigan masalalarning mazmunidan kelib chiqib, yig‘ilishga tegishli Madaniyat boshqaruv organlari, bolalar musiqa va san’at maktabi ota-onalar qo‘mitasi, fuqarolarning o‘zini 
o‘zi boshqarish organi, mahalliy davlat hokimiyati, huquqni muhofaza qiluvchi organlar va boshqa tashkilotlar vakillari taklif qilinishi mumkin.
89. Pedagogik kengashning faoliyati tegishli Madaniyat boshqaruv organlari (bo‘ysunuviga ko‘ra yuqori turuvchi tashkilot) tomonidan nazorat qilinadi.
90. Pedagogik kengash faoliyati yillik ish reja asosida tashkil etiladi. Ish reja pedagogik kengash yig‘ilishida ko‘rib chiqilib, ma’qullanganidan 
so‘ng pedagogik kengash raisi tomonidan tasdiqlanadi. 
91. Pedagogik kengash yig‘ilishida bolalar musiqa va san’at maktabining faoliyatiga oid eng muhim va dolzarb masalalar muhokama qilinadi.
92. Pedagogik kengash yig‘ilishi har chorakda kamida bir marta o‘tkaziladi. Zaruratga ko‘ra, navbatdan tashqari yig‘ilishlar o‘tkazilishi mumkin. 
Pedagogik kengash yig‘ilishi bayonnomasi uning kotibi tomonidan yuritiladi. Bayonnoma pedagogik kengash raisi va kotibi tomonidan imzolanadi. 
Bayonnomalarning raqami, sanasi va yig‘ilishda ko‘rilgan masalalar to‘g‘risidagi ma’lumotlar pedagogik kengash yig‘ilishi bayonnomalarini qayd etish daftariga yozib boriladi. Pedagogik kengash yig‘ilishi bayonnomalarini qayd etish daftari raqamlanadi, ip o‘tkazib tikiladi hamda tegishli Madaniyat va turizm boshqaruv organi (bo‘ysunuviga ko‘ra yuqori turuvchi tashkilot) bolalar musiqa va san’at maktablari faoliyatini muvofiqlashtirish bo‘yicha bo‘linma mudiri tomonidan imzolanib muhrlanadi.
93. Bayonnomaning kirish qismida pedagogik kengash yig‘ilishi o‘tkazilgan sana, bayonnoma tartib raqami, ishtirok etganlar va ularning soni yoziladi.
Pedagogik kengash yig‘ilishi bayonnomalarini qayd etish daftarida 
kun tartibiga kiritilgan masala muhokamasi, pedagogik kengash a’zolari tomonidan kiritilgan taklif va mulohazalar hamda kun tartibidagi har bir masala yuzasidan qabul qilingan qarorlar qayd etib boriladi. 
Pedagogik kengash yig‘ilishi bayonnomalarini raqamlash har o‘quv yili boshida (avgust oyida) yangidan boshlanadi.
94. Pedagogik kengashning yig‘ilishlari, agar ularda barcha kengash a’zolari umumiy sonining kamida uchdan ikki qismi, navbatdan tashqari yig‘ilishda 
esa uchdan bir qismi ishtirok etayotgan bo‘lsa, vakolatli hisoblanadi. 
95. Pedagogik kengash qarorlarini qabul qilish ochiq ovoz berish orqali amalga oshiriladi.
Pedagogik kengash qarori uning yig‘ilishida ishtirok etgan a’zolari umumiy sonining oddiy ko‘pchilik ovozi bilan qabul qilinadi. Ovozlar teng bo‘lib qolgan taqdirda pedagogik kengash raisi hal qiluvchi ovozga ega bo‘ladi.
96. Pedagogik kengash yig‘ilishini o‘tkazish vaqti, joyi va kun tartibi 
bir hafta oldin e’lon qilinadi. 
97. Pedagogik kengash yig‘ilishida muhokama qilinadigan masalalar bo‘yicha materiallar doimiy yoki vaqtincha tashkil etilgan guruhlar yoxud tegishli pedagog xodimlar tomonidan tayyorlanadi.
98. 9-son BMSMning pedagogik kengashi quyidagi huquqlarga ega:
bolalar musiqa va san’at maktabining o‘quv jarayonini takomillashtirish 
va moddiy-texnik bazasini mustahkamlash bo‘yicha qarorlar qabul qilish;
o‘quv yili yakunida o‘quvchilarni keyingi sinfga ko‘chirish yoki sinfda qoldirish masalalarini hal etish;
o‘quv, ma’naviy-ma’rifiy, ilmiy-metodik va tajriba-sinov ishlarida faol ishtirok etgan pedagog xodimlarni moddiy rag‘batlantirish yuzasidan bolalar musiqa va san’at maktabi huzuridagi maxsus komissiyaga taklif kiritish;
pedagog xodimlar orasidan bolalar musiqa va san’at maktabi huzuridagi maxsus komissiyaning kamida ikki nafar a’zosini tayinlash;
pedagog xodimning malaka toifasini oshirish bo‘yicha tavsiya berish;
ko‘rik-tanlovlar, festivallar, ustoz saboqlari hamda boshqa musiqa 
va san’at tadbirlarida o‘qituvchilar va o‘quvchilarning ishtirok etishlari uchun nomzodlarini tavsiya etish;
bolalar musiqa va san’at maktabida o‘quv jarayonini takomillashtirish bo‘yicha choralar ko‘rish;
bolalar musiqa va san’at maktabining istiqbol rejasini belgilash.
Pedagogik kengash qonun hujjatlariga hamda o‘z vazifalariga muvofiq boshqa huquqlarga ham ega bo‘lishi mumkin.
99. 9-son BMSMning pedagogik kengashi quyidagilarga majbur:
bolalar musiqa va san’at maktabining ish rejasi bajarilishini ta’minlash;
pedagog xodimlar va o‘quvchilarning huquqlari va qonuniy manfaatlarini himoya qilish; 
bolalar musiqa va san’at maktabining faoliyatiga oid eng muhim va dolzarb masalalarni muhokama qilish;
har chorakda bolalar musiqa va san’at maktabi metodik kengashining faoliyatiga doir hisobotini ko‘rib chiqish;
ta’lim-tarbiya sifatini yanada yaxshilash bo‘yicha berilgan har qanday taklifni qabul qilish va ko‘rib chiqish;
dars mashg‘ulotlari o‘quv rejasini o‘quvchilar tomonidan o‘zlashtirishga qulay bo‘lishi nuqtai nazaridan takomillashtirish;
ta’lim-tarbiyaga oid munozarali masalalarni muhokama qilish va yakuniy qaror qabul qilish;
zamonaviy axborot-kommunikatsion texnologiyalarni joriy etish bo‘yicha pedagogik izlanishlarni va ijodiy tashabbuskorliklarni qo‘llab-quvvatlash;
o‘quv jarayonini samarali tashkil qilishning turli shakl va uslublarini muhokama qilish va amaliyotga tatbiq etish;
pedagog xodimlarga maktabdan tashqari ta’limga oid normativ-huquqiy 
va metodik hujjatlarning yetkazilishi va tushuntirish ishlarining olib borilishini nazorat qilish.
Pedagogik kengash qonun hujjatlariga hamda o‘z vazifalariga muvofiq boshqa majburiyatlarga ham ega bo‘lishi mumkin.
100. 9-son BMSMda pedagogik kengashi faoliyatiga oid quyidagi hujjatlar bo‘lishi lozim:
pedagogik kengashining tasdiqlangan ish rejasi;
pedagogik kengash yig‘ilishlarining bayonnomalar kitobi;
pedagogik kengash yig‘ilishlarida muhokama qilingan masalalar yuzasidan tahliliy materiallar (bo‘linma mudirlari hisoboti).
101. Pedagogik kengash hujjatlarining saqlanishiga pedagogik kengash raisi va kotibi javobgar hisoblanadi.
Pedagogik kengash yig‘ilishi bayonnomalari kitobi doimiy, tayyorlangan tahliliy materiallar va hujjatlar esa uch yil mobaynida saqlanadi hamda tegishli arxivga topshiriladi.
102. Pedagogik kengash qarorlarini bajarish bolalar musiqa va san’at maktabining har bir xodimi uchun majburiy bo‘lib, qarorlar ijrosining umumiy nazorati pedagogik kengash raisi tomonidan amalga oshiriladi.
103. Pedagogik kengash a’zolari ro‘yxatini tasdiqlash to‘g‘risidagi qaror, shuningdek pedagogik kengash tomonidan qabul qilingan boshqa qarorlar 
va hisobotlar uch nusxada qabul qilinadi. Uning bir nusxasi pedagogik kengash kotibida, ikkinchisi pedagogik kengash raisida saqlanadi, uchinchisi 
esa barchaning tanishib chiqishi uchun bolalar musiqa va san’at maktabining ko‘rinarli, qulay bo‘lgan joyga ilib qo‘yiladi.
104. Pedagogik kengashning raisi pedagogik kengash qabul qilgan qarorlarning bajarilishini doimiy ravishda nazorat qilib boradi.
            </p>
        </div>

        <div>
            <h1 className="text-4xl mt-5 text-center">8-bob. Jamoat tashkilotlari</h1>
            <p className="mt-10 text-center mb-5">
                
105. 9-son BMSMning kasaba uyushmasi qo‘mitasi jamoat birlashmasi hisoblanib, uning faoliyati qonun hujjatlariga muvofiq tashkil etiladi.
106. 9-son BMSMning kasaba uyushmasi qo‘mitasi o‘quv, ilmiy-metodik, ma’naviy-ma’rifiy ishlarni yaxshilash, jamoada ijtimoiy-psixologik muhitni sog‘lomlashtirish, xodimlar huquqlarini himoya qilish, ularning ish sharoitlarini yaxshilash, mas’uliyatlarini shakllantirish va mehnat intizomini mustahkamlash kabi masalalarni hal etadi.
107. O‘zbekiston Respublikasining amaldagi qonun hujjatlariga asosan bolalar musiqa va san’at maktabi o‘quvchilarining ota-onalari, fuqarolarning o‘zini o‘zi boshqarish organlari, boshqa ta’lim muassasalari va nodavlat notijorat tashkilotlari bilan uzviy aloqada faoliyat ko‘rsatadi.
108. 9-son BMSMda qonun hujjatlariga muvofiq o‘quvchilarning jamoat birlashmalari faoliyat ko‘rsatishi mumkin.
            </p>
        </div>

        <div>
            <h1 className="text-4xl mt-5 text-center">9-bob. Bolalar musiqa va san’at maktabining
            mol-mulki va mablag‘lari</h1>
            <p className="mt-10 text-center mb-5">
            109. 9-son BMSM faoliyatini moliyalashtirish belgilangan tartibda tasdiqlangan va ro‘yxatdan o‘tkazilgan xarajatlar smetasiga muvofiq amalga oshiriladi.
Bolalar musiqa va san’at maktabi o‘ziga biriktirilgan mol-mulkni 
va xarajatlar smetasi bo‘yicha ajratilgan mablag‘larni qonun hujjatlariga muvofiq tasarruf etadi.
110. 9-son BMSM faoliyatini moliyalashtirish quyidagi manbalar hisobiga amalga oshiriladi:
O‘zbekiston Respublikasi Davlat byudjeti mablag‘lari;
ota-onalar to‘lovi mablag‘lari;
byudjetdan tashqari qo‘shimcha pullik xizmatlardan tushgan mablag‘lar;
111. 9-son BMSMda quyidagi pullik xizmatlar amalga oshirilishi mumkin:
o‘quvchilar va pedagog xodimlar tomonidan tayyorlangan mahsulotlar 
va buyumlarni sotish;
qo‘shimcha ta’lim xizmatlari (ayrim sabablarga ko‘ra BMSMga o‘qishga qabul qilinmagan yoshi chegaralanmagan shaxslar);
xo‘jalik faoliyatidan, qonun hujjatlarida ta’qiqlanmagan shartnoma asosida pulli xizmat ko‘rsatish;
o‘quvchilar va pedagog xodimlar tomonidan o‘quv-tarbiya jarayoniga ta’sir etmagan holda badiiy kechalar, konsert va teatr tomoshalari tashkil etish;
musiqa va san’at asbob, uskunalarini ta’mirlash;
ovoz yozish studiya xizmatlari;
jismoniy va yuridik shaxslarning qonun hujjatlarida taqiqlanmagan homiylik xayriyalari, mahalliy va xalqaro tashkilotlarning grantlari;
asosiy mashg‘ulotlardan tashqari paytda bo‘sh binolar, xonalar, 
asbob-uskunalarni ijaraga berish;
kam ta’minlangan oilalar farzandlari va qarovchisiz qolgan o‘quvchilarga o‘quv yili davomida uyda mustaqil foydalanish uchun sharoitdan kelib chiqib, cholg‘u asboblar, uskunalar va o‘quv qo‘llanmalar vaqtincha bepul berilishi mumkin.
qonun hujjatlarida ta’qiqlanmagan boshqa manbalar.
112. Qonun hujjatlarida taqiqlanmagan faoliyatdan olingan daromad hisobiga sotib olingan mol-mulk bolalar musiqa va san’at maktabining mol-mulki tarkibiga kiritiladi.
Bolalar musiqa va san’at maktabining mol-mulki va pul mablag‘lari sarflanishi uchun bevosita uning direktori javobgar hisoblanadi.
113. 9-son BMSM tomonidan qonun hujjatlariga muvofiq moliyaviy va statistik hisobot yuritiladi.
114. 9-son BMSM xodimlarini moddiy va ma’naviy rag‘batlantirish hamda ish haqiga ustamalar qonun hujjatlariga muvofiq belgilanadi.
Bolalar musiqa va san’at maktabi shtatidagi xodimlar soni uning namunaviy shtatlariga muvofiq belgilanadi.
115. 9-son BMSMning moddiy-texnika ta’minoti va kadrlar bilan ta’minlanishi belgilangan normativlarga muvofiq ehtiyojlar asosida amalga oshiriladi.
116. 9-son BMSM tegishli mahalliy davlat hokimiyati organlari bilan birgalikda o‘zining moddiy-texnika bazasini mustahkamlash chora-tadbirlarini amalga oshiradi.
            </p>
        </div>

        <div>
            <h1 className="text-4xl mt-5 text-center"></h1>
            <p className="mt-10 text-center mb-5">
            </p>
        </div>
        <div>
            <h1 className="text-4xl mt-5 text-center">11-bob. Yakuniy qoidalar</h1>
            <p className="mt-10 text-center mb-5">
            120. 9-son BMSM qonunchilikda belgilangan tartibda maktabdan tashqari ta’lim bo‘yicha xalqaro hamkorlikni yo‘lga qo‘yishi mumkin. 
Ularning xalqaro hamkorligi shartnomalar asosida xorijiy tashkilotlar bilan pedagogik axborot va tajriba almashish, pedagog xodimlarning malaka oshirishi hamda stajirovka o‘tashi shaklida amalga oshirilishi mumkin.
121. 9-son BMSMda uning ish faoliyati bilan bog‘liq bo‘lmagan tashkilotlar, jumladan, siyosiy partiyalar va harakatlar tashkil etilishiga va faoliyat yuritishiga yo‘l qo‘yilmaydi.
122. Mazkur ustavda aks ettirilmagan masalalar yuzasidan vujudga kelgan muammoli vaziyatlar qonun hujjatlariga muvofiq hal etiladi.
123. 9-son BMSM Nizomiga o‘zgartirish va qo‘shimchalar kiritish uni tasdiqlash tartibiga muvofiq amalga oshiriladi.
            </p>

            <div className="text-2xl text-end mb-5">
            <b>Direktor</b> <i>Sh.Xalmetova</i>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ustavi;
