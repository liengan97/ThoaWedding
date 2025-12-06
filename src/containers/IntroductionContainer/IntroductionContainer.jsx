import IntroductionCard from '@/components/IntroductionCard/IntroductionCard'
import { PIntro } from '@/config/photo.config';
import { courgette } from '@/utils/font.util';

function IntroductionContainer() {
  return (
    <div className="md:w-3/5 sm:w-full mx-auto py-10 relative dark:bg-white intro-container">
      <div className="flex items-center flex-col">
        <h2 className={`text-sm lg:text-xl pt-5 pb-2 dark:text-black ${courgette.className}`}>About</h2>
        <div className={`text-xl lg:text-3xl pb-10 dark:text-black ${courgette.className}`}>
          <p>Groom & Bride</p>
        </div>
      </div>
      <div className="relative grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 lg:gap-2 pb-10">
        <div className="md:pr-3 md:rounded-lg rounded-md h-150">
          <IntroductionCard name="PHẠM HOÀNG TIẾN" birthday="Thứ Nam" photoUrl={PIntro.Groom} />
        </div>
        <div className="md:pl-3 rounded-md h-150">
          <IntroductionCard name="NGUYỄN THỊ KIM THOA" birthday="Út Nữ" photoUrl={PIntro.Bride} />
        </div>
      </div>
    </div>
  )
}

export default IntroductionContainer;