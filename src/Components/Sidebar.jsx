//import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
//import { SiShopware } from "react-icons/si";
import { MdOutlineCancel, MdDashboard, MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from '../Data/avatar.jpg';
import { links } from "../Data/dummy";
import { useStateContext } from "../Contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, handleClick, currentColor } = useStateContext();


  const handleCloseSidebar = () => {
    if(activeMenu && screenSize <=900) {
      setActiveMenu(false)
    }
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 b-color">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={handleCloseSidebar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white">
              <MdDashboard /> <span>Dashboard</span>
            </Link>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSidebar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                    <div className="flex justify-between items-center">
                    <MdKeyboardArrowRight className="right"/>
                    </div>
                    
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
      <footer className="bottom-profile">
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-14">Evano</span><br/>
              <span className="text-gray-400 font-bold ml-1 text-11">
                Project Manager
              </span>
            </p>
            <div className="flex justify-between items-center">
            <MdKeyboardArrowDown className="right text-gray-400 text-14"/>
            </div>
            
          </div>
        </TooltipComponent>
      </footer>
    </div>
  );
};

export default Sidebar;
