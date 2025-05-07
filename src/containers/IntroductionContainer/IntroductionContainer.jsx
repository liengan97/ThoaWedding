import IntroductionCard from '@/components/IntroductionCard/IntroductionCard'
import { bridgePhotoUrl, broomPhotoUrl } from '@/config/photo.config';
import { courgette } from '@/utils/font.util';

function IntroductionContainer() {
  return (
    <div className="md:w-3/5 sm:w-full mx-auto py-10 relative intro-container">
      <div className="flex items-center flex-col">
        <h2 className={`text-sm lg:text-xl pt-5 pb-2 ${courgette.className}`}>About</h2>
        <div className={`text-xl lg:text-3xl pb-10 ${courgette.className}`}>
          <p>Broom & Bridge</p>
        </div>
      </div>
      <div className="relative grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 lg:gap-2 pb-10">
        <div className="md:pr-3 md:rounded-lg rounded-md h-150">
          <IntroductionCard name="Hửu Tài" birthday="14/01/1997" photoUrl={broomPhotoUrl} />
        </div>
        <div className="md:pl-3 rounded-md h-150">
          <IntroductionCard name="Kim Ngân" birthday="22/04/1997" photoUrl={bridgePhotoUrl} />
        </div>
      </div>
    </div>
  )
}

export default IntroductionContainer;