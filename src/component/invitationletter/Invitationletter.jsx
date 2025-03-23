import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Invitationletter.css';
import avtOne from '../../assets/invitationletteravt1.jpg';
import avtTwo from '../../assets/invitationletteravt2.jpg';
import avtThree from '../../assets/invitationletteravt3.jpg';
import avtFour from '../../assets/invitationletteravt4.jpg';
import avtFive from '../../assets/invitationletteravt5.jpg';
import avtSix from '../../assets/invitationletteravt6.jpg';
import chibigroom from '../../assets/groom.png';
import chibibride from '../../assets/bride.png';
import ModalBankingMoney from '../modalBankingMoney/ModalBankingMoney';

function Invitationletter() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 2200,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'cubic-bezier(0.87, 0.03, 0.41, 0.9)',
        centerMode: true,
        centerPadding: '0px',
        pauseOnHover: false,
        swipe: false,
        arrows: false,
        rtl: false,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '0px',
                },
            },
        ],
    };

    const baseImages = [avtOne, avtTwo, avtThree, avtFour, avtFive, avtSix];
    const allImages = [...baseImages, ...baseImages];

    return (
        <div className="invitationletter">
            <div className="invitationletter-big-title">Thư Mời</div>
            <div className="invitationletter-title">THAM DỰ LỄ CƯỚI CỦA HÙNG & HẰNG</div>

            <div className="invitationletter-images">
                <div className="slider-wrapper">
                    <Slider {...settings}>
                        {allImages.map((img, index) => (
                            <div key={index} className="slider-item">
                                <div className="wedding-img">
                                    <img src={img} alt="Wedding" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="invitation-info">
                <div className=" flex items-center justify-center w-full">
                    <img src={chibigroom} alt="Groom" className="chibi-img" />
                    <div className="flex flex-col items-center justify-center w-[70%]">
                        <div className="info-title">NGÀY TỔ CHỨC TIỆC</div>
                        <div className="info-time">CHỦ NHẬT | 10H30</div>
                        <div className="info-date">20 . 10 . 2024</div>
                        <div className="info-lunar">(Tức Ngày 18 Tháng 09 Năm Giáp Thìn)</div>
                        <button className="invitation-btn" onClick={() => setIsModalOpen(true)}>
                            Gửi Mừng Cưới
                        </button>
                    </div>
                    <img src={chibibride} alt="Bride" className="chibi-img" />
                </div>
            </div>

            <ModalBankingMoney isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}

export default Invitationletter;
