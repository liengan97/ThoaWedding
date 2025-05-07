import './styles.css'

function ThankYou() {
  return (
    <div className="relative w-full min-h-screen tk-wrapper">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 text-white">
        <div className="flex flex-col space-y-4 pt-20 justify-start flex items-center w-screen text-center">
          <h1 className="text-4xl md:text-6xl font-bold tk-title">Thank You!</h1>
          <p className="text-lg md:text-xl tk-desc">for being a part of our wedding</p>
        </div>
      </div>
    </div>
  )
}

export default ThankYou;