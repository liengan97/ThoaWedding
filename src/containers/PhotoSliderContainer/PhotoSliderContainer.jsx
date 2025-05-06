import { IMAGES_SLIDER } from "@/config/photo.config";
import FadeImageSlider from "@/components/Slider/FadeImageSlider";

function PhotoSliderContainer() {
  return <FadeImageSlider photos={IMAGES_SLIDER} />
}

export default PhotoSliderContainer;