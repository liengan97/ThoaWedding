import './styles.css'

function Title({ className, children, center }) {
  return (
    <h2 className={`text-2xl font-bold tit ${center ? 'text-center' : ''} ${className}`}>
      {children}
    </h2>
  )
}

export default Title;