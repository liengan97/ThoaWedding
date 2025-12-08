import { HOME_SLIDER_PHOTOS } from "@/config/photo.config";
import ImageFirstSlider from "@/components/Slider/ImageFirstSlider";
import MusicContainer from "../MusicContainer/MusicContainer";

function TitleInfoWedContainer() {
  return (
    <div className="relative h-screen">
      <div className="absolute z-20 bottom-0 flex justify-center text-center w-screen pt-5 items-center pb-5 lg:pb-5">
        <MusicContainer />
      </div>
      <div className="absolute h-screen z-10">
        <ImageFirstSlider photos={HOME_SLIDER_PHOTOS} />
      </div>
    </div>
  )
}

export default TitleInfoWedContainer;