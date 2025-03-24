import React, { useEffect } from 'react';
import qrBank from '../../assets/qrBank.jpg';
import './ModalBankingMoney.css';

function ModalBankingMoney({ isOpen, onClose }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Chặn cuộn
        } else {
            document.body.style.overflow = 'auto'; // Bật lại cuộn khi modal đóng
        }

        return () => {
            document.body.style.overflow = 'auto'; // Dọn dẹp khi component unmount
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    ×
                </button>

                <div className="modal-header">
                    <h2>Mừng Cưới</h2>
                    <div className="modal-divider"></div>
                </div>

                <div className="modal-body">
                    <div className="qr-container">
                        <img src={qrBank} alt="QR Code Chuyển Khoản" className="qr-image" />
                        <div className="qr-shine"></div>
                    </div>

                    <div className="banking-info">
                        <p className="bank-name">VIETINBANK</p>
                        <p className="account-number">107877010631</p>
                        <p className="account-name">NGUYEN VAN AN</p>
                    </div>

                    <div className="transfer-note">
                        <p className="note-title"><strong>Kính gửi Quý cô chú, anh chị và các bạn</strong></p>
                        <p className="note-content">
                            Khi chuyển khoản mừng cưới vợ chồng em, <br />
                            xin vui lòng ghi nội dung chuyển khoản theo cú pháp:
                            <br />
                            <span className="highlight">"[Họ Tên] + [Số điện thoại]"</span>
                        </p>
                        <p className="thank-you">Chân thành cảm ơn!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalBankingMoney;
