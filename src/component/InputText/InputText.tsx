import React, { useState } from "react";
import closeIcon from "src/assets/Icon/Outline-Icon/close.svg";
import searchIcon from "src/assets/Icon/Outline-Icon/search.svg";

interface InputTextProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
  disabled?: boolean;
  frontIcon?: string;
  backIcon?: string;
  initialValue?: string; // Renamed to initialValue to avoid conflict with state value
}

const InputText: React.FC<InputTextProps> = ({
  onChange,
  label,
  initialValue = "", // Use initialValue instead of value
  className = "",
  disabled = false,
  frontIcon,
  backIcon,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  const handleClearInput = () => {
    setValue("");
  };

  const style =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
  return (
    <div className={`relative ${className}`}>
      {frontIcon && (
        <img
          src={frontIcon}
          alt="Front Icon"
          className="absolute left-3 top-1/2 transform -translate-y-1/2"
        />
      )}
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        className={`text-gray-800 py-2 px-4 border rounded outline-none 
        ${style}
        ${frontIcon ? "pl-10" : ""} ${backIcon ? "pr-10" : ""} w-full`}
        disabled={disabled}
        placeholder={label}
      />
      {value ? (
        <button
          type="button"
          onClick={handleClearInput}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
        >
          <img src={closeIcon} alt="Clear Icon" />
        </button>
      ) : (
        <button
          type="button"
          //   onClick={handleClearInput}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
        >
          <img src={searchIcon} alt="Clear Icon" />
        </button>
      )}
      {backIcon && (
        <img
          src={backIcon}
          alt="Back Icon"
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        />
      )}
    </div>
  );
};

export default InputText;
