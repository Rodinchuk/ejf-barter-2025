"use client";
import React, { useState } from "react";
import PackageCard from "./PackageCart"; 
import AdditionalService from "./AdditionalService";
import Cart from "./Cart"; 
import { Package, AdditionalService as ServiceType } from "../types/types";
import "@/app/components/PackagesSection.css";
import "@/app/components/AdditionalService.css";
import waveUp from "../../../public/images/bg-hero.png";
import ExtrabigBalls from  "../../../public/images/extrabigballs.png";
import Image from "next/image";

const packages: Package[] = [
  {
    id: "basic",
    name: "Basic",
    price: ["350"],
    features: [
      "Участь у двох днях події з власним банером",
      "Ваш логотип у постпроєктному відео та на brand wall",
      "Транслювання відеоролика компанії під час події",
      "Участь у нетворкінгу", 
      "Share and Win",
    ],
    info: `
      <p><b style="font-family: 'Exo 2', sans-serif; font-size: 2em; color: #257BFC">Basic</b></p>
      <p><b style="font-family: 'Exo 2', sans-serif; font-size: 1.2em">Участь у двох днях події з власним банером</b></p>
      <p>За Вами буде закріплено місце для розміщення банера та промоматеріалів, а також надано можливість поспілкуватися зі студентами, щоб представити бренд. Ми допоможемо підібрати інтерактивні вікторини або розглянемо Ваші пропозиції.</p>
      <p><b style="font-family: 'Exo 2', sans-serif; font-size: 1.2em">Ваш логотип у постпроєктному відео та на brand wall</b></p>
      <p>Логотип буде розміщено у поствідео події та на великому банері разом із логотипами партнерів.</p>
      <p><b style="font-family: 'Exo 2', sans-serif; font-size: 1.2em">Транслювання відеоролика компанії під час події</b></p>
      <p>На місці події будуть екрани для трансляції відеороликів (тривалість 25-30 секунд).</p>
      <p><b style="font-family: 'Exo 2', sans-serif; font-size: 1.2em">Участь у нетворкінгу</b></p>
      <p>Зустріч представників компаній із учасниками та організаторами в неформальній атмосфері.</p>
      <p><b style="font-family: 'Exo 2', sans-serif; font-size: 1.2em">Share and Win</b></p>
      <p>Студенти виконують інтерактивні завдання від представників компанії, які допомагають їм краще залучатись до ярмарку та знайомитися з компаніями-учасниками. Кожне виконане завдання підтверджується фотозвітами у Stories з позначкою @best_lviv та Вашої компанії. Найактивніші учасники отримають призи від компаній-партнерів.</p>
    `,
  },
  
  {
    id: "interactive",
    name: "Interactive",
    price: ["300"],
    features: [
      "Панельна дискусія",
      "BEST Treasure Hunt",
      "Закріплені Instagram stories",
    ],
    info: `
      <p><b style="font-family: 'Exo 2', sans-serif; font-size: 2em;color: #257BFC">Interactive</b></p>
      <p><b style="font-family: 'Exo 2', sans-serif; font-size: 1.2em">Панельна дискусія:</b></p>
      <p>Обговорення підібраної теми між студентами та спікерами. Модератор допомагає взаємодіяти з усіма учасниками.</p>
      <p><b style="font-family: 'Exo 2', sans-serif; font-size: 1.2em">BEST Treasure Hunt:</b></p>
      <p>За два дні до події студенти шукають призи на території Львівської Політехніки за підказками в Instagram @best_lviv.</p>
      <p><b style="font-family: 'Exo 2', sans-serif; font-size: 1.2em">Закріплені Instagram stories:</b></p>
      <p>Промоція компанії у 2 Stories на офіційній сторінці, які залишаються впродовж 3 місяців.</p>
    `,
  },
  {
    id: "performer",
    name: "Performer", 
    price: ["400"],
    features: [
      "Проведення воркшопу",
      "Публікація статті про компанію на сайті",
      "Розміщення індивідуального поста про компанію в Instagram",
    ],
    info: `
      <p><b style="font-family: 'Exo 2', sans-serif; font-size: 2em; color: #257BFC">Performer</b></p>
      <p><b style="font-family: 'Exo 2', sans-serif; font-size: 1.2em">Проведення воркшопу</b></p>
      <p>Навчальний захід, де представники компанії допомагають учасникам розвиватися в темі, важливій для їхньої кар'єри.</p>
      <p><b style="font-family: 'Exo 2', sans-serif; font-size: 1.2em">Публікація статті про компанію на сайті:</b></p>
      <p>Інформація про вашу компанію, її місію та успіхи буде опублікована на нашому сайті.</p>
      <p><b style="font-family: 'Exo 2', sans-serif; font-size: 1.2em">Розміщення індивідуального поста про компанію в Instagram:</b></p>
      <p>Фото з описом діяльності компанії на сторінці @best_lviv.</p>
    `,
  },
];


