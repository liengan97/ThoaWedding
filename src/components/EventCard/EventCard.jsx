import './style.css'
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { quicksand } from '@/utils/font.util';

function EventCard({ title, location, time, dayText, year, dayMonth, alternativeDay, phoneNumber, googleMapLocation, photoUrl }) {
  return (
    <div className="mx-3 py-5">
      <div className="relative w-full h-full border-1 border-gray-300 border-t-0 rounded-lg text-center bg-white">
        <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-1 font-bold text-gray-800 rounded-lg ${quicksand.className}`}>
          {title}
        </div>

        <div className="w-full sm:h-130 lg:h-150 mr-5 ">
          <Image alt='' className="inset-0 w-full h-full object-cover rounded-t-lg" src={photoUrl} />
        </div>

        <div className="pt-5 px-4">
          <p>{location}</p>
          <p className={`font-bold pt-4 pb-2 ${quicksand.className}`}>Vào lúc {time}</p>
        </div>

        <div className='py-8'>
          <div className="flex items-center justify-center bg-white">
            <div className="flex items-center space-x-4">
              <div className="border-y-1 border-gray-500 w-20 py-2">
                <span className="text-lg font-serif">{dayText}</span>
              </div>
              <div className="flex items-center space-x-2 py-2">
                <span className="text-4xl font-serif">{dayMonth}</span>
              </div>
              <div className="border-y-1 border-gray-500 w-20 py-2">
                <span className="text-lg font-serif">{year}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-gray-600 italic text-sm">{alternativeDay}</p>
        </div>

        <div className="social-link flex items-center place-content-center gap-2 py-5">
          <a href={phoneNumber} title='phone'>
            <FontAwesomeIcon icon={faPhone} />
          </a>
          <a href={googleMapLocation} title='map' target='_blank'>
            <FontAwesomeIcon icon={faMapLocation} />
          </a>
        </div>
      </div>
    </div>

  )
}

export default EventCard;