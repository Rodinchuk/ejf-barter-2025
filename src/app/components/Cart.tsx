import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Package, AdditionalService } from "../types/types";
import emailjs from "@emailjs/browser";
import "@/app/components/Cart.css";

emailjs.init("nH1slg9lPzjgOixSC");

interface CartProps {
  selectedPackages: Package[];
  additionalServices: AdditionalService[];
}

const Cart: React.FC<CartProps> = ({
  selectedPackages,
  additionalServices,
}) => {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const templateParams = {
        company_name: companyName,
        email: email,
        packages: selectedPackages.map((p) => p.name).join(", "),
        additional_services: additionalServices.map((s) => s.name).join(", "),
      };

      await emailjs.send(
        "service_7xshe0s",
        "template_lap52fe",
        templateParams,
        "nH1slg9lPzjgOixSC"
      );

      alert("Дякуємо! Ми зв'яжемося з вами найближчим часом.");
    } catch (error) {
      console.error("Email sending error:", error);
      alert("Помилка! Щось пішло не так. Спробуйте ще раз.");
    }
  };

  return (
    <div>
      <h2 className="cart-title">Кошик</h2>
     

          <form className="form" onSubmit={handleSubmit}>
            <Input
              className="form-input"
              style={{
                width: "100%",
                padding: "16px",
                border: "2px solid #3880DD",
                marginBottom: "15px",
                borderRadius: "8px",
                outline: "none",
                transition: "border-color 0.3s ease-in-out",
              }}
              placeholder="Назва компанії"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
            <Input
              className="form-input"
              style={{
                width: "100%",
                padding: "16px",
                border: "2px solid #3880DD",
                marginBottom: "15px",
                borderRadius: "8px",
                outline: "none",
                transition: "border-color 0.3s ease-in-out",
              }}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Button
              type="submit"
              className="submit-button"
              style={{
                width: "100%",
                padding: "16px",
                backgroundColor: "#111A94",
                borderRadius: "8px",
                outline: "none",
                transition: "border-color 0.3s ease-in-out",
              }}
            >
              Оформити
            </Button>
          </form>
        </div>
  );
};

export default Cart;
