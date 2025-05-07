import './styles.css'
import Image from "next/image";

function IntroductionCard({ name, birthday, photoUrl }) {
  return (
    <div className="intro-card relative w-full h-full rounded-xl">
      <div className="h-full">
        <Image alt='' fill className="h-full rounded-lg" src={photoUrl} />
      </div>
      <div className="absolute intro-body text-center">
        <h2>{name?.toUpperCase()}</h2>
        <p>{birthday}</p>
      </div>
    </div>
  );
}

export default IntroductionCard;