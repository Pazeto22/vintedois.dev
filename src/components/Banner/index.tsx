import s from "./styles.module.scss";

import Image from "next/image";
import ImgBanner from "../../../public/assets/banner/banner.png";
import SvgBanner from "../../../public/assets/banner/banner.svg";

import Info from "./Info";

function Banner() {
  return (
    <div className={s.bannerContainer}>
      <Info />
      <SvgBanner />
      {/* <Image src={ImgBanner} alt="Banner vinte dois dev" /> */}
    </div>
  );
}

export default Banner;
