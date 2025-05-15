'use client'

import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { config } from "@fortawesome/fontawesome-svg-core";
import { PCountDown, PThankYou } from "@/config/photo.config";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Countdown from "@/components/CountDown/CountDown";
import Parallax from "@/components/Parallax/Parallax";
import ThankYou from "@/components/ThankYou/ThankYou";
import WedEnv from "@/config/wedenv.config";
import IntroductionContainer from "@/containers/IntroductionContainer/IntroductionContainer";
import PhotoSliderContainer from "@/containers/PhotoSliderContainer/PhotoSliderContainer";
import WeddingEventsContainer from "@/containers/WeddingEventsContainer/WeddingEventsContainer";
import WishContainer from "@/containers/WishContainer/WishContainer";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import GalleryContainer from "@/containers/GalleryContainer/GalleryContainer";
import useEventPassed from "@/hooks/useEventPassed";


config.autoAddCss = false;

export default function Home() {
  const isEventPassed = useEventPassed();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      {!isLoading &&
        <div className="dark:bg-white">
          <ToastContainer
            autoClose={3000}
            hideProgressBar
            closeOnClick
            pauseOnHover
            position="top-center"
          />
          <PhotoSliderContainer />
          <IntroductionContainer />
          {!isEventPassed && (
            <Parallax height="150" bgUrl={PCountDown.src} bgTop="50">
              <Countdown targetDate={WedEnv.WED_COUNT_DOWN_T0_DATE} tz="Asia/Ho_Chi_Minh" />
            </Parallax>
          )}
          <WeddingEventsContainer />
          <GalleryContainer />
          <WishContainer />
          <Parallax bgUrl={PThankYou.src} bgTop="10">
            <ThankYou />
          </Parallax>
        </div>
      }
    </>
  );
}
