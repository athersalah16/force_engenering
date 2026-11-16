"use client";
import Image from "next/image";
import GetInTouch from "../../../Contact/components/get_in_touch/GetInTouch";
import Logo from "../components/Logo";
import NavLinks from "./NavLinks";
import ChatOnWhatsappButton from "../../../Contact/components/get_in_touch/ChatOnWhatsappButton";

function Footer() {
  return (
    <div className="site-footer flex w-full min-h-full items-center flex-col">
      <div className=" w-full flex flex-col py-5 lg:flex-row lg:justify-between">
        <div className="flex flex-col py-5 gap-4 items-center lg:items-start px-3">
          <Logo AddBackground={true} />
          <div className="text-footer-muted px-3 text-md max-w-md flex justify-center">
            A UAE-based supply and technical services partner delivering
            engineered material packages, procurement and logistics support to
            industrial and EPC projects.
          </div>
          <div className="text-footer-muted text-sm max-w-md px-2 uppercase">
            Engineering · Procurement · Industrial Solutions
          </div>
        </div>
        <div>
          <p className="text-gray-400 px-2">Navigate</p>
          <NavLinks
            selectedNavLinkStyle="font-semibold text-footer-foreground underline "
            className="flex-col"
            textStyle="font-medium text-footer-muted hover:text-footer-foreground hover:underline  "
          />
        </div>
        <div>
          <p className="text-gray-400 py-3 px-2">Get in Touch</p>
          <GetInTouch className="text-footer-muted" />
          <div className="py-3 pl-3">
            <ChatOnWhatsappButton />
          </div>
        </div>
      </div>

      <div className="flex w-full px-4 lg:flex-row lg:justify-between flex-col gap-3 py-4 ">
        <p className="text-footer-muted text-sm">
          &copy; {new Date().getFullYear()} Force Engenring. All rights
          reserved.
        </p>
        <div className="flex flex-row gap-6">
          <div className="flex lg:flex-row flex-col justify-center gap-4 items-center text-footer-muted text-sm">
            <div className="w-12 h-8 flex justify-center items-center bg-card p-2 rounded-md">
              <Image
                src={"/certifications/icv_certification/icv_logo.png"}
                alt="ICV Image"
                width={50}
                height={50}
              />{" "}
            </div>
            UAE ICV Certified
          </div>
          <div className="text-sm flex lg:flex-row flex-col justify-center gap-4 items-center text-footer-muted">
            <div className="w-12 h-12 bg-card p-2 rounded-md">
              <Image
                src={"/certifications/iso_certification/iso_logo.png"}
                alt="ISO Image"
                width={50}
                height={50}
              />
            </div>
            ISO 9001:2015
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
