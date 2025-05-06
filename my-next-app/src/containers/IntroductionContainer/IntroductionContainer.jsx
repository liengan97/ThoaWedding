import IntroductionCard from '../../components/IntroductionCard/IntroductionCard'

function IntroductionContainer() {
  return (
    <div className="md:w-3/5 sm:w-full mx-auto py-10 relative intro-container">
      <div className="flex items-center flex-col">
        <h2 className="text-2xl pt-5 pb-2">About</h2>
        <div className='pb-10' style={{ fontFamily: 'Courgette', fontSize: 36 }}>
          <p>Broom & Bridge</p>
        </div>
      </div>
      <div className="relative grid sm:grid-cols-1 md:grid-cols-2 gap-2 pb-10">
        <div className="md:pr-3 rounded-md h-150">
          <IntroductionCard name="Hửu Tài" birthday="14/01/1997" photoUrl="/K9ffRRvX0V.jpg" />
        </div>
        <div className="md:pl-3 rounded-md h-150">
          <IntroductionCard name="Kim Ngân" birthday="22/04/1997" photoUrl="/0mzGqdQFMd.jpg" />
        </div>
      </div>
    </div>
  )
}

export default IntroductionContainer;