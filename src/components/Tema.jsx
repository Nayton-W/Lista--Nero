import React, { useState } from 'react';
import { FaAddressCard, FaLightbulb, FaPalette, FaPaperclip } from 'react-icons/fa';

function Tema() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div>
   
      <button className="theme-toggle" onClick={toggleTheme}>
        <FaLightbulb/>
      </button>
    
    </div>
  );
}

export default Tema;
