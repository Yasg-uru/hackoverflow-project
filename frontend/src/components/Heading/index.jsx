import React from "react";

const sizes = {
  xl: "text-[63px] font-bold",
  s: "text-[35px] font-semibold",
  md: "text-[47px] font-semibold",
  xs: "text-[33px] font-semibold",
  lg: "text-[53px] font-semibold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
