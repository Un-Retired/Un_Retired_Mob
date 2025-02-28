import { useEffect, useState } from "react";

const SubDomain = () => {
  let dueDate = new Date("2025-03-03T12:00:00");
  const [clock, setClock] = useState("");
  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeRemaining = dueDate - now;

      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

      setClock(
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
          2,
          "0"
        )}:${String(seconds).padStart(2, "0")}`
      );
      setDaysRemaining(days);
    };

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, [dueDate]);

  return (
    <>
      <img className="m-auto" src="assets/subDomain.svg" alt="Subdomain Icon" />
      <footer className="flex items-center justify-center h-[100px] bg-bc-orange-2 sticky bottom-0">
        <div className="flex items-center justify-center gap-[40px]">
          <div className="flex flex-col justify-start">
            <span className="fontSize-title-S leading-[1.5] font-bold">
              [ 마감임박!! ] 지금 바로 실리콘밸리 20년 차 디자이너의 웨비나
              신청해보세요!
            </span>
            <div className="w-full h-[30px] flex flex-row">
              <span className="flex text-[16px] leading-[1.5] tracking-[-0.6px] text-[#F8F8F8] px-[8px] text-center align-text-center font-bold bg-[#FF4545] justify-center items-center">
                웨비나 모집 D-{daysRemaining}
              </span>
              <span className="inline-block text-[16px] leading-[1.5] tracking-[-0.6px] font-bold text-black bg-[#F8F8F8] justify-center items-center flex px-[12px]">
                {clock}
              </span>
            </div>
          </div>

          <button className="bg-bc-blue w-[340px] h-[50px] rounded-[10px] text-title-XS leading-[1.5] font-bold">
            지금 바로 신청하기
          </button>
        </div>
      </footer>
    </>
  );
};

export default SubDomain;
