import { useState } from "react";
import CaretDown from "../vectors/caret-down";
import CaretUp from "../vectors/caret-up";
import "./aside-drop-down.scss";

const AsideDropDown = ({ icon, label, link, subLinks }) => {
  const [isActive, setIsActive] = useState(false);
  const handleIsActive = () => setIsActive(!isActive);
  return (
    <div className="mb-[0.5rem]" onClick={handleIsActive}>
      <div
        className={`flex py-[0.9375rem] px-[1rem] items-center justify-between rounded-[0.625rem] ${
          isActive && "bg-[#212346]"
        } `}
      >
        <div className="flex gap-x-[0.75rem] items-center">
          {icon}
          <span className="text-white font-medium select-none ">{label}</span>
        </div>
        {link !== undefined ? null : subLinks.length > 0 && !isActive ? (
          <CaretDown />
        ) : (
          <CaretUp />
        )}
      </div>
      {subLinks !== undefined && (
        <div className={`subLinks flex flex-col gap-y-3 ${isActive && "my-4"}`}>
          {subLinks.map((value) => (
            <div
              key={value.label}
              className={` ${
                !isActive && "hidden"
              } grid grid-cols-[0.25fr_1fr]`}
            >
              <div></div>
              <span
                className={`text-[0.9375rem] text-[#B9B9C0] hover:text-white select-none cursor-pointer`}
              >
                {value.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AsideDropDown;
