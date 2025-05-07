import { firstEventPhotoUrl } from "@/config/photo.config";
import Image from "next/image";
import img from '@/images/FHDie4iPjN.jpg'

export default function Background() {
  return (
    <div className="relative h-screen w-screen">
      <div className="fixed top-0 left-0 w-screen h-screen ">
        <Image
          alt="dffa"
          src={img}
          fill
        />
      </div>
      <div className="relative z-10 flex justify-center items-center h-full">
        <h1 className="text-3xl font-bold">Here</h1>
      </div>
    </div>
  );
}