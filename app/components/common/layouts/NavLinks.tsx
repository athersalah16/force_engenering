"use client";
import React from "react";
import useNavLinks from "../../../hooks/useNavLinks";
import Link from "next/link";
import { navLinks } from "@/company_data/navLinks";
type Props = {
  className: string;
  textStyle: string;

  selectedNavLinkStyle: string;
  handleMenuClick?: React.Dispatch<React.SetStateAction<boolean>>;
};
function NavLinks({
  className,
  textStyle,
  handleMenuClick,
  selectedNavLinkStyle,
}: Props) {
  const { basePath } = useNavLinks();

  return (
    <nav className={`flex ${className}`}>
      {navLinks.map(({ name, href }, index) => (
        <Link
          href={href}
          key={index + 1}
          onClick={() => handleMenuClick?.(false)}
          className={`${href === basePath ? selectedNavLinkStyle : textStyle} px-4 py-2 transition-colors duration-300 `}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}

export default NavLinks;
