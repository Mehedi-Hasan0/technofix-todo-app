const Button = ({ className, btnTitle, ...restProps }) => {
  return (
    <button
      className={`py-1 rounded text-white font-medium ${className}`}
      {...restProps}
    >
      {btnTitle}
    </button>
  );
};

export default Button;
