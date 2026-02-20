import React from 'react'

const SectionLeyt = () => {
  return (
    <div>
        <div className='section'>
            <p className='text-amber-600'>Отзывы</p>
            <h1 className='text-2xl text-amber-50 m-2 font-bold ' >Благодарности наших клиентов</h1>
             <div className='boosl'>
            <div className='boos'>
                <img src="" alt="" />
                <h2>Эшмат Ташматов</h2>
                <p>Директов компании “Airtickets”</p>
                <h4>«Спасибо, ребята за оперативную и качественную работу! Сайт получился отличный! Все, что я хотел реализовали. Буду и дальше сотрудничать.Теперь у моей авиакомпании стало больше клиентов и все благодаря вам».</h4>
            </div>
             <div className='boos'>
                <img src="" alt="" />
                <h2>Эшмат Ташматов</h2>
                <p>Директов компании “Airtickets”</p>
                <h4>«Спасибо, ребята за оперативную и качественную работу! Сайт получился отличный! Все, что я хотел реализовали. Буду и дальше сотрудничать.Теперь у моей авиакомпании стало больше клиентов и все благодаря вам».</h4>
            </div>
             <div className='boos'>
                <img src="" alt="" />
                <h2>Эшмат Ташматов</h2>
                <p>Директов компании “Airtickets”</p>
                <h4>«Спасибо, ребята за оперативную и качественную работу! Сайт получился отличный! Все, что я хотел реализовали. Буду и дальше сотрудничать.Теперь у моей авиакомпании стало больше клиентов и все благодаря вам».</h4>
            </div>
        </div>


        <div>
            <section className=' border-2  border-gray-500 m-6 rounded-2xl p-3 bg-neutral-900'>
                <p className='text-amber-600'>Заявка</p>
                <h1  className='text-2xl text-amber-50 m-2 font-bold   ' >Получить бесплатную консультацию</h1>
                <div className='flex'>
                     <div className='input text-amber-50 flex flex-col gap-3 m-7'>
                    <input className='border-2 border-gray-500  bg-neutral-800  py-2 px-20 pr-40 rounded-2xl ' type="text" placeholder='Имя' />
                    <input className='border-2 border-gray-500 bg-neutral-800   py-2 px-20 pr-40 rounded-2xl ' type="number" placeholder='number' />
                    <input className='border-2 border-gray-500  bg-neutral-800    py-2 px-20 pr-40 rounded-2xl ' type="number" placeholder='number' />
                    <input className='border-2  border-gray-500 bg-neutral-800 py-10 px-20 pr-40 rounded-2xl ' type="text" placeholder='Что вас интересует?' />
                    <button className='border-2 bg-orange-500 py-2 px-20 pr-40 rounded-2xl '> hbj</button>
                </div>
                <div  className='input text-amber-50 flex flex-col gap-5 m-7'>
                    <div className='border-2  bg-neutral-800 border-gray-500 py-2 px-20 pr-40 rounded-2xl '>Телефон
                        <p>0845786587</p>
                    </div>
                    <div className='border-2  bg-neutral-800 border-gray-500 py-2 px-20 pr-40 rounded-2xl '>Адрес
                        <p>г. Бишкек, ул. Манас60/1</p>
                    </div >
                    <div className='border-2 bg-neutral-800 border-gray-500 py-2 px-20 pr-40 rounded-2xl '>Режим работы
                        <p>с 10:00 до 19:00, Пн-Сб</p>
                    </div>
                </div>
                </div>
               
            </section>
        </div>
        </div>
       
    </div>
  )
}

export default SectionLeyt