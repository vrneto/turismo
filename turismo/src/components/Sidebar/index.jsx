import { Link } from 'react-router-dom'
import React from 'react'

import { 

  FaHome, 

  FaUserAlt, 

  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Links para as páginas */}
      <Link to="/home">
        <SidebarItem Icon={FaHome} Text="Home" />
      </Link>
      <Link to="/statistics">
        <SidebarItem Icon={FaChartBar} Text="Statistics" />
      </Link>
      <Link to="/users">
        <SidebarItem Icon={FaUserAlt} Text="Users" />
      </Link>
    </div>
  );
};

export default Sidebar;