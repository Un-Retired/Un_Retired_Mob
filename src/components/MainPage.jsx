import React, {useState, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {categories} from "./categories";
import {recommendedCourses} from "./recommendedCourses";

const MainPage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexCurrent, setCurrentIndexCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const currentCourses = [
    {
      id: 1,
      image: "assets/kwon2.svg",
      ...categories["인사 · 교육"],
    },
    {
      id: 2,
      image: "assets/lee2.svg",
      ...categories["인문학 · 교양"],
    },
  ];

  const handleTouchStart = (e, isCurrentCourse = false) => {
    const touch = e.touches[0];
    setTouchStart({
      x: touch.clientX,
      y: touch.clientY,
    });
  };

  const handleTouchEnd = (e, isCurrentCourse = false) => {
    if (!touchStart) return;

    const touch = e.changedTouches[0];
    const deltaX = touchStart.x - touch.clientX;
    const deltaY = touchStart.y - touch.clientY;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (isCurrentCourse) {
        if (deltaX > 0 && currentIndexCurrent < currentCourses.length - 1) {
          setCurrentIndexCurrent(prev => prev + 1);
        } else if (deltaX < 0 && currentIndexCurrent > 0) {
          setCurrentIndexCurrent(prev => prev - 1);
        }
      } else {
        if (deltaX > 0 && currentIndex < recommendedCourses.length - 1) {
          setCurrentIndex(prev => prev + 1);
        } else if (deltaX < 0 && currentIndex > 0) {
          setCurrentIndex(prev => prev - 1);
        }
      }
    }
  };

  const handleCourseClick = course => {
    if (course.isPreReservation) {
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSdGW6-evzLYj5R-S860Rfxgd-LLNwRZV1FwY40dE0uEx4ELqg/viewform",
        "_blank"
      );
    } else {
      navigate("/detail", {state: {courseData: course}});
    }
  };

  return (
    <div className='w-auto h-auto bg-bc-black text-bc-white overflow-hidden pb-[60px] relative min-h-screen'>
      <header className='w-full h-[60px] flex items-center justify-between px-6'>
        <div className='flex items-center gap-2'>
          <button className='text-bc-white bg-transparent'>
            <img
              src='assets/menu.svg'
              alt='menu'
              className='w-6 h-6'
            />
          </button>
          <img
            src='assets/MainPageTopLogo.png'
            alt='Un:Retired Logo'
            className='h-6'
          />
        </div>
        <button className='text-bc-white bg-transparent'>
          <img
            src='assets/bell.svg'
            alt='notifications'
            className='w-6 h-6'
          />
        </button>
      </header>

      <div className='px-6 mt-4'>
        <div className='relative'>
          <input
            type='text'
            placeholder='관심 분야, 강사명으로 검색하기'
            className='w-full h-12 bg-[#2C2C2C] rounded-lg pl-4 pr-12 text-bc-white placeholder:text-gray-500'
          />
          <button className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent'>
            <img
              src='assets/search.svg'
              alt='search'
              className='w-5 h-5 bg-transparent'
            />
          </button>
        </div>
      </div>

      <main className='px-6 mt-6'>
        <h2 className='text-bc-white text-body-L font-bold mb-4'>
          사전 예약자님께 추천하는 강의
        </h2>

        <div className='grid grid-cols-2 gap-4'>
          {recommendedCourses.map(course => (
            <div
              key={course.id}
              className='relative'
              onClick={() => handleCourseClick(course)}
              role='button'
              tabIndex={0}>
              <div className='flex items-center gap-2 mb-2'>
                {course.isPreReservation ? (
                  <>
                    <img
                      src='assets/AR_icon1.svg'
                      alt='fire'
                      className='w-4 h-4'
                    />
                    <span className='text-sm text-bc-orange-1'>
                      사전 예약 신청
                    </span>
                  </>
                ) : (
                  <>
                    <img
                      src={course.icon}
                      alt={course.category}
                      className='w-6 h-6'
                    />
                    <span className='text-sm text-bc-white'>
                      {course.category}
                    </span>
                  </>
                )}
              </div>
              <div className='relative h-[210px] rounded-lg overflow-visible'>
                {course.isPreReservation ? (
                  <div className='w-full h-full bg-[#2C2C2C] rounded-lg p-4 flex flex-col justify-center'>
                    <div className='text-center flex flex-col items-center'>
                      <button className='w-12 h-12 bg-transparent'>
                        <img
                          src={course.icon}
                          alt='subscribe'
                          className='w-full h-full'
                        />
                      </button>
                      <h3 className='text-body-S font-bold mb-1 mt-2'>
                        {course.title}
                      </h3>
                      <p className='text-xs text-gray-300 line-clamp-2'>
                        {course.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={course.image}
                    alt={course.title}
                    className='w-full h-full object-contain rounded-lg'
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className='fixed bottom-0 left-0 right-0 h-[60px] bg-bc-black'>
        <div className='flex justify-between items-center h-full px-6'>
          <div className='flex flex-col items-center'>
            <img
              src='assets/강의실.svg'
              alt='강의실'
              className='w-6 h-6'
            />
            <span className='text-xs mt-1 text-bc-white'>강의실</span>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src='assets/캘린더.svg'
              alt='캘린더'
              className='w-6 h-6'
            />
            <span className='text-xs mt-1 text-bc-white'>캘린더</span>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src='assets/홈.svg'
              alt='홈'
              className='w-6 h-6'
            />
            <span className='text-xs mt-1 text-bc-white'>홈</span>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src='assets/커뮤니티.svg'
              alt='커뮤니티'
              className='w-6 h-6'
            />
            <span className='text-xs mt-1 text-bc-white'>커뮤니티</span>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src='assets/마이페이지.svg'
              alt='마이페이지'
              className='w-6 h-6'
            />
            <span className='text-xs mt-1 text-bc-white'>마이페이지</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
