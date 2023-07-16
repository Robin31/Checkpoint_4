import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { PiUserCircleLight } from "react-icons/pi";
import { TfiAlignJustify } from "react-icons/tfi";
import { FaDog, FaQuestion } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { TbNumber } from "react-icons/tb";
import { LiaDnaSolid } from "react-icons/lia";
import "./Sidebar.scss";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const sidebarData = [
    {
      title: "Acceuil",
      path: "/admin/",
      icon: <IoHome />,
      cName: "nav-text",
    },
    {
      title: "Chiens",
      path: "/admin/chiens",
      icon: <FaDog />,
      cName: "nav-text",
    },
    {
      title: "Bénévole",
      path: "/admin/benevole",
      icon: <FaHandshakeSimple />,
      cName: "nav-text",
    },
    {
      title: "FAQ",
      path: "/admin/faqs",
      icon: <FaQuestion />,
      cName: "nav-text",
    },
    {
      title: "Races",
      path: "/admin/races",
      icon: <LiaDnaSolid />,
      cName: "nav-text",
    },
    {
      title: "Chiffres",
      path: "/admin/chiffres",
      icon: <TbNumber />,
      cName: "nav-text",
    },
  ];

  return (
    <div className="sdb-container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="user-icon"
          >
            <PiUserCircleLight />
          </div>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <TfiAlignJustify onClick={toggle} />
          </div>
        </div>
        {sidebarData.map((item) => (
          <NavLink to={item.path} className="link" activeclassName="active">
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.title}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
