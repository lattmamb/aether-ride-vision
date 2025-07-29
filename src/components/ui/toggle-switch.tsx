
import React from "react";

interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  className?: string;
  id?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked = false,
  onChange,
  label,
  className = "",
  id = "togglesw-" + Math.random().toString(36).substring(2, 9),
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium cursor-pointer">
          {label}
        </label>
      )}
      <div className="container">
        <label className="switch" htmlFor={id}>
          <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={handleChange}
            className="togglesw"
          />
          <span className="indicator left"></span>
          <span className="indicator right"></span>
          <span className="button"></span>
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
