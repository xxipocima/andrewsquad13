import React from 'react';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import TrackVisibility from 'react-on-screen';

const progressData = [
    {
      id: 1,
      title: "Профессиональный подход и проверенные на практике тренировки.",
      percantage: 100,
      subtitle: "",
      strokeColor: "#0f0f11",
      strokePath: "#059DFF",
      strokeLinecap: 'round',
      strokeWidth: 5
    },

    {
      id: 2,
      title: "Мотивация и мощный заряд энергии от тренера.",
      percantage: 100,
      subtitle: "",
      strokeColor: "#0f0f11",
      strokePath: "#059DFF",
      strokeLinecap: 'round',
      strokeWidth: 5
    },

    {
      id: 3,
      title: "С тобой всегда и везде.",
      percantage: 100,
      subtitle: "",
      strokeColor: "#0f0f11",
      strokePath: "#059DFF",
      strokeLinecap: 'round',
      strokeWidth: 5
    },
    {
      id: 4,
      title: "Заинтересованность в твоем результате.",
      percantage: 100,
      subtitle: "",
      strokeColor: "#0f0f11",
      strokePath: "#059DFF",
      strokeLinecap: 'round',
      strokeWidth: 5
    },
    {
      id: 5,
      title: "Сжигаем до 800 ккал за тренировку.",
      percantage: 100,
      subtitle: "",
      strokeColor: "#0f0f11",
      strokePath: "#059DFF",
      strokeLinecap: 'round',
      strokeWidth: 5
    },
    {
      id: 6,
      title: "Улучшения самочувствия и тонус мышц.",
      percantage: 100,
      subtitle: "",
      strokeColor: "#0f0f11",
      strokePath: "#059DFF",
      strokeLinecap: 'round',
      strokeWidth: 5
    },
];

const CircleProgress = () => {
    return (
        <div className="row row--30">
            {progressData.map((progress, index) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30" key={index}>
                <div className="rwt-circle text-center">
                    <TrackVisibility once>
                        {({ isVisible }) => isVisible && 
                            <AnimatedProgressProvider
                                valueStart={0}
                                valueEnd={progress.percantage}
                                duration={1.4}
                                easingFunction={easeQuadInOut}
                                repeat= {false}
                                
                            >
                                {value => {
                                const roundedValue = Math.round(value);
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={`${roundedValue}%`}
                                        strokeWidth={progress.strokeWidth}
                                        styles={
                                            {
                                                trail: {
                                                    stroke: progress.strokeColor,
                                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                                },
                                                text: {
                                                    fill: '#adb5c4',
                                                    fontSize: '16px',
                                                    dominantBaseline: 'central',
                                                    textAnchor: 'middle',
                                                },
                                                path: {
                                                    stroke: progress.strokePath,
                                                    strokeLinecap: progress.strokeLinecap,
                                                },
                                            }
                                        }
                                    />
                                );
                                }}
                            </AnimatedProgressProvider>                            
                        }
                    </TrackVisibility>
                    <div className="circle-info">
                        <h4 className="title">{progress.title}</h4>
                        <span className="subtitle">{progress.subtitle}</span>
                    </div>
                </div>
            </div>
            ))} 
        </div>
    )
}
export default CircleProgress;
