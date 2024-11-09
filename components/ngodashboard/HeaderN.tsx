import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

interface HeaderProps {
    OpenSidebar: () => void;
    onPostMessageClick?: () => void;  // Add this line if needed in HeaderN
  }
  
  const HeaderN: React.FC<HeaderProps> = ({ OpenSidebar, onPostMessageClick }) => {
    return (
      <header>
        <button onClick={OpenSidebar}></button>
        {onPostMessageClick && <button onClick={onPostMessageClick}>Post Message</button>}
      </header>
    );
  };
  
  export default HeaderN;
      