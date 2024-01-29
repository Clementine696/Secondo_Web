import React, { useState } from "react";
import "./index.css";

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [Open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!Open);
    console.log({Open})
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={handleToggle} className="dropdown-toggle">
        {selectedOption ? selectedOption.label : "Select an option"}
      </button>
      {Open && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
