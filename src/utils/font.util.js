import { Quicksand, Courgette } from "next/font/google";
import localFont from "next/font/local";

export const quicksand = Quicksand({
  subsets: ["latin"]
});

export const courgette = Courgette({
  weight: "400",
  subsets: ["latin"]
});

export const fzPhotograph = localFont({
  src: "../fonts/Fz-Photograph.ttf",
  variable: "--font-mycustom",
});