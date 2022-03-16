import * as s from "./styles.module.scss";

import Image from "next/image";
import ImgBanner from "../../../public/assets/banner/banner.png";

import Info from "./Info";

function Banner() {
  return (
    <div className={s.bannerContainer}>
      <Info />
      <Image src={ImgBanner} alt="shazamkrai" />
    </div>
  );
}

export default Banner;
