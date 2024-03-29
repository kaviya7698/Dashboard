import React, { useEffect } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import {HiHand} from 'react-icons/hi';
import {SiElasticsearch} from 'react-icons/si'
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../Data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../Contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
<div className="flex justify-between mt-5 p-2 md:ml-6 md:mr-6 relative">
<p>
    <span className="text-gray-400 text-14">Hi,</span>{' '}
    <span className="text-gray-400 font-bold ml-1 text-14">
      Michael
    </span>
    <HiHand className='block'/>
  </p>
  <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
  <input type="search" className='search' placeholder='Search' />
  <AiOutlineSearch  className='sicon'/>
  </div>
  
</div>
   
  );
};

export default Navbar;