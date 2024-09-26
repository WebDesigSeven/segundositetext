import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import AvatarButton from "./../../assets/img/logo/whasss.png"

const WhatsAppButton = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="5527999592354"
      accountName="Crescer PHD"
      avatar={AvatarButton}
      message="Olá! como posso te ajudar hoje ?"
      darkMode={false}
      chatMessage="Olá! como posso te ajudar hoje ?"
      allowClickAway={true}
      placeholder="Digite sua mensagem aqui..."
      statusMessage="Online" // Mensagem de status
      styles={{
        backgroundColor: "#25d366",
        color: "#fff",
        iconColor: "#fff",
      }}
    />
  );
};

export default WhatsAppButton;