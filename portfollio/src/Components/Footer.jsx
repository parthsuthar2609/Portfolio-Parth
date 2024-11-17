import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-400 text-black py-6 w-auto h-80 audiowide-font">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p className="text-4xl font-semibold">Parth Suthar</p>
          <p className="text-2xl max-w-8xl text-center ml-auto mt-6 ">"Crafting Digital Experiences That Inspire.
          Empowering Your Vision with Expert Web Solutions!"</p>
        </div>
        <div className="flex justify-center space-x-6 mb-4 ">
          
          <a
            href="https://www.facebook.com/profile.php?id=61566407285068&mibextid=ZbWKwL"
            className="hover:text-white transition duration-300 text-8xl"
            aria-label="Facebook"
            
          >
            <FaFacebook size={48} />
          </a>
          <a
            href="#"
            className="hover:text-white transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={48} />
          </a>
          <a
            href="https://www.instagram.com/_parth_269/"
            className="hover:text-white transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={48} />
          </a>
          <a
            href="https://www.linkedin.com/in/parth-suthar-91b4102a7/"
            className="hover:text-white transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={48} />
          </a>
          <a
            href="https://www.youtube.com"
            className="hover:text-white transition duration-300"
            aria-label="YouTube"
          >
            <FaYoutube size={48} />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Parth Suthar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
