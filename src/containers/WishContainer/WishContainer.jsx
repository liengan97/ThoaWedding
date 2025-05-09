"use client"
import { useState, useEffect } from "react";
import MasonryWishGrid from "@/components/MasonryWishGrid/MasonryWishGrid";
import TextCenter from "@/components/Center/TextCenter";
import Title from "@/components/Title/Title";
import Section from "@/components/Section/Section";
import LayoutCenter from "@/components/Center/LayoutCenter";
import SendWishesForm from "@/components/SendWishesForm/SendWishesForm";
import Parallax from "@/components/Parallax/Parallax";
import Overlay from "@/components/Overlay/Overlay";

import fl from '@/images/FHDie4iPjN.jpg'
function WishContainer() {
  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource("/api/wishes");
    eventSource.onmessage = (event) => {
      updateWishes(JSON.parse(event.data));
    };
    return () => eventSource.close();
  }, []);

  const updateWishes = (wish) => {
    setWishes(prevWishes => {
      const found = prevWishes.find(w => w.id == wish.id);
      if (found) {
        return prevWishes;
      }

      const updatedWishes = [...prevWishes, wish].sort(
        (a, b) => new Date(b.ts.seconds) - new Date(a.ts.seconds)
      );

      return updatedWishes;
    })
  }

  return (
    <>
      <Section className="pb-12 px-4">
        <TextCenter>
          <Title className="pb-5">Send Your Best Wishes</Title>
        </TextCenter>
        <LayoutCenter>
          <SendWishesForm />
        </LayoutCenter>
      </Section>

      {wishes.length > 0 && (<Section className="relative">
        <Parallax bgUrl={fl.src}>
          <Overlay type="warm" />
          <div className="md:w-3/5 mx-auto h-screen relative">
            <TextCenter className="h-[80px]">
              <Title className="py-5 text-white">✨ Wishes from Everyone ✨</Title>
            </TextCenter>
            <div className="absolute top-[80px] bottom-20 left-0 right-0 overflow-y-scroll">
              <MasonryWishGrid wishes={wishes} />
            </div>
          </div>
        </Parallax>
      </Section>
      )}
    </>
  )
}

export default WishContainer;
