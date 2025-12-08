import "./styles.css";
import { PEvents } from "@/config/photo.config";
import EventCard from "@/components/EventCard/EventCard";
import Title from "@/components/Title/Title";
import { quicksand } from "@/utils/font.util";

function WeddingEventsContainer() {
  return (
    <div className="md:w-3/5 mx-auto py-10 relative">
      <div className="flex items-center flex-col pb-5 px-5 text-center event">
        <Title className="py-5 text-xl lg:text-3xl pb-5 text-[#425937] font-bold font-serif">
          LỄ BÁO HỶ
        </Title>
        <p className={`text-[#425937] ${quicksand.className}`}>
          Hân hạnh mời bạn đến dự lễ báo hỷ của chúng tôi!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1">
        <EventCard
          photoUrl={PEvents.May24}
          title="Hoàng Tiến & Kim Thoa"
          restaurant="TRUNG TÂM HỘI NGHỊ & TIỆC CƯỚI"
          restaurantName="VƯỜN CAU"
          restaurantHall="Sảnh PANSY"
          location="360 Phan Văn Trị, Phường Bình Lợi Trung, Thành phố Hồ Chí Minh"
          time="11:00"
          time2="12:00"
          dayText="Chủ Nhật"
          dayMonth="04/01"
          year="2026"
          phoneNumber="tel:(+84)357169101"
          alternativeDay="Nhằm ngày 16 tháng 11 năm Ất Tỵ"
          googleMapLocation="https://maps.app.goo.gl/uoNAj5YZiuLab1bV6"
        />
      </div>
    </div>
  );
}

export default WeddingEventsContainer;
