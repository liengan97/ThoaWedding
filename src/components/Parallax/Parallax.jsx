import Image from 'next/image';
import './styles.css';
import { thankyouPhotoUrl } from '@/config/photo.config';

function Parallax({ height, bgUrl, bgTop, children }) {
  return (
    <div
      // className={`h-${height > 0 ? height : 'screen'} parallax bg-[center_${bgTop > 0 ? bgTop : 50}%]`}
      className={`h-${height > 0 ? height : 'screen'} parallax`}
      style={{
        backgroundImage: `url(${bgUrl})`
      }}
    >
      {children}
    </div>
  );
}

export default Parallax;
