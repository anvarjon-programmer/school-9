import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import global_en from '../src/translation/en/global.json'
import global_ru from '../src/translation/ru/global.json'
import global_uz from '../src/translation/uz/global.json'
import LanguageDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next'
i18next.use(LanguageDetector).init({
    interpolation:{escapeValue:false},
    lng:"uz",
    resources:{
        uz:{
            global:global_uz
        },
        en:{
            global:global_en
        },
        ru:{
            global:global_ru
        },
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>
    </BrowserRouter>
)