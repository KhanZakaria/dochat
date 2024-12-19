const InputElements = ({
  placeholder,
  type,
  label,
  id,
  children,
  className,
  setValue,
}) => {
  return (
    <div className="flex flex-col relative my-[5px]">
      <label htmlFor={id}>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        className={className}
        onChange={(e) => setValue(e.target.value)}
      />
      {children}
    </div>
  );
};

export default InputElements;
