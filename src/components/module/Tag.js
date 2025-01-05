import React from "react";

function Tag({ text }) {
  return (
    <div className="bg-[#00000073] p-2 rounded-full w-fit">
      <p className="text-white">{text}</p>
    </div>
  );
}

export default Tag;
