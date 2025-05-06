function Overlay({ type, className }) {
  if (type && type == 'warm') {
    return (
      <div className="absolute inset-0 bg-gradient-to-t from-orange-700 via-orange-400 to-transparent opacity-50"></div>
    )
  } else {
    <div className={`absolute inset-0 bg-black opacity-50 ${className}`} />
  }
}

export default Overlay;