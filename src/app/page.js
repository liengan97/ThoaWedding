import Countdown from "@/components/CountDown/CountDown";
import Parallax from "@/components/Parallax/Parallax";
import ThankYou from "@/components/ThankYou/ThankYou";
import WedEnv from "@/config/wedenv.config";
import { countDownPhotoUrl, thankyouPhotoUrl } from "@/config/photo.config";
import IntroductionContainer from "@/containers/IntroductionContainer/IntroductionContainer";
import PhotoSliderContainer from "@/containers/PhotoSliderContainer/PhotoSliderContainer";
import WeddingEventsContainer from "@/containers/WeddingEventsContainer/WeddingEventsContainer";
import WishContainer from "@/containers/WishContainer/WishContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function Home() {
  return (
    <div>
      <ToastContainer
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        position="top-center"
      />
      <PhotoSliderContainer />
      <IntroductionContainer />
      <Parallax height="150" bgUrl={countDownPhotoUrl.src} bgTop="50">
        <Countdown targetDate={WedEnv.WED_COUNT_DOWN_T0_DATE} />
      </Parallax>
      <WeddingEventsContainer />
      <WishContainer />
      <Parallax bgUrl={thankyouPhotoUrl.src} bgTop="10">
        <ThankYou />
      </Parallax>
    </div>
  );
}
