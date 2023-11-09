import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import {
  AiOutlineAppstore,
  AiOutlineNotification,
  AiOutlineShop,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

export default function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={selectedKeys}
        items={[
          {
            label: "Dashboard",
            icon: <AiOutlineAppstore />,
            key: "/",
            // link: "/",
          },
          {
            label: "Inventory",
            icon: <AiOutlineShop />,
            key: "/inventory",
            // link: "/inventory",
          },
          {
            label: "Orders",
            icon: <AiOutlineShoppingCart />,
            key: "/orders",
            // link: "/orders",
          },
          {
            label: "Customers",
            icon: <AiOutlineUser />,
            key: "/customers",
            // link: "/customers",
          },
          {
            label: "Attendance",
            icon: <AiOutlineUser />,
            key: "/attendance",
            // link: "/attendacne",
          },
          {
            label: "Noticeboard",
            icon: <AiOutlineNotification />,
            key: "/noticeboard",
            // link: "/noticeboard",
          },
          {
            label: "Members",
            icon: <AiOutlineUser />,
            key: "/members",
          },
        ]}
      ></Menu>
    </div>
  );
}
