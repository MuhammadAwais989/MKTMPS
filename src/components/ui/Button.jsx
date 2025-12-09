import React from "react";

const Button = ({
  children,
  type = "button",
  onClick,
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  disabled = false,
  className = "",
}) => {
  const baseStyles =
    "cursor-pointer inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md";

  const variantStyles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50",
    success:
      "bg-green-600 text-white hover:bg-green-700",
    danger:
      "bg-red-600 text-white hover:bg-red-700",
  };

  const sizeStyles = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} 
        ${variantStyles[variant]} 
        ${sizeStyles[size]} 
        ${fullWidth ? "w-full" : ""} 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
