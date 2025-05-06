import Overlay from '../Overlay/Overlay';
import './styles.css'

function ThankYou() {
  return (
    <div className="relative w-full h-full tk-wrapper">
      <Overlay />
      <div className="absolute inset-0 text-white flex items-center justify-center text-center">
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tk-title">Thank You!</h1>
          <p className="text-lg md:text-xl tk-desc">for being a part of our wedding</p>
        </div>
      </div>
    </div>
  )
}

export default ThankYou;