import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AReservation = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSdGW6-evzLYj5R-S860Rfxgd-LLNwRZV1FwY40dE0uEx4ELqg/viewform?usp=header', '_blank');
    }, 1000);
  };

  const handleMainPage = () => {
    navigate('/main');
  };

  return (
    <div className="w-full min-h-screen bg-bc-black text-bc-white flex items-center justify-center">
      <div className="w-full h-full flex flex-col bg-bc-black">
        {/* Header Container */}
        <div className="fixed top-0 w-full max-w-[320px] bg-bc-black">
          <header className="w-full h-[10vh] flex items-center px-4">
            <button 
              onClick={handleMainPage} 
              className="text-bc-white bg-transparent"
            >
              <img 
                src="assets/LeftArrow.png" 
                alt="arrow-left" 
                className="w-5 h-7"
              />
            </button>
          </header>
        </div>

        {/* Main */}
        <main className="flex-1 flex flex-col justify-between py-[2vh] px-4 mb-[8vh] mt-[10vh] gap-[3vh] animate-fadeInUp">
          <div className="text-center flex items-center flex-col">
            <img src="assets/ARLOGO.svg" alt="Un:Retired Logo" className="w-[35vw] max-w-[140px] mb-4" />
            <p className="mt-2 text-body-L text-bc-white font-bold">
              50+ 강연/강의 지식생태계 선순환 플랫폼
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="assets/AR_PhoneImage.svg" 
              alt="Phone 1" 
              className="w-[90%] max-w-[300px] rotate-[15deg]" 
            />
          </div>
          <div className="text-center">
            <p className="text-title-S">지금 사전예약하면</p>
            <p className="text-bc-orange-1 text-title-S">콘텐츠 20% 할인 쿠폰</p>
            <p className="text-title-S">놓치지 마세요!</p>
            <p className="mt-4 font-bold text-title-S text-bc-orange-1">Beta 버전</p>
            <p className="text-title-S text-bc-orange-1">25년 2월 Coming Soon.</p>
          </div>
        </main>

        {/* Footer */}
        <footer className="fixed bottom-0 w-full h-[9vh] bg-bc-black p-4 px-[6vh] opacity-0 animate-slideUp">
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