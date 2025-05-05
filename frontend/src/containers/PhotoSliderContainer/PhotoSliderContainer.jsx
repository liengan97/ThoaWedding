import FadeImageSlider from "../../components/Slider/FadeImageSlider";
import { IMAGES_SLIDER } from "../../config";

function PhotoSliderContainer() {
  return <FadeImageSlider photos={IMAGES_SLIDER} />
}

export default PhotoSliderContainer;