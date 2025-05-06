import IntroductionCard from '@/components/IntroductionCard/IntroductionCard'
import { bridgePhotoUrl, broomPhotoUrl } from '@/config/photo.config';
import { courgette } from '@/utils/font.util';

function IntroductionContainer() {
  return (
    <div className="md:w-3/5 sm:w-full mx-auto py-10 relative intro-container">
      <div className="flex items-center flex-col">
        <h2 className={`text-2xl pt-5 pb-2 ${courgette.className}`}>About</h2>
        <div className={`pb-10 ${courgette.className}`} style={{ fontSize: 36 }}>
          <p>Broom & Bridge</p>
        </div>
      </div>
      <div className="relative grid sm:grid-cols-1 md:grid-cols-2 gap-2 pb-10">
        <div className="md:pr-3 rounded-md h-150">
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