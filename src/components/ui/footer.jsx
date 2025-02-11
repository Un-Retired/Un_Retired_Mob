export const Footer = () => {
  return (
    <footer className="w-full flex flex-row justify-center items-center fixed bottom-0 h-[60px] bg-bc-black max-w-[480px]">
      <div className="flex justify-center items-center h-full w-full mx-[16px]">
        <div className="w-[72px] flex flex-col items-center">
          <img
            src="assets/강의실.svg"
            alt="강의실"
            className="w-[24px] h-[24px] mt-[9px]"
          />
          <span className="text-[12px] font-normal leading-[1.5] tracking-[-0.6px] text-[#F8F8F8] mb-[9px]">
            강의실
          </span>
        </div>
        <div className="w-[72px] flex flex-col items-center">
          <img
            src="assets/캘린더.svg"
            alt="캘린더"
            className="w-[24px] h-[24px] mt-[9px]"
          />
          <span className="text-[12px] font-normal leading-[1.5] tracking-[-0.6px] text-[#F8F8F8] mb-[9px]">
            캘린더
          </span>
        </div>
        <div className="w-[72px] flex flex-col items-center">
          <img
            src="assets/홈.svg"
            alt="홈아이콘"
            className="w-[24px] h-[24px] mt-[9px]"
          />
          <span className="text-[12px] font-normal leading-[1.5] tracking-[-0.6px] text-[#F8F8F8] mb-[9px]">
            홈
          </span>
        </div>
        <div className="w-[72px] flex flex-col items-center">
          <img
            src="assets/커뮤니티.svg"
            alt="커뮤니티"
            className="w-[24px] h-[24px] mt-[9px]"
          />
          <span className="text-[12px] font-normal leading-[1.5] tracking-[-0.6px] text-[#F8F8F8] mb-[9px]">
            커뮤니티
          </span>
        </div>
        <div className="w-[72px] flex flex-col items-center">
          <img
            src="assets/마이페이지.svg"
            alt="마이페이지"
            className="w-[24px] h-[24px] mt-[9px]"
          />
          <span className="text-[12px] font-normal leading-[1.5] tracking-[-0.6px] text-[#F8F8F8] mb-[9px]">
            마이페이지
          </span>
        </div>
      </div>
    </footer>
  );
};
