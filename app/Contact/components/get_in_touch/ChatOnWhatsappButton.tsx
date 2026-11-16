"use client";
import { FaWhatsapp } from "react-icons/fa6";

function ChatOnWhatsappButton() {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={process.env.NEXT_PUBLIC_WHATS_APP_LINK}
      className="border-none outline-none bg-success flex flex-row  gap-3 cursor-pointer justify-center items-center text-primary-foreground py-2 px-4 rounded-md hover:bg-success/90 transition-colors duration-300"
    >
      <FaWhatsapp /> Chat on WhatsApp
    </a>
  );
}

export default ChatOnWhatsappButton;
