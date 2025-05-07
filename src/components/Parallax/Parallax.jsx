import './styles.css';

function Parallax({ height, bgUrl, bgTop, children }) {
  return (
    <div
      // className={`h-${height > 0 ? height : 'screen'} parallax bg-[center_${bgTop > 0 ? bgTop : 50}%]`}
      // className={`h-${height > 0 ? height : 'screen'} parallax min-h-[100vh] min-h-[-webkit-fill-available]`}
      className={`parallax min-h-[100vh] min-h-[-webkit-fill-available] w-screen`}
      style={{
        backgroundImage: `url(${bgUrl})`
      }}
    >
      <div className='min-h-screen w-full'>
        {children}
      </div>
    </div>
  );
}

export default Parallax;
