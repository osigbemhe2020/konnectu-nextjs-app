import React from 'react';
import { useState } from 'react';

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  const data = {
      date : ["Last 1 Week", "Last 2 Weeks", "Last 1 Month", "Last 5 Months"],
      jobs : ["Technology jobs", "Business jobs", "Handy jobs", "Scientific jobs"]
  }
  
  const item = data[props.item];
  return (
    <div className="dropdown-container">
      <div className="dropdown-head" onClick={toggleDropdown}>
        <span>{props.title}</span>
        <span className="arrow">{isOpen ? "^" : "V"}</span>
      </div>

      {isOpen && (
        <ul className={props.listclass}>
          {item.map(
            (item, index) => (
              <li
                key={index}
                onClick={handleClose}
                className="dropdown-item"
              >
                <input type="radio" name="date" style={{ marginRight: "8px" }} />
                {item}
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
