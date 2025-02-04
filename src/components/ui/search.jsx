export const Search = () => {
  return (
    <div className="px-6">
      <div className="relative">
        <input
          type="text"
          placeholder="관심 분야, 강사명으로 검색하기"
          className="w-full bg-[#2C2C2C] rounded-lg px-[12px] py-[8px] text-bc-white placeholder:text-[#828282] placeholder:text-[12px]"
        />
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent">
          <img
            src="assets/search.svg"
            alt="search"
            className="w-4 h-4 bg-transparent"
          />
        </button>
      </div>
    </div>
  );
};
