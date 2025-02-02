import React, {useState, useRef, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const DetailedView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const courseData = location.state?.courseData;
  const [activeTab, setActiveTab] = useState("intro");
  const introRef = useRef(null);
  const curriculumRef = useRef(null);
  const instructorRef = useRef(null);
  const [selectedCard, setSelectedCard] = useState("prologue");
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(33);
  const [isFooterVisible, setIsFooterVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const headerOffset = 100; // 헤더 높이와 여유 공간

      // 각 섹션의 위치 계산
      const introPosition = introRef.current?.offsetTop - headerOffset;
      const curriculumPosition =
        curriculumRef.current?.offsetTop - headerOffset;
      const instructorPosition =
        instructorRef.current?.offsetTop - headerOffset;

      // 스크롤 위치에 따라 활성 탭 설정
      if (currentScrollY < curriculumPosition) {
        setActiveTab("intro");
      } else if (currentScrollY < instructorPosition) {
        setActiveTab("curriculum");
      } else {
        setActiveTab("instructor");
      }

      // 기존 footer 표시 로직
      setIsFooterVisible(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => (isLiked ? prev - 1 : prev + 1));
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleTabClick = (tabId, ref) => {
    setActiveTab(tabId);
    if (ref.current) {
      const yOffset = -60; // 상단 여백 조정
      const element = ref.current;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: "smooth"});
    }
  };

  const handlePrologueClick = () => {
    setSelectedCard(selectedCard === "prologue" ? null : "prologue");
  };

  const handleCardClick = index => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  const handlePreorderClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdGW6-evzLYj5R-S860Rfxgd-LLNwRZV1FwY40dE0uEx4ELqg/viewform",
      "_blank"
    );
  };

  if (!courseData) {
    navigate("/main");
    return null;
  }

  return (
    <div className='w-full min-h-screen bg-bc-black text-bc-white'>
      <div className='relative w-full h-[70vh]'>
        <img
          src={courseData.detailedImage}
          alt='강의 썸네일'
          className='w-full h-full object-cover'
        />
        <button
          onClick={handleBack}
          className='absolute top-4 left-4 z-10 p-2 bg-transparent'>
          <img
            src='assets/LeftArrow.png'
            alt='뒤로가기'
            className='w-[12px] h-[18px]'
          />
        </button>
        <div className='absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full'>
          <div className=''>
            <div className='flex flex-row items-start gap-2'>
              <div className='flex items-center gap-1'>
                <img
                  src={courseData.icon}
                  alt='강의 아이콘'
                  className='w-6 h-6 bc-grey-1'
                />
                <p className='text-[12px] text-[#F8F8F8]'>
                  {courseData.category}
                </p>
              </div>
              {courseData.icon2 && courseData.category2 && (
                <div className='flex items-center gap-1'>
                  <img
                    src={courseData.icon2}
                    alt='강의 아이콘'
                    className='w-6 h-6'
                  />
                  <p className='text-[10px] text-bc-grey-1'>
                    {courseData.category2}
                  </p>
                </div>
              )}
            </div>
            <h1 className='text-[20px] font-bold my-2'>{courseData.title}</h1>
            <p className='font-bold text-[18px] text-bc-white whitespace-pre-line'>
              {courseData.description.split("\n").map(line => (
                <>
                  {line}
                  <br />
                </>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className='p-6'>
        {/* 강의 소개 */}
        <section className='mb-8'>
          <div className='flex items-center gap-3'>
            <img
              src={courseData.instructor.profile}
              alt='프로필'
              className='w-[48px] h-[48px]'
            />
            <div>
              <p className='text-[13px] text-[#F8F8F8]'>
                {courseData.instructor.role}
              </p>
              <p className='text-[18px] text-[#F8F8F8] font-bold'>
                {courseData.instructor.name}
              </p>
            </div>
          </div>
          <p className='text-[12px] text-[#F8F8F8] mt-5'>
            {courseData.introduction.split("\n").map(line => (
              <>
                {line}
                <br />
              </>
            ))}
          </p>
          <p className='text-[12px] text-[#F8F8F8] mt-4'>
            {courseData.chaptertime}
          </p>
        </section>

        {/* 탭 네비게이션 */}
        <div className='sticky top-0 z-20 bg-bc-black border-b border-[#2C2C2C]'>
          <div className='flex justify-between px-6 relative'>
            <button
              onClick={() => handleTabClick("intro", introRef)}
              className={`py-4 px-2 bg-transparent relative font-bold ${
                activeTab === "intro" ? "text-[#F8F8F8]" : "text-[#B2B1B1]"
              }`}>
              {courseData.isOnline ? "강의" : "강연"}소개
            </button>
            <button
              onClick={() => handleTabClick("curriculum", curriculumRef)}
              className={`py-4 px-2 bg-transparent relative ${
                activeTab === "curriculum" ? "text-bc-white" : "text-bc-grey-1"
              }`}>
              커리큘럼
            </button>
            <button
              onClick={() => handleTabClick("instructor", instructorRef)}
              className={`py-4 px-2 bg-transparent relative ${
                activeTab === "instructor" ? "text-bc-white" : "text-bc-grey-1"
              }`}>
              강사소개
            </button>
            <div
              className='absolute bottom-0 h-1 bg-[#1E3A8A] transition-all duration-300 ease-in-out'
              style={{
                left:
                  activeTab === "intro"
                    ? "0%"
                    : activeTab === "curriculum"
                    ? "33.33%"
                    : "66.66%",
                width: "33.33%",
              }}
            />
          </div>
        </div>

        {/* 강연 소개 섹션 */}
        <section
          ref={introRef}
          className='my-6'>
          <p className='text-[24px] font-bold mb-4 text-center'>
            {courseData.isOnline ? "강의" : "강연"}소개
          </p>
          <div className='grid grid-cols-2 gap-1 mb-6 mt-2'>
            <div className='w-full'>
              <img
                src={courseData.introImages?.[0]}
                alt='강연 이미지 1'
                className='w-[165px] h-[126px] object-cover rounded-lg'
              />
            </div>
            <div className=''>
              <img
                src={courseData.introImages?.[1]}
                alt='강연 이미지 2'
                className='w-[165px] h-[126px] object-cover rounded-lg'
              />
            </div>
            <div className=''>
              <img
                src={courseData.introImages?.[2]}
                alt='강연 이미지 3'
                className='w-[165px] h-[126px] object-cover rounded-lg'
              />
            </div>
            <div className=''>
              <img
                src={courseData.introImages?.[3]}
                alt='강연 이미지 4'
                className='w-[165px] h-[126px] object-cover rounded-lg'
              />
            </div>
          </div>
          <div className=''>
            <div className='p-4 bg-transparent rounded-lg pl-0'>
              <div className='flex flex-row'>
                <h3 className='text-bc-white mr-3'>✓ </h3>
                <h3 className='text-body-L font-bold mb-2 text-bc-white'>
                  강의를 기획하게 된 이유?
                </h3>
              </div>
              <p className='text-body-S text-bc-white whitespace-pre-line'>
                {courseData.introReason}
              </p>
            </div>
            <div className='p-4 bg-transparent rounded-lg pl-0'>
              <div className='flex flex-row'>
                <h3 className='text-bc-white mr-3'>✓ </h3>
                <h3 className='text-body-L font-bold mb-2 text-bc-white'>
                  강의가 제공해줄 수 있는 혜택
                </h3>
              </div>
              <ul className='ml-4'>
                {courseData.introBenefit.split("\n").map((item, index) => (
                  <li
                    key={index}
                    className='flex items-start'>
                    <p className='text-body-S text-[#F8F8F8] indent-[-10px]'>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 커리큘럼 섹션 */}
        <section
          ref={curriculumRef}
          className='mb-12 min-h-[650px]'>
          <p className='text-[24px] font-bold mb-4 text-center'>커리큘럼</p>
          <div className='space-y-3'>
            {/* 프롤로그 */}
            <h3 className='text-[14px] font-bold mb-2'>• 프롤로그</h3>
            <div
              className='flex flex-row'
              onClick={handlePrologueClick}>
              <div className='pr-1 flex-1'>
                <div
                  className={`py-[12px] px-[16px] rounded-lg flex items-center justify-between max-h-16 transition-colors duration-300 ${
                    selectedCard === "prologue"
                      ? "bg-[#3348CB]"
                      : "bg-[#2C2C2C]"
                  }`}>
                  <div>
                    <p
                      className={`text-body-S ${
                        selectedCard === "prologue"
                          ? "text-[#F8F8F8]"
                          : "text-[#F8F8F8]"
                      }`}>
                      &quot;{courseData.curriculumProlog}&quot;
                    </p>
                  </div>
                </div>
                <p className='text-[10px] text-[#F8F8F8] text-right mt-[9px]'>
                  05:00
                </p>
              </div>
              <div className='flex flex-col items-start ml-2'>
                <img
                  src='assets/play.png'
                  alt='재생'
                  className='w-6 h-6'
                />
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    selectedCard === "prologue" ? "h-12" : "h-0"
                  }`}>
                  <p className='text-body-S text-[#F8F8F8] mt-1'>미리</p>
                  <p className='text-body-S text-[#F8F8F8]'>보기</p>
                </div>
              </div>
            </div>

            {/* Episode 리스트 */}
            <div className='space-y-4'>
              {courseData.curriculum.map((episode, episodeIndex) => (
                <div key={episodeIndex}>
                  <p className='text-[14px] text-[#F8F8F8] font-bold'>
                    • {episode.episode}
                  </p>
                  <p className='text-[14px] text-[#F8F8F8] font-bold mb-3 ml-3'>
                    {episode.episodeDescription}
                  </p>
                  <div className='space-y-3'>
                    {episode.chapters.map((chapter, chapterIndex) => (
                      <div key={chapter.key}>
                        <div
                          className='flex flex-row'
                          onClick={() => handleCardClick(chapter.key)}>
                          <div className='pr-1 flex-1'>
                            <div
                              className={`py-[12px] px-[16px] rounded-lg flex items-center justify-between max-h-16 transition-colors duration-300 ${
                                selectedCard === chapter.key
                                  ? "bg-[#3348CB]"
                                  : "bg-[#2C2C2C]"
                              }`}>
                              <div>
                                <p
                                  className={`text-body-S ${
                                    selectedCard === chapter.key
                                      ? "text-[#F8F8F8]"
                                      : "text-[#F8F8F8]"
                                  }`}>
                                  {chapter.description}
                                </p>
                              </div>
                            </div>
                            <p className='text-[10px] text-[#F8F8F8] text-right mt-[9px]'>
                              {chapter.duration}
                            </p>
                          </div>
                          <div className='flex flex-col items-start ml-2'>
                            <img
                              src='assets/play.png'
                              alt='재생'
                              className='w-6 h-6'
                            />
                            <div
                              className={`overflow-hidden transition-all duration-300 ${
                                selectedCard === chapter.key ? "h-12" : "h-0"
                              }`}>
                              <p className='text-body-S text-[#F8F8F8] mt-1'>
                                미리
                              </p>
                              <p className='text-body-S text-[#F8F8F8]'>보기</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 강사 소개 섹션 */}
        <section
          ref={instructorRef}
          className='mb-48'>
          <p className='text-[24px] font-bold text-center'>강사 소개</p>
          <div className='p-6 bg-transparent rounded-lg pb-0'>
            <div className='flex flex-row items-center text-center mb-6 gap-[48px]'>
              <img
                src={courseData.instructor.profile}
                alt='강사 프로필'
                className='w-[120px] h-[120px] rounded-full mb-4'
              />
              <div className='flex flex-col items-center gap-[8px] justify-start items-start'>
                <p className='text-[14px] text-left text-[#F8F8F8]'>
                  {courseData.instructor.role2}
                </p>
                <p className='w-full text-[24px] text-left text-[#F8F8F8] font-bold '>
                  {courseData.instructor.name}
                </p>
              </div>
            </div>
          </div>

          {/* 경력 섹션 */}
          <div className='mb-6'>
            <h3 className='text-body-L font-bold mb-3'>경력</h3>
            <ul className='ml-4'>
              {courseData.career?.map((item, index) => (
                <li
                  key={index}
                  className='flex items-start'>
                  <p className='text-body-S text-[#F8F8F8] indent-[-10px]'>
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* 나의 자랑거리 섹션 */}
          <div>
            <h3 className='text-body-L font-bold mb-3'>나의 자랑거리</h3>
            <ul className='ml-4'>
              {courseData.achievements?.map((item, index) => (
                <li
                  key={index}
                  className='flex items-start'>
                  <p className='text-body-S text-[#F8F8F8] indent-[-10px]'>
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer
        className={`fixed bottom-0 left-0 right-0 bg-bc-black transition-transform duration-300 z-50 ${
          isFooterVisible ? "translate-y-0" : "translate-y-full"
        }`}>
        <div className='flex items-center justify-between px-6 py-3'>
          <div className='w-[48px] h-[48px] flex items-center justify-center'>
            <button
              onClick={handleLikeClick}
              className='flex items-center gap-1 bg-transparent flex-col'>
              <img
                src={
                  isLiked
                    ? "assets/heart_select.svg"
                    : "assets/heart_default.svg"
                }
                alt='좋아요'
                className={`w-[24px] h-[24px] transition-transform duration-300 scale-100`}
              />
              <span className='text-[10px] text-bc-white'>{likeCount}</span>
            </button>
          </div>
          <div className='flex gap-3'>
            <button className='py-[10px] bg-[#F6922E] rounded-[8px] font-bold text-[13px] text-bc-white w-32'>
              구독하기
            </button>
            <button
              className='py-[10px] bg-[#4059F7] rounded-[8px] font-bold text-[13px] text-bc-white w-32'
              onClick={handlePreorderClick}>
              사전예약
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DetailedView;
