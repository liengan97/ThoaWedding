import './styles.css'
import { PEvents } from '@/config/photo.config';
import EventCard from "@/components/EventCard/EventCard";
import Title from '@/components/Title/Title';

function WeddingEventsContainer() {
  return (
    <div className="md:w-3/5 mx-auto py-10 relative" >
      <div className="flex items-center flex-col pb-5 px-5 text-center event">
        <Title className="py-5 dark:text-black">Our Wedding Events</Title>
        <p className='dark:text-black'>We invite you to share in the joy of our wedding!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <EventCard
          photoUrl={PEvents.May24}
          title="Vu Quy"
          location="174 tổ 6, ấp Tân Tịch, xã Tịnh Thới, TP. Cao Lãnh, Đồng Tháp"
          time="09:00"
          dayText="Thứ bảy"
          dayMonth="24/05"
          year="2025"
          phoneNumber="tel:(+84)981864289"
          alternativeDay="Nhằm ngày 27 tháng 04 năm Ất Tỵ"
          googleMapLocation="https://maps.app.goo.gl/Z64o4DrmuoCEfQnHA"
        />

        <EventCard
          photoUrl={PEvents.May25}
          title="Tân Hôn"
          location="225 Huỳnh Công Phên, ấp Hoà Ngãi, xã An Vĩnh Ngãi, TP. Tân An, Long An"
          time="10:00"
          dayText="Chủ nhật"
          dayMonth="25/05"
          year="2025"
          phoneNumber="tel:(+84)961152698"
          alternativeDay="Nhằm ngày 28 tháng 04 năm Ất Tỵ"
          googleMapLocation="https://maps.app.goo.gl/kb7brrJdEgKU3kxy6"
        />
      </div>
    </div>
  )
}

export default WeddingEventsContainer;