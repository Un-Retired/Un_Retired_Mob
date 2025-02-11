export const Header = () => {
  return (
    <header className="w-full flex flex-row items-center justify-between px-[16px] py-[14.15px]">
      <div className="flex items-center gap-[8px]">
        <button className="text-bc-white bg-transparent">
          <img
            src="assets/menu.svg"
            alt="menubutton"
            className="w-[24px] h-[24px]"
          />
        </button>
        <img
          src="assets/MainPageTopLogo.png"
          alt="Un:Retired Logo"
          className="w-[175px] h-[28px] flex-grow-1"
        />
      </div>
      <button className="text-bc-white bg-transparent">
        <img
          src="assets/bell.svg"
          alt="notifications"
          className="w-[24px] h-[24px]"
        />
      </button>
    </header>
  );
};
