import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AReservation = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000); // 1초 뒤 원래 상태로 변경
  };

  return (
    <div className="w-full min-h-screen bg-bc-black text-bc-white flex items-center justify-center">
      <div className="w-[320px] h-full bg-bc-black text-bc-white grid grid-rows-[auto,1fr,auto]">
        {/* Header */}
        <header className="flex justify-between items-center p-4">
          <button onClick={() => navigate(-1)} className="text-bc-white bg-transparent">
            <img src="assets/LeftArrow.png" alt="arrow-left" className="w-4 h-6 ml-4 mt-2" />
          </button>
        </header>

        {/* Main */}
        <main className="flex flex-col items-center justify-center">
          <div className="text-center flex items-center flex-col">
            <img src="assets/ARLOGO.svg" alt="Un:Retired Logo" className="mb-4 w-35 h-35" />
            <p className="mt-2 text-body-L text-bc-white font-bold">
              50+ 강연/강의 지식생태계 선순환 플랫폼
            </p>
          </div>
          <div className="flex">
            <img src="assets/AR_PhoneImage.svg" alt="Phone 1" className="w-46" />
          </div>
          <div className="mt-8 text-center">
            <p className="text-title-S">지금 사전예약하면</p>
            <p className="text-bc-orange-1 text-title-S">콘텐츠 20% 할인 쿠폰</p>
            <p className="text-title-S">놓치지 마세요!</p>
            <p className="mt-4 font-bold text-title-S text-bc-orange-1">Beta 버전</p>
            <p className="text-title-S text-bc-orange-1">25년 2월 Coming Soon.</p>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-4">
          <button
            className={`w-full py-2 rounded transition-colors duration-500 ${
              isClicked ? 'bg-[#AA6118]' : 'bg-bc-orange-1'
            } text-bc-white`}
            onClick={handleClick}
          >
            사전예약하기
          </button>
        </footer>
      </div>
    </div>
  );
};

export default AReservation;
