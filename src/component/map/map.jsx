import MapIcon from "../../assets/map.png";
const Map = () => {
  const address = "65 Hùng Vương Hải Châu, Đà Nẵng";
  return (
    <div className="bg-pink-500/15 sm:rounded-xl my-10 rounded-t-full m-auto flex flex-col items-center p-3 py-10">
      <div className="flex flex-col items-center justify-center mt-6">
        <h1
          className="text-[30px]"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Địa điểm tổ chức
        </h1>
        <div className="flex items-center gap-2 mt-3">
          <img src={MapIcon} alt="" className="w-10 h-10" />
          <div className="leading-8">
            <h1
              className="text-[28px]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tư Gia Nhà Trai
            </h1>
            <p className="text-sm text-[#696969]">{address}</p>
          </div>
        </div>
      </div>
      <div className="w-full border border-black mt-14 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.943951255121!2d108.2148062783626!3d16.06839804493137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142183474b5ef9d%3A0xda90d94094fa0352!2zNjUgSMO5bmcgVsawxqFuZywgSOG6o2kgQ2jDonUgMSwgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1742742493183!5m2!1svi!2s"
          allowfullscreen=""
          loading="lazy"
          className="w-full h-[200px] border"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
