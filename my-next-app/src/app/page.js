import Countdown from "@/components/CountDown/CountDown";
import Parallax from "@/components/Parallax/Parallax";
import ThankYou from "@/components/ThankYou/ThankYou";
import { COUNT_DOWN_PHOTO, COUNT_DOWN_TARGET_DATE, THANK_YOU_PHOTO } from "@/config/photo.config";
import IntroductionContainer from "@/containers/IntroductionContainer/IntroductionContainer";
import PhotoSliderContainer from "@/containers/PhotoSliderContainer/PhotoSliderContainer";
import WeddingEventsContainer from "@/containers/WeddingEventsContainer/WeddingEventsContainer";
import WishContainer from "@/containers/WishContainer/WishContainer";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div>
      <ToastContainer />
      <PhotoSliderContainer />
      <IntroductionContainer />
      <Parallax height="150" bgUrl={COUNT_DOWN_PHOTO} bgTop="30">
        <Countdown targetDate={COUNT_DOWN_TARGET_DATE} />
      </Parallax>
      <WeddingEventsContainer />
      <WishContainer />
      <Parallax bgUrl={THANK_YOU_PHOTO} bgTop="10">
        <ThankYou />
      </Parallax>
    </div>
  );
}
