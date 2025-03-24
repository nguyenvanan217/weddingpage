import MapIcon from '../../assets/map.png';
import MapLove from '../../assets/maplove.jpg';
import './Map.css';
const Map = () => {
    const handleClickMap = () => {
        window.open('https://www.google.com/maps/dir/?api=1&destination=65+Hùng+Vương+Hải+Châu,+Đà+Nẵng', '_blank');
    };

    const address = '65 Hùng Vương Hải Châu, Đà Nẵng';
    return (
        <div className="bg-[#f1f3f5] border-2 border-[#333] sm:rounded-xl my-10 rounded-t-full m-auto flex flex-col items-center p-3 py-10">
            <div className="flex flex-col items-center justify-center mt-6">
                <img
                    src={MapLove}
                    alt=""
                    className="w-35 h-20 object-cover animate-[wobble_1.5s_ease-in-out_infinite]"
                />
                <h1 className="text-[32px]" style={{ fontFamily: "'Great Vibes', cursive" }}>
                    Địa điểm tổ chức
                </h1>
                <div>
                    <img src={MapIcon} alt="" className="w-10 h-10" />
                </div>
                <div className="flex items-center gap-2 mt-3">
                    <div className="leading-8">
                        <h1 className="text-[24px]" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Nhà Hàng Tiệc Cưới Tân An
                        </h1>
                        <p className="text-sm text-[#696969] text-center">{address}</p>
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
            <button
                className="bg-gradient-to-b from-[#592ECE] to-[#3C6DE7] text-white px-7 py-3 mt-7 rounded-md animate-[heartbeat_1.5s_ease-in-out_infinite]"
                onClick={handleClickMap}
            >
                Xem chỉ đường
            </button>
        </div>
    );
};

export default Map;
