import './styles.css';

function Parallax({ height, bgUrl, bgTop, children }) {
  return (
    <div
      className={`h-${height > 0 ? height : 'screen'} parallax bg-[center_${bgTop > 0 ? bgTop : 50}%]`}
      style={{
        backgroundImage: `url(${bgUrl})`
      }}
    >
      {children}
    </div>
  );
}

export default Parallax;
