import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DetailedView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const courseData = location.state?.courseData;

  const handleBack = () => {
    navigate(-1);
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
                    <img src={courseData.icon} alt="강의 아이콘" className="w-6 h-6" />
                    <p className='text-body-L font-bold'>{courseData.category}</p>
                </div>
                <div className="flex items-center gap-1">
                    <img src={courseData.icon2} alt="강의 아이콘" className="w-6 h-6" />
                    <p className='text-body-L font-bold'>{courseData.category2}</p>
                </div>
            </div>
            <h1 className="text-title-L font-bold mb-2 mt-2">{courseData.title}</h1>
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
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-body-S text-bc-grey-1">{courseData.instructor.role}</p>
              <p className="text-body-M font-bold">{courseData.instructor.name}</p>
            </div>
          </div>
          <h2 className="text-title-M mb-4">강의 소개</h2>
          <p className="text-body-M text-bc-grey-1">{courseData.introduction}</p>
          <p className='mt-2 text-body-m text-bc-grey-1'>{courseData.chaptertime}</p>
        </section>

        {/* 강의 커리큘럼 */}
        <section className="mb-8">
          <h2 className="text-title-M mb-4">커리큘럼</h2>
          <div className="space-y-4">
            {courseData.curriculum.map((item, index) => (
              <div key={index} className="p-4 bg-[#2C2C2C] rounded-lg">
                <h3 className="text-body-L mb-2">{item.title}</h3>
                <p className="text-body-S text-bc-grey-1">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 강사 소개 */}
        <section className="mb-8">
          <h2 className="text-title-M mb-4">강사 소개</h2>
          <div className="p-4 bg-[#2C2C2C] rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={courseData.instructor.profile}
                alt="강사 프로필" 
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="text-body-L font-bold">{courseData.instructor.name}</p>
                <p className="text-body-S text-bc-grey-1">{courseData.instructor.role}</p>
              </div>
            </div>
            <p className="text-body-M text-bc-grey-1">{courseData.introduction}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailedView