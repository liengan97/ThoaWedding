import './styles.css'

function Title({ className, children }) {
  return (
    <h2 className={`text-2xl font-bold tit ${className}`}>{children}</h2>
  )
}

export default Title;