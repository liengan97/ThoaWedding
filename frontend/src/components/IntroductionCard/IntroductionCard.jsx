import './styles.css'

function IntroductionCard({ name, birthday, photoUrl }) {
  return (
    <div className="intro-card relative w-full h-full rounded-xl">
      <div className="h-full">
        <img className="h-full rounded-lg" src={photoUrl} />
      </div>
      <div className="absolute intro-body text-center">
        <h3>{name?.toUpperCase()}</h3>
        <p>{birthday}</p>
      </div>
    </div>
  );
}

export default IntroductionCard;