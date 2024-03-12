import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded",
};
const variants = {
  fill: {
    blue_gray_100_01: "bg-blue_gray-100_01 text-black-900",
    red_700_01: "bg-red-700_01 text-white-A700",
  },
};
const sizes = {
  lg: "h-[97px] pl-[7px] pr-[25px] text-[26px]",
  xs: "h-[57px] px-[33px] text-xl",
  md: "h-[80px] px-[35px] text-[27px]",
  sm: "h-[65px] px-[35px] text-[23px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "lg",
  color = "red_700_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["lg", "xs", "md", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_gray_100_01", "red_700_01"]),
};

export { Button };
