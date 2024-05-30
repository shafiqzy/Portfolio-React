import { useState } from "react";
import Button from "src/component/Button/Button";
import { Link } from "wouter";
import upIcon from "src/assets/Icon/Outline-Icon/arrow-up.svg";
import filterIcon from "src/assets/Icon/Outline-Icon/filter.svg";
import InputText from "src/component/InputText/InputText";

export const AboutPage = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    alert(`Button clicked! Input value: ${inputValue}`);
  };
  return (
    <div>
      <div>Muhammad Shafiqzy Bin Janaludin</div>
      <div>Asal Boleh</div>

      <div>Umur secukupnya</div>

      <div className="flex flex-col gap-7">
        <div>
          <Button
            onClick={handleButtonClick}
            label="Submit"
            frontIcon={upIcon}
            backIcon={filterIcon}
            className="border-gray-800 w-96"
          />
        </div>
        <div>
          <InputText
            initialValue={inputValue}
            onChange={handleInputChange}
            label="Submit"
            className="border-gray-800 w-96"
          />
        </div>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};
