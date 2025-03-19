import React from 'react';
import './Banner.css';
import avatar from '../../assets/avatarlove.jpg';
function Banner() {
    return (
        <>
            <div className="banner">
                <h1 className="title">Save The Date</h1>
                <div className="name-love">
                    <h2>Văn Hùng</h2>
                    <h2>-</h2>
                    <h2>Thúy Hằng</h2>
                </div>
                <div className="avatar">
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="container">
                    <div className="time-container">
                        <span className="time">11:30</span>
                        <span className="day">Chủ nhật</span>
                    </div>
                    <div className="date-container">
                        <span className="date">20.10</span>
                        <span className="year">
                            <span className="year-top">20</span>
                            <span className="year-bottom">24</span>
                        </span>
                    </div>
                </div>
                <p className="lunar"> (Tức Ngày 18 Tháng 09 Năm Giáp Thìn) </p>
            </div>
        </>
    );
}

export default Banner;
