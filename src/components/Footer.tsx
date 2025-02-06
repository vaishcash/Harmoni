import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="p-10 flex flex-col items-center bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-6xl text-black">
        {/* Online Shopping */}
        <div>
          <h3 className="font-bold text-xs mb-4">ONLINE SHOPPING</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#" className="hover:text-gray-500">
                Men
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Women
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Kids
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Home & Living
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Beauty
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Gift Cards
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
               Fake Store Insider
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Policies */}
        <div>
          <h3 className="font-bold text-xs mb-4">CUSTOMER POLICIES</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#" className="hover:text-gray-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                T&C
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Track Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Cancellation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Grievance Officer
              </a>
            </li>
          </ul>
        </div>

        {/* Experience Myntra App on Mobile */}
        <div>
          <h3 className="font-bold text-xs mb-4">
            EXPERIENCE MYNTRA APP ON MOBILE
          </h3>
          <div className="flex space-x-4 mb-4">
            <img
              src="src/components/kisspng-iphone-google-play-app-store-apple-mobile-png-5acba0c95b4538.6032857715232944093739.png"
              alt="Google Play"
              className="w-32"
            />
          </div>
          <h3 className="font-bold text-xs mb-4">KEEP IN TOUCH</h3>
          <div className="flex space-x-4 text-gray-700">
            <a href="#">
              <FaFacebook size={20} />
            </a>
            <a href="#">
              <FaInstagramSquare size={20} />
            </a>
            <a href="#">
              <FaTwitter size={20} />
            </a>
            <a href="#">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Return and Guarantee */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <img
              className="w-10"
              src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
              alt="Original Guarantee"
            />
            <div className="text-sm">
              <span className="font-bold">100% ORIGINAL</span> guarantee for all
              products at myntra.com
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="w-10"
              src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png"
              alt="Return Window"
            />
            <div className="text-sm">
              <span className="font-bold">Return within 14 days</span> of
              receiving your order
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="w-full max-w-6xl mt-10">
        <div className="my-6 border-t border-gray-300"></div>
        <p className="text-xs text-gray-500">
          © 2024 www.myntra.com. All rights reserved. A Flipkart company
        </p>
      </div>
    </footer>
  );
}

export default Footer;
