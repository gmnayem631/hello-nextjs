import React from "react";

const Title = ({ children }) => {
  return (
    <div className="text-black text-5xl bg-linear-to-r mt-5 from-sky-100 to-sky-300 p-4 rounded-xl">
      {children}
    </div>
  );
};

export default Title;
