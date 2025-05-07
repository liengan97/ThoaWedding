import './styles.css'
import Image from "next/image";

function IntroductionCard({ name, birthday, photoUrl }) {
  return (
    <div className="intro-card relative w-full h-full rounded-xl">
      <div className="h-full">
        <Image alt='' fill className="h-full rounded-lg" src={photoUrl} />
      </div>
      <div className="absolute intro-body text-center">
        <p className='text-xl lg:text-3xl'>{name?.toUpperCase()}</p>
        <p className='text-sm lg:text-lg'>{birthday}</p>
      </div>
    </div>
  );
}

export default IntroductionCard;