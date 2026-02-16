import React from 'react'
import photo from './assets./desing(2).svg'
const SectionTwo = () => {
  return(
    <div className='bg-gray-950 text-amber-50 '>
        <section className='max-w-2xl m-8 p-20'>
            <div className='text-center text-amber-600 font-light'> Предоставляем</div>
            <h1 className='text-center m-2 text-3xl'>Наши услуги</h1>
            <div>
            <div>
                <img src={photo} alt="" />
                <h3>UX/UI design</h3>
                <p>Наша компания осуществляет свою деятельность на Кыргызстана и всей Центральной Азии,</p>
                <ul>
                    <li>Дизайн </li>
                    <li> Иконки и иллюстрации</li>
                    <li> Прототипы</li>
                </ul>
            </div>
            </div>
            </section>
     </div>
  )
}

export default SectionTwo