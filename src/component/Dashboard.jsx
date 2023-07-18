import React, { useState } from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md"
import { FiSettings } from "react-icons/fi"
import { TbReportAnalytics } from "react-icons/tb"
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai"
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi"
import { Link, NavLink } from "react-router-dom";
const Dashboard = ({ children }) => {
    const menus = [
        { name: "Dashboard", link: "/dashboard", icon: MdOutlineDashboardCustomize },
        { name: "User", link: "/all-apps", icon: AiOutlineUser },
        { name: "Messages", link: "/", icon: FiMessageSquare },
        { name: "Analytics", link: "/", icon: TbReportAnalytics, margine: true },
        { name: "File Manager", link: "/", icon: FiFolder },
        { name: "Cart", link: "/", icon: FiShoppingCart },
        { name: "Saved", link: "/", icon: AiOutlineHeart, margine: true },
        { name: "Settings", link: "/", icon: FiSettings },
    ]
    const [open, setOpen] = useState(true)
    console.log(open);
    return (
        <div className=" flex gap-6 ">
            <div className={` min-h-screen text-xl bg-indigo-600 ${open ? 'w-72' : 'w-16'} text-white text-xl duration-300`}>
                <div className=" flex justify-end p-4 text-2xl cursor-pointer">
                    <ion-icon name={`chevron-${!open ? 'forward-outline' : 'back-outline'}`} onClick={() => setOpen(!open)}></ion-icon>
                </div>
                <div className="flex flex-col gap-5 p-2">
                    {
                        menus?.map((menu, i) => (
                            <Link key={i} className={`${menu.margine && 'mt-5'} group flex items-center text-sm font-medium gap-3.5 p-2 hover:bg-gray-500 rounded-md duration-150 hover:scale-105`}>
                                <div>{React.createElement(menu?.icon, { size: '30' })}</div>
                                <h1 style={{ transitionDelay: `${i + 3}00ms` }} className={`whitespace-pre duration-300 ${!open && 'opacity-0 translate-x-32 overflow-hidden'}`}>{menu.name}</h1>
                                <h1 className={`${open && 'hidden'} absolute whitespace-pre w-0 overflow-hidden bg-white text-gray-900 drop-shadow-xl left-48 rounded-md group-hover:left-16 duration-300 group-hover:w-fit group-hover:px-2 group-hover:py-1`}>
                                    {menu.name}
                                </h1>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className=" text-2xl m-6 font-bold text-gray-800">
                {children}
            </div>
        </div>
    );
};

export default Dashboard;