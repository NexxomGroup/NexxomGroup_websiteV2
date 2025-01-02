import React from "react";
import MaxWidth from "./maxWidth";
import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "@radix-ui/react-separator";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-28  w-full bg-zinc-900">
      <MaxWidth className="w-full  ">
        <div className="relative w-full py-12 flex flex-col space-y-5 md:flex-row justify-between items-center ">
          <div className="  pb-4 pt-2 md:p-0 md:bg-transparent">
          <Image
            className="h-12 md:h-20  w-auto md:hidden"
            alt="Logo X"
            src={"/logo_white.png"}
            height={500}
            width={500}
          />
            <Image
            className="h-12 md:h-20  w-auto hidden md:block"
            alt="Logo X"
            src={"/X.png"}
            height={500}
            width={500}
          />
          </div>

          <p className="text-lg md:text-xl lg:text-2xl text-center max-w-2xl text-primary-foreground/30">
            Driving <span className="text-primary-foreground/90">innovation</span>, scaling <span className="text-primary-foreground/90">businesses</span>. <br/> Your <span className="text-primary-foreground/90">transformation partner </span>
            in the digital era.
          </p>
          <br className="" />
          <Button className=" w-full max-w-[250px] md:w-min">Follow us on<FaLinkedin className="ml-1 mt-0.5 text-xl" /></Button>
        </div>
        <Separator className="my-4 bg-primary-foreground/40 h-0.5" />
        <div className="text-xs md:text-base flex justify-between items-center text-primary-foreground  py-6 ">
          <p className="font-semibold">© 2025 All rights reserved.</p>
          <div className="flex space-x-4 ">
            <p>Legal notice</p>
            <p>Terms and conditions</p>
            <p>Digital accessibility</p>
            
          </div>
          <p className="md:ml-44"><BiLogoLinkedinSquare className="text-3xl"/></p>
          

        </div>
      </MaxWidth>
    </footer>
  );
};

export default Footer;
