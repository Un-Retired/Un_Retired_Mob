import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexCurrent, setCurrentIndexCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const recommendedCourses = [
    {
      id: 1,
      image: "assets/kwon.svg",
      category: "인사·교육",
      category2: "호텔리어",
      icon: "assets/hat.svg",
      icon2: "assets/bed.svg",
      title: "47년 호텔경력",
      description: "웨스틴 조선 호텔,\n권문현 지배인이 들려주는 호텔서비스의 \n모든 것.",
      detailedImage: "assets/detailed_kwon.svg",
      chaptertime: "챕터 2개·0시간 30분",
      instructor: {
        name: "권문현",
        role: "호텔 지배인",
        profile: "assets/avatar_kwon.svg"
      },
      introduction: "안녕하세요.\n웨스틴 조선호텔 서울 지배인 권문현입니다.\n47년 호텔생활을 하며 쌓아온 호텔 서비스의 마음가짐과\n필요한 역량을 포함한 모든 것을 호텔리어를 꿈꾸는\n젋은 세대들에게 핵심만을 담아 전달하려 합니다.",
      curriculum: [
        {
          title: "1. 호텔리어의 시작",
          description: "47년 전 호텔리어를 꿈꾸게 된 계기"
        },
        {
          title: "2. 서비스의 진정한 의미",
          description: "고객 서비스의 핵심 가치와 철학"
        }
      ]
    },
    {
      id: 2,
      image: "assets/lee.svg",
      category: "인문학·교양",
      icon: "assets/book.svg",
      title: "25년 은퇴설계",
      description: "은퇴설계 25년 경력의 베테랑, \n이기훈 강사가 들려주는 직장이 아닌 직업\n만드는법",
      detailedImage: "assets/detailed_lee.svg",
      chaptertime: "챕터 6개·0시간 30분",
      instructor: {
        name: "이상철",
        role: "작가",
        profile: "assets/profile_lee.svg"
      },
      introduction: "직장과 직업에 대한 새로운 시각을 제시합니다.",
      curriculum: [
        {
          title: "1. 직장인의 도전",
          description: "새로운 시작을 위한 첫걸음"
        },
        {
          title: "2. 변화하는 직업 세계",
          description: "미래 직업의 트렌드와 전망"
        }
      ]
    },
    {
      id: 3,
      isPreReservation: true,
      title: "사전 예약하고 가장 먼저 시청해 보세요!",
      description: "AI활용 / 유아교육 / SDGS / 클래식 인문학 / 일과 세대에 이해하기 등의 콘텐츠가 추가될 예정입니다.",
      icon: 'assets/button_subscribe.svg'
    }
  ];

  const currentCourses = [
    {
      id: 1,
      image: "assets/kwon2.svg",
      category: "인사·교육",
      icon: "assets/hat.svg",
    },
    {
      id: 2,
      image: "assets/lee2.svg",
      category: "인문학·교양",
      icon: "assets/book.svg",
    }
  ];

  const handleTouchStart = (e, isCurrentCourse = false) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e, isCurrentCourse = false) => {
    const touchEnd = e.changedTouches[0].clientX;
    const touchDiff = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(touchDiff) > minSwipeDistance) {
      if (isCurrentCourse) {
        if (touchDiff > 0 && currentIndexCurrent < currentCourses.length - 1) {
          setCurrentIndexCurrent(prev => prev + 1);
        } else if (touchDiff < 0 && currentIndexCurrent > 0) {
          setCurrentIndexCurrent(prev => prev - 1);
        }
      } else {
        if (touchDiff > 0 && currentIndex < recommendedCourses.length - 1) {
          setCurrentIndex(prev => prev + 1);
        } else if (touchDiff < 0 && currentIndex > 0) {
          setCurrentIndex(prev => prev - 1);
        }
      }
    }
  };

  const handleCourseClick = (course) => {
    if (!course.isPreReservation) {
      navigate('/detail', { state: { courseData: course } });
    }
  };

  return (
    <div className="w-auto h-auto bg-bc-black text-bc-white overflow-hidden pb-[60px] relative min-h-screen">
      <header className="w-full h-[60px] flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <button className="text-bc-white bg-transparent">
            <img src="assets/menu.svg" alt="menu" className="w-6 h-6" />
          </button>
          <img src="assets/MainPageTopLogo.svg" alt="Un:Retired Logo" className="h-6" />
        </div>
        <button className="text-bc-white bg-transparent">
          <img src="assets/bell.svg" alt="notifications" className="w-6 h-6" />
        </button>
      </header>

      <div className="px-6 mt-4">
        <div className="relative">
          <input 
            type="text"
            placeholder="관심 분야, 강사명으로 검색하기"
            className="w-full h-12 bg-[#2C2C2C] rounded-lg pl-4 pr-12 text-bc-white placeholder:text-gray-500"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent">
            <img src="assets/search.svg" alt="search" className="w-5 h-5 bg-transparent" />
          </button>
        </div>
      </div>

      <main className="px-6 mt-6">
        <h2 className="text-bc-white text-body-L font-bold mb-4">user님께 추천하는 강의</h2>
        
        <div className="relative mb-4">
          <div 
            className="overflow-hidden touch-pan-x"
            onTouchStart={(e) => handleTouchStart(e, false)}
            onTouchEnd={(e) => handleTouchEnd(e, false)}
          >
            <div 
              className="flex gap-4 transition-transform duration-300 ease-in-out wider:min-h-[400px]"
              style={{ 
                transform: `translateX(-${currentIndex * (
                  window.innerWidth >= 428 ? 72 : 
                  window.innerWidth >= 410 ? 75 : 
                  60
                )}%)`
              }}
            >
              {recommendedCourses.map((course, index) => (
                <div 
                  key={course.id} 
                  className="min-w-[55%] min-h-[350] flex-shrink-0 wider:min-w-[67%] wider:min-h-[350px] relative"
                  onClick={() => handleCourseClick(course)}
                  role="button"
                  tabIndex={0}
                >
                  <div className={`absolute inset-0 z-10 transition-opacity duration-300 ${
                    currentIndex === index ? 'opacity-0' : 'bg-black/50'
                  }`} />
                  <div className="flex items-center gap-2 mb-2">
                    {course.isPreReservation ? (
                      <>
                        <img src="assets/AR_icon1.svg" alt="fire" className="w-4 h-4" />
                        <span className="text-sm text-bc-orange-1">사전 예약 신청</span>
                      </>
                    ) : (
                      <>
                        <img src={course.icon} alt={course.category} className="w-6 h-6" />
                        <span className="text-sm text-bc-white">{course.category}</span>
                      </>
                    )}
                  </div>
                  <div className="relative h-[250px] rounded-lg overflow-visible">
                    {course.isPreReservation ? (
                      <div className="w-[32%] h-[250px] bg-[#2C2C2C] rounded-lg p-4 flex flex-col justify-center wider:h-[350px]">
                        <div className="text-center flex flex-col items-center">
                            <button className="w-20 h-20 bg-transparent">
                                <img src={course.icon} alt="subscribe" className="w-20 h-20" />
                            </button>
                          <h3 className="text-body-L font-bold mb-2 mt-4">{course.title}</h3>
                          <p className="text-body-S text-gray-300">{course.description}</p>
                        </div>
                      </div>
                    ) : (
                      <>
                        <img src={course.image} alt={course.title} className="w-full h-full wider:h-[350px] object-cover rounded-lg" />
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-bc-white text-body-L font-bold mb-4">수강중인 강의</h2>
        <div className="relative">
          <div 
            className="overflow-hidden touch-pan-x"
            onTouchStart={(e) => handleTouchStart(e, true)}
            onTouchEnd={(e) => handleTouchEnd(e, true)}
          >
            <div 
              className="flex gap-4 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndexCurrent * 64}%)` }}
            >
              {currentCourses.map((course) => (
                <div key={course.id} className="min-w-[55%] flex-shrink-0 wider:min-w-[67%] wider:min-h-[60%] wider:mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <img src={course.icon} alt={course.category} className="w-6 h-6" />
                    <span className="text-sm text-bc-white">{course.category}</span>
                  </div>
                  <div className="relative h-[150px] rounded-lg overflow-hidden w-[100%] wider:w-full wider:h-[200px]">
                    <img src={course.image} alt={course.title} className="w-auto h-auto object-cover wider:w-full wider:h-[100%]" />
                  </div>
                  <div className="mt-2">
                    <span className="text-body-S text-bc-white">
                      <span className="font-bold">
                        {course.id === 1 ? "Ep.01" : "Ep.02"}
                      </span>
                      {" "}
                      {course.id === 1 
                        ? '"47년 호텔리어의 시작 이야기:..."'
                        : '"직장 그리고 직업, 회사 밖은..."'
                      }
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 h-[60px] bg-bc-black">
        <div className="flex justify-between items-center h-full px-6">
          <div className="flex flex-col items-center">
            <img src="assets/강의실.svg" alt="강의실" className="w-6 h-6" />
            <span className="text-xs mt-1 text-bc-white">강의실</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="assets/캘린더.svg" alt="캘린더" className="w-6 h-6" />
            <span className="text-xs mt-1 text-bc-white">캘린더</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="assets/홈.svg" alt="홈" className="w-6 h-6" />
            <span className="text-xs mt-1 text-bc-white">홈</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="assets/커뮤니티.svg" alt="커뮤니티" className="w-6 h-6" />
            <span className="text-xs mt-1 text-bc-white">커뮤니티</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="assets/마이페이지.svg" alt="마이페이지" className="w-6 h-6" />
            <span className="text-xs mt-1 text-bc-white">마이페이지</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;