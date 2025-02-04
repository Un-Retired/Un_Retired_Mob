export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-[60px] bg-bc-black">
      <div className="flex justify-between items-center h-full px-6">
        <div className="w-[45px] h-[45px] flex flex-col items-center">
          <img src="assets/강의실.svg" alt="강의실" className="w-6 h-6" />
          <span className="text-[10px] mt-1 text-bc-white">강의실</span>
        </div>
        <div className="w-[45px] h-[45px] flex flex-col items-center">
          <img src="assets/캘린더.svg" alt="캘린더" className="w-6 h-6" />
          <span className="text-[10px] mt-1 text-bc-white">캘린더</span>
        </div>
        <div className="w-[45px] h-[45px] flex flex-col items-center">
          <img src="assets/홈.svg" alt="홈" className="w-6 h-6" />
          <span className="text-[10px] mt-1 text-bc-white">홈</span>
        </div>
        <div className="w-[45px] h-[45px] flex flex-col items-center">
          <img src="assets/커뮤니티.svg" alt="커뮤니티" className="w-6 h-6" />
          <span className="text-[10px] mt-1 text-bc-white">커뮤니티</span>
        </div>
        <div className="w-[45px] h-[45px] flex flex-col items-center">
          <img
            src="assets/마이페이지.svg"
            alt="마이페이지"
            className="w-6 h-6"
          />
          <span className="text-[10px] mt-1 text-bc-white">마이페이지</span>
        </div>
      </div>
    </footer>
  );
};
