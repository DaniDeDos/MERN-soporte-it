import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const InputBox = ({
  icon: Icon,
  id,
  name,
  type,
  value,
  placeholder,
  onChange,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="relative w-[100%] mb-4">
      <input
        id={id}
        name={name}
        autoComplete={`current-${name}`}
        type={
          type === "password" ? (passwordVisible ? "text" : "password") : type
        }
        defaultValue={value}
        placeholder={placeholder}
        className="input-box"
        onChange={onChange} // Manejar el evento onChange aquí
      />
      {Icon && <Icon className="mt-0.5 input-icon" />}

      {type === "password" &&
        (passwordVisible ? (
          <AiOutlineEye
            className="mt-0.5 input-icon left-[auto] right-4 cursor-pointer"
            onClick={() => setPasswordVisible(false)}
          />
        ) : (
          <AiOutlineEyeInvisible
            className="mt-0.5 input-icon left-[auto] right-4 cursor-pointer"
            onClick={() => setPasswordVisible(true)}
          />
        ))}
    </div>
  );
};

export default InputBox;
