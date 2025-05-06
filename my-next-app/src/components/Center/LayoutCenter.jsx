function LayoutCenter({ className, children }) {
  return (
    <div className={`flex place-content-center ${className}`}>{children}</div>
  )
}

export default LayoutCenter;