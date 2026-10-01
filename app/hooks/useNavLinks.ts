"use client";
import {usePathname} from "next/navigation";


export default function useNavLinks() {
  const pathname = usePathname()
  const basePath = `/${pathname.split("/")[1]}`;

  return (
   { basePath }
  );
}


