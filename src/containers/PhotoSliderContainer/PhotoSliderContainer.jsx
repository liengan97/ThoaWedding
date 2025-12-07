import { HOME_SLIDER_PHOTOS } from "@/config/photo.config";
import FadeImageSlider from "@/components/Slider/FadeImageSlider";
import MusicContainer from "../MusicContainer/MusicContainer";

function PhotoSliderContainer() {
  return (
    <div className="relative h-screen">
      <div className="absolute h-screen z-10">
        <FadeImageSlider photos={HOME_SLIDER_PHOTOS} />
      </div>
    </div>
  )
}

export default PhotoSliderContainer;