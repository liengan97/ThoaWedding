import './App.css'
import Countdown from './components/CountDown/CountDown.jsx'
import WeddingEventsContainer from './containers/WeddingEventsContainer/WeddingEventsContainer.jsx'
import Parallax from './components/Parallax/Parallax.jsx'
import ThankYou from './components/ThankYou/ThankYou.jsx'
import IntroductionContainer from './containers/IntroductionContainer/IntroductionContainer.jsx'
import PhotoSliderContainer from './containers/PhotoSliderContainer/PhotoSliderContainer.jsx'
import WishContainer from './containers/WishContainer/WishContainer.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { COUNT_DOWN_TARGET_DATE, THANK_YOU_PHOTO, COUNT_DOWN_PHOTO } from './config.js'

function App() {
  return (
    <>
      <ToastContainer />
      <PhotoSliderContainer />
      <IntroductionContainer />
      <Parallax height="150" bgUrl={COUNT_DOWN_PHOTO} bgTop="30">
        <Countdown targetDate={COUNT_DOWN_TARGET_DATE} />
      </Parallax>
      <WeddingEventsContainer />
      <WishContainer />
      <Parallax bgUrl={THANK_YOU_PHOTO} bgTop="10">
        <ThankYou />
      </Parallax>
    </>
  )
}

export default App
