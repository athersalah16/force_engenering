"use client";
import React from "react";
import { navLinks } from "../../../company_data/navLinks";
import  useNavLinks from "../../hooks/useNavLinks";
type Props = {
  className: string;
  textStyle: string;

  selectedNavLinkStyle: string;
  handleClick?: React.Dispatch<React.SetStateAction<string>>;
  handleMenuClick?: React.Dispatch<React.SetStateAction<boolean>>;
};
function NavLinks({
  className,
  textStyle,
  selectedNavLinkStyle,
}: Props) {
  const { basePath } = useNavLinks();


  return (
    <nav className={`flex ${className}`}>
      {navLinks.map(({ name, href }, index) => (
        <a
          href={href}
          key={index + 1}
          className={` ${textStyle}  px-4  py-2  ${href === basePath ? selectedNavLinkStyle  : ""}  transition-colors duration-300 text-black/45  `}
        >
          {name}
        </a>
      ))}
    </nav>
  );
}

export default NavLinks;
