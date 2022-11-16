import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        image: '/images/service/galery-image-01.png',
        title: 'Персональный он-лайн тренинг',
        description: 'Старые добрые Google Meets! Это новая норма, верно? Мы определяем цели и задачи, составляем индивидуальную программу, формируем комфортный график, и я присоединяюсь к тебе в Meets, чтобы следить за техникой выполнения упражнений и твоим самочувствием. Это лучший вариант, если ты хочешь тренироваться, не выходя из дома.'
    },
    {
        image: '/images/service/galery-image-02.png',
        title: 'Групповой он-лайн тренинг (следи за расписанием)',
        description: 'Групповой он-лайн формат функциональной, силовой или кардио тренировки длительностью 45-60 мин.\n' +
            'Работая через Meets, я могу коммуницировать с каждым из вас и корректировать технику, а так же мотивировать не сдаваться. Эгрегор группового тренинга поддаст драйва, вместе мы быстро сделаем друг друга круче, выносливее и сильнее.'
    },
    {
        image: '/images/service/galery-image-03.png',
        title: 'Видео-тренинг',
        description: 'Специально разработанные мной программы тренировок для всех уровней подготовки с учетом всех потребностей нашего комьюнити. Методично выполняя все мои видео-предписания в удобное для тебя время, ты быстро приблизишься к желаемым результатам.'
    }
]
const ServiceFive = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="inner">
                                <div className="content">
                                    <h4 className="title">
                                        <Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link>
                                    </h4>
                                    <p className="description" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                </div>
                                <div className="image">
                                    <img src={`${val.image}`} alt="card Images" />
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceFive;
