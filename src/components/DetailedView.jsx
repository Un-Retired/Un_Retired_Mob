import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DetailedView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const courseData = location.state?.courseData;
  const [activeTab, setActiveTab] = useState('intro');
  const introRef = useRef(null);
  const curriculumRef = useRef(null);
  const instructorRef = useRef(null);
  const [selectedCard, setSelectedCard] = useState('prologue');
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(33);
  const [isFooterVisible, setIsFooterVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsFooterVisible(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleTabClick = (tabId, ref) => {
    setActiveTab(tabId);
    if (ref.current) {
      const yOffset = -60; // 상단 여백 조정
      const element = ref.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handlePrologueClick = () => {
    setSelectedCard(selectedCard === 'prologue' ? null : 'prologue');
  };

  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  if (!courseData) {
    navigate('/main');
    return null;
  }

  return (
    <div className="w-full min-h-screen bg-bc-black text-bc-white">
      <div className="relative w-full h-[70vh]">
        <img
          src={courseData.detailedImage}
          alt="강의 썸네일"
          className="w-full h-full object-cover"
        />
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 z-10 p-2 bg-transparent"
        >
          <img
            src="assets/LeftArrow.png"
            alt="뒤로가기"
            className="w-5 h-7"
          />
        </button>
        <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
          <div className="mb-6">
            <div className='flex flex-row items-start gap-2'>
              <div className="flex items-center gap-1">
                <img src={courseData.icon} alt="강의 아이콘" className="w-6 h-6 bc-grey-1" />
                <p className='text-body-L text-bc-grey-1'>{courseData.category}</p>
              </div>
              {courseData.icon2 && courseData.category2 && (
                <div className="flex items-center gap-1">
                  <img src={courseData.icon2} alt="강의 아이콘" className="w-6 h-6" />
                  <p className='text-body-L text-bc-grey-1'>{courseData.category2}</p>
                </div>
              )}
            </div>
            <h1 className="text-title-L font-bold mb-4 mt-4">{courseData.title}</h1>
            <p className="text-title-S text-bc-white whitespace-pre-line">{courseData.description}</p>
          </div>


        </div>
      </div>

      <div className="p-6">
        {/* 강의 소개 */}
        <section className="mb-8">
          <div className="flex items-center gap-3">
            <img
              src={courseData.instructor.profile}
              alt="프로필"
              className="w-12 h-12"
            />
            <div>
              <p className="text-body-S text-bc-grey-1">{courseData.instructor.role}</p>
              <p className="text-body-M font-bold">{courseData.instructor.name}</p>
            </div>
          </div>
          <p className="text-body-M text-bc-grey-1 mt-5">{courseData.introduction}</p>
          <p className='text-body-M text-bc-grey-1 mt-4'>{courseData.chaptertime}</p>
        </section>

        {/* 탭 네비게이션 */}
        <div className="sticky top-0 z-20 bg-bc-black border-b border-[#2C2C2C]">
          <div className="flex justify-between px-6">
            <button
              onClick={() => handleTabClick('intro', introRef)}
              className={`py-4 px-2 bg-transparent ${activeTab === 'intro' ? 'text-bc-white' : 'text-bc-grey-1'}`}
            >
              강연소개
            </button>
            <button
              onClick={() => handleTabClick('curriculum', curriculumRef)}
              className={`py-4 px-2 bg-transparent ${activeTab === 'curriculum' ? 'text-bc-white' : 'text-bc-grey-1'}`}
            >
              커리큘럼
            </button>
            <button
              onClick={() => handleTabClick('instructor', instructorRef)}
              className={`py-4 px-2 bg-transparent ${activeTab === 'instructor' ? 'text-bc-white' : 'text-bc-grey-1'}`}
            >
              강사소개
            </button>
          </div>
        </div>

        {/* 강연 소개 섹션 */}
        <section ref={introRef} className="mb-8 mt-6">
          <p className='text-title-L font-bold mb-4 text-center'>강연 소개</p>
          <div className="grid grid-cols-2 gap-1 mb-6 mt-2">
            <div className="aspect-square w-full">
              <img
                src={courseData.introImages?.[0]}
                alt="강연 이미지 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <img
                src={courseData.introImages?.[1]}
                alt="강연 이미지 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <img
                src={courseData.introImages?.[2]}
                alt="강연 이미지 3"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <img
                src={courseData.introImages?.[3]}
                alt="강연 이미지 4"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-transparent rounded-lg pl-0">
              <div className='flex flex-row'>
                <h3 className='text-bc-white mr-3'>✓ </h3>
                <h3 className="text-body-L mb-2 text-bc-white">강의를 기획하게 된 이유?</h3>
              </div>
              <p className="text-body-S text-bc-white whitespace-pre-line">{courseData.introReason}</p>
            </div>
            <div className="p-4 bg-transparent rounded-lg pl-0">
              <div className='flex flex-row'>
                <h3 className='text-bc-white mr-3'>✓ </h3>
                <h3 className="text-body-L mb-2 text-bc-white">강의가 제공해줄 수 있는 혜택</h3>
              </div>
              <p className="text-body-S text-bc-white whitespace-pre-line">{courseData.introBenefit}</p>
            </div>
          </div>
        </section>

        {/* 커리큘럼 섹션 */}
        <section ref={curriculumRef} className="mb-8">
          <p className='text-title-L font-bold mb-4 text-center'>커리큘럼</p>
          <div className="space-y-3">
            {/* 프롤로그 */}
            <h3 className="text-body-L mb-2">• 프롤로그</h3>
            <div className='flex flex-row' onClick={handlePrologueClick}>
              <div className='pr-4 flex-1'>
                <div className={`p-4 rounded-lg flex items-center justify-between max-h-16 transition-colors duration-300 ${selectedCard === 'prologue' ? 'bg-[#1E3A8A]' : 'bg-[#2C2C2C]'
                  }`}>
                  <div>
                    <p className={`text-body-S ${selectedCard === 'prologue' ? 'text-bc-white' : 'text-bc-grey-1'}`}>"{courseData.curriculumProlog}"</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start ml-2">
                <img src="assets/play.png" alt="재생" className="w-6 h-6" />
                <div className={`overflow-hidden transition-all duration-300 ${selectedCard === 'prologue' ? 'h-12' : 'h-0'
                  }`}>
                  <p className='text-body-S text-bc-grey-1 mt-1'>미리</p>
                  <p className='text-body-S text-bc-grey-1'>보기</p>
                </div>
              </div>
            </div>

            <p className="text-body-S text-bc-grey-1 mr-2 text-right mt-0 mr-12">05:00</p>

            {/* Episode 리스트 */}
            <div className="space-y-4">
              <p className="text-body-L text-bc-white">• Episode</p>
              {courseData.curriculum.map((item, index) => (
                <div key={index}>
                  <div className='flex flex-row' onClick={() => handleCardClick(index)}>
                    <div className='pr-4 flex-1'>
                      <div className={`p-4 rounded-lg flex items-center justify-between max-h-16 transition-colors duration-300 ${selectedCard === index ? 'bg-[#1E3A8A]' : 'bg-[#2C2C2C]'
                        }`}>
                        <div>
                          <p className={`text-body-S ${selectedCard === index ? 'text-bc-white' : 'text-bc-grey-1'}`}>"{item.description}"</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start ml-2">
                      <img src="assets/play.png" alt="재생" className="w-6 h-6" />
                      <div className={`overflow-hidden transition-all duration-300 ${selectedCard === index ? 'h-12' : 'h-0'
                        }`}>
                        <p className='text-body-S text-bc-grey-1 mt-1'>미리</p>
                        <p className='text-body-S text-bc-grey-1'>보기</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-body-S text-bc-grey-1 mr-2 text-right mt-0 mr-12">30:00</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 강사 소개 섹션 */}
        <section ref={instructorRef} className="mb-12">
          <p className='text-title-L font-bold mb-4 text-center'>강사 소개</p>
          <div className="p-6 bg-transparent rounded-lg pb-0">
            <div className="flex flex-row items-center text-center mb-6">
              <img
                src={courseData.instructor.profile}
                alt="강사 프로필"
                className="w-24 h-24 rounded-full mb-4"
              />
              <div className='flex flex-col items-center ml-6 justify-start'>
                <p className="text-body-M text-bc-grey-1">{courseData.instructor.role}</p>
                <p className="text-title-M font-bold mb-1">{courseData.instructor.name}</p>
              </div>
            </div>
          </div>

          {/* 경력 섹션 */}
          <div className="mb-6">
            <h3 className="text-body-L font-bold mb-3">경력</h3>
            <ul className="ml-2">
              {courseData.career?.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-bc-grey-1 mr-2">•</span>
                  <p className="text-body-S text-bc-grey-1">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* 나의 자랑거리 섹션 */}
          <div>
            <h3 className="text-body-L font-bold mb-3">나의 자랑거리</h3>
            <ul className="ml-2">
              {courseData.achievements?.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-bc-grey-1 mr-2">•</span>
                  <p className="text-body-S text-bc-grey-1">{item}</p>
                </li>
              ))}
            </ul>
          </div>

        </section>
      </div>

      {/* Footer */}
      <footer className={`fixed bottom-0 left-0 right-0 bg-bc-black transition-transform duration-300 z-50 ${
        isFooterVisible ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <button 
              onClick={handleLikeClick}
              className="flex items-center gap-1 bg-transparent flex-col"
            >
              <img 
                src={isLiked ? "assets/heart-filled.png" : "assets/heart.png"} 
                alt="좋아요" 
                className={`w-6 h-6 transition-transform duration-300 ${
                  isLiked ? 'scale-110' : 'scale-100'
                }`}
              />
              <span className="text-bc-white">{likeCount}</span>
            </button>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-2 bg-[#FF6B00] rounded-md text-bc-white w-32">
              구독하기
            </button>
            <button className="px-6 py-2 bg-[#4867D6] rounded-md text-bc-white w-32">
              사전예약
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DetailedView