import { HOME_SLIDER_PHOTOS } from "@/config/photo.config";
import FadeImageSlider from "@/components/Slider/FadeImageSlider";
import MusicContainer from "../MusicContainer/MusicContainer";

function PhotoSliderContainer() {
  return (
    <div className="relative h-screen">
      <div className="absolute z-20 bottom-0 flex justify-center text-center w-screen pt-5 items-center pb-20 lg:pb-5">
        <MusicContainer />
      </div>
      <div className="absolute h-screen z-10">
        <FadeImageSlider photos={HOME_SLIDER_PHOTOS} />
      </div>
    </div>
  )
}

export default PhotoSliderContainer;