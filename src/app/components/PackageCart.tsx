"use client";
import React from 'react';
import { Button } from './ui/button';
import { Package } from '../types/types';
import {
  Dialog,
  DialogTrigger,
} from "./ui/dialog";
import Image from 'next/image'; 
import "@/app/components/PackageCart.css";

interface PackageCardProps {
  pkg: Package;
  isSelected: boolean;
  onSelect: (id: string) => void;
  isBasic?: boolean;
  onInfoClick?: () => void;
  isLast?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, isSelected, onSelect, isBasic, onInfoClick, isLast }) => {
  return (
    <div className={`glass-card package-card ${isSelected ? 'selected' : ''}`} onClick={() => onSelect(pkg.id)}>
      <div className="package-header">
        <div>
          <h3>{pkg.name}</h3>
        </div>
        {pkg.info && (
          <Dialog>
            <DialogTrigger asChild>
              <button className="info-button" onClick={onInfoClick}>
                <Image src="/images/info.png" alt="Package information" width={20} height={20} /> 
              </button>
            </DialogTrigger>
            {/* <DialogContent>
              <DialogHeader>
                <DialogTitle>{pkg.name}</DialogTitle>
                <DialogDescription>{pkg.info}</DialogDescription>
              </DialogHeader>
            </DialogContent> */}
          </Dialog>
        )}
      </div>
      {isLast && (
        <div className="basic-note">
          Залишилось 2!
        </div>
      )}
      {isBasic && (
        <div className="basic-note">
          Обов&apos;язковий пакет
        </div>
      )}
      <ul className="feature-list">
        {pkg.features.map((feature, index) => (
          <li key={index}>
            <span className="bullet">•</span>
            {feature}
          </li>
        ))}
      </ul>
      {!isBasic && (
        <div className='package-card-footer'>
          <Button
            className={`cartbutton ${isSelected ? "selected" : ""}`}
            variant={isSelected ? "secondary" : "default"}
          >
            <Image className={`cartsvg ${isSelected ? "selected" : ""}`} src="/images/cart.svg" alt="cartsvg" width={20} height={20} /> 
            {isSelected ? "Прибрати з кошика" : "У кошик"}
          </Button>
        </div>
      )}
      
    
    </div>
  );
};

export default PackageCard;
