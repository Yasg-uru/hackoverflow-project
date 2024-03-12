import React from "react";

const sizes = {
  "5xl": "text-[27px] font-normal",
  "6xl": "text-[28px] font-medium",
  "7xl": "text-[29px] font-normal",
  "8xl": "text-[31px] font-normal",
  "2xl": "text-[19px] font-normal",
  "3xl": "text-xl font-normal",
  "4xl": "text-[22px] font-medium",
  xs: "text-sm font-normal",
  lg: "text-[17px] font-normal",
  s: "text-[15px] font-normal",
  xl: "text-lg font-normal leading-[17px]",
  "14xl": "text-[50px] font-light",
  "15xl": "text-[51px] font-medium",
  "9xl": "text-[39px] font-light",
  "10xl": "text-[40px] font-light",
  md: "text-base font-medium",
  "11xl": "text-[42px] font-normal",
  "12xl": "text-[44px] font-light",
  "13xl": "text-[46px] font-light",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
