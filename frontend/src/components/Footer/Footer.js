import style from "./Footer.module.css";

import fbIcon from "../../assets/fb-icon.png";
import igIcon from "../../assets/ig-icon.png";
import ptIcon from "../../assets/pt-icon.png";
import ytIcon from "../../assets/yt-icon.png";

const Footer = () => {
  return (
    <>
      <div className={style.Footer}>
        <div className={style.footerBottom}>
          <div className={style.section4}>
            <p className={style.content2} style={{ width: "61%" }}>
              At MytalorZone By Sahiba, we believe every girl deserves to feel
              confident, stylish, and comfortable. Our collection is designed
              with love, blending vibrant colors, fun patterns, and trendy
              styles that inspire her to be herself. Whether it's playful
              dresses for a day of fun, cozy wear for relaxing moments, or chic
              outfits for special occasions, we’ve got it all. Sustainability is
              close to our heart, and we strive to craft clothes that are kind
              to her and the planet.
            </p>
            <p className={style.content3} style={{ width: "47%" }}>
              For order related queries & bulk orders, email -
              support@MytalorZone.com
            </p>
          </div>
          <div className={style.section6}>
            <ul>
              <li className="hover:cursor-pointer">SUPPORT</li>
              <li className="hover:cursor-pointer">Track Your Order</li>
              <li className="hover:cursor-pointer">Shipping & Return Policy</li>
              <li className="hover:cursor-pointer">FAQs</li>
              <li className="hover:cursor-pointer">About Us</li>
              <li className="hover:cursor-pointer">Contact Support</li>
            </ul>
          </div>
          <div className={style.section7}>
            <p>CONNECT WITH US</p>
            <div className="flex flex-row">
              <img className={style.section7icons} src={igIcon} />
              <img className={style.section7icons} src={ytIcon} />
              <img className={style.section7icons} src={fbIcon} />
              <img className={style.section7icons} src={ptIcon} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
