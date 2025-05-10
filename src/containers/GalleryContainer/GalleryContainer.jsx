import TextCenter from "@/components/Center/TextCenter";
import Section from "@/components/Section/Section";
import Title from "@/components/Title/Title";
import LayoutCenter from "@/components/Center/LayoutCenter";
import GalleryGrid from "@/components/GalleryGrid/GalleryGrid";
import { GRID_PHOTOS } from "./grid-photo.config";

const GalleryContainer = () => {
  return (
    <Section className="md:w-4/5 px-4 mx-auto">
      <TextCenter className="py-5">
        <Title>Photo Gallery</Title>
      </TextCenter>
      <LayoutCenter className="pt-10 pb-20">
        <GalleryGrid images={GRID_PHOTOS} />
      </LayoutCenter>
    </Section>
  )
}

export default GalleryContainer;