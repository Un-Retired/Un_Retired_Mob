import { useEffect, useState } from "react";

const SubDomain = () => {
  let dueDate = new Date("2025-03-03T12:00:00");
  const [clock, setClock] = useState("");
  const [daysRemaining, setDaysRemaining] = useState(0);

  const handleClick = () => {
    window.open("https://forms.gle/yDJFWwTgUJxBNEgn9", "_blank");
  };

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
  // md 768px
  return (
    <>
      <img
        className="m-auto md:hidden flex"
        src="assets/mobile3.png"
        alt="Subdomain Icon"
      />
      <img
        className="m-auto md:flex hidden max-w-[1440px]"
        src="assets/web3.png"
        alt="Subdomain Icon"
      />
      <footer className="w-full sticky bottom-0 flex items-center justify-center md:justify-end bg-bc-orange-2 p-[10px] md:px-[120px]">
        <div className="flex items-center justify-center gap-[8px] md:gap-[24px]">
          <div className="flex flex-col justify-start gap-[10px]">
            <div className="w-full flex flex-row">
              <span className="flex text-[14px] leading-[1.5] tracking-[-0.6px] text-[#F8F8F8] p-[8px] text-center align-text-center font-bold bg-[#FF4545] justify-center items-center md:text-[20px] md:px-[12px] md:py-[8px] md:w-[150px]">
                웨비나 모집 D-{daysRemaining}
              </span>
              <span className="inline-block text-[14px] leading-[1.5] tracking-[-0.6px] font-bold text-black bg-[#F8F8F8] justify-center items-center flex p-[8px] md:text-[20px] md:px-[12px] md:py-[8px] md:w-[132px]">
                {clock}
              </span>
            </div>
          </div>

          <button
            className="bg-bc-blue min-w-[173px] md:px-[160px] h-[50px] rounded-[10px] text-[16px] text-title-XS leading-[1.5] font-bold"
            onClick={handleClick}
          >
            지금 바로 신청하기
          </button>
        </div>
      </footer>
    </>
  );
};

export default SubDomain;
