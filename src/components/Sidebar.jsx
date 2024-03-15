import { useContext } from "react";
import { categories } from "../constants";
import { VideoContext } from "../context/videoContext";

const Sidebar = () => {
  // kullanmak için VideoContext'e abone oluyoruz
  const { selectedCategory, setSelectedCategory } = useContext(VideoContext);

  console.log(selectedCategory);
  return (
    <div className="flex flex-col p-1 md:p-4">
      {categories.map((item) => (
        <div
          key={item.name}
          onClick={() => {
            setSelectedCategory(item);
          }}
        >
          <div
            className={`
            ${
              selectedCategory.name === item.name && "bg-[rgba(234,51,35,1)]"
            } flex items-center mb-1 gap-3 py-4 px-2 md:px-3 text-base md:text-lg cursor-pointer rounded-md hover:bg-[rgb(234,51,35,1)]`}
          >
            <span className="max-sm:text-2xl">{item.icon}</span>
            <span className="max-sm:hidden">{item.name}</span>
          </div>
          {/* divider true ise ekrana çizgi bas bas */}
          {item.divider && <hr />}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
