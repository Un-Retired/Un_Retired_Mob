export const Search = () => {
  return (
    <div className="px-[16px]">
      <div className="relative">
        <input
          type="text"
          placeholder="관심 분야, 강사명으로 검색하기"
          className="w-full bg-[#242323] rounded-[10px] px-[16px] py-[12px] placeholder:text-[#828282] placeholder:font-normal placeholder:text-[16px]"
        />
        <button className="absolute right-[16px] top-1/2 transform -translate-y-1/2 bg-transparent">
          <img
            src="assets/search.svg"
            alt="search"
            className="w-[24px] h-[24px] bg-transparent"
          />
        </button>
      </div>
    </div>
  );
};
