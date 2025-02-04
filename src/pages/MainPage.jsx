import { useNavigate } from "react-router-dom";
import { recommendedCourses } from "../data/recommendedCourses";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { Search } from "@/components/ui/search";

const MainPage = () => {
  const navigate = useNavigate();

  const handleCourseClick = (course) => {
    if (course.isPreReservation) {
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSdGW6-evzLYj5R-S860Rfxgd-LLNwRZV1FwY40dE0uEx4ELqg/viewform",
        "_blank"
      );
    } else {
      navigate("/detail", { state: { courseData: course } });
    }
  };

  return (
    <div className="w-auto h-auto bg-bc-black text-bc-white overflow-hidden pb-[60px] relative min-h-screen">
      <Header />
      <Search />
      <main className="px-6 mt-6">
        <h2 className="text-bc-white text-body-L font-bold mb-4">
          사전 예약자님께 추천하는 강의
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {recommendedCourses.map((course) => (
            <div
              key={course.id}
              className="relative"
              onClick={() => handleCourseClick(course)}
              role="button"
              tabIndex={0}
            >
              <div className={"flex items-center gap-[5px] mb-0"}>
                <img
                  src={course.icon}
                  alt={course.category}
                  className="w-6 h-6"
                />
                <span className="text-sm text-bc-white">{course.category}</span>
              </div>
              <div className="relative h-[210px] rounded-lg overflow-visible">
                {course.isPreReservation ? (
                  <div className="w-full h-[187px] mt-[10px] bg-[#2C2C2C] rounded-lg p-4 flex flex-col justify-stretch">
                    <div className="w-full h-full text-center flex flex-col items-center justify-between">
                      <button className="w-[36px] h-[36px] mt-[8px] bg-transparent">
                        <img
                          src={course.iconButton}
                          alt="subscribe"
                          className="w-full h-full"
                        />
                      </button>
                      <div>
                        <h3 className="text-[14px] text-left text-xs font-bold mb-[8px] mt-2">
                          {course.title}
                        </h3>
                        <p className="text-[9px] text-left text-gray-300 line-clamp-4">
                          {course.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-contain rounded-lg"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainPage;
