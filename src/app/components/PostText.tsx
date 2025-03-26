"use client";
import "./PostText.css";
import React from "react";

const PostText = () => {
  return (
    <div className="post-text-container">
      {/* Outer gradient rectangle */}
      <div className="outer-rectangle">
        {/* Blue rectangle with white text */}
        <div className="blue-rectangle">
          Після завершення Інженерного Ярмарку Кар’єри Вам надається фото та відеозвіт від організаторів.
        </div>
        {/* Transparent rectangle with gradient border */}
        <div className="transparent-rectangle">
          У рамках Ярмарку кар'єри оголошуємо збір коштів на підтримку Збройних Сил України. Це важливий крок для кожного з нас, адже ваша підтримка допоможе забезпечити наших військових необхідними ресурсами для виконання бойових завдань та захисту державних інтересів. Закликаємо всі підприємства, організації та учасників долучитися до ініціативи та зробити свій внесок у підтримку обороноздатності нашої країни.
        </div>
      </div>
    </div>
  );
};

export default PostText;