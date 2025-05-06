import { quicksand } from '@/utils/font.util'
import './styles.css'

function WishCard({ whoSend, createdAt, message }) {
  return (
    <div className={`relative flex items-center break-all overflow-hidden h-auto max-w-full whitespace-normal ${quicksand.className}`} >
      <div className="ml-0 flex-1">
        <h4 className="text-lg font-semibold sender">{whoSend}</h4>
        <p className="text-gray-500 text-xs py-1 text-white">{createdAt}</p>
        <div className="pt-4">
          <p className="text-white text-sm italic break-all whitespace-normal">{message}</p>
        </div>
      </div>
    </div>
  )
}

export default WishCard;