const additionalServices: ServiceType[] = [
  
  {
    id: "treasure-hunt",
    name: "BEST Treasure Hunt",
    price: 160,
    info: `
    <p><b>Участь у BEST Treasure Hunt</b></p>
    <p>Студенти беруть участь у захопливому пошуку призів на території Львівської Політехніки за підказками з Instagram @best_lviv.</p>

  `,},

  {
    id: "interview-simulation",
    name: "Симуляція співбесід",
    price: 130,
    info: `
    <p><b>Симуляція співбесід</b></p>
    <p>Зареєстровані студенти беруть участь у коротких співбесідах тривалістю до 10 хвилин. Представники компанії можуть розповісти про стажування чи вакансії.</p>

  `,},

  {
    id: "telegram-promo",
    name: "Промоція кар'єрних можливостей в Telegram-боті події",
    price: 120,
    info: `
    <p><b>Промоція кар'єрних можливостей в Telegram-боті події</b></p>
    <p>Студенти отримують інформацію про стажування, курси чи вакансії вашої компанії через Telegram-бот.</p>
  `,},

  {
    id: "cv-access",
    name: "Доступ до бази CV учасників",
    price: 110,
    info: `
    <p><b>Доступ до бази CV учасників</b></p>
    <p>Партнери отримують доступ до бази CV студентів, які зареєструвалися через Telegram-бот події.</p>
  `,},

  {
    id: "website-article",
    name: "Публікація статті про компанію на сайті BEST Lviv",
    price: 100,
    info: `

    <p><b>Публікація статті про компанію на сайті BEST Lviv</b></p>
    <p>Інформація про вашу компанію, її місію та успіхи буде опублікована на нашому сайті.</p>
  `,},


  {
    id: "instagram-stories",
    name: "Закріплені Instagram stories",
    price: 80,
    info: `
    <p><b>Закріплені Instagram stories</b></p>
    <p>Промоція у 2 Stories на офіційній сторінці @best_lviv, які залишаються протягом місяця.</p>
  `,},

  {
    id: "linkedin-post",
    name: "Індивідуальний пост про компанію в LinkedIn",
    price: 80,
    info: `
    <p><b>Індивідуальний пост в LinkedIn</b></p>
    <p>Представлення ключових переваг вашої компанії у форматі поста на сторінці BEST Lviv.</p>
  `,},


];


const PackagesSection = () => {
  const [selectedPackages, setSelectedPackages] = useState<Package[]>([packages[0]]);
  const [selectedServices, setSelectedServices] = useState<ServiceType[]>([]);
  const [modalContent, setModalContent] = useState<string | null>(null);

  const handlePackageSelect = (id: string) => {
    const pkg = packages.find((p) => p.id === id);
    if (!pkg) return;

    setSelectedPackages((prev) => {
      if (prev.some((p) => p.id === id)) {
        return prev.filter((p) => p.id !== id);
      }
      return [...prev, pkg];
    });
  };

  const handleServiceSelect = (id: string) => {
    const service = additionalServices.find((s) => s.id === id);
    if (!service) return;

    setSelectedServices((prev) => {
      if (prev.some((s) => s.id === id)) {
        return prev.filter((s) => s.id !== id);
      }
      return [...prev, service];
    });
  };

  const handleRemove = (id: string) => {
    setSelectedPackages((prev) => prev.filter((p) => p.id !== id));
    setSelectedServices((prev) => prev.filter((s) => s.id !== id));
  };

  const handleInfoClick = (info: string | undefined) => {
    if (info) {
      setModalContent(info);
    }
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="packages-section">
      <Image className="extrabigballs" src={ExtrabigBalls} alt="exrtabigballs"></Image>
      
      <div className="packpack">
      <Image className="package-wave-up" src={waveUp} alt="wave" />
      <div className="container">
        <h2 id="partnership" className="section-title">
          Пакети пропозицій
        </h2>
        <div className="packages-grid">
        <PackageCard
  pkg={packages[0]}
  isSelected={true}
  onSelect={() => {}}
  isBasic={true}
  onInfoClick={() => handleInfoClick(packages[0].info)}
/>
{packages.slice(1).map((pkg, index) => (
  <PackageCard
    key={pkg.id}
    pkg={pkg}
    isSelected={selectedPackages.some((p) => p.id === pkg.id)}
    onSelect={() => handlePackageSelect(pkg.id)}
    onInfoClick={() => handleInfoClick(pkg.info)}
    isLast={index === packages.length - 2}
  />
))}

        </div>

        <h3 className="section-subtitle">Додаткові опції</h3>

        <div className="additional-services-container">
          {additionalServices.map((service) => (
            <AdditionalService
              key={service.id}
              service={service}
              isSelected={selectedServices.some((s) => s.id === service.id)}
              onSelect={() => handleServiceSelect(service.id)}
              onInfoClick={() => handleInfoClick(service.info)}

            />
          ))}
        </div>

        <div className="cart-container">
          <Cart selectedPackages={selectedPackages} additionalServices={selectedServices} onRemove={handleRemove} />
        </div>
      </div>

      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}> 

          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-scrollable-content" dangerouslySetInnerHTML={{ __html: modalContent }}>
            </div>
          <button className="modal-close-button" onClick={closeModal}> Закрити
          </button>
          </div>
        </div>
      )}
      <Image className="package-wave-down" src={waveUp} alt="wave" />
      <div className="army-text"><p className="army-text-content"><b>10%</b> отриманих коштів підуть на допомогу ЗСУ!</p></div>
    </div>
    </div>
    
  );
};

export default PackagesSection;
