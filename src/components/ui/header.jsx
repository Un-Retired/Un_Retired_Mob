export const Header = () => {
  return (
    <header className="w-full h-[60px] flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        <button className="text-bc-white bg-transparent">
          <img src="assets/menu.svg" alt="menu" className="w-6 h-6" />
        </button>
        <img
          src="assets/MainPageTopLogo.png"
          alt="Un:Retired Logo"
          className="h-6"
        />
      </div>
      <button className="text-bc-white bg-transparent">
        <img src="assets/bell.svg" alt="notifications" className="w-6 h-6" />
      </button>
    </header>
  );
};
