import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";


const Footer = () => {
  return (
    <footer id="footer" className="footer w-full bg-gray-500 h-[200px]">
      {/* <div className="footer-container">
        <div className="footer-section">
          <h4 className=" title font-medium text-lg">About Us</h4>
          <p>
            We are a leading food e-commerce platform dedicated to bringing you
            the best products from local and international suppliers.
          </p>
        </div>
        <div className="footer-section hehe oho">
          <h4 className=" title font-medium text-lg">Quick Links</h4>
          <ul>
            <li>
              <a href="#app">Home</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section hehe hehe_contact">
          <h4 className="title font-medium text-lg">Follow Us</h4>
          <div className="social-icons cursor-pointer flex items-center gap-5">
            <a href="#">
              <TiSocialFacebook/>
            </a>
            <a href="#">
              <SlSocialInstagram/>
            </a>
            <a href="#">
             <SlSocialTwitter/>
            </a>
            <a href="#">
            <TiSocialFacebook/>
            </a>
          </div>
        </div>
        <div className="footer-section hehe end contact_footer">
          <h4 className="title font-medium text-lg">Contact Us</h4>
          <p>Email: support@foodecommerce.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Food Street, Flavor Town</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Food E-Commerce. All rights
          reserved.
        </p>
      </div> */}
    </footer>
  );
};

export default Footer;
