import { useState } from "react";
import { useSelector } from "react-redux";

export default function ProfileHover() {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });
  const {user} = useSelector(state => state.auth);

  const handleMouseMove = (e) => {
    setTooltip((prev) => ({
      ...prev,
      x: e.clientX + 10,
      y: e.clientY + 10
    }));
  };

  return (
    <div className="">
      <div
        className={`inline-block  rounded-full transition duration-300 ${
          tooltip.visible ? "brightness-75" : "brightness-100"
        }`}
      >
        <img
          src="./Images/profilepic.png"
          alt="Profile"
          className="rounded-full h-15 cursor-pointer transition duration-300 hover:brightness-75"
          onMouseEnter={() =>
            setTooltip((prev) => ({ ...prev, visible: true }))
          }
          onMouseMove={handleMouseMove}
          onMouseLeave={() =>
            setTooltip((prev) => ({ ...prev, visible: false }))
          }
        />
      </div>

      {tooltip.visible && (
        <div
          className="absolute bg-black text-white text-sm px-3 py-1 rounded shadow-lg pointer-events-none transition-opacity duration-200"
          style={{
            left: tooltip.x,
            top: tooltip.y
          }}
        >
          {user?.data?.username}
        </div>
      )}
    </div>
  );
}
