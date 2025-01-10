import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AReservation = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleMainPage = () => {
    navigate('/main');
  };

  return (
    <div className="w-full h-screen bg-bc-black text-bc-white flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full h-full flex flex-col bg-transparent relative">
        {/* Header Container */}
        <div className="absolute top-0 left-0 w-full max-w-[320px] bg-transparent">
          <header className="w-full h-[7vh] flex items-center px-4">
            {/* <button 
              onClick={handleMainPage} 
              className="text-bc-white bg-transparent"
            >
              <img 
                src="assets/LeftArrow.png" 
                alt="arrow-left" 
                className="w-3 h-5"
              />
            </button> */}
          </header>
        </div>

        {/* Main */}
        <main className="flex-1 flex flex-col justify-between py-[2vh] px-4 gap-[0.2vh] mt-[2vh]">
          <div className="text-center flex items-center flex-col">
            <img src="assets/ARLOGO.png" alt="Un:Retired Logo" className="w-[20vw] max-w-[100px] mb-2" />
            <p className="mt-1 text-body-L text-bc-white font-bold wider:text-title-S">
              50+ 강연/강의 지식생태계 선순환 플랫폼
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="assets/AR_LOGO.png" 
              alt="Phone 1" 
              className="w-[80%] max-w-[250px] rotate-[15deg]" 
            />
          </div>
          <div className="text-center">
            <p className="text-title-S font-bold">지금 사전예약하면</p>
            <p className="text-bc-orange-1 text-title-S font-bold">콘텐츠 20% 할인 쿠폰</p>
            <p className="text-title-S font-bold">놓치지 마세요!</p>
            <p className="mt-2 font-bold text-title-S text-bc-orange-1">Beta 버전</p>
            <p className="text-title-S font-bold text-bc-orange-1">25년 2월 Coming Soon.</p>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full h-[11vh] bg-bc-black p-4 opacity-0 animate-slideUp">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdGW6-evzLYj5R-S860Rfxgd-LLNwRZV1FwY40dE0uEx4ELqg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-3 rounded-lg transition-colors duration-500 no-underline
              ${isClicked ? 'bg-[#AA6118]' : 'bg-bc-orange-1'} 
              text-bc-white text-body-M font-bold flex items-center justify-center
              hover:bg-bc-orange-2 active:bg-bc-orange-3`}
            onClick={() => setIsClicked(true)}
          >
            사전예약하기
          </a>
        </footer>
      </div>
    </div>
  );
};

export default AReservation;