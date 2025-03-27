"use client";
import React, { useState } from "react";
import PackageCard from "./PackageCart"; 
import Cart from "./Cart"; 
import { Package, AdditionalService as ServiceType } from "../types/types";
import "@/app/components/PackagesSection.css";
import "@/app/components/AdditionalService.css";
import waveUp from "../../../public/images/bg-hero.png";
import ExtrabigBalls from "../../../public/images/extrabigballs.png";
import Image from "next/image";

const packages: Package[] = [
  {
    id: "basic",
    name: "Пропозиція C",
    price: ["10000"],
    features: [
      "Інтерактивні Instagram stories",
      "Розміщення банера на місці події",
      "Логотип та згадка про компанію у постпроєктному відео",
      "Пост-дайджест у Telegram",
      "Розміщення логотипа компанії на банері сцени",
      "Транслювання відеоролика на місці події"
    ],
    info: `
    <p style="font-family: 'Exo 2', sans-serif; font-size: 2em; color: #257BFC; font-weight: bold;">
        Пропозиція C
    </p>

    <p style="font-family: 'Exo 2', sans-serif; font-size: 1.2em; font-weight: bold;">
        Інтерактивні Instagram stories
    </p>
    <p>
        Промоція компанії в 3 Instagram stories на офіційній сторінці <b>@best_lviv</b>. 
        Рубрики: “Question & Answer”, “Цікаві факти” та інше. 
        На фоні живих фото/відео — питання у вигляді вікторини.
    </p>

    <p style="font-family: 'Exo 2', sans-serif; font-size: 1.2em; font-weight: bold;">
        Розміщення банера на місці події
    </p>
    <p>
        Під час проведення Інженерного Ярмарку Кар’єри буде розміщено банер Вашої компанії.
    </p>

    <p style="font-family: 'Exo 2', sans-serif; font-size: 1.2em; font-weight: bold;">
        Логотип та згадка про компанію у постпроєктному відео
    </p>
    <p>
        Розміщення логотипа компанії у відео, яке буде створено та виставлено в Instagram після завершення Ярмарку. 
        Логотип обов'язково з'явиться в кінці відео під час подяки партнерам проєкту.
    </p>

    <p style="font-family: 'Exo 2', sans-serif; font-size: 1.2em; font-weight: bold;">
        Пост-дайджест у Telegram
    </p>
    <p>
        Розміщення інформації про компанію у Telegram-каналі <b>BEST Lviv Students</b>. 
        На один дайджест виділяється 5 компаній.
    </p>

    <p style="font-family: 'Exo 2', sans-serif; font-size: 1.2em; font-weight: bold;">
        Розміщення логотипа компанії на банері сцени
    </p>
    <p>
        Розміщення логотипа компанії на великому банері, який буде розташований на фоні сцени ярмарку.
    </p>

    <p style="font-family: 'Exo 2', sans-serif; font-size: 1.2em; font-weight: bold;">
        Транслювання відеоролика на місці події
    </p>
    <p>
        На місці проведення події буде встановлено декілька телевізорів, які транслюватимуть відеоролики компаній. 
        Необхідні відеоматеріали (тривалістю 25-30 секунд) надає компанія-учасник за 2 тижні до події.
    </p>
 `,
  }
];

const Packagec = () => {
  const [selectedPackages, setSelectedPackages] = useState<Package[]>([packages[0]]);
  const [selectedServices, setSelectedServices] = useState<ServiceType[]>([]);
  const [modalContent, setModalContent] = useState<string | null>(null);

  const handlePackageSelect = (id: string) => {
    const pkg = packages.find((p) => p.id === id);
    if (!pkg) return;
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
          Пропозиція для Вас
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

       
        </div>

        <div className="cart-container">
          <Cart selectedPackages={selectedPackages} additionalServices={selectedServices} />
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

    </div>
    
  );
};

export default Packagec;