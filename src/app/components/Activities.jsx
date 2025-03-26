"use client";
import React, { useState } from "react";
import "./Activities.css";

const ExpandableCard = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`card ${isExpanded ? "card-expanded" : "card-collapsed"}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <div className={`card-toggle ${isExpanded ? "rotate-180" : ""}`}>
          <img src="./images/toddle.png" alt="toggle" className="card-icon" />
        </div>
      </div>
      {isExpanded && <p className="description">{description}</p>}
    </div>
  );
};

const Activities = () => {
  const cardsData = [
    {
      title: "Інформаційні зони",
      description:
        "Спеціальні зони, де компанії протягом двох годин щодня презентують себе, спілкуються зі студентами та надають інформацію про вакансії й можливості стажування.",
    },
    {
      title: "Воркшоп",
      description:
        "Інтерактивний захід, який передбачає активну участь студентів у розв’язанні практичних завдань під керівництвом експерта. Це дає змогу закріпити теоретичні знання та отримати цінні поради для майбутньої кар’єри.",
    },
    {
      title: "Панельна дискусія",
      description:
        "Панельна дискусія – це інтерактивний формат обговорення, де група експертів обмінюється думками на актуальну тему під керівництвом модератора. До дискусії також долучаються студенти, які можуть ставити запитання, висловлювати свої погляди. Це дозволяє розглянути різні ідеї та знайти нові розв’язання актуальних проблем.",
    },
    {
      title: "Share and Win",
      description:
        "Студенти виконують інтерактивні завдання від представників компанії, які допомагають їм краще залучатись до ярмарку та знайомитися з компаніями-учасниками. Кожне виконане завдання підтверджується фотозвітами у Stories з позначкою @best_lviv та Вашої компанії. Найактивніші учасники отримають призи від компаній-партнерів.",
    },
    {
      title: "BEST Treasure Hunt",
      description:
        "Квест для студентів, який проводиться за кілька днів до початку події. Головне завдання – знайти заховані призи від компаній-партнерів на території Львівської політехніки. Обов'язковою умовою для отримання подарунка є позначення у соцмережах акаунтів наших партнерів.",
    },
    {
      title: "Симуляція співбесід",
      description:
        "Активність тривалістю до 10 хв на кожного учасника. Впродовж відведеного часу, студенти відпрацьовують навички проходження реальної співбесіди, отримують карʼєрні консультації та зворотний звʼязок від компаній.",
    },
    {
      title: "Нетворкінг",
      description:
        "Це неформальна зустріч студентів, представників компаній, університету та організаторів, що відбувається після першого дня події. Це чудова можливість відпочити в невимушеній атмосфері, поспілкуватися з студентами, потенційними партнерами та працівниками, а також розширити коло корисних знайомств.",
    },
];


  return (
    <section className="container">
      <h2 className="title">Активності</h2>
      <div className="contentwrapper">
        <div className="cardcontainer">
          {cardsData.map((card, index) => (
            <ExpandableCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="pictures">
          <img
            src="./images/activity1.png"
            alt="Activity 1"
            className="activity1"
          />
          <img
            src="./images/activity2.png"
            alt="Activity 2"
            className="activity2"
          />
          <img
            src="./images/activity3.png"
            alt="Activity 3"
            className="activity3"
          />
        </div>
      </div>
    </section>
  );
};

export default Activities;