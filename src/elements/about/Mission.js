import React from 'react';
import Typed from 'react-typed';
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import AccordionOne from '../accordion/AccordionOne';

const mission = () => {
    return (
        <div className="rn-company-mission-are rn-section-gap">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-6">
                        <div className="mission-title">
                            <h2 className="title">Кто я?!<br /> {" "}
                                <Typed className="theme-gradient"
                                    strings={[
                                        "Yo!",
                                        "Привет, боец.",
                                        "Почитай внимательно.",
                                    ]}
                                    typeSpeed={80}
                                    backSpeed={5}
                                    backDelay={1000}
                                    loop
                                />
                            </h2>
                            <p>Меня зовут Андрей Матвиенко, и я - твой персональный тренер.
                                Чтобы профессионально тренировать тебя, я получил степень магистра
                                педагогических наук в области физического развития, спорта и рекреации с реабилитационным уклоном.
                                Предупреждаю, я - буйный парень, и моя энергия с детства находит выход в спорте. Брейк-дэнс, экстремальный велоспорт, профессиональный хоккей, мотоспорт, прыжки на батуте и кросс-фит - все любимое и мое.
                                Мое тело - это красиво. Я получил его, пытаясь доказать себе и окружающим, что возможности человеческого организма безграничны. Теперь своей целью я вижу сделать тренировочный процесс азартным и для тебя.
                                Ты точно получишь удовольствие от результатов - ты станешь быстрее, сильнее, выносливее. Ты удивишься, и захочешь большего. Тренировки начнут даваться легче. И однажды ты заметишь, как ты кайфуешь от каждого нового рывка. В голове сформируется самая лучшая нейронная связь - азарт-попытка-усилие-результат. Я буду рядом, буду работать так же упорно вместе с тобой, в этом и есть смысл - стать лучшим примером для тебя.
                            </p>

                            <p>Мой интерес  - это твой прогресс от старта и до финиша, моя цель - твои достижения, хорошее самочувствие и здоровье.
                                Увидимся на тренировке!
                            </p>

                            <div className="read-more-btn mt--50">
                                <Link className="btn-default btn-icon" to="#">Go! <i className="icon"><FiArrowRight /></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt_md--30 mt_sm--30">
                        <AccordionOne customStyle="" />
                    </div>
                </div>
            </div>                        
        </div>
    )
}
export default mission;
