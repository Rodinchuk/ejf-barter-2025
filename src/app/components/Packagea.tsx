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
        name: "Пропозиція А",
        price: ["5000"],
        features: [
            "Промоція в Instagram story",
            "Розміщення банера на місці події",
            "Логотип та згадка про компанію у постпроєктному відео",
            "Пост-дайджест у Telegram"
        ],
        info: `
        <p style="font-family: 'Exo 2', sans-serif; font-size: 2em; color: #257BFC; font-weight: bold;">
                Пропозиція А
        </p>
        <p style="font-family: 'Exo 2', sans-serif; font-size: 1.2em; font-weight: bold;">
                Промоція в Instagram story
        </p>
        <p>
                Розміщення інформації та згадка компанії в 1 Instagram story на офіційній сторінці <b>@best_lviv</b>.
        </p>
        <p style="font-family: 'Exo 2', sans-serif; font-size: 1.2em; font-weight: bold;">
                Розміщення банера на місці події
        </p>
        <p>
                Під час проведення Інженерного Ярмарку Кар'єри буде розміщено банер Вашої компанії.
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
        `,
    }
];

const additionalServices: ServiceType[] = [];

const Packagea = () => {
  const [selectedPackages, setSelectedPackages] = useState<Package[]>([packages[0]]);
  const [selectedServices, setSelectedServices] = useState<ServiceType[]>([]);
  const [modalContent, setModalContent] = useState<string | null>(null);

  const handlePackageSelect = (id: string) => {
    const pkg = packages.find((p) => p.id === id);
    if (!pkg) return;
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

    </div>
    
  );
};

export default Packagea;