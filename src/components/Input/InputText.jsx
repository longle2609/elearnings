import React from "react";

const InputText = ({
  label,
  name,
  handleChange,
  handleBlur,
  type = "text",
  placeholder,
  error,
  touched,
  className,
  value,
  min,
}) => {
  return (
    <div className={className}>
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        type={type}
        className="bg-gray-50 border border-gray-300 focus:outline-none text-gray-900 text-sm rounded-lg focus:border-orange-500 block w-full p-2.5 "
        placeholder={placeholder}
        value={value}
        min={min}
      />
      {touched == true && error && (
        <p className="text-red-500 text-xs">{error}</p>
      )}
    </div>
  );
};

export default InputText;
