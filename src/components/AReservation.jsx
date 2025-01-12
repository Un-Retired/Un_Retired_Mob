import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AReservation = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [isSmallHeight, setIsSmallHeight] = useState(false);

  const handleMainPage = () => {
    navigate('/main');
  };

  // 화면 높이를 감지하여 isSmallHeight 상태를 업데이트
  useEffect(() => {
    const checkHeight = () => {
      if (window.innerHeight < 585) {
        setIsSmallHeight(true);
      } else {
        setIsSmallHeight(false);
      }
    };

    // 초기 높이 체크
    checkHeight();

    // 창 크기 변경 시 높이 체크
    window.addEventListener('resize', checkHeight);
    return () => window.removeEventListener('resize', checkHeight);
  }, []);

  return (
    <div
      className="w-full bg-bc-black text-bc-white flex flex-col relative overflow-hidden"
      style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 w-full bg-transparent z-10">
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

      {/* Main Content */}
      <main className={`flex-grow flex flex-col justify-center items-center px-4 h-auto pt-4 max-wider:pt-0 ${isSmallHeight ? 'space-y-2' : 'space-y-4'}`}>
        <div className="text-center flex flex-col items-center mb-2 pt-2">
          <img 
            src="assets/ARLOGO.png" 
            alt="Un:Retired Logo" 
            className={`w-auto max-w-[100px] mb-2 ${isSmallHeight ? 'max-w-[60px]' : 'max-w-[100px]'}`} 
          />
          <p className={`mt-1 font-bold text-title-XS text-bc-white`}>
            50+ 강연/강의 지식생태계 선순환 플랫폼
          </p>
        </div>
        <div className={`flex justify-center mb-1 px-6 ${isSmallHeight ? 'mb-0' : 'mb-1'} w-auto max-w-[550px]`}>
          <img 
            src="assets/AR_LOGO.png" 
            alt="Phone 1" 
            className={`object-contain w-[83%] max-wider:w-[78%]`} 
          />
        </div>
        <div className={`text-center ${isSmallHeight ? 'text-sm' : 'text-center'}`}>
          <p className={`font-bold text-title-XS`}>지금 사전예약하면</p>
          <div className='flex flex-row gap-2'>
            <p className={`font-bold text-bc-orange-1 text-title-XS`}>콘텐츠 20% 할인 쿠폰 </p>
            <p className={`font-bold text-title-XS`}> 놓치지 마세요!</p>
          </div>
          <p className={`mt-2 font-bold text-bc-orange-1 text-title-XS`}>Beta 버전</p>
          <p className={`font-bold text-bc-orange-1 text-title-XS`}>25년 2월 Coming Soon.</p>
        </div>
      </main>

      {/* Footer */}
      <footer className={`w-full ${isSmallHeight ? 'h-[10vh]' : 'h-[11vh]'} bg-bc-black p-2 flex items-center justify-center`}>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdGW6-evzLYj5R-S860Rfxgd-LLNwRZV1FwY40dE0uEx4ELqg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-3 rounded-lg transition-colors duration-500 no-underline
            ${isClicked ? 'bg-[#AA6118]' : 'bg-bc-orange-1'} 
            text-bc-white text-title-XS font-bold flex items-center justify-center
            hover:bg-bc-orange-2 active:bg-bc-orange-3`}
          onClick={() => setIsClicked(true)}
          aria-label="사전예약하기 버튼"
        >
          사전예약하기
        </a>
      </footer>
    </div>
  );
};

export default AReservation;