import React, { FC } from "react";

const Wrapper: FC<any> = ({ children }) => {
  return (
    <div className="xl:max-w-[1456px] mx-auto w-[90%] max-w-[508px] md:max-w-[704px] lg:max-w-[966px]">
      {children}
    </div>
  );
};

export default Wrapper;
