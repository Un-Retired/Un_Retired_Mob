import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { recommendedCourses } from "../data/recommendedCourses";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { Search } from "@/components/ui/search";

const MainPage = () => {
  const navigate = useNavigate();

  const handleCourseClick = (course) => {
    if (course.isPreReservation) {
      window.open("https://forms.gle/xtHWL2ZxsMBFs7vXA", "_blank");
    } else {
      navigate("/detail", { state: { courseData: course } });
    }
  };

  let dueDate = new Date("2025-02-16T12:00:00");
  let step = 0;
  // 2차 사전예약 당 3일식 계산

  let dueDateList = [
    new Date("2025-02-10T12:00:00"),
    new Date("2025-02-13T12:00:00"),
    new Date("2025-02-16T12:00:00"),
    new Date("2025-02-19T12:00:00"),
    new Date("2025-02-22T12:00:00"),
    new Date("2025-02-25T12:00:00"),
    new Date("2025-02-28T12:00:00"),
    new Date("2025-03-01T12:00:00"),
  ];
  // dueDate를 오늘 기준에서 가장 가까운 오는날로 지정
  for (let i = 0; i < dueDateList.length; i++) {
    if (dueDateList[i] > new Date()) {
      dueDate = dueDateList[i];
      step = i + 1;
      break;
    }
  }

  // 2차 사전예약 당 3일식 계산
  const nowTime = () => {
    // 2차 모집일 : 25.02.14 12:00
    let now = new Date();
    let diff = dueDate - now;
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0");
    let seconds = Math.floor((diff % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");

    return `${hours} : ${minutes} : ${seconds}`;
  };

  function updateDaysLeft() {
    let now = new Date();

    // 두 날짜의 차이를 밀리초 단위로 계산
    let diff = dueDate - now;

    // 남은 일 수 계산 (1일 = 1000ms * 60s * 60m * 24h)
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return `${days}`;
  }

  // 1초마다 업데이트

  const [clock, setclock] = useState(nowTime);
  const [diffday, setDiffDay] = useState(updateDaysLeft);

  setInterval(() => setclock(nowTime), 1000);
  setInterval(() => setDiffDay(updateDaysLeft), 1000);

  return (
    <div className="w-auto h-auto flex flex-row justify-center bg-bc-black overflow-hidden relative min-h-screen">
      <div className="flex flex-col max-w-[480px] w-full min-w-0 grow-0">
        <Header />
        <div className="flex flex-col gap-[12px] w-full">
          <Search />
          <div className="h-[120px] w-full bg-red flex flex-row justify-center items-center bg-[#242323]">
            <div className="w-full h-full max-w-[375px] flex flex-row ">
              <img
                src="assets/images/content_prereservation2.png"
                alt="콘텐츠 사전예약"
                className="h-full w-[110px]"
              />
              <div className="w-full flex-grow-1 flex flex-col gap-2 justify-center">
                <div className="justify-center items-center flex flex-col">
                  <span className="text-[20px] font-bold justify-center leading-[1.5] tracking-[-0.6px]">
                    지금 <span className="text-[#F6922E]">사전예약</span>하고
                    <br />
                    <span className="text-[#F6922E]">1회 무료수강 쿠폰</span>을
                    받아가세요!
                  </span>
                </div>
                <div className="w-full h-[20px] flex flex-row justify-center">
                  <span className="flex text-[16px] leading-[1.5] tracking-[-0.6px] text-[#F8F8F8] px-[8px] text-center align-text-center font-bold bg-[#FF4545] justify-center items-center">
                    {step - 1}차 모집 D-{diffday}
                  </span>
                  <span className="inline-block text-[16px] leading-[1.5] tracking-[-0.6px] font-bold text-black bg-[#F8F8F8] justify-center items-center flex px-[12px]">
                    {clock}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <main className="">
            <span className="flex text-[#F8F8F8] text-[20px] font-bold leading-[1.5] tracking-[-0.6px] my-[12px] mx-[16px]">
              사전 예약자님께 추천하는 강의
            </span>
            <div className="grid grid-cols-2 gap-x-[20px] gap-y-[8px] mx-[16px]">
              {recommendedCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex flex-col w-full cursor-pointer"
                  onClick={() => handleCourseClick(course)}
                  role="button"
                  tabIndex={0}
                >
                  <div className={"flex flex-row items-center gap-[5px]"}>
                    <img
                      src={course.icon}
                      alt={course.category}
                      className="w-[24px] h-[24px]"
                    />
                    <span className="text-[14px] leading-[1.5] tracking-[-0.6px] text-[#F8F8F8] font-normal">
                      {course.category}
                    </span>
                  </div>
                  {course.isPreReservation ? (
                    <>
                      <div className="w-full bg-cover bg-center bg-no-repeat rounded-[10px] flex flex-col justify-end">
                        <div className="w-full h-full text-center flex flex-col gap-[9.5px] items-center justify-between">
                          <img
                            src="assets/images/content_price.png"
                            alt="subscribe"
                            className="w-full h-[112px] rounded-t-lg"
                          />
                          <div className="w-full flex flex-col gap-[4px]">
                            <span className="text-[20px] text-center font-bold flex flex-col gap-[4px] mb-[5.5px]">
                              <span>
                                선착순! 1회 무료
                                <br />
                                수강권 증정
                                <br />
                              </span>
                              <span className="flex flex-row justify-center items-center text-[16px] gap-[4px]">
                                신청하기
                                <img
                                  src="assets/icons/arrow_right.svg"
                                  alt=""
                                  className="w-[16px] h-[16px] bg-transparent"
                                />
                              </span>
                            </span>
                            <p className="flex w-full h-[37px] text-[14px] font-bold justify-center items-center text-[#F8F8F8] bg-[#E87D12] rounded-b-[10px] gap-[4px]">
                              <span className="text-[#4059F7]">
                                D-{diffday}
                              </span>
                              <span>{clock}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className={`w-full h-[256px] bg-cover bg-center bg-no-repeat rounded-[10px] flex flex-col justify-end p-[16px]`}
                        style={{ backgroundImage: `url('/${course.image}')` }}
                      >
                        <span className="text-[20px] font-bold leading-[1.5] tracking-[-0.6px] text-[#F8F8F8]">
                          {course.title}
                        </span>
                        <span className="text-[12px] font-normal leading-[1.5] tracking-[-0.6px] text-[#F8F8F8] overflow-auto whitespace-pre-wrap">
                          {course.introDesc.split("\n").map((line, index) => (
                            <span key={index}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </main>
        </div>
        <div className="w-full h-[84px]"></div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
