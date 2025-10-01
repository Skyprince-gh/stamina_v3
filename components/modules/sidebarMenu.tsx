import Logo from "@/public/svg/Logo.svg";
import { link } from "fs";
import {
  Store,
  LayoutGrid,
  Box,
  Boxes,
  NotepadText,
  Settings,
  CircleHelp,
  LogOut,
  Layers,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SidebarMenu = () => {
  const menuItems = [
    {
      header: "Discover",
      list: [
        {
          title: "Dashboard",
          icon: <LayoutGrid />,
          link: "/dashboard",
        },
        {
          title: "Stores",
          icon: <Store />,
          link: "/dashboard/stores",
        },
      ],
    },
    {
      header: "Inventory",
      list: [
        {
          title: "Products",
          icon: <Box />,
          link: "/dashboard/products",
        },
        {
          title: "Categories",
          icon: <Boxes />,
          link: "/dashboard/categories",
        },
        {
          title: "Invoices",
          icon: <NotepadText />,
          link: "/dashboard/invoices",
        },
        {
          title: "Orders",
          icon: <Layers />,
          link: "/dashboard/orders",
        },
      ],
    },
    {
      header: "Settings",
      list: [
        {
          title: "Settings",
          icon: <Settings />,
          link: "/dashboard/settings",
        },
        {
          title: "Help",
          icon: <CircleHelp />,
          link: "/dashboard/help",
        },
        {
          title: "Logout",
          icon: <LogOut />,
          link: "/dashboard/logout",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col h-screen p-4">
      <h1 className="flex gap-2 text-white text-xl font-bold my-4 mb-16 w-full justify-center">
        <Image src={Logo} width={24} height={24} alt="" />
        STAMINA
      </h1>
      <div className="flex-grow bg-gray-950">
        {menuItems.map((menu,index) => {
            return (
                <div key={index} className="text-white mb-20 flex flex-col gap-5">
                <h3>{menu.header}</h3>
                <ul className="flex flex-col gap-5">
                    {menu.list.map((item, itemIndex) => {
                        return (<li key={itemIndex}><Link href={item.link} className="flex gap-2"><span>{item.icon}</span>{item.title}</Link></li>)
                    })}
                </ul>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default SidebarMenu;


//this components contains all the contents of the sidebar menu 
//extra work need to be done to make it responsive and also react
//to page routes based on the current page the user is on.
//finally menus and animations need to be added for better user experience.
