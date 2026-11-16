"use client";
import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import NavLinks from "./NavLinks";
import RequestQouteButton from "@/app/Contact/components/quote/RequestQouteButton";
import { X, Menu } from "lucide-react";
import useNavLinks from "../../../hooks/useNavLinks";
import ChatOnWhatsappButton from "../../../Contact/components/get_in_touch/ChatOnWhatsappButton";

function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textStyle =
    "font-medium text-nav-link hover:border-b-2 hover:border-b-brand-navy hover:bg-brand-navy hover:text-brand-sand bg-transparent rounded-md";
  return (
    <div
      className={`flex fixed flex-row items-center justify-between w-full px-4 py-2   z-50 bg-background ${isScrolled ? " border-border  shadow-md lg:shadow-lg shadow-brand-900/10 " : " border-border "} border-b  transition-all duration-300`}
    >
      <div>
        <Logo />
      </div>

      <div className="hidden   lg:flex ">
        <NavLinks
          selectedNavLinkStyle="border-b-2 border-b-brand-navy text-nav-active font-semibold bg-transparent"
          className="flex-row gap-4 "
          textStyle={textStyle}
        />
      </div>

      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden w-12 h-12 items-center flex justify-center  text-foreground cursor-pointer"
      >
        {isMenuOpen ? <X /> : <Menu />}
      </div>
      {isMenuOpen && (
        <div
          className={`lg:hidden min-h-screen fixed top-16 left-0 w-full py-3  px-4 rounded-md bg-background shadow-xl  transition-transform duration-300 ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
          <NavLinks
            handleMenuClick={setIsMenuOpen}
            selectedNavLinkStyle="border-b-2 border-b-brand-navy text-nav-active font-semibold bg-transparent rounded-md"
            textStyle={textStyle}
            className="flex-col gap-4 py-4"
          />
          <div className="flex flex-col gap-4">
            <RequestQouteButton />
            <ChatOnWhatsappButton />
          </div>
        </div>
      )}
      <div className="hidden lg:flex">
        <RequestQouteButton />
      </div>
    </div>
  );
}

export default Header;
