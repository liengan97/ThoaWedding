import { Quicksand, Courgette, Be_Vietnam_Pro, Roboto, Noto_Sans } from "next/font/google";
import localFont from "next/font/local";

export const quicksand = Quicksand({
  subsets: ["latin"]
});

export const courgette = Roboto({
  weight: "400",
  subsets: ["latin"]
});

export const fzPhotograph = localFont({
  src: "../fonts/Fz-Photograph.ttf",
  variable: "--font-fz",
});