import Image from "next/image";
import React from "react";
const contactHero = "/images/contactHero.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function ContactHeroSection() {
  return (
    <div className=""> 
      <section className=" overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <h5 className="text-[#252B42] text-base tracking-[0.1px] font-bold uppercase">
                CONTACT US
              </h5>
              <h1 className="text-[#252B42] mt-4 md:mt-9 text-4xl md:text-5xl lg:text-[58px] lg:leading-[80px] leading-tight md:leading-[80px] font-bold">
                Get in touch <br /> today!
              </h1>
              <p className="text-[#737373] text-[20px] leading-[30px] md:text-xl mt-4 md:mt-9 font-normal">
                We know how large objects will act, <br />
                but things on a small scale
              </p>
              <h3 className="text-[#252B42] font-bold text-2xl tracking-[0.1px] mt-9">
                Phone ; +451 215 215
              </h3>
              <h3 className="text-[#252B42] font-bold text-2xl tracking-[0.1px] mt-5">
                Fax : +451 215 215
              </h3>
              <div className="flex space-x-9 justify-center lg:justify-start mt-9 ">
                <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 " />
                <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 " />
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 " />
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[612px] mt-8 lg:mt-0">
              <Image
                src={contactHero}
                alt="Contact Us"
                fill
                className="rounded-lg object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactHeroSection;

