function TextCenter({ className, children }) {
  return (
    <div className={`text-center dark:text-black ${className}`}>{children}</div>
  )
}

export default TextCenter;