import {useNavigate} from "react-router-dom";
import {recommendedCourses} from "../data/recommendedCourses";

const MainPage = () => {
  const navigate = useNavigate();

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

      <div className='px-6'>
        <div className='relative'>
          <input
            type='text'
            placeholder='관심 분야, 강사명으로 검색하기'
            className='w-full bg-[#2C2C2C] rounded-lg px-[12px] py-[8px] text-bc-white placeholder:text-[#828282] placeholder:text-[12px]'
          />
          <button className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent'>
            <img
              src='assets/search.svg'
              alt='search'
              className='w-4 h-4 bg-transparent'
            />
          </button>
        </div>
      </div>

      <main className='px-6 mt-6'>
        <h2 className='text-bc-white text-body-L font-bold mb-4'>
          사전 예약자님께 추천하는 강의
        </h2>

        <div className='grid grid-cols-2 gap-4 mb-8'>
          {recommendedCourses.map(course => (
            <div
              key={course.id}
              className='relative'
              onClick={() => handleCourseClick(course)}
              role='button'
              tabIndex={0}>
              <div className={"flex items-center gap-[5px] mb-0"}>
                <img
                  src={course.icon}
                  alt={course.category}
                  className='w-6 h-6'
                />
                <span className='text-sm text-bc-white'>{course.category}</span>
              </div>
              <div className='relative h-[210px] rounded-lg overflow-visible'>
                {course.isPreReservation ? (
                  <div className='w-full h-full bg-[#2C2C2C] rounded-lg p-4 flex flex-col justify-stretch'>
                    <div className='w-full h-full text-center flex flex-col items-center justify-between'>
                      <button className='w-12 h-12 bg-transparent'>
                        <img
                          src={course.iconButton}
                          alt='subscribe'
                          className='w-full h-full'
                        />
                      </button>
                      <div>
                        <h3 className='text-[14px] text-left text-xs font-bold mb-[8px] mt-2'>
                          {course.title}
                        </h3>
                        <p className='text-[9px] text-left text-gray-300 line-clamp-4'>
                          {course.description}
                        </p>
                      </div>
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
          <div className='w-[45px] h-[45px] flex flex-col items-center'>
            <img
              src='assets/강의실.svg'
              alt='강의실'
              className='w-6 h-6'
            />
            <span className='text-[10px] mt-1 text-bc-white'>강의실</span>
          </div>
          <div className='w-[45px] h-[45px] flex flex-col items-center'>
            <img
              src='assets/캘린더.svg'
              alt='캘린더'
              className='w-6 h-6'
            />
            <span className='text-[10px] mt-1 text-bc-white'>캘린더</span>
          </div>
          <div className='w-[45px] h-[45px] flex flex-col items-center'>
            <img
              src='assets/홈.svg'
              alt='홈'
              className='w-6 h-6'
            />
            <span className='text-[10px] mt-1 text-bc-white'>홈</span>
          </div>
          <div className='w-[45px] h-[45px] flex flex-col items-center'>
            <img
              src='assets/커뮤니티.svg'
              alt='커뮤니티'
              className='w-6 h-6'
            />
            <span className='text-[10px] mt-1 text-bc-white'>커뮤니티</span>
          </div>
          <div className='w-[45px] h-[45px] flex flex-col items-center'>
            <img
              src='assets/마이페이지.svg'
              alt='마이페이지'
              className='w-6 h-6'
            />
            <span className='text-[10px] mt-1 text-bc-white'>마이페이지</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
