import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const CustomSelect = () => {
  const customselectRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  return (
    <div className="menu-container">
    <button onClick={onClick} className="menu-trigger">
    </button>
    </div>
  )

export default CustomSelect;
